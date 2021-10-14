import {MainClass} from "./MainClass";

export class SubClass extends MainClass{
    add(val:number):number{
        return super.add(val) + 1;
    }
    sub( val:number):number{
        return super.sub(val) - 1;
    }

}