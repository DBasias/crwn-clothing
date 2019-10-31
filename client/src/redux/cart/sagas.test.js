import { takeLatest, put } from 'redux-saga/effects';

import * as actionTypes from '../user/types';
import { clearCart } from './actions';
import { clearCartOnSignOut, onSignOutSuccess } from './sagas';

describe('on signout success saga', () => {
  it('should trigger on SIGNOUT_SUCCESS', () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(actionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    );
  });
});

describe('clear cart on signout saga', () => {
  it('should fire clearCart', () => {
    const generator = clearCartOnSignOut();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});
