
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Fun from './pages/Fun';
import MainPage from './pages/MainPage';
import Report from './pages/Report';
import Talk from './pages/Talk';
import User from './pages/User';
import Setting from './pages/Setting'


function App() {
  return (
    <div className="App">
     
<Header></Header>
<div className='pages'>
<Routes>
  <Route path='/' exact element={<MainPage/>}/>
  <Route path='/User-Setting' exact element={<User/>}/>
  <Route path='/Talk-Rooms' exact element={<Talk/>}/>
  <Route path='/Report' exact element={<Report/>}/>
  <Route path='/Fun-Rooms' exact element={<Fun/>}/>
  <Route path='/Setting' exact element={<Setting/>}/>
</Routes>
</div>
    </div>
  );
}

export default App;
