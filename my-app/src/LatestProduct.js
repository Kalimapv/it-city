import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncLatest, getHomeLatest } from './Redux/categorynavSlice';
import { Card,Button } from 'react-bootstrap';
import { thumbimgURL } from './Urls/urls';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './LatestProduct.css';
import { Link } from 'react-router-dom';

const LatestProduct = () => {

const dispatch = useDispatch();
const LatestProducts = useSelector(getHomeLatest);
console.log("LatestProducts",LatestProducts)

    useEffect  (() => {
        dispatch(fetchAsyncLatest(getHomeLatest))
    },[])

  return (
   
   <div>
    <h2>Latest Product</h2>
    <OwlCarousel
            loop
            items={5}
            margin={3}
            >
        {LatestProducts.map((val) => {
return(
  <div >
 
    <Card className='card_sty' style={{ width: '18rem' }}>
    <Link className='linkStyle' to = {`/product/${val.product_id}`} key = {val?.id}>
      <Card.Img variant="top" src={thumbimgURL + val.product_image} />
        <Card.Body>
            <Card.Title>{val.product_name}</Card.Title>   
            <Card.Text className='offer_price' style={{textAlign:"center"}}>KWD {val.product_price_offer}</Card.Text>
            <Card.Text className='price' style={{textAlign:"center",textDecoration:"line-through"}}>KWD {val.product_price}</Card.Text>
      <Button className='btn1'>Add to Cart</Button>
      </Card.Body>
      </Link>
    </Card>
   
    </div>
)
        })}
    </OwlCarousel>
   </div>

  )
}

export default LatestProduct