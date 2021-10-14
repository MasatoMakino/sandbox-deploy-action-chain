import { MainClass } from "./MainClass";
export class SubClass extends MainClass {
    constructor() {
        super(...arguments);
        this.memberValue = 1.0;
    }
    add(val) {
        return super.add(val) + this.memberValue;
    }
    sub(val) {
        return super.sub(val) - this.memberValue;
    }
    foo(val) {
        return val;
    }
    bar(val) {
        return val / 2;
    }
    baz(val) {
        return val * 2;
    }
}
