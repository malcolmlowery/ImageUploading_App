import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from "./views/Home";
import UploadImagesView from './views/UploadsImages';
import './styles/globals.css'
import Navbar from './components/navbar/Navbar';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/uploadImages' element={<UploadImagesView />} />
            </Routes>
        </>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
