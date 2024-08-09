import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Socialinks from "./components/Socialinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience"
import Contact from "./components/Contact"

function App() {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />

        <Socialinks />
       
    </div>
  );
}

export default App;
