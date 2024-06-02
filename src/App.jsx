import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error, Landing, Register } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout></SharedLayout>
              </ProtectedRoute>
            }
          >
            <Route index element={<Stats></Stats>}></Route>
            <Route path="all-jobs" element={<AllJobs></AllJobs>} />
            <Route path="add-job" element={<AddJob></AddJob>} />
            <Route path="profile" element={<Profile></Profile>} />
          </Route>
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
