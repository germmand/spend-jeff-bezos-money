import React from 'react';
import renderer from 'react-test-renderer';
import { 
    MoneyLeftWrapperRaw as MoneyLeftWrapper 
} from '../../Components/MoneyLeftWrapper';

describe('MoneyLeftWrapper Component', () => {
    it('matches snapshot', () => {
        const props = {
          classes: {
              moneyWrapper: "money-wrapper-css",
          },
          moneyLeft: 123456789,
        };
        const moneyLeftComponentTree = renderer.create(
          <MoneyLeftWrapper {...props} />
        ).toJSON();
        expect(moneyLeftComponentTree).toMatchSnapshot();
    });
});
