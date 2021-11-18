
import React from 'react'
import Banner from './Banner'
import "./Home.css"
import Card from "./Card"
import Aboutus from "./Aboutus";

import a from "./photos/1.png";
import b from "./photos/2.png";
import c from "./photos/3.png";

import d from "./photos/4.png";
import e from "./photos/5.png";
import f from "./photos/6.png";

import g from "./photos/7.png";
import h from "./photos/8.png";
import i from "./photos/10.png";

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className='home_section'>
            <Card
                 key="1"
                src={g}
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src={e}
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
               src={h}  title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home_section'>
            <Card
               src={a}  title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"
            />
            <Card
                src={g}  title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$350/night"
            />
            <Card
              src={h}   title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/night"
            />

            </div>


            <div className='home_section'>
               <h1></h1>
               <h1> <span
               style={{fontSize:"42px"}}
               >- POPULAR DESTINATIONS -</span>
                   <br/>
                   <span style={{fontSize:"22px"}}>
                   Best Place to Visite in Southern Province Sri Lanka
                   </span>
               </h1>
               <h1></h1>
                </div>
            <div className='home_section'>
            <Card
            src={g}
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src={e}
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
               src={h}  title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>

            <div className='home_section'>
            <Card
               src={a}  title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"
            />
            <Card
                src={g}  title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$350/night"
            />
            <Card
              src={h}   title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/night"
            />
            </div>
        </div>
    )
}

export default React.memo(Home)
