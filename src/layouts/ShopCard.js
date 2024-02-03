import PropTypes from 'prop-types';
import ProductModel from './data/ProductModel';

function ShopCard(props) {
  const { card } = props;
  
  const cardStyle = {
    backgroundImage: 'url(' + card.img + ')'
  }

  return (
    <div className="card" style={cardStyle}>
      <h2 className="card-name">{card.name}</h2>
      <p className="card-color">{card.color}</p>
      <div className="card-bottom">
        <p className="card-price">{'$'+card.price}</p>
        <button className="card-button">Add to cart</button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  card: PropTypes.instanceOf(ProductModel).isRequired
}

export default ShopCard;