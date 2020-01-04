import React    from "react";
import template from "./MenuItems.jsx";

class MenuItems extends React.Component {

   render() {
    return template.call(this);
  }
}

export default MenuItems;
