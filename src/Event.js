import EventUpCard from "./EventUpCard";
import EventNowCard from "./EventNowCard";
import {useNavigate} from 'react-router-dom'
const Event = ({ data }) => {
    const navigate=useNavigate();
    const handleCreate=()=>{
        navigate('/eventform')
    }
    return (
        <div className="">
            <h1 className="text-lg font-bold">Welcome Sushil Gupta</h1>
            <div className="grid grid-cols-12 gap-2 mt-2">
                <div className="lg:col-span-8 col-span-12">
                    <h1 className="text-sm">Effortlessly Schedule Public and Private Events, Share Instantly</h1>
                </div>
                <div className="grid grid-cols-12 lg:col-span-4 col-span-12 gap-1 ">
                    <div className="bg-red-500 p-1 col-span-7 rounded flex justify-center items-center gap-1 hover:cursor-pointer" onClick={handleCreate}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className="text-xs text-white">CREATE EVENTS TYPE</div>
                    </div>
                    <div className="boder p-1 col-span-3 border rounded flex justify-center items-center gap-1 hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        <div className="text-xs  text-gray-500">SHARE</div>
                    </div>

                    <div className="boder p-1 col-span-2 border rounded flex justify-center items-center gap-1 hover:cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <h1 className="font-bold">My Events type</h1>
                <div className="text-xs border flex justify-center items-center p-1 rounded hover:cursor-pointer">VIEW ALL</div>
            </div>
            <p className="text-sm">Create diffrent category for meetings</p>
            <div className="grid grid-cols-12 gap-4 mt-3">
                {data.map((item, index) => (
                    <div className=" md:col-span-4 col-span-12" key={index}>
                        <div className={`h-2   rounded-t ${index%2==0? 'bg-blue-400': 'bg-[#FFA600]'}`}></div>
                        <EventNowCard item={item} />
                    </div>
                ))}
                {/* <div className=" md:col-span-4 col-span-12">
                    <div className="h-2 bg-blue-400 rounded-t"></div>
                    <EventNowCard />
                </div>
                <div className="md:col-span-4 col-span-12">
                    <div className="h-2 bg-purple-400 rounded-t"></div>
                    <EventNowCard />
                </div>
                <div className="md:col-span-4 col-span-12">
                    <div className="h-2 bg-[#FFA600] rounded-t"></div>
                    <EventNowCard />
                </div> */}
            </div>
            <div className="flex justify-between mt-6">
                <h1 className="font-bold">Upcoming Events</h1>
                <div className="text-xs border flex justify-center items-center p-1 rounded hover:cursor-pointer">VIEW ALL</div>
            </div>
            <p className="text-sm mb-3">Create diffrent category for meetings</p>
            <div className="flex mb-3">
                <div className="w-2 rounded-l bg-[#FFA600]"></div>
                <EventUpCard />
            </div>
            <div className="flex mb-3">
                <div className="w-2 rounded-l bg-blue-400"></div>
                <EventUpCard />
            </div>
            <div className="flex mb-3">
                <div className="w-2 rounded-l bg-purple-400"></div>
                <EventUpCard />
            </div>


        </div>
    )
}
export default Event;