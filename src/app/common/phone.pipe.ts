import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'phone'})
export class PhonePipe implements PipeTransform {
    transform(number: Number) {
        // This will only work with the current structure of my phone number and I will only change it if there's a reason to do it.
        const value = number + '';
        const countryCode = '+(' + value.slice(0, 2) + ')' ;
        const firstSection = value.slice(2, 5) + '-';
        const secondSection = value.slice(5, 8) + '-';
        const lastSection = value.slice(8);
        return countryCode + firstSection + secondSection + lastSection;
    }
}
