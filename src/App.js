import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import AddItem from './components/AddItem'
import ViewItems from './components/viewItems'
import './App.css';

const App = ()=>(
  <div className='app-styling'>
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/add-item" element = {<AddItem/>} />
        <Route path="/view-items" element={<ViewItems/>} />
      </Routes>
    </Router>
    </div>
)

export default App;
