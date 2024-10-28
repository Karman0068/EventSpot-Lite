import DefaultPic from '../../../Pictures/default images/General_Default.png';
import SearchBar from './SearchBar';
import {
    useNavigate
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import FlexBox from './FlexBox';

function GridBoxes({ className }) {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const list = [{id:141} , {id:142} , {id:143} , {id:144} , {id:145} , {id:146} , {id:147} , {id:148} , {id:149} , {id:1410} , {id:1411} , {id:1412} , {id:1413} , {id:1414} , {id:1415} , {id:1416} , {id:1417} , {id:1418} , {id:1419} , {id:1420} ]

    useEffect(() => {
        const key = 'LhT3eVzksPMEjqRUJ1MxeTCZdUJvGv4k';
        const fetchEvents = async () => {
            try {
                const response = await fetch(
                    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${key}&keyword=concert&size=50`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }

                const data = await response.json();
                
                setEvents(data._embedded?.events || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const filteredEvents = events.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return (
        <div className={`${className} p-4 w-full relative`}>
                <div className=" animate-pulse grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 grid-flow-row">
                    {list.map((item) => (
                        <div key={item.id} className="text-lg  font-semibold col-span-1 w-full flex flex-col gap-2 text-center justify-center items-center aspect-square">

                            <div className="relative p-1 w-[80%] rounded-xl bg-slate-200 aspect-square"> </div>
                            <div className="w-40 h-6 bg-slate-200 rounded-2xl "> </div>

                        </div>
                    ))}
                </div>
            </div>
    );
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className={`${className} p-4 w-full relative`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 grid-flow-row">
                    {filteredEvents.map((event) => (
                        <div key={event.id} className="text-lg text-black font-semibold col-span-1 w-full flex flex-col text-center justify-center items-center aspect-square">
                            <div className="relative p-1 w-[80%] rounded-xl bg-slate-300 aspect-square">
                                <img className="h-full w-full aspect-square rounded-xl" src={event.images[0].url} alt="Cover Picture" />

                                <FlexBox>
                                    <img className="h-full w-72 aspect-square" src={event.images[0].url ?? DefaultPic} alt="Cover Picture" />
                                    <div className='text-stone-100 font-bold text-3xl overflow-hidden text-wrap'>{event.name}</div>
                                    <div className='text-stone-700 font-semibold text-xl'>&#128197;: {event.dates.start.localDate} {event.dates.start.localTime}
                                        <div className='-mt-2 ml-7 text-base font-normal text-neutral-800'>{event.dates.timezone}</div></div>
                                    <div className='text-stone-700 font-semibold text-xl'>&#128205;: {event._embedded.venues[0].name}</div>
                                </FlexBox>
                            </div>
                            <div className="max-w-full min-w-20">
                                {event.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default GridBoxes;
