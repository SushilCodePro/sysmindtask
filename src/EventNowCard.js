const EventNewCard =()=>{
    return(
        <div>
            
            {/* <div className="grid grid-cols-12 gap-4 mt-3"> */}
                <div className="p-2 border rounded-b shadow" >
                    
                    <div className="grid grid-cols-12 gap-1 mt-2 mb-1">
                        <div className="col-span-8 font-bold text-xs">15 min meetings</div>
                        <div className="col-span-2 hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                            </svg>

                        </div>
                        <div className="col-span-2 hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-xs text-justify mt-3">Ready to craft the ultimate welcome message that'll wow your customers? Read on to learn how to effortlessly start nurturing those customer connections.</div>
                    <div className="grid grid-cols-12 gap-1 mt-3 text-xs">
                        <div className="lg:col-span-2 col-span-6 border flex items-center justify-center rounded p-1 hover:cursor-pointer hover:bg-gray-200">Private</div>
                        <div className="lg:col-span-3 col-span-6 border flex items-center justify-center rounded hover:cursor-pointer hover:bg-gray-200">15 min</div>
                        <div className="lg:col-span-5 col-span-8 border flex items-center justify-center rounded p-1 hover:cursor-pointer hover:bg-gray-200">One-On-One</div>
                        <div className="lg:col-span-2 col-span-4 flex items-center justify-end hover:cursor-point">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                            </svg>

                        </div>
                    </div>
                </div>

            {/* </div> */}
           
           
        </div>
    )
}
export default EventNewCard;