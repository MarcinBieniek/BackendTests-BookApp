const expect = require('chai').expect;

// Test nr 1

const formatFullName = require('../formatFullname.js');

describe('formatFullname', () => {

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullName(undefined)).to.equal('Error');
        expect(formatFullName(12)).to.equal('Error');
        expect(formatFullName({})).to.equal('Error');
        expect(formatFullName([])).to.equal('Error');
        expect(formatFullName(function() {})).to.equal('Error');
    });   

    it('should return an error if "fullName" length is 0', () => {
        expect(formatFullName()).to.equal('Error');
    });
      
    it('should return "fullName" in correct form', () => {
        expect(formatFullName('JOHN DOE')).to.equal('John Doe');
        expect(formatFullName('jOhN doe')).to.equal('John Doe');
        expect(formatFullName('john doe')).to.equal('John Doe');
    });
});



// Funkcja musi być stringiem w formacie <firstname> <lastname> / John Doe
// Wielkość liter ma znaczenie, dua litera na początku
// nie ważne, jaka będzie wielkość poszczególnych otrzymanych liter, zwrócony ma zostać właściwy zapis. Zatem amanda doe zostanie zmienione na Amanda Doe, JOHN DOE lub JOHN doE na John Doe itd.