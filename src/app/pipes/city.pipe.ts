import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'city'
})
export class CityPipe implements PipeTransform {
    transform(cityId: number): string {
        if(cityId === 1) {
            return 'São Paulo';
        } else if(cityId === 2) {
            return 'Campinas';
        } else {
            return '-';
        }
    }
}