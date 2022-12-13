import { RouterProvider } from 'react-router-dom';
import './App.css';
// import Blog from './Blog/Blog';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import ParticalsBg from './components/ParticalsBg';
// import Projects from './components/Projects/Projects';
// import Skill from './components/Skills/Skill';
import router from './Router/Router';


function App() {

  return (
    <div className='max-w-screen-xl mx-auto'>
      <div>
        <RouterProvider router={router}></RouterProvider>
        <ParticalsBg></ParticalsBg>
      </div>
    </div>
  );
}

export default App;
