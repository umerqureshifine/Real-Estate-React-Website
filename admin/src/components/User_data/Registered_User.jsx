// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components'
// import Sidebar from '../Sidebar'
// import SiderbarMob from '../SiderbarMob'
// import NavbarAd from '../NavbarAd'

// function Registered_User() {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchAllUserData = async () => {
//       try {
//         // Make a GET request to your backend API for all user data
//         const response = await axios.get('http://localhost:9000/api/auth');
        
//         setUserData(response.data.data);
//       } catch (error) {
//         console.error('Error fetching all user data:', error.response.data);
//         // Handle error, show error message to the user, etc.
//       }
//     };

//     fetchAllUserData();
//   }, []);
//   return (
//    <Wrapper>
//     <NavbarAd/>
//   <div className="row flex-nowrap">
//     <div className="col-lg-2 col-1" id='sider'>
//     <Sidebar/>
//     </div>
//     <div className="col-lg-2 col-1" id='sider1'>
//     <SiderbarMob/>
//     </div>
   
//     <div className="col-lg-10 mt-2" id='set'>
//       <div className="row">
//    <div className="col-lg-12">
//       <h2 className='hdd'>All Registered Users</h2>
//    <div className="table-container"> 
//       {userData ? (
//         <table className="table table-bordered table-striped" id="tableres">
//           <thead>
//             <tr>
//                <th>User id</th>  
//               <th>User Name</th>
//               <th>Email</th>
//               <th>Phone</th>
            
//             </tr>
//           </thead>
//           <tbody>
//             {userData.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//     </div>

//    </div>
  



//   </div>
//    </div>
//    </div>


    
   
   
   
//    </Wrapper>
//   )
// }

// export default Registered_User
// const Wrapper = styled.div`
//   #sider{
//     display: block;
//     @media screen and (max-width: 768px) {
   
//     display: none;
    
//   }
// }
//   #sider1{
//     display: none;
//     @media screen and (max-width: 768px) {
   
//    display: block;
   
//  }
   
//   }
//   #tableres{
//     margin-top: 1rem;
//     height: 18rem;
    
//   }
//   .table-container {
//   max-height: 35rem; /* Adjust the max height as needed */
//   overflow-y: auto;
  
//   @media screen and (max-width: 768px) {
//   width: 21rem;
//   }
//   @media screen and (min-width: 768px) and (max-width: 1020px) {
//   width: 42rem;
//   }
//   @media screen and (min-width: 1020px) and (max-width: 1600px) {
//   width: 72rem;
//   margin-left: 2rem;
//   }
// }
// .hdd{
//   margin-top: 5rem;
//   @media screen and (max-width: 768px) {
//     margin-left: 2rem;
//   }
//   @media screen and (min-width: 768px) and (max-width: 1020px) {
//     margin-left: 0rem;
//   }
//   @media screen and (min-width: 1020px) and (max-width: 1600px) {
  
//   margin-left: 2rem;
//   }
// }


// `


import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar'
import SiderbarMob from '../SiderbarMob'
import NavbarAd from '../NavbarAd'
import axios from 'axios'
import moment from "moment";

function Registered_User() {
    const [user, setUser] = useState([]);
    console.log(user)

    useEffect(()=>{
      const fetchUser = async() =>{

          try{
            const res = await axios.get('https://bharatroofers.com/api/property/getRegisterUsers');

            console.log(res);
            if(res?.data.success){
             setUser(res?.data.data)
            }
            else{
             console.log(res?.error)
            }
          }
          catch(err){
            console.log(err)
          }
        
      }
      fetchUser();
    },[])
 
  return (
   <Wrapper>
    <NavbarAd/>
  <div className="row flex-nowrap">
    <div className="col-lg-2 col-1" id='sider'>
    <Sidebar/>
    </div>
    <div className="col-lg-2 col-1" id='sider1'>
    <SiderbarMob/>
    </div>
   
    <div className="col-lg-10 mt-2" id='set'>
      <div className="row">
   <div className="col-lg-12">
  <div className="widget-area-2 proclinic-box-shadow " id='tableres'>
                    <h5 className="widget-title" id='title'>Registered User</h5>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th>User id</th>
                              <th>User Name</th>
                              <th>Phone Number</th>
                              <th>Email</th>
                              <th>Resgister At</th>
                            
                            
                             
                            </tr>
                          </thead>
                          
                      {user && user?.length > 0 ?  
                      <>
                     {user && user?.length > 0 &&  user?.map((user) => {
                      return (
                        <tbody key={user?.uid}>
                        <tr>
                          <td>{user?.uid}</td>
                          <td>{user?.name}</td>
                          <td>{user?.phone}</td>
                          <td>{user?.email}</td>
                          <td>{moment(user?.created_at).format('MMMM Do YYYY, h:mm:ss a')}</td>
                    

                        
                          
                        </tr>
                       
                        
                      </tbody>
                      )
                     }

                     )}
                     </>
                     :
                     <>
                     <p className='mt-2'>
                     No User Found
                     </p>
                     </>
                     }
                     </table>
                      </div>
                  </div>
   </div>
  



  </div>
   </div>
   </div>


    
   
   
   
   </Wrapper>
  )
}

export default Registered_User;

const Wrapper = styled.div`
  #sider{
    display: block;
    @media screen and (max-width: 768px) {
   
    display: none;
    
  }
}
  #sider1{
    display: none;
    @media screen and (max-width: 768px) {
   
   display: block;
   
 }
   
  }
  #tableres{
    margin-top: 5rem;
    
  }
  .table-responsive{
    max-height: 35rem; /* Adjust the max height as needed */
  overflow-y: auto;
  @media screen and (max-width: 768px) {
  width: 20rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1020px) {
  width: 42rem;
  }
  @media screen and (min-width: 1020px) and (max-width: 1600px) {
  width: 72rem;
  margin-left: 2rem;
  }
  }
  #title{
    margin-top: 5rem;
  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1020px) {
    margin-left: 0rem;
  }
  @media screen and (min-width: 1020px) and (max-width: 1600px) {
  
  margin-left: 2rem;
  }
  }

`




