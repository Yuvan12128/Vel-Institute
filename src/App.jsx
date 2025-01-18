import { BrowserRouter, Routes, Route } from "react-router"
import Announcement from "./assets/Home/Announcement"
import Bottom from "./assets/Home/Bottom"
import Contact from "./assets/Home/Contact"
import NavBar from "./assets/Home/NavBar"
import Slide from "./assets/Home/Slide"
import Update from "./assets/Home/Update"
import JuniorGradeinTamil from "./assets/TypeWritingCourses/JuniorGradeinTamil"


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
            <Route path="/JuniorGradeinTamil"element={ <><JuniorGradeinTamil/><Bottom /></>}/>
        </Routes>
        
      </BrowserRouter>
     

    </>
  )
}

export default App
