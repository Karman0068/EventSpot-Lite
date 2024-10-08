import DefaultPic from '../../../Pictures/default images/General_Default.png';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import { useState } from 'react';
import AddNewComponent from "./AddNewComponent";
import Edit_DeleteComponent from '../../Components/GeneralComponents/Edit_DeleteComponent';

function GridBoxes({ className }) {
    const [isEditable, setisEditable] = useState(false);
    const [isLikesVisible, setIsLikesVisible] = useState(true);
    const [isCommentsVisible, setIsCommentsVisible] = useState(true);
    const navigate = useNavigate();

    const list = [
        { id: 1, name: 'Project1', likes: '0', comments: '2' },
        { id: 2, name: 'Project2', likes: '0', comments: '2' },
        { id: 3, name: 'Project3', likes: '0', comments: '2' },
        { id: 4, name: 'Project4', likes: '0', comments: '2' },
        { id: 5, name: 'Project5', likes: '0', comments: '2' },
        { id: 6, name: 'Project6', likes: '0', comments: '2' },
        { id: 7, name: 'Project7', likes: '0', comments: '2' },
        { id: 8, name: 'Project8', likes: '0', comments: '2' },
        { id: 9, name: 'Project9', likes: '0', comments: '2' },
    ];

    return (
        <div className={`${className} p-4 w-full relative`}>
            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 grid-flow-row`}>
                {list.map((item) => (
                    <div key={item.id} className="text-lg text-black font-semibold col-span-1 w-full flex flex-col text-center justify-center items-center aspect-square">

                        <div className=' relative p-1 w-[80%] rounded-xl bg-slate-300 aspect-square'>
                            <Link to='/portfolio' className="w-full ">

                                <img className="h-full w-full" src={DefaultPic} alt="Cover Picture" />
                            </Link>
                            {(isEditable &&
                                <Edit_DeleteComponent>
                                    <div className="p-1 w-60 bg-slate-300  relative aspect-square">
                                        <img className="h-full w-full opacity-65" src={DefaultPic} alt="Cover Picture" />
                                        <button className='absolute text-base font-normal p-1 rounded-xl text-white bg-neutral-700 opacity-70 top-[50%] left-[4.5rem]'>Change Image</button>
                                    </div>
                                    <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                                </Edit_DeleteComponent>
                            )}
                            <div className=' opacity-60 p-1 text-3xl absolute flex gap-1 bottom-0 right-0 '>

                                {isLikesVisible && (
                                    <button className=' rounded-xl text-white text-4xl leading-8 px-[0.4rem] bg-neutral-600  '> &#9825; <span className='text-2xl'>{item.likes}</span> </button>
                                )}

                                {isCommentsVisible && (
                                    <button className=' rounded-xl text-white px-1 bg-neutral-600 '> &#128490; <span className='text-2xl'>{item.comments}</span> </button>
                                )}

                            </div>
                        </div>

                        <div className="max-w-full min-w-20" onClick={() => navigate(`/portfolio/${item.id}`)}>
                            {item.name}
                        </div>
                    </div>
                ))}

                {(isEditable && <div className="col-span-1 w-full flex flex-col text-center justify-center items-center aspect-square">
                    <div
                        className="w-[80%] bg-slate-300 bg-opacity-40 rounded-3xl flex text-center justify-center items-center aspect-square">
                        <AddNewComponent>
                            <div className="p-1 w-60 bg-slate-300  relative aspect-square">
                                <img className="h-full w-full opacity-65" src={DefaultPic} alt="Cover Picture" />
                                <button className='absolute text-base font-normal p-1 rounded-xl text-white bg-neutral-700 opacity-70 top-[50%] left-[4.5rem]'>Change Image</button>
                            </div>
                            <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                        </AddNewComponent>
                    </div>
                    <div className="text-white text-lg">white text</div> {/*to align it with other boxes */}
                </div>)}
            </div>


        </div>
    );
}

export default GridBoxes;
