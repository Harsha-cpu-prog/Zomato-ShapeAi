import React from "react";
import { Link,useParams } from "react-router-dom";
import {IoMdArrowDropright} from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// components
import MenuCollection from "../../components/restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../components/restaurant/MenuSimilarRestaurantcard";
import { NextArrow,PrevArrow } from "../../components/CarousalArrow";
import ReviewCard from "../../components/restaurant/Reviews/reviewCard";
import Mapview from "../../components/restaurant/Mapview";

const Overview = () => {
    const {id} =useParams();
      const settings = {
          arrows :true,
          infinite:true,
          speed:500,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <NextArrow/>,
          prevArrow:<PrevArrow/>,
      }
     const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        
        <>
         <div className="flex flex-col md:flex-row relative">
             <div className="w-full  md:w-8/12">
                 <h2 className="font-semibold text-lg md:text-xl my-4">
                     About this place
                     </h2>
                 <div className="flex justify-between items-center">
                     <h4 className="text-lg font-medium">Menu</h4>
                     <Link to ={`/restaurant/${id}/menu`}>
                     <span className="flex items-center gap-1 text-zomato-400">
                         See all menu <IoMdArrowDropright/>
                         </span>
                     </Link>
                      </div>
                     <div className="flex flex-wrap gap-3 my-4">
                     <MenuCollection
                      menuTitle="Menu"
                       pages="3" 
                     image="https://binaries.templates.cdn.office.net/support/templates/en-us/lt89609043_quantized.png"/>
                 </div>
                 <h4 className="text-lg font-medium my-4">Cuisines</h4>
                 <div classNam="flex flex-wrap gap-2">
                     <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                         Street Food
                         </span>
                         <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                         Street Food
                         </span>
                         <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                         Street Food
                         </span>
                 </div>
               <div className="my-4">
               <h4 className="text-lg font-medium ">Average Cost</h4>
               <h6>₹750 for two people (approx.) </h6>
               <small className="text-gray-500">
                   Exclusive of applicable taxes and charges, if any
               </small>
              
               </div>
               <div className="my-4">
               <h4 className="text-lg font-medium ">Similar Restaurants</h4>
              <div> 
          <Slider {...settings}>
          <MenuSimilarRestaurantcard
            image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg"
           title="Chung Wah"
           />
            <MenuSimilarRestaurantcard
            image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg"
           title="Chung Wah"
           />
            <MenuSimilarRestaurantcard
            image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg"
           title="Chung Wah"
           />
            <MenuSimilarRestaurantcard
            image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg"
           title="Chung Wah"
           /> 
          </Slider>
          </div>
           <h4 className="text-lg font-medium">
               Rate your delivery experience
               </h4>
               <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                   activeColor="#ffd700"
                />
               </div>
               <div className="my-4  w-full  md:hidden flex flex-col gap-4">
               <Mapview title="Chinese" phno="+916386537440"
                 mapLoction={[18.603840687481277, 73.76348907570944]}
                  address="Shop 1, Survey 177/2/1, Yamuna Nagar, Wakad, Pune"/> 
               </div>
               <div className="my-4 flex flex-col gap-4">
                   <ReviewCard/>
                   <ReviewCard/>
                   <ReviewCard/>
               </div>
             </div>
             <aside 
             style={{height:"fit-content"}} 
             className="hidden  md:flex md:w-4/12 sticky rounded-xl top-2 bg-white  
             p-3 shadow-md flex flex-col gap-4"
             >
                 <Mapview title="Chinese" phno="+916386537440"
                 mapLoction={[18.603840687481277, 73.76348907570944]}
                  address="Shop 1, Survey 177/2/1, Yamuna Nagar, Wakad, Pune"/>   
</aside>
</div>   
        </>
    )
}

export default Overview;
