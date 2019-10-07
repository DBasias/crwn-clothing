import React from 'react';

import Spinner from '../Spinner';

const withSpinner = WrappedComponent => {
  function WithSpinner({ isLoading, ...otherProps }) {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  }

  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';

  WithSpinner.displayName = `withSpinner(${wrappedComponentName})`;

  return WithSpinner;
};

export default withSpinner;
