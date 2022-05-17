

import './ProductCard.css';

import {preProcessPrice, preProcessTitle} from "../utils.js"

function ProductCard(props) {

  return (
    <div className="product-card">

      <div className="image-box">
        <img className="image" alt="product" src={props.product.image} />
      </div>

      <div className="sub-box">

        <div className="text-box">
          <div className="title-box">
            <a href="#" class="title-link">{preProcessTitle(props.product.title)}</a>
          </div>
          
          <div className="price-box">
            {preProcessPrice(props.product.price)} €
          </div>
        </div>

        <div className="button-box">
          <button className="button">Add to Cart</button>
        </div>
      </div>


    </div>
  )

}


export default ProductCard