import React from 'react';

function WithTableLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Please wait, still fetching data!
      </p>
    );
  };
}
export default WithTableLoading;
