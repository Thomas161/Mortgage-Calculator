var main = require("../main");
var expect = require("chai").expect;

describe("No errors will appear", ()=>{
	it("functions run properly",()=> {
		expect(main().toNotEqual(NaN));
	});
});

