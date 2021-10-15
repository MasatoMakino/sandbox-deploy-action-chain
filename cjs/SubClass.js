"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubClass = void 0;
const MainClass_1 = require("./MainClass");
class SubClass extends MainClass_1.MainClass {
    constructor() {
        super(...arguments);
        this.memberValue = 1.0;
        // baz(val:number):number{
        //     return val*2;
        // }
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
}
exports.SubClass = SubClass;
