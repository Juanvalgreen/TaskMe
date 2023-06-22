import { useState } from 'react';



export default function DetailTaskModal({task, handleclose}) {

    
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
                                <div className='mb-4'>
                                    <h3 className='font-bold text-slate-500 text-[10px] leading-7 text-sal-900' >Description</h3>
                                    <p className="font-bold text-white text-[14px] leading-7 text-sal-900" >{task.description}</p>
                                </div>
                                <div className='mb-4'>
                                    <h3 className='font-bold text-slate-500 text-[10px] leading-7 text-sal-900' >Creation date</h3>
                                    <p className="font-bold text-white text-[14px] leading-7 text-sal-900" >{task.date}</p>
                                </div>
                                <div className=''>
                                    <div className='mb-4'>
                                        <h3 className='font-bold text-slate-500 text-[10px] leading-7 text-sal-900' >Estimated time</h3>
                                        <p className="font-bold text-white text-[14px] leading-7 text-sal-900" >{task.estimedTime} (hours)</p>
                                    </div>
                                    <div className='mb-2'>
                                        <h3 className='font-bold text-slate-500 text-[10px] leading-7 text-sal-900' >notification</h3>
                                        <p className="font-bold text-white text-[14px] leading-7 text-sal-900" >{task.alarm ? 'active' : 'inactive'}</p>
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
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
          </div>
      </>
    );
}
