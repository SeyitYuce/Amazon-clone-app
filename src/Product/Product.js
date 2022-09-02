import React from 'react'
import "./Product.css"

function Product({image, title, price, rating}) {
  return (
    <div className='product'>
        <div className='product-info'>
          <img className='product-image' src={image} />
            <p>{title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product-rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>★</p>
                ))}
            </div>
            <button className='product-button'>Add to basket</button>
        </div>
    </div>
  )
}

export default Product