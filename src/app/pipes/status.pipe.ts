import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {
    transform(userStatus: number): string {
        console.log('statusPipe userStatus', userStatus);

        if(userStatus === 0) {
            return 'Inativo';
        } else if(userStatus === 1) {
            return 'Ativo';
        } else {
            return '-';
        }
    }
}