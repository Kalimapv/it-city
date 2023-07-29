import React, {useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { imgURL } from './Urls/urls';
import { fetchAsyncarousel,getcarouselOne } from './Redux/categorynavSlice';

function CarouselOne(){

  const dispatch=useDispatch()
  const  CarouselOne = useSelector(getcarouselOne);
  console.log('CarouselOne=',CarouselOne)

  useEffect(()=>{
     dispatch(fetchAsyncarousel(getcarouselOne));
  },[])

  return (
    <div>  
      <OwlCarousel
          loop
          autoplay
          items={1}
          dots={true}
          margin={3}>        
  {CarouselOne.map((e,index)=>{
  return(
  <div>
    <img src={imgURL+e.img_name}></img>
  </div>
    )
  })
  }
      </OwlCarousel>
  </div>
  )
  }
export default CarouselOne