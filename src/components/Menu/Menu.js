import React    from "react";
import template from "./Menu.jsx";

class Menu extends React.Component {

  constructor(){
    super();

    this.state = {
      sections: [
        
       {id: 1,
        title: 'Hats',
        imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
       },
       {id: 2,
        title: 'Shoes',
        imageUrl: 'https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
       },
       {id: 3,
        title: 'Jackets',
        imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
       },
       {id: 4,
        title: 'Men',
        imageUrl: 'https://images.unsplash.com/photo-1467779009031-53938b78ca38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        size: 'large'
       },
       {id: 5,
        title: 'Women',
        imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
       }
       
      ]
    }
  }
  
  render() {
    return template.call(this);
  }
}

export default Menu;
