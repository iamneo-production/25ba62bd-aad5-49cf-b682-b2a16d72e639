// import React from 'react'
// import {useSelector } from 'react-redux/es/hooks/useSelector'
// import { logout, selectUser } from './redux/userSlice'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'


// export default function Profile() {
//   const user=useSelector(selectUser)
//   const dispatch=useDispatch();
//   const navigate=useNavigate();

//   const handleLogout=()=>
//   {
//     dispatch(logout());
 
//     navigate("/");
//   }
//   if(!user)
//   {
//     navigate('/')
//     return null;
//   }
//   return (
//     <>
//   <div class="profile-card">
//     <div className="mh">
//     </div><br></br>
//     <h1>{user.name}</h1><br></br>
//     {/* <ul>
//       <li><strong>Email : </strong>{user.email}</li>
//     </ul> */}
    
//     <br></br>
//     <button onClick={handleLogout}>Logout</button>
   
//   </div>

//     </>
//   )
// }