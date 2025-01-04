const EventUpCard = () => {
    return (
        <div className=" w-full grid grid-cols-12 border p-2 shadow rounded-r">
            <div className=" col-span-12 md:col-span-6 flex gap-4">
                <div className="text-xs p-2">
                    <p>Mon, Sep 9, 2024</p>
                    <p>10:00 AM</p>
                </div>
                <div className="text-xs p-2">
                    <h1 className="font-bold">My Events type</h1>
                    <p className="text-sm">Create diffrent category for meetings</p>
                </div>
            </div>
            <div className=" col-span-12 md:col-span-6 flex md:justify-end text-sm gap-2">
                <div className=" flex p-1 gap-1 items-center">
                    <p className="border rounded-full p-1">SG</p>
                    <p>Sushil Gupta</p>
                </div>
                <div className="flex p-1 gap-1 items-center ">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </div>
                    <p>30 min</p>
                </div>

                <div className="flex p-1 gap-1 items-center">
                    <div className="boder p-1 col-span-3 border rounded flex justify-center items-center gap-1 hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        <div className="text-xs  text-gray-500">CANCEL EVENT</div>
                    </div>
                </div>
                <div className=" flex p-1 gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>

                </div>
            </div>
        </div>
    )
}
export default EventUpCard;