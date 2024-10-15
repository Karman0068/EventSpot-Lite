
import { useState } from 'react';
import AddNewComponent from '../GeneralComponents/AddNewComponent';
import Edit_DeleteComponent from '../GeneralComponents/Edit_DeleteComponent';
function DottedPathBlock() {

    const [isEditable, setisEditable] = useState(true);

    const RoadTraveler = { symbol: '\u{1F6E7}', rotateDeg: '180' }

    const textBox = [
        { id: 1, name: 'Project1', text: 'Text here' },
        { id: 2, name: 'Project2', text: 'Text here' },
        { id: 3, name: 'Project3', text: 'Text here' },
        { id: 4, name: 'Project4', text: 'Text here' },
        { id: 5, name: 'Project5', text: 'Text here' },
        { id: 6, name: 'Project6', text: 'Text here' },
        { id: 7, name: 'Project7', text: 'Text here' },
        { id: 8, name: 'Project8', text: 'Text here' },
        { id: 9, name: 'Project9', text: 'Text here' },
    ];

    const renderComponent = (item) => {
        if (item.id % 2 === 0) {
            return (
                <div>
                    <div className='px-2 w-fit h-fit rounded-full border-2 border-red-400 bg-indigo-200 hidden md:block  relative top-[3rem] left-[50%] ml-[0.875rem] z-10 text-sm text-neutral-500'>{item.id}</div>
                    <div className='md:w-[50%] md:border-l-[5rem] border-y-4 relative md:left-[50%] border-transparent'>
                        <div className="p-2 h-fit w-full border-2 border-blue-400 bg-blue-400 rounded-xl flex items-center text-xl text-white font-medium relative">
                            <div className="w-full">
                                <div>{item.name}</div> {item.text}
                            </div>
                            {(isEditable &&
                                <Edit_DeleteComponent>
                                    <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                                    <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                                </Edit_DeleteComponent>
                            )}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className='px-2 w-fit h-fit rounded-full border-2 border-emerald-400 bg-gray-300 hidden md:block  relative top-[3rem] left-[50%] ml-[0.875rem] z-10 text-sm text-neutral-500'>{item.id}</div>
                    <div className='md:w-[50%] md:border-r-[1.5rem] border-y-4 border-transparent'>
                        <div className="p-2 h-fit w-full border-2 border-blue-400 rounded-xl flex items-center text-xl text-blue-400 font-medium relative">
                            <div className="w-full">
                                <div>{item.name}</div> {item.text}
                            </div>
                            {(isEditable &&
                                <Edit_DeleteComponent>
                                    <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                                    <div className='flex justify-center '><input className=' p-1 max-w-full text-center text-2xl rounded-xl outline-blue-400' /></div>
                                </Edit_DeleteComponent>
                            )}
                        </div>
                    </div>
                </div>
            );
        }
    };


    return (

        <div
            className=" relative
                p-2  py-10 w-full 
                ">


            {textBox.map(renderComponent)}


            <div className=" w-14 h-full hidden items-center justify-center md:flex md:flex-col absolute top-0 left-[50%] ">

                <div
                    className="sticky -mb-4 z-20 text-5xl text-rose-500 top-[30%] hover:top-[27%] hover:-mt-6  hover:-ml-6 hover:text-7xl hover:cursor-grab transition-all duration-200 "
                    style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)', rotate: `${RoadTraveler.rotateDeg}deg` }}
                    onMouseEnter={(e) => { e.target.style.textShadow = '8px 8px 8px rgba(0, 0, 0, 0.5)' }}
                    onMouseLeave={(e) => { e.target.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>
                    {RoadTraveler.symbol}
                    
                </div>

                <div className=" px-4 py-1 rounded-2xl z-10 box-border border-4 border-y-cyan-300 border-x-slate-400" > </div>

                <div className=" h-full -m-1 w-2   border-4 border-dashed border-yellow-300 ">

                </div>

                <div className="px-4 py-1 rounded-2xl z-10 box-border border-4 border-y-cyan-300 border-x-slate-400" > </div>

                {(isEditable &&
                    <AddNewComponent>
                        <input className='text-xl' />
                        <input className='text-xl' />
                    </AddNewComponent>
                )}
            </div>





        </div>

    );
}

export default DottedPathBlock;