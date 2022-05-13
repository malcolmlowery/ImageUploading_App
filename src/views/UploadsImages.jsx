import { useLocation } from 'react-router-dom';

const UploadImagesView = () => {
  const location = useLocation()
  console.log(location)
  return(
    <h1>UploadImageView</h1>
  )
};

export default UploadImagesView;