import React, { Component } from 'react';
import { Subscribe, Container } from 'unstated';
import hoistStatics from 'hoist-non-react-statics';

export default (WrappedComponent, containersObject) => {
  class UnstatedComponent extends Component {
    render() {
      const keys = Object.keys(containersObject);
      const containers = Object.values(containersObject);

      return (
        <Subscribe to={[...containers]}>
          {(...stores) => {
            const storeProps = {};
            keys.forEach((key, i) => (storeProps[key] = stores[i]));
            return <WrappedComponent {...storeProps} {...this.props} />;
          }}
        </Subscribe>
      );
    }
  }

  return hoistStatics(UnstatedComponent, WrappedComponent);
};
