import PropTypes from 'prop-types';
import ProductModel from './data/ProductModel';

function ShopItem(props) {
  const { item } = props;

  const imageStyle = {
    backgroundImage: 'url(' + item.img + ')'
  }
  
  return (
    <div className="item">
      <div className="item-image" style={imageStyle}></div>
      <h2 className="item-name">{item.name}</h2>
      <p className="item-color">{item.color}</p>
      <p className="item-price">{'$'+item.price}</p>
      <button className="item-button">Add to cart</button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.instanceOf(ProductModel).isRequired
}

export default ShopItem;