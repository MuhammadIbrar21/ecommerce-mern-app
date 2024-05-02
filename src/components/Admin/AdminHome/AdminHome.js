
const AdminHome = () => {
    return (
        <div className="my-8 w-[94%] m-auto">
            <div className="w-full flex justify-between items-center">
                <article className="w-[48%] flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6 shadow">
                    <div className="flex items-center gap-4">
                        <span className="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </span>

                        <div>
                            <p className="text-sm text-gray-500">Profit</p>

                            <p className="text-2xl font-medium text-gray-900">Rs.2400.94</p>
                        </div>
                    </div>

                    <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                        </svg>

                        <span className="text-xs font-medium"> 67.81% </span>
                    </div>
                </article>

                <article class="w-[48%] flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6 shadow">
                    <span class="rounded-full bg-blue-100 p-3 text-blue-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    </span>

                    <div>
                        <p class="text-2xl font-medium text-gray-900">Rs.10,240.94</p>

                        <p class="text-sm text-gray-500">Total Sales</p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default AdminHome
