import React from 'react';
import './menuItemComponent.css'


const MenuItem = ({title,imageurl,size}) =>{
    return(
        <div className= {`${size} menu-item`}>
            <div className='background-image'
                style = {{
                    backgroundImage : `url(${imageurl})`
                }}
            />
        <div className= 'content'>
    <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop now</span>
      </div>
      </div>
    )
}
export default MenuItem;