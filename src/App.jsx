//import { useState } from 'react';
import {Route, Routes ,BrowserRouter} from "react-router-dom";

import ProviderComponent from './context/ProviderComponent'


import SideBar from './Components/SideBar';
import PendingTask from './pages/PendingTasks';
import CompletedTasks from './pages/completedTasks';
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

function App() {

  return (
    <ProviderComponent>
      <BrowserRouter>
        <div className='grid grid-cols-4 '>
          <div className='col-span-1 mx-0'>
            <SideBar/>
          </div>
          <div className='col-span-3 h-full max-[570px]:col-span-4'>
            <Routes>
              <Route path="/Pending" element={<PendingTask />} />
              <Route path="/Completed" element={<CompletedTasks />} />
              <Route path="/" element={<LogIn />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ProviderComponent>
  )
}

export default App;
