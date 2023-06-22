import { useState } from 'react';
import {CheckCircleIcon} from '@heroicons/react/24/solid'


function TaskCard({task, handleDetails, handleComplete,completed}){

    const [completedIcon, setCompletedIcon]=useState(false);
    const bgColor = ["bg-cyan-300","bg-teal-500", "bg-emerald-400"];

    const handleIconShow = () => {

        if(!completed){

            setCompletedIcon(!completedIcon);
        }
    }

    const handleCompleteClick = (e) => {
        e.stopPropagation(); // Evitar propagación del evento
        handleComplete();
      }

    const colorRandom = () => {
        const index = Math.floor(Math.random() * 3);
        return bgColor[index];
    }


    return (
        <div>
        <div onClick={handleDetails} className={`m-4 min-h-full min-w-0 max-w-xl max-h-36 overflow-hidden rounded-2xl shadow ${colorRandom()} cursor-pointer transform transition duration-300 hover:scale-105 justify-center`}  onMouseEnter={handleIconShow} onMouseLeave={handleIconShow}>
        {completedIcon? <CheckCircleIcon onClick={handleCompleteClick} className='fixed z-50 w-9 h-9 text-neutral-300 cursor-pointer transform transition duration-300 hover:text-lime-600 hover:scale-105 justify-center'/> : null}
                <div className="px-6 py-4 h-full flex-col align-middle">
                    <h5 className="text-white mb-2 text-base tracking-normal capitalize truncate text-center font-bold">
                        {task.title}
                    </h5>
                    <p className=" mt-3 text-center align-middle"> {task.description.length < 35 ? task.description : task.description.substring(0,35) +"..."}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;