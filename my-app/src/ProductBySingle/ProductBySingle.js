import React, { useEffect,useState } from 'react'
import './ProductBySingle.css';
import { Container,Row,Col, Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductBySingle,fetchAsyncSingle } from '../Redux/categorynavSlice'
import { useParams,Link } from 'react-router-dom'
import { thumbimgURL,imgURL } from '../Urls/urls'
import { addToCart,getAllCarts } from '../Redux/cartSlice'


  const ProductBySingle = () => {
   
    const dispatch = useDispatch()
    const {product_id} = useParams(); 
    const [product_qty, setProduct_qty] = useState(1);
    const ProductSingle = useSelector(getProductBySingle)
    console.log('ProductSingle',ProductSingle)
    useEffect(() => {
        dispatch(fetchAsyncSingle(product_id))
    },[dispatch,product_id])

    const increaseQty = () => {
      setProduct_qty((prevQty) => {
        let tempQty = prevQty + 1;
        if (tempQty > ProductSingle?.stock) tempQty = ProductSingle?.stock;
        return tempQty;
      })
    }
    const decreaseQty = () => {
      setProduct_qty((prevQty) => {
        let tempQty = prevQty - 1;
        if (tempQty < 1) tempQty = 1;
        return tempQty;
      })
    }
    const addToCartHandler = (ProductSingle) => {
      let totalPrice = product_qty * ProductSingle?.product_price_offer;
      dispatch(addToCart({ ...ProductSingle, product_qty: product_qty, totalPrice: totalPrice }));      
    }

  return (

    <div class="container_sty">
 
        {ProductSingle.map((val) => {
          return(

            <div class="outline_div  row mt-5 text align-center">
              <div class="img_div col-md-5">      
              <img src={thumbimgURL + val.product_image} />
              </div>

              <div class="col-md-6 mt-4 text-start">
              <h3>{val.product_name}</h3>
              <h4>Rs.{val.product_price_offer.toFixed(3)} KWD</h4>
               <h4 className='price'> Rs.{val.product_price.toFixed(3)} KWD</h4>
            
              <div className='qty-change mt-3'>
                       <h5>Qty : </h5> 
                       <button type="button" className='qty qty-decrease flex align-center justify-center' onClick={decreaseQty}>
                     -
                   </button>
       <div className=" qty-value flex align-center justify-center px-2 fw-bold ">{product_qty} </div>
           <button onClick={increaseQty} type="button" className='qty qty-increase flex align-center justify-center'  >
                     +
           </button>
       </div>
       <Link to="/cart/:product_id">
         <Button className=' bg-dark border-0 mt-4 d-flex' onClick={() => {addToCartHandler(val)}} >Add To Cart</Button> 
      </Link>             
         </div>
         
            </div>

              )
            })}        
          </div>

    

















































  
  )
}

export default ProductBySingle