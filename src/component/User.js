import React from "react";

const User = ({ data }) => {
  return (
    <div>
      <h1>User List</h1>
      {/* <h2> {prop.data.name} {prop.data.email} </h2> */}
      <ul>
        {
            // data.map(item=>(
            //     <li key={item.id}>{item.name}</li>
            // ))
            data.map((item)=>(
                <li >{item.id} {item.name} {item.email}</li>
            ))
        }
      </ul>
    </div>
  );
};

export default User;
