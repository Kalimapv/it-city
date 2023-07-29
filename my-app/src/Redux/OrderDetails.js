import React from 'react'
import './OrderDetails.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearcart } from '../Redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const OrderDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleOnClick = () => {
    dispatch(clearcart())
    navigate('/')
    }
    return (
      <div class="container">
       <div class="row mt-5">
          <div class="first_col col-sm-4">
            <h4 className='header'>Shipping Address</h4>
          <div className='shippinggg'>
            <input className="inputs" type='text' placeholder='customer Name' />
            <input className="inputs" type='email' placeholder='Email Address' />
            <input className="inputs" type='number' placeholder='Mobile Number' />
            <input className="inputs" type='text' placeholder='Address' />
            <input className="inputs" type='text' placeholder='Place/Area' />
            <input className="inputs" type='text' placeholder='Country' max={2} />
            <input className="inputs" type='text' placeholder='Remarks(optional)' />
          </div>
          </div>

          <div class="payment_col col-md-4">
            <h4>Payment Method</h4>
              <div class="form-check mt-3">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">Cash on Delivery</label>
              </div>
        
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                KNET,or credit card
                right at your doorstep!
              </label>      
          </div>

          <h4>Checkout Options</h4>
          <div class="form-check mt-3">
            <input type="checkbox" class="form-check-input" id="check1" name="option1" value="something" />
            <label class="form-check-label" for="check1">Guest Checkout</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
            <label class="form-check-label" for="check2">Create an account for later use</label>
          </div>

          <div class="btn_style mt-4">
            <button onClick={handleOnClick}>Complete Shopping </button>
           <Link to='/'>
           <button>Continue Shopping</button>
           </Link>
          </div>
        </div>

        <div class="col-md-4">
          <h4>Order Summary</h4>
          <p class="mt-2">(2) Items in Cart</p>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><img src='' /></th>
                <td>Blackview Tab11 128GB/8GB 10.36Inch 4G Tablet - Gray</td>
                <td>x1</td>
                <td>63.990</td>
              </tr>
              <tr>
                <th scope="row"><img src='' /></th>
                <td>Blackview Tab 7 Kids 32GB/2GB 10.1inch 4G Children Edition Tablet - Pink</td>
                <td>x1</td>
                <td>41.990</td>
              </tr>
            </tbody>
          </table>

      <h3>Shipping Charge: 1.00 KWD</h3>
      <p>Total Price: <b>106.980</b> KWD</p>
           </div>
         </div>
       </div>
  )
}

export default OrderDetails;