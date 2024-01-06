import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Search from "../components/Search";
import RecentlyPosted from "../components/RecentlyPosted";
import Suggestions from "../components/Suggestions";
import MostViewed from "../components/MostViewed";
import Poshhouse from "../components/Poshhouse";
import Pricedrop from "../components/Pricedrop";
import Luxuaryhouse from "../components/Luxuaryhouse";
import Navbar from "../components/Navbar";
import NavbarMob from "../components/NavbarMob";
import axios from 'axios';
import CommercialProperty from "../components/CommercialProperty";
import RentProperty from "../components/RentProperty";

export default function Homepage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [properties, setProperties] = useState([])
  const [propertiesImages,setPropertiesImages] = useState([])

  const getAllPropeties = async() =>{
    const response = await axios.get('https://bharatroofers.com/api/property/getAllProperty');
    setProperties(response.data)
  }
  const getAllPropetiesImages = async() =>{
    const response = await axios.get('https://bharatroofers.com/api/property/getAllPropertyImages');
    setPropertiesImages(response.data)
  }



  // useEffect( ()=>{
  //    getAllPropeties()
  //    getAllPropetiesImages()
     
  // },[])
  useEffect(()=>{
    const handleTop = () => {
      window.scrollTo(0, 0);
    };
    handleTop();
  },[])



  
  return (
    <Wrapper>
       <div className="nav1"><Navbar  isScrolled={isScrolled} /></div>
          <div className="nav2"><NavbarMob /> </div>
      <div>
        <div className="container-fluid">
       
          <div className="bannerdiv">
            <Banner />
          </div>

          <Search />
          
          {/* <section className="mx-2">
            <div className="tab-content" id="categoryTab">
              <div
                className="tab-pane fade show active"
                id="house-tab-pane"
                role="tabpanel"
                aria-labelledby="houseTab"
              >
                <section className="p-md-3">
                  <RecentlyPosted />
                  <Suggestions />
                  <MostViewed />
                  <Poshhouse />
                  <Pricedrop />
                  <Luxuaryhouse />
                </section>
              </div>
              <div
                className="tab-pane fade"
                id="villa-tab-pane"
                role="tabpanel"
                aria-labelledby="villaTab"
              >
                <section className="p-md-3">
                 <Luxuaryhouse/>
                </section>
              </div>
              <div
                className="tab-pane fade"
                id="plot-tab-pane"
                role="tabpanel"
                aria-labelledby="plotTab"
              >
                <section className="p-md-3">
                  <RecentlyPosted />
                  <Suggestions />
                  <MostViewed />
                  <Poshhouse />
                  <Pricedrop />
                  <Luxuaryhouse />
                </section>
              </div>
              <div
                className="tab-pane fade"
                id="apartment-tab-pane"
                role="tabpanel"
                aria-labelledby="apartmentTab"
              >
                <section className="p-md-3">
                  <RecentlyPosted />
                  <Suggestions />
                  <MostViewed />
                  <Poshhouse />
                  <Pricedrop />
                  <Luxuaryhouse />
                </section>
              </div>
            </div>
          </section> */}


            <section className="mx-2">
            <div className="">
              <div>
                <section className="p-md-3">
                  <RecentlyPosted />
                  <RentProperty/>
                  <Suggestions />
                  <MostViewed />
                  <Poshhouse />
                  <CommercialProperty/>
                  <Pricedrop />
                  <Luxuaryhouse />
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // background: linear-gradient(
  //   180deg,
  //   rgba(255, 255, 255, 1) 0%,
  //   rgba(0, 0, 0, 1) 0%,
  //   rgba(255, 255, 255, 1) 100%
  // );
  // For All Screens

  
  .nav-tabs {
    border-bottom: none; /* Remove the bottom border */
  }
  .nav-tabs .nav-item .nav-link {
    border: none;
    color: black;
  }
  .nav-tabs .nav-item .nav-link.active {
    color: #712cf9;
    font-weight: bold;
  }

  #search-box {
    border: none;
  }
  #search-box:focus {
    outline: none;
  }

  #mySelect {
    outline: 0px;
    border: 0px;
  }
  #budget {
    outline: 0px;
    border: 0px;
  }
  // -----------------------End------------------------------
  // For Different screens

  .container-fluid {
    padding: 0;
    @media only screen and (max-width: 768px) {
      
    }
  }

  .post-heading {
    @media only screen and (max-width: 768px) {
      font-size: 20px;
      text-align: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px;
    }
  }

  .bannerdiv {
    position: relative;
  }
  .nav1{
    display: block;
    @media screen and (max-width: 1000px) {
    
    display: none;
    
  }
}
  .nav2{
    display: none;
  
    @media screen and (max-width: 1000px) {
   display: block;
   
 }
   
  }
`;
