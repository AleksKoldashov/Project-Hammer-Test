/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import axios from "axios";


// const getPosts = () => axios
//     .get(`https://jsonplaceholder.typicode.com/posts?_limit=100`)
//     .then((x) => x.data);

export  const postUsers = () => {
    fetch('https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=ASF&destination=MOW&departure_at=2024-02-02&return_at=2024-02-03&unique=false&sorting=price&direct=false&cy=rub&limit=10&page=1&one_way=true&token=a4520e3e1769ac3ff7af39af9faa4c68')
    .then(response => response.json())
    .then(x => x.data) 
}

function getUsers (){
    const [items, setItems] = useState([])
    useEffect (()=>{
        fetch('https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=ASF&destination=MOW&departure_at=2024-02-02&return_at=2024-02-03&unique=false&sorting=price&direct=false&cy=rub&limit=10&page=1&one_way=true&token=a4520e3e1769ac3ff7af39af9faa4c68')
        .then(response => response.json())
        .then(res => setItems(res)) 
      },[])
console.log(items);
    }
export default getUsers

