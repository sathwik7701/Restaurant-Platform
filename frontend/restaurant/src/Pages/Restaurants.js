import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EachRestaurent from './EachRestaurent';

const Restaurants = () => {
    const [restalist, setRestaList] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:5000/restaurents')
        .then(res =>{
            console.log("res", res.data.list[0]);
            setRestaList(res.data.list);
        })
        .catch(err => {
            console.log("err", err);
        })
    }, []);

  return (
    <ul className="resta-list">
        {restalist.map((resta, index) => (
                <EachRestaurent 
                  key = {`uniqueKey-${index}`}
                  restaurent = {resta}
                />
        ))}
    </ul>
  )
}

export default Restaurants
