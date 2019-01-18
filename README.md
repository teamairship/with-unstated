# withUnstated

Higher Order Component for Unstated state management

## Install

```bash
yarn add @airship/with-unstated
```

or

```bash
npm install @airship/with-unstated
```

## Usage

You can use this HoC to wrap a component so that you can have access to
the Unstated Containers in life-cycle methods.

```jsx
import React, { Component } from 'react';

import { ContainerOne, ContainerTwo } from './containers';
import withUnstated from '@airship/with-unstated';

class MyComponent extends Component {
  componentDidMount() {
    this.props.containerOne.doSomething();
  }

  componentDidUpdate() {
    this.props.containerTwo.doSomethingElse();
  }

  // ...
}

export default withUnstated(MyComponent, {
  containerOne: ContainerOne,
  containerTwo: ContainerTwo
});
```

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/teamairship/with-unstated](https://github.com/teamairship/with-unstated). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License

This package is available as open source under the terms of the [MIT License](https://github.com/teamairship/with-unstated/blob/master/LICENSE).
