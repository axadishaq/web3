import axios from "axios";
import React, { useEffect, useState } from "react";

export const User = () => {
   const [users, setUsers] = useState([]);
   const fetchUsers = async () => {
      const { data } = await axios.get("https://dummyjson.com/users");
      setUsers(data.users);
   };

   useEffect(() => {
      fetchUsers();
   }, []);
   return (
      <>
         <table className="table-auto border-separate border-spacing-1 border border-gray-400">
            <thead>
               <tr >
                  <th >Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>BirthDate</th>
                  <th>Address</th>
               </tr>
            </thead>
            <tbody>
               <>
                  {users.map((user) => (
                     //   <!-- Use different background colors for odd and even rows -->
                     <tr className="odd:bg-white even:bg-sky-20 dark:odd:bg-sky-300/75 dark:even:bg-sky-700">
                        <td>{user.firstName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.birthDate}</td>
                        <td>
                           {user.address.address},{user.address.city},
                           {user.address.country}
                        </td>
                     </tr>
                  ))}
               </>
            </tbody>
         </table>
      </>
   );
};
