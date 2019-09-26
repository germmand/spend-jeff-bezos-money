import MoneyStringConverter from '../../Utils/MoneyStringConverter';

describe('MoneyStringConverter test suite', () => {
    it('returns expected string given an amount', () => {
        const tests = [{
            amount: 1205404,
            expectedResult: "1,205,404",
        }, {
            amount: 220450,
            expectedResult: "220,450",
        }, {
            amount: 65,
            expectedResult: "65",
        }];
        for(let i = 0; i < tests.length; i += 1) {
            const actualResult = MoneyStringConverter(tests[i].amount);
            expect(actualResult).toEqual(tests[i].expectedResult);
        }
    });
});
