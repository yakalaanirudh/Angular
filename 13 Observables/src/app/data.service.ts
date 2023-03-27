import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataService{
    //dataEmitter = new EventEmitter<string>();     //Using event emitter but in subject there is no emit method but there is a next method
    dataEmitter = new Subject<string>();

    raiseDataEmitterEvent(data: string){
        this.dataEmitter.next(data);
    }
}

