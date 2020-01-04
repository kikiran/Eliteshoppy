import "./Menu.scss";
import React from "react";

function template() {
  return (
    <div className="directory-menu">
      {
        this.state.sections.map((section) => 
        <div className='menu-item ' key={section.id} 
        
        style={{ backgroundImage: `url(${section.imageUrl})` }}>
            <div className='content'>
              <div className='title' key={section.id}>{section.title.toUpperCase()}</div>
              
              <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        )

      }
    </div>
  );
};

export default template;
