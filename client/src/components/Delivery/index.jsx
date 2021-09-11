import React, {useState} from "react";


// components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery= () => {
    const [restaurantList,setRestaurantList] =useState([
        {
            _id:"123456",
            photos:["https://b.zmtcdn.com/data/pictures/6/19503146/a463a0cd7251f8402c8024d3af3f7c33_o2_featured_v2.jpg?output-format=webp"
        ],
        name:"French Fries",
        cuisine:["French Food","Coffee","Beverages"],
        averageCost:100,
        isPro:true,
        isOff:80,
        durationOfdelivery:47,
        restaurantReviewValue:4.1,

        },
        {
            _id:"123456-3",
            photos:["https://b.zmtcdn.com/data/pictures/6/19503146/a463a0cd7251f8402c8024d3af3f7c33_o2_featured_v2.jpg?output-format=webp"
        ],
        name:"French Fries",
        cuisine:["French Food","Coffee","Beverages"],
        averageCost:100,
        isPro:true,
        isOff:80,
        durationOfdelivery:47,
        restaurantReviewValue:4.1,

        },
        {
            _id:"123456-2",
            photos:["https://b.zmtcdn.com/data/pictures/chains/8/18489118/a39228f63559b763c6928e91fbdf4942_o2_featured_v2.jpg?output-format=webp"
        ],
        name:"Punjabi Nawabi",
        cuisine:["North Indian", "Biryani", "Mughlai, Chinese"],
        averageCost:100,
        isPro:true,
        isOff:80,
        durationOfdelivery:47,
        restaurantReviewValue:4.1,

        },
    ]);
    return (
        <>
          <DeliveryCarousal />
          {/* <Brand /> */}
          <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
            Delivery Restaurants in Vijay Nagar
          </h1>
          <div className="flex justify-between flex-wrap">
            {restaurantList.map((restaurant) => (
              <RestaurantCard
                {...restaurant}
                key={restaurant._id}
                whereIsthisres="asf"
              />
            ))}
          </div>
        </>
      );
    };
export default Delivery;
