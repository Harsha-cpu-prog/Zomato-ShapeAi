import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const reviewCard = () => {
    return (
        <>
        <div className=" my-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
           <div className="flex items-center gap-2">
           <div className="w-10 h-10 rounded-full">
                    <img
                     src="https://b.zmtcdn.com/data/user_profile_pictures/86a/05762ab129d45e231a1cd31da874486a.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                     alt="avtaar"
                     className="w-full h-full rounded-full object-cover" 
                     />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold"> Vishal Khillari</h3>
                    <small className="text-gray-500">5 Reviews &#8226; 3 Followers</small>
                </div>
           </div>
                <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
                    Follow
                </button>
        </div>
       <div className="flex flex-col gap-3">
           <div className="flex items-center gap-3">
               <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
                   3 <TiStarFullOutline/>
                   </span>
                   <h5 className="font-sm uppercase">Delivery</h5>
                   <small className="text-gray-500">3 days ago</small>
           </div>
           <div className="w-full">
               <p className="w-full text-gray-600 font-light text-base">
               this is not a biryani, taste is ok, but not a dhum biryani, Rice is jeera Samba not bhasumathi,
                Chicken is not fresh stored chicken, ok if there is no alternative for you.
               </p>
           </div>
       </div>
        </div>

        </>
    )
    }

export default reviewCard;
