import React from 'react';
import CustomButton from '../custom-button/custom-button.components';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import {CollectionItemContainer, CollectionFooterContainer, NameContainer, PriceContainer, BackgroundImage, AddButton} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick= {()=> addItem(item)} inverted>Add to cart</AddButton>
    </CollectionItemContainer>
}
const mapDispatchToProps = dispatch => {
    
    return {addItem: item => dispatch(addItem(item))}
}

export default connect(null, mapDispatchToProps)(CollectionItem);