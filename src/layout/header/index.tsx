import * as React from "react";
import Navigation from "../navigation";

var styles = require('./index.scss');

interface StartProps {
  name: string;
}

class Header extends React.Component<StartProps, {}> {
  render() {
    return (
      <header className={styles.header}>
        <a href="#main" className={styles.logo}></a>
        <span className={styles['header-text']}>
          Hi, <span className="name">{this.props.name}</span>
        </span>
        <Navigation />
      </header>
    );
  }
}

export default Header;
