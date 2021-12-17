import React from 'react';
import './App.css';
import Profile from './Profile';


// var arrow="<"

const profile_details={
  "Name":"Tamanna Garg",
  "EmployeeID":"00002512",
  "Appointment":"9:00(24-05-2021)",
  "Email":"tamanna@gmail.com",
  "Phone":"9876543210"
}
const order_detail={
  "Status": "In Progress",
  "Door" : "Mark",
  "Time":"10:30(25-05-2021)",
  "image":"https://www.w3schools.com/howto/img_avatar.png"
}

function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    {/* <img src={"https://www.w3schools.com/howto/img_avatar.png"} className="profile" alt="profileimg" /> */}
    <Profile employee={profile_details} order={order_detail}  />
    </div>
  );
}

export default App;
