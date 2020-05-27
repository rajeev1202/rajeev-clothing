import React from 'react';
import './collectionPreviewComponent.css';
import CollectioItem from '../collection-item/collectionItemComponent';

const CollectionPreview = ({title,items}) =>{
return(
    <div className = 'collection-preview'>
    <h3 className='title'>{title.toUpperCase()}</h3>
<div className = 'preview'>
{
    items.filter((item,index) => index<4 )
    .map( ({id , ...otherItemProps}) =>
       <CollectioItem key = {id} {...otherItemProps}/> 
    
    )
}
</div>

    </div>
)

}
export default CollectionPreview;