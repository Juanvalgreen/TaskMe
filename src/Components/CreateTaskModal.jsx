import { useState } from 'react';
import { createTask } from '../services/tasks/taskRequests';



export default function CreateTaskModal({updateTasks, handleclose}) {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        alarm: false,
        estimedTime: 0
    });

    const registerTask = () => {
        const date = new Date();


        let taskData ={
            ...formData,
            date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,

        }

        createTask(taskData)
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






    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        const newValue = type === 'checkbox' ? checked : value;
      
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: newValue
        }));
    };
    



    return (
      <>
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 1 focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-white rounded-t-md  bg-gray-900">
                    <h2 className="font-bold text-white text-[18px] ml-3 leading-7 text-sal-900">New Task</h2>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto bg-gray-900">
                    <div className="pb-6">

            
                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                        <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                            *Title
                        </label>
                        <div className="mt-2">
                            <input
                            onChange={handleChange}
                            type="text"
                            name="title"
                            id="title"
                            autoComplete="given-name"
                            className="bg-slate-400 block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

            
                        <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                            *Description
                        </label>
                        <div className="mt-2">
                            <textarea
                            onChange={handleChange}
                            id="description"
                            name="description"
                            autoComplete="country-name"
                            className="bg-slate-400 block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>
            
                        <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
                            Category
                        </label>
                        <div className="mt-2">
                            <select
                            onChange={handleChange}
                            id="category"
                            name="category"
                            className=" bg-slate-400 block w-full rounded-md border-0 py-1.5 text-white shadow-sm  focus:ring-emerald-500 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                            <option>Select one</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                            </select>
                        </div>
                        </div>
                        
                    
                        <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="estimedTime" className="block text-sm font-medium text-white">
                        Estimated time 
                        <span className="text-sm font-medium text-gray-400"> (In hours)</span>
                        </label>
                        <div className="mt-2">
                            <input
                            onChange={handleChange}
                            type="number"
                            step="0.5"
                            min="0"
                            name="estimedTime"
                            id="estimedTime"
                            className="bg-slate-400 block w-16 rounded-md  py-1.5 px-2  text-white shadow-sm  placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>
                        <div>
                            <div className="text-sm leading-6 sm:col-span-3">
                                <label htmlFor="comments" className="font-medium text-white">
                                Notification
                                </label>
                            </div>

                            <div className="flex h-6 items-center mt-2 ">
                                <input
                                onChange={handleChange}
                                id="alarm"
                                name="alarm"
                                type="checkbox"
                                data-val={true}
                                value={true}
                                className=" bg-slate-400 h-5 w-5 rounded-full self-center text-indigo-600 focus:ring-white"
                                />
                            </div>
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
                      onClick={registerTask}

                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
      </>
    );
}