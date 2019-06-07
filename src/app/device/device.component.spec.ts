import { async, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks, flush, flushMicrotasks } from '@angular/core/testing';

import { DeviceComponent } from './device.component';
import { Component } from '@angular/core';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { idle, happy, eating, GalMood } from '../../model/gal-state.model';
import { first } from 'rxjs/operators';
import * as fromDevice from '../device/ngrx';
import { Pet, SaveMood, Feed } from '../device/ngrx';
import { Observable, timer, from, pipe } from 'rxjs';

@Component({selector: 'router-outlet', template: ''})
class RouterStubComponent {}

describe('DeviceComponent', () => {
  let component: DeviceComponent;
  let fixture: ComponentFixture<DeviceComponent>;
  let store: Store<fromDevice.State>;

  const initialState = {device: {
    name: 'test',
    moods: [idle],
    messages: []
  }};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          device: fromDevice.deviceReduce
        })
      ],
      declarations: [ DeviceComponent, RouterStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial mood as idle', (done: DoneFn) => {
    component.ngOnInit();
    fixture.detectChanges();
    component.moods$.pipe(first()).subscribe(mood => {
      expect(mood.imgUrl).toBe(idle.imgUrl);
      done();
    });
  });

  it('should dispatch change mood when pet', () => {
    const petAction = new Pet();
    const saveMoodAction = new SaveMood('pet');
    component.pet();
    expect(store.dispatch).toHaveBeenCalledWith(saveMoodAction);
    expect(store.dispatch).toHaveBeenCalledWith(petAction);
  });

  it('should change mood to happy when pet is dispatched', () => {
    const petAction = new Pet();
    store.dispatch(petAction);
    component.moods$.subscribe(moods => expect(moods.imgUrl).toBe(happy.imgUrl));
  });


  it('should change mood to eat when eat is dispatched', () => {
    const feedAction = new Feed();  
    store.dispatch(feedAction);
    component.moods$.subscribe(moods => expect(moods.imgUrl).toBe(eating.imgUrl));
  });

  it('should delay the stream of moods', fakeAsync(() => {

    const stateToDelay = {device: {
      name: 'test',
      moods: [happy, eating, idle],
      messages: []
    }};

    const observableMoods = fromDevice.selectObservableGalMoods.projector(stateToDelay.device.moods);
    const delayed = fromDevice.selectTimedGalMoods.projector(observableMoods, 50);
    let actualMood;
    delayed.subscribe(mood => {
      actualMood = mood;
    }
    );
    tick();
    expect(actualMood.imgUrl).toBe(happy.imgUrl);
    tick(50);
    expect(actualMood.imgUrl).toBe(eating.imgUrl);
    tick(50);
    expect(actualMood.imgUrl).toBe(idle.imgUrl);

      
  }));



});
