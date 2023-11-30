import { Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import CourseList from './Pages/Course/CourseList'
import ContactUs from './Pages/ContactUs'
import Denied from './Pages/Denied'
import CourseDescription from './Pages/Course/CourseDescription'
import CourseCreate from './Pages/Course/CourseCreate'
import RequireAuth from './Components/Auth/RequireAuth'
function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/signup" element={<Signup/> }></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
      <Route path="/courses" element={<CourseList/>}></Route>
      <Route path="/denied" element={<Denied/>}></Route>
      <Route path="/course/description" element={<CourseDescription/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route element={<RequireAuth/>}>
        <Route path="/course/createCourse" element={<CourseCreate/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
