import {MainClass,SubClass} from "../src/index";

describe("MainClass", () => {
  test( "constructor", ()=>{
    const main = new MainClass();
    expect(main).toBeTruthy();
  });
  test("add(1) should be return 2", ()=>{
    const main = new MainClass();
    expect(main.add(1)).toBe(2);
  })
  test("sub(1) should be return 0", ()=>{
    const main = new MainClass();
    expect(main.sub(1)).toBe(0);
  })
})

describe("SubClass", () => {
  test( "constructor", ()=>{
    const sub = new SubClass();
    expect(sub).toBeTruthy();
  });
  test("add(1) should be return 3", ()=>{
    const sub = new SubClass();
    expect(sub.add(1)).toBe(3);
  })
  test("sub(1) should be return -1", ()=>{
    const sub = new SubClass();
    expect(sub.sub(1)).toBe(-1);
  })
})
