import './Navbar.css';

const Navbar = ({ onChange }) => {
  return(
    <nav>
      <h3>Image Uploader App</h3>
      <label>
        <input 
          name='image' 
          type='file' 
          onChange={(val) => onChange(val.target.files[0])}
        />
        Choose Image
      </label>
    </nav>
  )
};

export default Navbar;