import * as actionTypes from './types';
import * as actions from './actions';

describe('toggleCartHidden action', () => {
  it('should create the toggleHidden action', () => {
    expect(actions.toggleCartHidden().type).toEqual(
      actionTypes.TOGGLE_CART_HIDDEN
    );
  });
});

describe('addItem action', () => {
  it('should create the addItem action', () => {
    const mockItem = { id: 1 };
    const action = actions.addItem(mockItem);

    expect(action.type).toEqual(actionTypes.ADD_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('removeItem action', () => {
  it('should create the removeItem action', () => {
    const mockItem = { id: 1 };
    const action = actions.removeItem(mockItem);

    expect(action.type).toEqual(actionTypes.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearItemFromCart action', () => {
  it('should create the clearItemFromCart action', () => {
    const mockItem = { id: 1 };
    const action = actions.clearItemFromCart(mockItem);

    expect(action.type).toEqual(actionTypes.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearCart action', () => {
  it('should create the clearCart action', () => {
    expect(actions.clearCart().type).toEqual(actionTypes.CLEAR_CART);
  });
});
