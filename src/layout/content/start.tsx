import * as React from "react";

var styles = require('./start.scss');

interface StartProps {
  name: string;
}

class Start extends React.Component<StartProps, {}> {
  render() {
    return (
      <div>
        <div className={styles.div}>Hello, {this.props.name}</div>
      </div>
    );
  }
}

export default Start;
