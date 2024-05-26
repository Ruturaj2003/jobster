import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Error, Landing, Register } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="landing" element={<Landing></Landing>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
        <ToastContainer position="top-right"></ToastContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
