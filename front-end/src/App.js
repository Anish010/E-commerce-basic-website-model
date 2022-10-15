import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <h1>E - Commerce</h1>
        <Nav/>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}/>
          <Route path="/add" element={<h1>Add page</h1>}/>
          <Route path="/update" element={<h1>Update Page</h1>}/>
          <Route path="/logout" element={<h1>Logout Page</h1>}/>
          <Route path="/profile" element={<h1>Profile Page</h1>}/>
        </Routes>
    </BrowserRouter>
    <Footer />
    </div>

  );
}

export default App;