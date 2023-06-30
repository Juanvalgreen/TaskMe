import { useState, useEffect, useContext } from 'react';

import { userContext } from '../context/userContext';

import { getCompletedTasks } from '../services/tasks/taskRequests';

import TaskCard from '../Components/TaskCard';
import DetailTaskModal from '../Components/DetailTaskModal';



function CompletedTasks() {

  const {loggedUser} = useContext(userContext);

  const [completedTasks, setCompletedTasks] = useState([]);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    getCompletedTasks(loggedUser.uid)
    .then(data => {

      if (data.length != 0) {
        setCompletedTasks(Object.entries(data).map(([key, value]) => ({ id: key, ...value })));
      }
    }).catch(error => console.log(error))  
    
  }, []);

  const handleExpandDetails = (task) => {
    setSelectedTask(task);
    setOpenDetailModal(!openDetailModal);
  };


  return (
    <div className='bg-slate-600 w-hv h-full pt-6'>
      <h1 className='text-stone-50 font-medium text-5xl mx-6 mb-6'>Completed Tasks</h1>
      <div className='p-6 mb-6 grid grid-cols-3 gap-y-8 max-[832px]:grid-cols-2 max-[620px]:grid-cols-1'>
        {completedTasks.map((task) => (
          <TaskCard key={task.id} task={task} completed={true} handleDetails={() => handleExpandDetails(task)}/>
        ))}
      </div>
      {openDetailModal ? <DetailTaskModal task={selectedTask} handleclose={() => handleExpandDetails()}/> : null}
    </div>
  );
}

export default CompletedTasks;
