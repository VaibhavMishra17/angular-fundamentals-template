import { Pipe } from "@angular/core";

@Pipe({
    name: 'customDate'
})
export class CustomDatePipe {
    transform(value: Date): string {
        return `${value.getDate()}.${value.getMonth()}.${value.getFullYear()}`;
    }
}
