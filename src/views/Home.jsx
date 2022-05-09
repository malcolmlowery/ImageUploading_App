import { useState } from 'react';
import Navbar from "../components/navbar/Navbar";
import { uploadImageToFirebase } from '../utils/imageUploader';
import './Home.css';

const Home = () => {
  const [image, setImage] = useState(null);
  const imagePreviewUrl = image !== null ? URL.createObjectURL(image) : null;
  
  return(
    <div className='container'>
      <Navbar onChange={(img) => setImage(img)}/>
      <main>
        { image == null ?
          <p>No image to preview</p>
          :
          <div className='container_content'>
            <img src={imagePreviewUrl} alt="img" />
            <button onClick={() => uploadImageToFirebase(image)}>Submit</button>
          </div>
        }
      </main>
    </div>
  )
};

export default Home;