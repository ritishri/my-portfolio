import Navbar from "./Components/Navbar/navbar";
import Intro from './Components/Intro/intro'
import Skills from "./Components/Skills/skills";
import Work from "./Components/Work/work";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
