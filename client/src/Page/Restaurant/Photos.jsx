import React,{useState} from "react";
import ImageViewer from 'react-simple-image-viewer';
// component
import PhotoCollection from "../../components/restaurant/PhotosCollection";

const Photos = () => {

    const[photos,setPhotos] = useState([
"https://b.zmtcdn.com/data/reviews_photos/153/5f3b3843e1258277923654b846d21153_1609696313.jpg",
"https://b.zmtcdn.com/data/reviews_photos/49e/4a25a08da21fb381a4cc92fb42f5649e_1607964070.jpg",
"https://b.zmtcdn.com/data/reviews_photos/a5c/bf521c1c00c8d79c8a38213ff0684a5c_1609696313.jpg",

]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
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
