import React,{Component} from 'react';
import './shopPageComponent.css';
import SHOP_DATA from './shopdata';
import CollectionPreview from '../../components/collection-preview/collectionPreviewComponent';

class ShopPage extends Component {
constructor(props){
    super(props);
    this.state = {
        collections : SHOP_DATA
    }
}

render(){
    const {collections} = this.state;
    return(
<div className='shop-page'>
    {
        collections.map( ({id, ...othercollectionprops}) =>
            <CollectionPreview key ={id} {...othercollectionprops}/>
        
    
        )
    }

</div>

    )
}

}
export default ShopPage;
