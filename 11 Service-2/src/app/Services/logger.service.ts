import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService{

    LogMessage(name: string, status: string){
        console.log('A new user with username "'+name+'" with status '+status+' has been added.');
    }

}

/*
But in newer verions of angular it is advised to @Injectable to all services so we add in her too that nothing is being injected into it.

We also added loggerservice to module file as a provider so that it is avilable all components
*/