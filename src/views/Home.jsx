import { useRecoilValue } from "recoil";
import { imagesQuery } from "../utils/app.state";
import './home.css';

const Home = () => {
  const images = useRecoilValue(imagesQuery)

  return(
    <div className='home-container'>
      <main>
        <div className="images-content">
          {images.map((image, index) => (
            <img 
              src={image} 
              key={index} 
            />
          ))}
        </div>
      </main>
    </div>
  )
};

export default Home;