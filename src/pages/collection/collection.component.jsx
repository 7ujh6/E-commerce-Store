import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({match}) => {
    return <div clasName='collection-page'><h2>Collection Page</h2></div>
}

const mapStateToProps = (state, ownProps) => {
    return {collection: selectCollection(ownProps.match.params.collectionId)(state)}
}

export default connect(mapStateToProps)(CollectionPage);