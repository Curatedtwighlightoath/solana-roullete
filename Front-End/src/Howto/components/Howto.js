import "./Howto.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Signup () {
    const [listofPosts, setlistofPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setlistofPosts(response.data);
        });
    }, []);



    return (
    <div className="how-top">
        <h1> How To Play</h1>
        <p>1. Login in to an account. (Get Account)</p>
        <p>2. Pick either heads or tails.</p>
        <p>3. Select your desired flip amount.</p>
        <p>4. Click approve and wait for coin to spin</p>
        <p>5. Congrats, you’re now a degenerate.</p>

        {listofPosts.map((value, key) => {
            return (
                <div className="list-post" >
                <div className="list-title"> {value.title} </div>
                <div className="list-body"> {value.postText} </div>
                <div className="list-footer"> {value.username} </div>
                </div>
            );
        })}

    </div>
    
    


    )

}

export default Signup;
