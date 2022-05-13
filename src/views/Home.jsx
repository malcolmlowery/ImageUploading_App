import { useRecoilValue } from "recoil";
import { imagesQuery } from "../utils/app.state";

const Home = () => {
  const images = useRecoilValue(imagesQuery)

  return(
    <div className='container'>
      <main>
        {images.map((image, index) => (
          <img 
            src={image} 
            key={index} 
            style={{ height: 200, objectFit: 'cover', display: 'grid' }}
          />
        ))}
      </main>
    </div>
  )
};

export default Home;