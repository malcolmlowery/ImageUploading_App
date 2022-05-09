import { useState } from 'react';
import Navbar from "../components/navbar/Navbar";
import './Home.css';

const Home = () => {
  const [image, setImage] = useState(null);

  return(
    <div className='container'>
      <Navbar onChange={(img) => setImage(URL.createObjectURL(img))}/>
      <main>
        { image == null ?
          <p>No image to preview</p>
          :
          <div className='container_content'>
            <img src={image} alt="img" />
            <button>Submit</button>
          </div>
        }
      </main>
    </div>
  )
};

export default Home;