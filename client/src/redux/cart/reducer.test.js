import * as actionTypes from './types';
import cartReducer from './reducer';

const initialState = {
  hidden: true,
  cartItems: []
};

describe('cartReducer', () => {
  it('should return initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it('should toggle hidden with toggleHidden action', () => {
    expect(
      cartReducer(initialState, { type: actionTypes.TOGGLE_CART_HIDDEN }).hidden
    ).toBe(false);
  });

  it('should increase quantity of matching item by 1 if addItem action fired with same item as payload', () => {
    const mockItem = { id: 1, quantity: 3 };
    const mockPreviousState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };
    expect(
      cartReducer(mockPreviousState, {
        type: actionTypes.ADD_ITEM,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(4);
  });

  it('should decrease quantity of matching item by 1 if removeItem action fired with same item as payload', () => {
    const mockItem = { id: 1, quantity: 3 };
    const mockPreviousState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPreviousState, {
        type: actionTypes.REMOVE_ITEM,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(2);
  });

  it('should remove item from cart if clearItemFromCart action fired with payload of existing item', () => {
    const mockItem = { id: 1, quantity: 3 };
    const mockPreviousState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPreviousState, {
        type: actionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem
      }).cartItems.includes(item => item.id === 1)
    ).toBe(false);
  });

  it('should clear cart if clearCart action fired', () => {
    const mockPreviousState = {
      hidden: true,
      cartItems: [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPreviousState, {
        type: actionTypes.CLEAR_CART
      }).cartItems.length
    ).toBe(0);
  });
});
