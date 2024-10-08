import { useState } from 'react';
import AddNewComponent from '../GeneralComponents/AddNewComponent';
import Edit_DeleteComponent from '../GeneralComponents/Edit_DeleteComponent';

function ProgressBarBlock() {

    const [isEditable, setisEditable] = useState(true);

    const progress = [
        { id: 1, name: 'Skill-1', width: '70%' },
        { id: 2, name: 'Skill-2', width: '40%' },
        { id: 3, name: 'Skill-3', width: '40%' },
        { id: 4, name: 'Skill-4', width: '80%' },
        { id: 5, name: 'Skill-5gchgchchchS', width: '100%' },
        { id: 6, name: 'Skill-6', width: '20%' },
        { id: 7, name: 'Skill-7', width: '40%' },
        { id: 8, name: 'Skill-8', width: '40%' },
        { id: 9, name: 'Skill-9', width: '40%' },
    ];

    return (
        <div className="p-2 py-10 w-full flex flex-wrap gap-20 justify-start items-center relative">

            {progress.map((item) => (
                <div
                    key={item.id}
                    className="h-10 w-52 p-1 rounded-xl bg-gray-300 relative" // Set relative positioning
                >
                    <div
                        className="bg-red-400 h-full rounded-xl "
                        style={{ width: item.width }}
                    >
                        <span
                            className="text-xl text-stone-600 absolute ml-[48.5%] translate-x-[-50%] text-nowrap" //Set absolute positioning

                        >
                            {item.name}
                        </span>
                    </div>
                    {(isEditable &&
                        <Edit_DeleteComponent>
                            <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                            <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                        </Edit_DeleteComponent>
                    )}
                </div>
            ))}

            {(isEditable &&
                <AddNewComponent>
                    <input className='text-xl' />
                    <input className='text-xl' />
                </AddNewComponent>
            )}
        </div>
    );
}

export default ProgressBarBlock;
