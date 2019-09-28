import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MainPageRaw as MainPage, BEZOS_NET_WORTH } from '../../Pages/MainPage';
import Product from '../../Components/Product';

// Super hacky way of mocking the material-ui object styles:
// This is done like this because MainPage makes use of 
// MoneyLeftWrapper and Product components which use a style object
// that requires the 'theme' object provided by material-ui.
// And to prevent the snapshot from exploding, we mock them like this.
jest.mock('../../Components/MoneyLeftWrapper/styles', () => ({}));
jest.mock('../../Components/Product/styles', () => ({}));

// Since we're gonna keep adding products
// We need to mock the products module so that the snapshot doesn't change.
jest.mock('../../Products', () => {
    const mockedProducts = [{
        id: 1,
        name: 'dummy product',
        price: 1000,
        image: '/dummy/image/path'
    }];
    return mockedProducts;
});

describe('MainPage Component', () => {
    it('matches snapshot', () => {
        const props = {
            classes: {
                root: 'root-css',
            },
        };
        const mainPageComponentTree = renderer.create(
          <MainPage {...props} />
        ).toJSON();
        expect(mainPageComponentTree).toMatchSnapshot();
    });

    it('adds items to tradedItems on ComputeMoneyLeft', () => {
        const props = {
            classes: {
                root: 'root-css',
            },
        };
        const mockedProduct = {
            id: 1,
            name: 'dummy product',
            price: 1000,
            image: '/dummy/image/path',
            quantity: 10,
        };
        const mainPageWrapper = mount(<MainPage {...props} />);
        const productComponentWrapper = mainPageWrapper.find(Product);
        productComponentWrapper.props().onTradedItem(mockedProduct);
        expect(mainPageWrapper.state().tradedItems.length).toEqual(1);
        expect(mainPageWrapper.state().tradedItems[0]).toEqual(mockedProduct);
    });

    it('removes items when quantity = 0 from tradedItems on ComputeMoneyLeft', () => {
        const props = {
            classes: {
                root: 'root-css',
            },
        };
        const mockedTradedItem = {
            id: 1,
            name: 'dummy product',
            price: 1000,
            image: '/dummy/image/path',
            quantity: 10,
        };
        const mainPageWrapper = mount(<MainPage {...props} />);
        mainPageWrapper.setState({
            tradedItems: [mockedTradedItem],
        });
        const productComponentWrapper = mainPageWrapper.find(Product);
        mockedTradedItem.quantity = 0;
        productComponentWrapper.props().onTradedItem(mockedTradedItem);
        expect(mainPageWrapper.state().tradedItems.length).toEqual(0);
    });

    it('updates quantity on existing tradedItem', () => {
        const props = {
            classes: {
                root: 'root-css',
            },
        };
        const mockedTradedItem = {
            id: 1,
            name: 'dummy product',
            price: 1000,
            image: '/dummy/image/path',
            quantity: 10,
        };
        const mainPageWrapper = mount(<MainPage {...props} />);
        mainPageWrapper.setState({
            tradedItems: [mockedTradedItem],
        });
        const productComponentWrapper = mainPageWrapper.find(Product);
        mockedTradedItem.quantity = 15;
        productComponentWrapper.props().onTradedItem(mockedTradedItem);
        expect(mainPageWrapper.state().tradedItems.length).toEqual(1);
        expect(mainPageWrapper.state().tradedItems[0]).toEqual(mockedTradedItem);
    });

    it('computes MoneyLeft properly', () => {
        const props = {
            classes: {
                root: 'root-css',
            },
        };
        const mockedTradedItem = {
            id: 1,
            name: 'dummy product',
            price: 1000,
            image: '/dummy/image/path',
            quantity: 10,
        };
        const mainPageWrapper = mount(<MainPage {...props} />);
        mainPageWrapper.setState({
            tradedItems: [],
            moneyLeft: BEZOS_NET_WORTH,
        });
        const expectMoneyLeft = BEZOS_NET_WORTH - mockedTradedItem.price * mockedTradedItem.quantity;
        const productComponentWrapper = mainPageWrapper.find(Product);
        productComponentWrapper.props().onTradedItem(mockedTradedItem);
        expect(mainPageWrapper.state().moneyLeft).toEqual(expectMoneyLeft);
    });
});
