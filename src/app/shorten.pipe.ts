import{ Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten' // name of pipe
})

export class ShortenPipe implements PipeTransform{
    transform(value: any){ 
        if(value.length > 10){
        return value.substr(0, 12) + "..." ;
        }else{
            return value;
        }

    }
}