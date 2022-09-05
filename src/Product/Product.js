import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Product.css"

function Product({id, image, title, price, rating}) {

  const [{basket}, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type:"ADD-TO-BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    })
  }

  return (
    <div className='product'>
        <div className='product-info'>
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
          </div>
          
          <img className='product-image' src={image} />
          <button onClick={addToBasket} className='product-button'>Add to basket</button>
    </div>
  )
}

export default Product