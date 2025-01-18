import { BrowserRouter, Routes, Route } from "react-router"
import Announcement from "./assets/Home/Announcement"
import Bottom from "./assets/Home/Bottom"
import Contact from "./assets/Home/Contact"
import NavBar from "./assets/Home/NavBar"
import Slide from "./assets/Home/Slide"
import Update from "./assets/Home/Update"
import JuniorGradeinTamil from "./assets/TypeWritingCourses/JuniorGradeinTamil"
import JuniorGradeinEnglish from "./assets/TypeWritingCourses/JuniorGradeinEnglish"
import SeniorGradeinTamil from "./assets/TypeWritingCourses/SeniorGradeinTamil"
import SeniorGradeinEnglish from "./assets/TypeWritingCourses/SeniorGradeinEnglish"
import JuniorGradeinTamil1 from "./assets/ShortHandCourses/JuniorGradeinTamil1"
import JuniorGradeinEnglish1 from "./assets/ShortHandCourses/JuniorGradeinEnglish1"
import InterGradeinEnglish from "./assets/ShortHandCourses/InterGradeinEnglish"
import SeniorGradeinTamil1 from "./assets/ShortHandCourses/SeniorGradeinTamil1"
import SeniorGradeinEnglish1 from "./assets/ShortHandCourses/SeniorGradeinEnglish1"
import Staff from "./assets/Staff/Staff"
import ContactUs from "./assets/ContactUs/ContactUs"


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />


        <Routes>
          <Route path="/" element={
            <>
              <Announcement />
              <Slide />
              <Update />
             
            </>} />
            <Route path="/JuniorGradeinTamil"element={ <><JuniorGradeinTamil/> </>}/>
            <Route path="/JuniorGradeinEnglish"element={ <><JuniorGradeinEnglish/></>}/>
            <Route path="/SeniorGradeinTamil"element={ <><SeniorGradeinTamil/></>}/>
            <Route path="/SeniorGradeinEnglish"element={ <><SeniorGradeinEnglish/></>}/>
            <Route path="/JuniorGradeinTamil1"element={ <><JuniorGradeinTamil1/></>}/>
            <Route path="/JuniorGradeinEnglish1"element={ <><JuniorGradeinEnglish1/></>}/>
            <Route path="/InterGradeinEnglish"element={ <><InterGradeinEnglish/></>}/>
            <Route path="/SeniorGradeinTamil1"element={ <>< SeniorGradeinTamil1/></>}/>
            <Route path="/SeniorGradeinEnglish1"element={ <>< SeniorGradeinEnglish1/></>}/>
            <Route path="/Staff" element={<> <Staff/></>}/>
            <Route path="/ContactUs" element={<> <ContactUs/></>}/>
            
        </Routes>
        <Contact /><Bottom />
        
      </BrowserRouter>
     

    </>
  )
}

export default App
