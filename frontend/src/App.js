import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Layout from './Assets/pages/Layout';
import LoginLayout from './Assets/pages/LoginLayout';
import Login from './Assets/pages/Login';
import SignUp from './Assets/pages/SignUp';

import Dashboard from './Assets/pages/Dashboard';
import StockList from './Assets/pages/StockList';
import Test from './Assets/pages/Test';
//chakra UI

function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes>
              <Route element={<LoginLayout/>}>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/Signup" element={<SignUp/>}></Route>
              </Route>

              <Route element={<Layout/>}>                
                <Route path='/home' element={<Dashboard/>}/>
                <Route path='/list' element={<StockList/>}/>
                <Route path='/test' element={<Test/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
