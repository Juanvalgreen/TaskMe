import { useState } from 'react';
import {CheckCircleIcon} from '@heroicons/react/24/solid';
import {TrashIcon} from '@heroicons/react/24/solid';


function TaskCard({task, handleDetails, handleComplete, handleDelete ,completed}){

    const [completedIcon, setCompletedIcon] = useState(false);
    const [trashIcon, setTrashIcon] = useState(false);
    const bgColor = ["bg-cyan-300","bg-teal-500", "bg-emerald-400"];

    const handleIconShow = () => {

        if(!completed){

            setTrashIcon(!trashIcon);
            setCompletedIcon(!completedIcon);

        }
    }

    const handleCompleteClick = (e) => {
        e.stopPropagation(); // Evitar propagación del evento
        handleComplete();
    }

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        handleDelete();
    }

    const colorRandom = () => {
        const index = Math.floor(Math.random() * 3);
        return bgColor[index];
    }


    return (
        <div>
        <div onClick={handleDetails} className={`m-4 min-h-full min-w-0 max-w-xl max-h-36 overflow-hidden rounded-2xl shadow ${colorRandom()} cursor-pointer transform transition duration-300 hover:scale-105 justify-center`}  onMouseEnter={handleIconShow} onMouseLeave={handleIconShow}>
        {completedIcon ? <CheckCircleIcon onClick={handleCompleteClick} className='fixed z-50 w-9 h-9 text-neutral-300 cursor-pointer transform transition duration-300 hover:text-lime-600 hover:scale-105 justify-center'/> : null}
        {trashIcon ? <TrashIcon onClick={handleDeleteClick} className='fixed right-1 top-1 z-50 w-9 h-9 text-neutral-300 cursor-pointer transform transition duration-300 hover:text-red-600 hover:scale-105 justify-center'/> : null}
                <div className="px-6 py-4 h-full flex-col align-middle">
                    <h5 className={`text-white mb-2 text-base tracking-normal capitalize truncate text-center font-bold ${!completed ? null : 'line-through decoration-black' }`}>
                        {task.title}
                    </h5>
                    <p className=" mt-3 text-center align-middle"> {task.description.length < 35 ? task.description : task.description.substring(0,35) +"..."}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;