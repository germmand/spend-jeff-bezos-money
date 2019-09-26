import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { ProductRaw as Product} from '../../Components/Product';

describe('Product Component', () => {
    it('matches snapshot', () => {
        const props = {
          classes: {
            card: "card-css",
            cardMedia: "card-media-css",
            cardContent: "card-content-css",
            input: "input-css",
          },
          item: {
            name: "dummy-item-name",
            price: 1000,
            image: "dummy/image/path",
          },
          onTradedItem: jest.fn(),
        };
        const productComponentTree = renderer.create(
          <Product {...props} />
        ).toJSON();
        expect(productComponentTree).toMatchSnapshot();
    });

    it('add one to quantity on buy button clicked', () => {
        const props = {
          classes: {
            card: "card-css",
            cardMedia: "card-media-css",
            cardContent: "card-content-css",
            input: "input-css",
          },
          item: {
            name: "dummy-item-name",
            price: 1000,
            image: "dummy/image/path",
          },
          onTradedItem: jest.fn(),
        };
        const quantity = 25;
        const productComponentWrapper = mount(<Product {...props} />);
        productComponentWrapper.setState({
            quantity,
        });
        const expectedQuantity = quantity + 1;
        // color=primary is meant to always be the buy button.
        const buyButton = productComponentWrapper
            .find(Button)
            .filterWhere(b => b.props().color === "primary");
        // There has to only be one button with color="primary" in this component.
        expect(buyButton).toHaveLength(1);
        buyButton.simulate('click');
        expect(productComponentWrapper.state().quantity).toEqual(expectedQuantity);
    });

    it('subtracts one to quantity on sell button clicked', () => {
        const props = {
          classes: {
            card: "card-css",
            cardMedia: "card-media-css",
            cardContent: "card-content-css",
            input: "input-css",
          },
          item: {
            name: "dummy-item-name",
            price: 1000,
            image: "dummy/image/path",
          },
          onTradedItem: jest.fn(),
        };
        const quantity = 25;
        const productComponentWrapper = mount(<Product {...props} />);
        productComponentWrapper.setState({
            quantity,
        });
        const expectedQuantity = quantity - 1;
        // color=secondary is meant to always be the sell button.
        const sellButton = productComponentWrapper
            .find(Button)
            .filterWhere(b => b.props().color === "secondary");
        // There has to only be one button with color="secondary" in this component.
        expect(sellButton).toHaveLength(1);
        sellButton.simulate('click');
        expect(productComponentWrapper.state().quantity).toEqual(expectedQuantity);
    });

    it('updates state properly on input changes', () => {
        const props = {
          classes: {
            card: "card-css",
            cardMedia: "card-media-css",
            cardContent: "card-content-css",
            input: "input-css",
          },
          item: {
            name: "dummy-item-name",
            price: 1000,
            image: "dummy/image/path",
          },
          onTradedItem: jest.fn(),
        };
        const productComponentWrapper = mount(<Product {...props} />);
        const expectedQuantity = 25;
        const inputQuantity = productComponentWrapper.find(Input);
        // There should only be one input in this component
        // (the input for quantities).
        expect(inputQuantity).toHaveLength(1);
        // For some reason simulate('change') doesn't work.
        // So we need to call the property directly.
        inputQuantity.props().onChange({ target: { value: expectedQuantity } });
        expect(productComponentWrapper.state().quantity).toEqual(expectedQuantity);
    });

    it('calls onTradedItem on buy button clicked', () => {
        const props = {
          classes: {
            card: "card-css",
            cardMedia: "card-media-css",
            cardContent: "card-content-css",
            input: "input-css",
          },
          item: {
            name: "dummy-item-name",
            price: 1000,
            image: "dummy/image/path",
          },
          onTradedItem: jest.fn(),
        };
        const quantity = 25;
        const productComponentWrapper = mount(<Product {...props} />);
        productComponentWrapper.setState({
            quantity,
        });
        const expectedQuantity = quantity + 1;
        const expectedTradedItem = {
            ...props.item,
            quantity: expectedQuantity,
        };
        const buyButton = productComponentWrapper
            .find(Button)
            .filterWhere(b => b.props().color === "primary");
        expect(buyButton).toHaveLength(1);
        buyButton.simulate('click');
        expect(props.onTradedItem).toHaveBeenCalledWith(expectedTradedItem);
    });

    it('calls onTradedItem on sell button clicked', () => {
        const props = {
          classes: {
            card: "card-css",
            cardMedia: "card-media-css",
            cardContent: "card-content-css",
            input: "input-css",
          },
          item: {
            name: "dummy-item-name",
            price: 1000,
            image: "dummy/image/path",
          },
          onTradedItem: jest.fn(),
        };
        const quantity = 25;
        const productComponentWrapper = mount(<Product {...props} />);
        productComponentWrapper.setState({
            quantity,
        });
        const expectedQuantity = quantity - 1;
        const expectedTradedItem = {
            ...props.item,
            quantity: expectedQuantity,
        };
        const sellButton = productComponentWrapper
            .find(Button)
            .filterWhere(b => b.props().color === "secondary");
        expect(sellButton).toHaveLength(1);
        sellButton.simulate('click');
        expect(props.onTradedItem).toHaveBeenCalledWith(expectedTradedItem);
    });

    it('calls onTradedItem on input value change', () => {
        const props = {
          classes: {
            card: "card-css",
            cardMedia: "card-media-css",
            cardContent: "card-content-css",
            input: "input-css",
          },
          item: {
            name: "dummy-item-name",
            price: 1000,
            image: "dummy/image/path",
          },
          onTradedItem: jest.fn(),
        };
        const productComponentWrapper = mount(<Product {...props} />);
        const expectedQuantity = 25;
        const expectedTradedItem = {
            ...props.item,
            quantity: expectedQuantity,
        };
        const inputQuantity = productComponentWrapper.find(Input);
        expect(inputQuantity).toHaveLength(1);
        inputQuantity.props().onChange({ target: { value: expectedQuantity } });
        expect(props.onTradedItem).toHaveBeenCalledWith(expectedTradedItem);
    });
});
