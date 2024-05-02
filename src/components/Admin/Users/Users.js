import axios from "axios"
import { useEffect, useState } from "react";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadData() {
            const res = await axios.get('/admin/users');
            setUsers(res.data)
        }
        loadData();
    }, [])

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead class="ltr:text-left rtl:text-right">
                        <tr>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">#</th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Name</th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Email</th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Role</th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Password</th>
                            <th class="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        {
                            users.map((user, ind) => (
                                <tr key={ind}>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{ind + 1}</td>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 first-letter:uppercase">{user.firstName + ' ' + user.lastName}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{user.type}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{user.password}</td>
                                    <td class="whitespace-nowrap px-4 py-2">
                                        <a
                                            href="#"
                                            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
