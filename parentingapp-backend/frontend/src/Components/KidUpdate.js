import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KidUpdate({ todos }) {

    const [detail, setDetail] = useState([])

    const getDetails = async () => {
        const response = await  axios.get('http://localhost:8000/todos/')
        console.log(response.data)
        setDetail(response.data)
  }

  useEffect(() => {
    getDetails()
  },[])
  return (
    <div>
      <h1>Task</h1>
      {detail.map(details => {
          if(todos.id == details.kid_id){
              return (
                <div>
                  <h3>Chores: {details.chores}</h3>
                  <h3>Homework: {details.homework}</h3>
                  <h3>After School: {details.recreational}</h3>
                </div>
              );
          }
      })}
    </div>
  );
}

export default KidUpdate
