import React from "react";
import {TiStarOutline} from"react-icons/ti";
import {RiDirectionLine ,RiShareForwardLine} from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";

// components
import RestaurantNavbar from "../components/Navbar/restaurantNavbar";
import ImageGrid from "../components/restaurant/ImageGrid";
import RestaurantInfo from "../components/restaurant/RestaurantInfo";
import InfoButtons from "../components/restaurant/InfoButtons";
import TabContainer from "../components/restaurant/Tabs";
import CartConatainer from "../components/Cart/CartConatainer";

const RestaurantLayout = (props) => {
    return (
        <>
        <RestaurantNavbar/>
        <div className=" container mx-auto px-4 lg:px-20">
            <ImageGrid images={[
      "https://b.zmtcdn.com/data/pictures/6/19629626/0f5801ef6a3ecd312a2800df68572784.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/pictures/6/19629626/0f5801ef6a3ecd312a2800df68572784.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/pictures/6/19629626/0f5801ef6a3ecd312a2800df68572784.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/pictures/6/19629626/0f5801ef6a3ecd312a2800df68572784.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      "https://b.zmtcdn.com/data/pictures/6/19629626/0f5801ef6a3ecd312a2800df68572784.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        ]}
        />
        <RestaurantInfo 
        className=" Wow China!"
        restaurantRating ="3.5"
        deliveryRating ="3.2"
        cuisine="Chinese, Asian"
        address="Church Street, Pune"
        />
        <div className="my-4 flex flex-wrap gap-3">
           <InfoButtons isActive>
               <TiStarOutline/> Add Review
           </InfoButtons>
           <InfoButtons>
               <RiDirectionLine/>Direction
           </InfoButtons>
           <InfoButtons>
               <BiBookmarkPlus/>Bookmarks
           </InfoButtons>
           <InfoButtons>
               <RiShareForwardLine/> Share 
           </InfoButtons>
        </div>
    <div className="my-10">
        
        <TabContainer>
            
        </TabContainer>
        </div>
      <div className="relative">  {props.children}</div>
      
</div>
<CartConatainer/>
  </>
    )
}
export default RestaurantLayout;