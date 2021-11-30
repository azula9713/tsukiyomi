import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Routes>
         <Route exact path="/" element={<Welcome />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
