import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllCarts, removeItem} from './cartSlice';
import { Link } from 'react-router-dom'
import { thumbimgURL } from '../Urls/urls';
import './viewPage.css';

const ViewPage = () => {

  const dispatch =useDispatch()
  const CartItems = useSelector(getAllCarts);
  console.log("CartItems",CartItems)
  return ( 
      <div class="container">
         <div class="view_sty row">
          <div class="img_col1 mt-5 col-6">
            {CartItems.map((val) => {
              return(
              <>
                <div class="img_col d-flex text-center">
                  <img src={thumbimgURL + val.product_image} alt='' />      
                </div>
          
                <div>
                  <h4>{val.product_name}</h4>
                  <h5>Quantity {val.product_qty}</h5>
                  <h4>Total Price {val.totalPrice}  KWD</h4> 
                  <button onClick={() => dispatch(removeItem(val.id))}>Remove</button>
                </div>
              </>            
            )})}
          </div>
          <div class="img_col2 mt-5 col-6">
            <h3>Summary</h3>
            <table class="table">
              <tbody>
                <tr>
                  <td>Actual Amount</td>
                  <td>75.6</td>
                </tr>

                <tr> 
                  <td>Estm Amount</td>
                  <td>75.6</td>
                </tr>
              </tbody>
            </table>
            <Link to='/order_page'>
              <button>Proceed to Buy</button>
            </Link>        
          </div>
      </div> 
      </div>
  )
}

export default ViewPage;