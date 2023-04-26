import React from 'react'
import './Card.css'

const Card = ({props}) => {

  let  {
    productId,
    productPic,
    productName,
    productDescription,
    Price,
    Rating
 }   = props
   

  function handleClick(){
    alert( productName, "added in the cart , please proceed to pay")
  }

  return (
    <div class="container">
    <p>{productId}</p>
    <div class="img">
        <img src={productPic}
          alt="image" height="120px" width="120px" />
    </div>

    <h3 class="heading-3">{productName}</h3>

    <p class="para">{productDescription}</p>

     <h2 class="price">{Price}</h2>

     <h4 class="rating">{Rating}</h4>

     <button onClick={handleClick} class="btn">ADD TO CART</button>

    </div>
  )
}

export default Card;