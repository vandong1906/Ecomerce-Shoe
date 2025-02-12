export const DashBoard = () => {
    return (
       
            <div className="flex">
                <div className="top-0 sticky left-0 z-20 h-screen w-full bg-white px-4 shadow-2xl transition-all duration-300 md:w-[35vw] lg:w-[40vw] lg:px-[35px] xl:max-w-[30vw]">
                    <div className="flex items-center justify-between border-b-2 py-6">
                        <div className="cursor-pointer text-sm font-semibold uppercase hover:underline">Shopping Bag</div>
                        <button type="submit" className="cursor-pointer px-6 hover:opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-3 flex flex-col gap-2">
                        <a href="" className="text-primary flex w-full items-center justify-center bg-gray-200 p-3 font-medium hover:bg-gray-500">View Cart</a>
                        <a href="" className="text-primary flex w-full items-center justify-center bg-gray-200 p-3 font-medium hover:bg-gray-500">View Cart</a>
                    </div>
                </div>
                <div className="p-4 w-full">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            )
}