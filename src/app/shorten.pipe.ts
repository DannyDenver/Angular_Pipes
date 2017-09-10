import{ Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten' // name of pipe
})

export class ShortenPipe implements PipeTransform{
    transform(value: any, limit: number){  // add parameter
        if(value.length > limit){
        return value.substr(0, limit) + "..." ;
        }else{
            return value;
        }

    }
}