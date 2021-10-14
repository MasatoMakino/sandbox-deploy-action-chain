import {MainClass} from "./MainClass";

export class SubClass extends MainClass{
    private memberValue:number = 1.0;
    private member2:string = "member";

    add(val:number):number{
        return super.add(val) + this.memberValue;
    }
    sub( val:number):number{
        return super.sub(val) - this.memberValue;
    }
}