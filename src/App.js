import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import ErrorPage from './pages/ErrorPage';


function App() {
  
    

  return (
    <div className="App">
         <Routes>              
              <Route path="/" element={ <HomePage /> } />
              <Route path="/beers" element={ <Beers /> } />
              <Route path="/random-beer" element={ <RandomBeer /> } />
              <Route path="/new-beer" element={ <NewBeer /> } />
              <Route path="*" element={ <ErrorPage /> } />
          </Routes>

    </div>
  );
}

export default App;

//  <Routes>
//   <Route  path="/" element={<HomePage />} />
//   <Route  path="/" element={<HomePageWithNavigate />} /> 
//   <Route path="/about" element={<AboutPage />} />
//   <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />
//   <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
//   <Route path="/example" element={ <QueryStringExample /> } />
//   <Route path="*" element={ <ErrorPage /> } />
// </Routes>