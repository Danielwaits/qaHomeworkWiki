//SETTING VARIABLES REVIEW
var numberOne : number = 10;
var numberTwo: number = 15;
var wordOne: string = "word";
var wordTwo: string = "two";
var booleanOne: boolean = true;
var booleanTwo: boolean = false;

describe("should add Variable", () => {
    it("should add the number", () => {
        expect(numberOne + numberTwo).toEqual(25);
        expect(numberTwo - numberOne).toEqual(5);
    });
    it("should not pass with capital", () => {
        expect(wordOne).not.toEqual('woRd');
        expect(wordTwo).toEqual('two');
    });
    it("should compare the booleans", () => {
        expect(booleanOne).not.toEqual(booleanTwo);
    });


    //Functions Review if else
    function wordPass(word:string): string {
        if (word === 'first') {
            return 'this is the first otion'
        } else if (word === "second") {
            return 'this is the second'
        } else {
            return 'you only have two options'
        }
    }

    describe("testing the wordPass function", () => {
        it("should pass the first option", () => {
            expect(wordPass('first')).toBe('this is the first option');
        });
        it('should pass the second option', () => {
            expect(wordPass('second')).toBe('this is the second option');
        });
        it('should yell at us', () => {
            expect(wordPass('anything')).toBe('you only have two options');
        });
})
