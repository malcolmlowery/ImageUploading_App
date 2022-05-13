import { Routes, Route, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { routerPathState } from './utils/app.state';
import Home from "./views/Home";
import UploadImagesView from './views/uploadsImages';
import Navbar from './components/navbar/Navbar';
import './styles/globals.css'

const App = () => {
  const { pathname } = useLocation();
  const [pathnameLocation, setPathnameLocation] = useRecoilState(routerPathState);
  setPathnameLocation(pathname)

  return (
      <>
        <Navbar showUploadButton={pathnameLocation !== '/uploadImage' ? false : true } />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/uploadImage' element={<UploadImagesView />} />
          </Routes>
      </>
  );
}

export default App;
