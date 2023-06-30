import { useContext } from 'react';
import {deletePendingTask } from '../services/tasks/taskRequests';


import { userContext } from '../context/userContext';



export default function DeleteTaskModal({updateTasks,task, handleclose}) {


    const {loggedUser} = useContext(userContext);


    const DeleteTask = () => {

        deletePendingTask(task.id,loggedUser.uid)
        .then(() => {
            updateTasks();
            console.log('la tarea fue eliminada de pendientes');
        })
        .catch(error => console.log(error));

        handleclose();

    }







    
    return (
      <>
          <div>
                <div
                className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 1 focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-white rounded-t-md  bg-gray-900">
                                <h2 className="font-bold text-white text-[22px] leading-7 text-sal-900">{task.title}</h2>
                                <h4 className='ml-32 font-bold text-slate-500 text-[10px] leading-7 text-sal-900'>{task.category}</h4>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto bg-gray-900">
                                <div className=''>
                                    <h3 className='font-bold text-white text-[18px] leading-7 text-sal-900' >Do you wanna delete this task?</h3>
                                </div>    
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b-md bg-gray-900">
                                <button
                                className="rounded-md bg-emerald-500 text-white background-transparent font-bold uppercase px-2 py-3 me-4 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleclose}  
                                >
                                Close
                                </button>
                                <button
                                className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={DeleteTask}
                              >
                                Delete
                              </button>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
          </div>
      </>
    );
}
