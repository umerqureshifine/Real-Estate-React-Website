import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar'
import SiderbarMob from '../SiderbarMob'
import NavbarAd from '../NavbarAd'
import axios from 'axios'
import moment from "moment";

function Interested_User() {
    const [user, setUser] = useState([]);
    console.log(user)

    useEffect(()=>{
      const fetchUser = async() =>{

          try{
            const res = await axios.get('https://bharatroofers.com/api/property/getInterestedUsers');

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
                    <h5 className="widget-title" id='title'>Interested User</h5>
                    <div className="table-responsive" >
                        <table className="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th>User id</th>
                              <th>User Name</th>
                              <th>Phone Number</th>
                              <th>Email</th>
                              <th>Property id</th>
                              <th>Property Name</th>
                              <th>Message</th>
                              <th>Contacted At</th>
                            
                             
                            </tr>
                          </thead>
                          
                      {user && user?.length > 0 ?  
                      <>
                     {user && user?.length > 0 &&  user?.map((user) => {
                      return (
                        <tbody key={user?.id}>
                        <tr>
                          <td>{user?.id}</td>
                          <td>{user?.userName}</td>
                          <td>{user?.userPhone}</td>
                          <td>{user?.userEmail}</td>
                          <td>{user?.property_id}</td>
                          <td>{user?.PropertyName}</td>
                          <td>{user?.message}</td>
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

export default Interested_User
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