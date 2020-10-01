// // Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });


//unit test for sayhello function
// describe('sayHello', function () {
//     it('it should be defined function', function () {
//         expect(typeof sayHello).toBe('function');
//     });
//     it('should return a string when called', function () {
//         expect(typeof sayHello()).toBe("string");
//     });
//     it('should return the string "Hello, Jane!" when executed', function () {
//         expect(sayHello("Jane")).toBe("Hello, Jane!");
//     });
//     it('should return the string "Hello, Alex!" when executed', function () {
//         expect(sayHello("Alex")).toBe("Hello, Alex!");
//     });
//     it('should return the string "Hello, Pat!" when executed', function () {
//         expect(sayHello("Pat")).toBe("Hello, Pat!");
//     });
//     it('should return the string "Hello, World!" when executed', function () {
//         expect(sayHello(true)).toBe("Hello, World!");
//     });
//     it('should return the string "Hello, World!" when executed', function () {
//         expect(sayHello(false)).toBe("Hello, World!");
//     });
// });
//unit test for isFive
describe('isFive', function () {
    it('should be an isFive "test drive"', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a "boolean" no matter what the input', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return "true" when number 5 is passed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should true even when the string "5" is passed', function (){
        expect(isFive("string")).toBe(true);
    });
});