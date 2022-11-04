import Button from "./components/button";
import Contact from "./components/contact";
import Footer from "./components/footer";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Button/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
