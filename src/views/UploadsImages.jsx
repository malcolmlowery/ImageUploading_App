import { useRecoilState } from 'recoil';
import { imageState } from '../utils/app.state';
import { uploadImageToFirebase } from '../utils/imageUploader';
import './uploadImages.css';

const Home = () => {
  const [image,] = useRecoilState(imageState);

  return(
    <div className='container'>
      <main>
        { image == null ?
          <p>No image to preview</p>
          :
          <div className='container_content'>
            <img src={URL.createObjectURL(image)} alt="img" />
            <button onClick={() => {
              uploadImageToFirebase(image)
              
            }}>Submit</button>
          </div>
        }
      </main>
    </div>
  )
};

export default Home;