import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductCategory,fetchAsyncCategory } from '../Redux/categorynavSlice'
import { Link } from 'react-router-dom'
import  {Row,Col,Container, Card,Button}  from 'react-bootstrap'
import { thumbimgURL } from '../Urls/urls'
import './ProductDetail.css'
import BrandFilter from './BrandFilter'
import {setSelectedData}  from '../Redux/BrandSlice'

const ProductDetail = () => {

  const dispatch = useDispatch();
  const {category_id} = useParams();
  const Datas = useSelector(getProductCategory);
  console.log("Datas",Datas)

  const selectedBrands = useSelector((state) => state.brands.selectedBrands)
  console.log(selectedBrands);

  useEffect(() => {
    dispatch(fetchAsyncCategory(category_id));
  },[dispatch,category_id])

  const selectedData = useSelector((state) => state.brands.selectedData)
  console.log("selectedData",selectedData)

  useEffect(() => {
    dispatch(setSelectedData(Datas.filter(item =>  selectedBrands.includes(parseInt(item.product_brand)))))
   },[selectedBrands])

  return (
  <div>
    <Container>

      <Row>
        <Col xs={12} sm={2} md={6} lg={3}> 
          <div className='colu1'>
           <h5>Shop By Brands</h5>    
            <BrandFilter /> 
          </div>       
        </Col>

        <Col xs={12} sm={10} md={6} lg={9}>
         {selectedData.length > 0 ? (
          <div className='colu2'>
         {selectedData.map((val)=> {         
          return(
          <div>
            <Link className='linkStyle' to = {`/product/${val.product_id}`} key = {val?.id}>
            <Card className='card_sty2' style={{ width:'19rem'}}>
              <Card.Img variant="top" src={thumbimgURL + val.product_image} />
                <Card.Body>
                <Card.Title>{val.product_name}</Card.Title>   
                <Card.Text className='offer_price'>KWD {val.product_price_offer}</Card.Text>
                <Card.Text className='price' style={{textAlign:"center",textDecoration:"line-through"}}>KWD {val.product_price}</Card.Text>
          <div className='btnnnn'>
            <Button className='btn1' variant="primary">Add to Cart</Button>
          </div>
              </Card.Body>
            </Card>
            </Link>
          </div>
  )
  })}
</div>
    ):(
      <div className='colu2'>
      {Datas.map((val)=>{         
        return(
          <div>
          <Link className='linkStyle' to = {`/product/${val.product_id}`} key = {val?.id}>
          <Card  className='card_sty2' style={{ width: '19rem' }}>
          <Card.Img variant="top" src={thumbimgURL + val.product_image} />
            <Card.Body>
              <Card.Title>{val.product_name}</Card.Title>   
              <Card.Text className='offer_price' style={{textAlign:"center"}}>KWD {val.product_price_offer}</Card.Text>
              <Card.Text className='price'>KWD {val.product_price}</Card.Text>
              <Button className='btn1'>Add to Cart</Button>
            </Card.Body>
          </Card>
          </Link>
          </div>
      )
      })}</div>
    )
  }
    </Col>  
  </Row>
</Container>
  </div>
  )
}

export default ProductDetail
