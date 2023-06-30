import { useState, useContext } from 'react';
import { editTask } from '../services/tasks/taskRequests';

import { userContext } from '../context/userContext';

import { PencilSquareIcon } from '@heroicons/react/24/solid';



export default function DetailTaskModal({task, handleclose, updateTasks}) {

    const {loggedUser} = useContext(userContext);
    
    const [editActive,setEditActive] = useState(false);

    const [formData, setFormData] = useState(task);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        const newValue = type === 'checkbox' ? checked : value;
      
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: newValue
        }));
    };

    const EditTask = () => {


        editTask(formData,loggedUser.uid)
        .then(data => {
            if( Object.keys(data).length === 0){
                console.log('la tarea No fue creada');
            }else{
                updateTasks();
                console.log('la tarea creada');
            }
        })
        .catch(error => console.log(error));
        
        handleclose();
    };



    




    const handleEdit = () => {

        setEditActive(!editActive);

    }

    
    return (
      <>
          <div>
                <div
                className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 1 focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl " >
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                            {/*header*/}
                            <div className=" flex justify-between p-5 pb-2 border-b border-solid border-white rounded-t-md  bg-gray-900">
                                <div>

                                    {editActive ?
                                        <div className="mt-2">
                                            <input
                                            onChange={handleChange}
                                            type="text"
                                            name="title"
                                            id="title"
                                            placeholder={task.title}
                                            autoComplete="given-name"
                                            className="bg-slate-400 block w-full rounded-md border-0 p-1 text-white shadow-sm placeholder:text-black focus:ring-emerald-500 sm:text-sm sm:leading-6"
                                            />
                                        </div> :
                                        <h2 className="font-bold text-white text-[22px] leading-7 text-sal-900">{task.title}</h2> }
                                    <h4 className='font-bold text-slate-500 text-[10px] leading-7 text-sal-900'>{task.category}</h4>
                                </div>
                                <div>
                                    {editActive ? null : <PencilSquareIcon onClick={handleEdit} className='w-6 h-6 ml-6 text-neutral-300 cursor-pointer transform transition duration-300 hover:text-lime-600 hover:scale-105 justify-center'/>}
                                </div>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto bg-gray-900">
                                <div className='mb-4'>
                                    <h3 className='font-bold text-slate-500 text-[10px] leading-7 text-sal-900' >Description</h3>
                                    {editActive ?
                                        <div className="mt-2">
                                            <textarea
                                            onChange={handleChange}
                                            name="description"
                                            id="description"
                                            placeholder={task.description}
                                            autoComplete="given-name"
                                            className="bg-slate-400 block h-24 w-full rounded-md border-0 p-1 mr-12 text-white shadow-sm placeholder:text-black focus:ring-emerald-500 sm:text-sm sm:leading-6"
                                            />
                                        </div> : <p className="font-bold text-white text-[14px] leading-7 text-sal-900" >{task.description}</p>}
                                </div>
                                <div className='mb-4'>
                                    <h3 className='font-bold text-slate-500 text-[10px] leading-7 text-sal-900' >Creation date</h3>
                                    <p className="font-bold text-white text-[14px] leading-7 text-sal-900" >{task.date}</p>
                                </div>
                                <div className=''>
                                    <div className='mb-4'>
                                        <h3 className='font-bold text-slate-500 text-[10px] leading-7 text-sal-900' >Estimated time</h3>
                                        {editActive ?
                                            <div className="mt-2">
                                                <input
                                                onChange={handleChange}
                                                type="number"
                                                placeholder={task.estimedTime}
                                                step="0.5"
                                                min="0"
                                                name="estimedTime"
                                                id="estimedTime"
                                                className="bg-slate-400 block w-16 rounded-md border-0 p-1 text-white shadow-sm placeholder:text-black focus:ring-emerald-500 sm:text-sm sm:leading-6"
                                                />
                                            </div> :<p className="font-bold text-white text-[14px] leading-7 text-sal-900" >{task.estimedTime} (hours)</p>}
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-bold text-slate-500 text-[10px] leading-7 text-sal-900' >notification</h3>
                                        {editActive ?
                                            <div className="flex h-6 items-center mt-2 ">
                                                <input
                                                onChange={handleChange}
                                                id="alarm"
                                                name="alarm"
                                                type="checkbox"
                                                data-val={true}
                                                value={true}
                                                defaultChecked={task.alarm ? true : false}
                                                className=" bg-slate-400 h-5 w-5 rounded-full self-center text-indigo-600 focus:ring-white"
                                                />
                                            </div> :<p className="font-bold text-white text-[14px] leading-7 text-sal-900" >{task.alarm ? 'active' : 'inactive'}</p>}
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
                                {editActive ? 'Cancel' : 'Close'}
                                </button>
                                {editActive ?                                 
                                    <button
                                    className="rounded-md bg-emerald-500 text-white background-transparent font-bold uppercase px-2 py-3 me-4 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={EditTask}  
                                    >
                                    Save Changes
                                    </button>
                                    : null}
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
          </div>
      </>
    );
}
