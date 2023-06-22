//import { useState } from 'react';
import {Route, Routes ,BrowserRouter} from "react-router-dom";


import SideBar from './Components/SideBar';
import PendingTask from './pages/PendingTasks';
import CompletedTasks from './pages/completedTasks';

function App() {

  return (
    <BrowserRouter>
      <div className='grid grid-cols-4 '>
        <div className='col-span-1 mx-0'>
          <SideBar/>
        </div>
        <div className='col-span-3 h-full'>
          <Routes>
            <Route path="/" element={<PendingTask />} />
            <Route path="/completed" element={<CompletedTasks />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
