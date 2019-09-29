import React from 'react';
import renderer from 'react-test-renderer';
import { TradedItemRaw as TradedItem } from '../../Components/TradedItem';

describe('TradedItem Component', () => {
    it('matches snapshot', () => {
        const props = {
          classes: {
              container: 'container-css',
              productImage: 'product-image-css',
          },
          item: {
            name: 'dummy item name',
            quantity: 1,
            image: '/path/to/dummy/traded/item',
          },
        };
        const tradedItemComponentTree = renderer.create(
          <TradedItem {...props} />
        ).toJSON();
        expect(tradedItemComponentTree).toMatchSnapshot();
    });
});
