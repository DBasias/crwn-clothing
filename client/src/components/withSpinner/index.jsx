import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './styles';

const withSpinner = WrappedComponent => {
  function WithSpinner({ isLoading, ...otherProps }) {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  }

  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';

  WithSpinner.displayName = `withSpinner(${wrappedComponentName})`;

  return WithSpinner;
};

export default withSpinner;
