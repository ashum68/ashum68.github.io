import 'bootstrap/dist/css/bootstrap.min.css';

import { Landing, Navbar, About, Projects, Experience, Footer } from './components'



import './App.css';

function App() {
  return (
    <div>

      <Landing />

      <div className='m-16 mx-20 lg:px-20 sm:mx-5'>
        <About />
        <Projects />
        <Experience />
      </div>

      <Navbar />
      <Footer />
    </div>

  );
}

export default App;
