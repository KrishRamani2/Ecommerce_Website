 import styled from 'styled-components';
 import Slider  from 'react-slick';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

 function ImgSlider() {
   let settings = {
     dots: true,
     infinite: true,
     speed:500,
     slidesToShow:1,
     slidesToScroll:1,
     autoplay :true,
   }
   return(<>
   <Carousel {...settings}>
     <Wrap>
      <img src="https:m.media-amazon.com/images/G/31/img23/Fashion/WRS/Dec/Stealdeals/cheatsheet/v1/steal-deals-pc._CB570568462_.gif" />
     </Wrap>
     <Wrap>
     <img src="https:m.media-amazon.com/images/G/31/img23/Fashion/WRS/Dec/herotator/PC/Men-s-clothing_9._SX3000_QL85_FMpng_.png" />
     </Wrap>
     <Wrap>
      <img src="https:m.media-amazon.com/images/G/31/img23/Fashion/WRS/Dec/herotator/PC/WA_PC_Revise._SX3000_QL85_FMpng_.png" />
     </Wrap>
     <Wrap>
       <img src="https:m.media-amazon.com/images/G/31/img23/Fashion/WRS/Dec/herotator/PC/Footwear_1._SX3000_QL85_FMpng_.png" />
     </Wrap>
     <Wrap>
       <img src="https:m.media-amazon.com/images/G/31/img23/Fashion/WRS/Dec/herotator/PC/Clothing-shoes-more_8._SX3000_QL85_FMpng_.png" />
     </Wrap>
     <Wrap>
       <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/Google_Pixel8_EN_1500x440.jpg" />
     </Wrap>
   </Carousel>
   </>);
 }

 export default ImgSlider;

 const Carousel = styled(Slider)`
 margin-top: 20px;

 ul li button {
   &:before{
     font-size:10px;
     color:rgba(150,158,171)
   }
 }
 li.slick-active button::before {
   color:white;
 }
 .slick-list {
   overflow:hidden;
 }
 button {
   z-index:1;
 }
 @media screen and (max-width: 420px) {
  display: none;
  }
 `
 const Wrap = styled.div`
 cursor:pointer;
 img {
   border-radius: 4px solid transparent;
   width:100%;
   height:100%;
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
   rgba(0 0 0 / 73%) 0px 16px 10px -10px;
   transition-duration:300ms;
   filter: brightness(1.1) contrast(1.2);
 }

 &:hover {
   border:4px solid rgba(249, 245 , 249, 0.9);
 }
 `