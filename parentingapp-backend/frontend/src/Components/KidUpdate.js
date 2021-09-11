import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import KidNameUpdate from './KidNameUpdate';

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
                  <Link
                    className="btn btn-primary m-2"
                    to={`/${todos.id}/update`}
                  >
                    Update
                  </Link>
                  <Link className="btn btn-danger m-2">Delete</Link>
    </div>
  );
}

export default KidUpdate
