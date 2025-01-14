
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'

function App() {
  return (
 <>
 <Router>
  <Routes>
   <Route path='/' element={<Explore/>}/>
   <Route path='/offers' element={<Offers/>}/>
   <Route path='/profile' element={<Profile/>}/>
   <Route path='/sign-in' element={<SignIn/>}/>
   <Route path='/forgot-password' element={<ForgotPassword/>}/>
   <Route path='/sign-up' element={<SignUp/>}/>
  </Routes>
  <Navbar></Navbar>
 </Router>

 <ToastContainer></ToastContainer>
 </>
  );
}

export default App;
