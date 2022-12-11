import './App.css';
import Blog from './Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skill from './components/Skills/Skill';


function App() {

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
