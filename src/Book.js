import React,{useEffect,useState} from 'react';
import './Book.css';
import a from "./photos/1.png";
import b from "./photos/2.png";
import c from "./photos/3.png";

import d from "./photos/4.png";
import e from "./photos/5.png";
import f from "./photos/6.png";

import g from "./photos/7.png";
import h from "./photos/8.png";
import i from "./photos/10.png";
const Book = () => {

    const[name,setName]=useState("");
    const[image,setImage]=useState("");
    const[price,setPrice]=useState("0.00");
    const[details,setDetails]=useState("");

useEffect(()=>{
    var url_string = window.location.href;
    var url = new URL(url_string);
    setName(url.searchParams.get("name"));
    setImage(url.searchParams.get("image"));
    setPrice(url.searchParams.get("price"));
    setDetails(url.searchParams.get("details"));
 console.log(name,image,price,details);
   // if(Image ==)

},[])
    return (
    <div class="container">
        <div class="card-container">
            <input type="radio" name="colors-btn" id="color-1" checked />
           
            <div class="shoe-area">
                
                    <div class="logo-div">
                        <img src={image} alt="" />
                    </div>
                    <div class="floating-div">
                    <div class="shoe-1">
                        <img src={a} alt="" /></div>
                    </div>

            </div>
            <div class="text-area">
                <div class="heading-area">
                    <h2>Niagara Tourist Place</h2>
                    <h4>Running Collection</h4>
                </div>

                    <p class="paragraph-area">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rerum asperiores error omnis pariatur sequi placeat quia fuga ullam. Harum obcaecati suscipit illum similique excepturi voluptates quae deserunt tempore, distinctio architecto ipsum dolor laboriosam inventore impedit nostrum totam eaque sed est? Non rem repudiandae, vitae iure suscipit pariatur, cum esse sequi cumque saepe commodi reprehenderit quaerat. Quasi ipsam repellendus similique
                    </p>

                <div class="color-selection">
                    <div class="h5-text"><h5>Available Places: </h5></div>
                    <div class="color-pick-div">
                        <label  > Gall,  Sri Lanka</label>
                       </div>
                </div>
                <div class="price-and-buy-btn">
                    <h2 class="price-1">$ {price}</h2>
                    <button class="buy-btn">Book Now</button>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Book;
