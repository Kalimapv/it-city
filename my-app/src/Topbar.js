import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncategories } from "./Redux/categorynavSlice";
import { getcategoriesNav } from "./Redux/categorynavSlice";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Topbar.css'
import { Nav } from "react-bootstrap";
import { getAllCarts } from "./Redux/cartSlice";

function Topbar(){
const dispatch=useDispatch()

const categories  = useSelector(getcategoriesNav);
console.log('categoeiesnav=',categories)
const carts=useSelector(getAllCarts)
console.log("carts",carts);

useEffect(()=>{
    dispatch(fetchAsyncategories(getcategoriesNav));
},[dispatch])

const myItem = JSON.parse(localStorage.getItem('cart')) || ''
  const objLength = Object.keys(myItem).length;
  return(
    <>
    <Navbar className="nav_backk navbar sticky-top" variant="light">
    <Link to='/'>
      <img className="logooo" src="/images/itcity-logo.png" alt="" />
    </Link>
      <Container className="nav-center" style={{justifyContent:"left"}}>   
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span></button>
      <Nav>
        {categories.map((val,index) => {
          return( 
        <Link to={`/category/${val.cat_id}`} className='text-white text-decoration-none me-1 ms-2' key={index}>{val.cat_name}</Link>                     
        )
      })}
      <div className='navbar-cart flex align-center'>
        <input className="search_sty" placeholder="Search...." type="text" />
      <Link to="/cart" className='cart-btn'> 
        <svg xmlns="http://www.w3.org/2000/svg"  width="32" padding="20p" height="32" fill="#fff" class="bi bi-cart-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        {objLength ? (<div className='objLeng cart-items-value'>{objLength}</div>) :
        (<div className='objLeng cart-items-value' color="red">0</div>)}
      </Link>

      <Link to='/login'> 
        <svg className="profile_icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg>
      </Link>
       </div>
      </Nav>
      </Container>
    </Navbar>    
    </>   
  )
}
export default Topbar;