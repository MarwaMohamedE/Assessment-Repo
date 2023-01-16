const Marwa = require("./main");

test("the rover tell me his coordinates and heading" , () =>{
    expect(Marwa(0,0, "WEST", "FFL")).toBe("(-2,0) SOUTH")
});
test("Undefined: decline the command" , () =>{
    expect(Marwa(0,0, "WEST", "MSFL")).toBe("not supported")
});
