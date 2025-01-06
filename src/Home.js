import { useState } from "react";
import {useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [eventOne, setEventOne] = useState(false);
    const [availability, setAvailability] = useState(false);
    const [integrations, setIntegrations] = useState(false);
    const [bookings, setBookings] = useState(false);
    const handleEvents = () => {
        setEventOne(true);
        setAvailability(false);
        setIntegrations(false);
        setBookings(false);

        navigate("/event");
    }
    const handleAvailability = () => {
        setAvailability(true);
        setBookings(false);
        setEventOne (false);
        setIntegrations(false);

        navigate("/availability");
    }
    const handleIntegrations = () => {
        setIntegrations(true);
        setAvailability(false);
        setBookings(false);
        setEventOne(false);
        
        navigate("/integration");
    }
    const handleBookings = () => {
        setBookings(true);
        setIntegrations(false);
        setAvailability(false);
        setEventOne(false);
        
        navigate("/booking");
    }
    const backHomePage=()=>{
        setBookings(false);
        setIntegrations(false);
        setAvailability(false);
        setEventOne(false);
        
        navigate("/"); 
    }
    return (
            <div className="">
                <div className="flex items-center gap-2 hover:cursor-pointer" onClick={backHomePage}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    <p className="">Sushil gupta</p>
                </div>

                <ul className="mt-6 space-y-1">
                    <li className={`flex items-center gap-2 p-2 border hover:cursor-pointer hover:bg-gray-200 ${eventOne ? "bg-gray-200" : ""} rounded`}
                    onClick={handleEvents}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        <p className="">Events Types</p>
                    </li>
                    <li className={`flex items-center gap-2 p-2 border hover:cursor-pointer hover:bg-gray-200 ${bookings ? "bg-gray-200" : ""} rounded`}
                        onClick={handleBookings}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        <p className="">Bookings</p>
                    </li>
                    <li className={`flex items-center gap-2 p-2 border hover:cursor-pointer hover:bg-gray-200 ${availability? "bg-gray-200" : ""} rounded`}
                    onClick={handleAvailability}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        <p className="">Availability</p>
                    </li>
                    <li className={`flex items-center gap-2 p-2 border hover:cursor-pointer hover:bg-gray-200 ${integrations ? "bg-gray-200" : ""} rounded`}
                    onClick={handleIntegrations}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        <p className="">Integrations</p>
                    </li>
                </ul>
            </div>   
    );
}

export default Home;