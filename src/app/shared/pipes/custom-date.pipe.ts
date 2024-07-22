import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customDate",
})
export class CustomDatePipe implements PipeTransform {
  transform(value: Date | string): string {
    if (!value) {
      return "";
    }

    const date = new Date(value);

    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }
}
