import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct({id, image, title, price, rating}) {
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct-image' src={image} 
        />

        <div className='checkoutProduct-info'>
            <p className='checkoutProduct-title'>
                <strong>{title}</strong> 
            </p>
            <p className='checkoutProduct-price'>
                <strong>`${price}`</strong>
            </p>
            <div className='checkoutProduct-rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>★</p>
                    ))}
            </div>
            <button>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct