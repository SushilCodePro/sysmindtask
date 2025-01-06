import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EventFormSetup from "./EventFormSetup";
const EventForm = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);

    const handleEventSetup = () => {
        setActive(true);
        // navigate("/event-setup");
    }
    return (
        <div className="p-2">
            <div className="flex justify-between text-xs ">
                <div className="flex items-center font-bold hover:cursor-pointer" onClick={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                    <span>Back</span>
                </div>
                <div className="p-2 bg-red-500 text-white rounded-sm hover:cursor-pointer">CREATE EVENT</div>
            </div>
            <div className="grid grid-cols-12 gap-2">
                <div className="sm:col-span-3">
                    <div className={`p-1 border flex items-center gap-1 hover:cursor-pointer hover:bg-gray-100 ${active? "bg-gray-100":""}`} onClick={handleEventSetup}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        <div>
                            <p className="text-xs font-bold">Evene Setup</p>
                            <p className="text-xs">30 Min, Teams</p>
                        </div>
                        <div className={`ml-auto ${active ? "block" : "hidden"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="sm:col-span-9 border">
                    {active && <EventFormSetup />}
                </div>
            </div>
        </div>
    )
}
export default EventForm;