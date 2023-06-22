import { useState } from 'react';
import { createCompletedTask,deletePendingTask } from '../services/tasks/taskRequests';



export default function CompleteConfirmationModal({updateTasks,task, handleclose}) {

    const [timeForm, setTimeForm] = useState(0);


    const handleChange = (e) => {

        setTimeForm(e.target.value);
    };


    const registerAsComplete = () => {

        const pendingId = task.id;

        let dataTask = {
            ...task,
            id: pendingId,
            realTime: timeForm
        };

        deletePendingTask(pendingId)
        .then(() => {
            updateTasks();
            console.log('la tarea fue eliminada de pendientes');
        })
        .catch(error => console.log(error));

        

        createCompletedTask(dataTask)
        .then(data => {
            if( Object.keys(data).length === 0){
                console.log('la tarea No fue asignada como completa');
            }else{
                console.log('la tarea fue asignada como completa');
            }
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
                                <div className='mb-6'>
                                    <h3 className='font-bold text-white text-[18px] leading-7 text-sal-900' >Do you wanna mark this task as complete?</h3>
                                </div>
                                <div className='flex'>
                                    <div className='mb-'>
                                        <h3 className='font-bold text-slate-500 text-[10px] leading-7 text-sal-900' >Estimated time</h3>
                                        <p className="font-bold text-white text-[14px] leading-7 text-sal-900" >{task.estimedTime} (hours)</p>
                                    </div>
                                    <div className='mb-2 pl-3 ml-2 border-l justify-center flex-col '>
                                        <h3 className='font-bold text-slate-500 text-[10px] leading-7 text-sal-900' >How long did it really take?</h3>
                                        <div >
                                            <input
                                            onChange={handleChange}
                                            type="number"
                                            step="0.5"
                                            min="0"
                                            name="RealTime"
                                            id="RealTime"
                                            className="bg-slate-400 block w-16 rounded-md  py-1.5 px-2 text-white shadow-sm  placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>


            
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b-md bg-gray-900">
                                <button
                                className="rounded-md bg-red-500 text-white background-transparent font-bold uppercase px-2 py-3 me-4 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleclose}  
                                >
                                Close
                                </button>
                                <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={registerAsComplete}
                              >
                                Mark as complete
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
