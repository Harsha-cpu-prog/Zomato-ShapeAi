import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../../components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../components/restaurant/Order-Online/MenuListContainer";
import FoodItem from "../../components/restaurant/Order-Online/FoodItem";
import FoodList from "../../components/restaurant/Order-Online/FoodList";

const OrderOnline = () => {
    return (
        <>
          <div className="w-full h-screen flex">
              <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen md:block w-1/4">
              <MenuListContainer/>
              <MenuListContainer/>
             
              </aside>

              <div className="w-full px-3 md:w-3/4">
                  <div className="pl-3 mb-4 ">
                  <h2 className="text-xl font-semibold"> Order Online</h2>
                  <h4 className="flex items-center gap-2 font-light text-gray-500">
                   <AiOutlineCompass/> Live Track Your Order | <BiTimeFive/>45 min
                  </h4>
                  </div>
                  <section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                     <FoodList 
                     title="Recommended"
                     items={[
                         {
                     price:"1000",
                     rating:3,
                     description :"dhskfhdgfdbsdhaldjalidhyhdgesvcbdsj,cnlk,cnsdbhfgak,dnsk", 
                      title :"Yummy food",
                     image :
                    "https://b.zmtcdn.com/data/dish_photos/ee7/1c361f758cb11a23b573f59c99e91ee7.jpg?fit=around|130:130",
                         },
                        ]}
                    
                        />
                  </section>
              </div>
          </div>
              <FloatMenuBtn/>              
        </>
    )
}

export default OrderOnline;


// https://b.zmtcdn.com/data/dish_photos/ee7/1c361f758cb11a23b573f59c99e91ee7.jpg?fit=around|130:130",