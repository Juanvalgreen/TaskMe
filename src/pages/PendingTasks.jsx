import { useState, useEffect,useContext } from 'react';
import {PlusIcon} from '@heroicons/react/24/solid';

import { userContext } from '../context/userContext';

import { getPendingTasks } from '../services/tasks/taskRequests';

import TaskCard from '../Components/TaskCard';
import CreateTaskModal from '../Components/CreateTaskModal';
import DetailTaskModal from '../Components/DetailTaskModal';
import CompleteConfirmationModal from '../Components/CompleteConfirmationModal';
import DeleteTaskModal from '../Components/DeleteTaskModal';



function PendingTask() {

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [openCompleteModal, setOpenCompleteModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const [tasks, setTasks] = useState([]);

  const {loggedUser} = useContext(userContext);

  const updateTasks = ()=>{
    getPendingTasks(loggedUser.uid)
    .then(data => {
      if (data.length != 0) {
        setTasks(Object.entries(data).map(([key, value]) => ({ id: key, ...value })));
      }
    }).catch(error => console.log(error)) 
  }

  useEffect(() => {

    updateTasks();
  }, []);

  const handleExpandCreate = () => {
    setOpenCreateModal(!openCreateModal);
  };

  const handleExpandDetails = (task) => {
    setSelectedTask(task);
    setOpenDetailModal(!openDetailModal);
  };

  const handleExpandComplete = (task) => {
    setSelectedTask(task);
    setOpenCompleteModal(!openCompleteModal);
  };

  const handleExpandDelete = (task) => {
    setSelectedTask(task);
    setOpenDeleteModal(!openDeleteModal);
  };

  console.log(localStorage.getItem('user'));
  
  return (
    <div className='bg-slate-600 w-hv h-full pt-6'>
      <h1 className='text-stone-50 font-medium text-5xl mx-6 mb-6'>Pending Tasks</h1>
      <div className='p-6 mb-6 grid grid-cols-3 gap-y-8 max-[832px]:grid-cols-2 max-[620px]:grid-cols-1'>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} handleDetails={() => handleExpandDetails(task)}  completed={false} handleComplete={() => handleExpandComplete(task)} handleDelete = {() => handleExpandDelete(task)}/>
        ))}
        <div className="m-4 min-h-full min-w-0 max-w-xl max-h-36 rounded-2xl cursor-pointer transform transition duration-100 hover:scale-105 justify-center content-center flex">

          <PlusIcon className="w-24 h-24 text-white self-center"   onClick={handleExpandCreate}/>
        </div>
      </div>

      {openCreateModal ? <CreateTaskModal updateTasks={updateTasks} handleclose={() => handleExpandCreate()}/> : null}
      {openDetailModal ? <DetailTaskModal task={selectedTask} handleclose={() => handleExpandDetails()} updateTasks={updateTasks}/> : null}
      {openCompleteModal ? <CompleteConfirmationModal  updateTasks={updateTasks} task={selectedTask} handleclose={() => handleExpandComplete()}/> : null}
      {openDeleteModal ? <DeleteTaskModal  updateTasks={updateTasks} task={selectedTask} handleclose={() => handleExpandDelete()}/> : null}

      
    </div>
  );
}

export default PendingTask;
