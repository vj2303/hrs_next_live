
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Projects from './pages/Projects'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element: <><Navbar /> <Home /></>
    },
    {
      path:'/projects',
      element: <><Navbar /> <Projects /></>
    },
    {
      path:'/about',
      element: <><Navbar /> <About /></>
    }
  ])


  return (
    <div className="">
        
        <RouterProvider router={router} />
       
    </div>
  );
}

export default App;

