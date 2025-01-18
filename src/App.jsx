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
              <Contact />
              <Bottom />
            </>} />
            <Route path="/JuniorGradeinTamil"element={ <><JuniorGradeinTamil/> <Contact /><Bottom /></>}/>
            <Route path="/JuniorGradeinEnglish"element={ <><JuniorGradeinEnglish/><Contact /><Bottom /></>}/>
            <Route path="/SeniorGradeinTamil"element={ <><SeniorGradeinTamil/><Bottom /></>}/>
            <Route path="/SeniorGradeinEnglish"element={ <><SeniorGradeinEnglish/><Contact /><Bottom /></>}/>
            <Route path="/JuniorGradeinTamil1"element={ <><JuniorGradeinTamil1/><Contact /><Bottom /></>}/>
            <Route path="/JuniorGradeinEnglish1"element={ <><JuniorGradeinEnglish1/><Contact /><Bottom /></>}/>
            <Route path="/InterGradeinEnglish"element={ <><InterGradeinEnglish/><Contact /><Bottom /></>}/>
            <Route path="/SeniorGradeinTamil1"element={ <>< SeniorGradeinTamil1/><Contact /><Bottom /></>}/>
            <Route path="/SeniorGradeinEnglish1"element={ <>< SeniorGradeinEnglish1/><Contact /><Bottom /></>}/>
            <Route path="/Staff" element={<> <Staff/><Contact /><Bottom /></>}/>
            <Route path="/ContactUs" element={<> <ContactUs/><Contact /><Bottom /></>}/>
        </Routes>
        
        
      </BrowserRouter>
     

    </>
  )
}

export default App
