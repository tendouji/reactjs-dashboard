import * as React from "react";
var styles = require('./index.scss');

interface menu {
  name: string,
  url: string,
  target?: string
}

const menuList:Array<menu> = [
  { 'name': 'Home', 'url': '#home' },
  { 'name': 'About', 'url': '#about' },
  { 'name': 'Contact', 'url': '#contact' },
  { 'name': 'Blog', 'url': 'http://www.google.com', 'target': '_blank' }
];

class Navigation extends React.Component {
  render() {
    return (
      <nav className={styles.navigation} role="navigation">
        <ul>{ 
          menuList.map((item: menu) => {
            return (
              <li><a href={item.url} target={item.target}>{item.name}</a></li>
            );
          })
        }</ul>
      </nav>
    );
  }
}

export default Navigation;
