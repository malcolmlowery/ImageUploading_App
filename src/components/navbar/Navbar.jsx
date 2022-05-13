import { useRecoilState } from 'recoil';
import { imageState } from '../../utils/app.state';
import './Navbar.css';

const Navbar = ({ showUploadButton = true }) => {
  const [, setImage] = useRecoilState(imageState)

  const onChange = event => {
    if(event.target.files.length === 0) return setImage(null)
    setImage(event.target.files[0])
  }

  return(
    <nav>
      <h3>Image Uploader App</h3>
      { showUploadButton &&
        <label>
          <input 
            name='image' 
            type='file' 
            onChange={onChange}
          />
          Choose Image
        </label>
      }
    </nav>
  )
};

export default Navbar;