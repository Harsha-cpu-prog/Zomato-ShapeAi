import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageViewer from 'react-simple-image-viewer';

// component
import PhotoCollection from "../../components/restaurant/PhotosCollection";

// reducx action
import {getImage} from "../../Redux/Reducer/Image/Image.action";

const Photos = () => {

    const[photos,setPhotos] = useState([]);
// "https://b.zmtcdn.com/data/reviews_photos/153/5f3b3843e1258277923654b846d21153_1609696313.jpg",
// "https://b.zmtcdn.com/data/reviews_photos/49e/4a25a08da21fb381a4cc92fb42f5649e_1607964070.jpg",
// "https://b.zmtcdn.com/data/reviews_photos/a5c/bf521c1c00c8d79c8a38213ff0684a5c_1609696313.jpg",



    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);

    const reduxState = useSelector(
      (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();
    useEffect(() => {
      if (reduxState) {
        dispatch(getImage(reduxState?.photos)).then((data) => {
          const images = [];
          data.payload.image.images.map(({ location }) => images.push(location));
          setPhotos(images);
        });
      }
    }, []);

    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
          
          {isMenuOpen && (
        <ImageViewer
          src={photos }
          currentIndex={CurrentImg }
          disableScroll={ false }
        //   closeOnClickOutside={ true }
          onClose={ closeViewer }
        />
      )}
           <div className="flex flex-wrap gap-2">
           {photos.map((photo)=>(
            <PhotoCollection image={photo} openViewer={openViewer} />
            ))}
           </div>
        </>
    )
}

export default Photos;
