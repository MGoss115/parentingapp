import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import KidUpdate from './KidUpdate';


function KidDetail() {
  const [todos, setTodos] = useState([])
  const { id } = useParams()

  const getTodos = async () => {
    const { data }= await axios.get(`http://localhost:8000/kids/${id}`)
    console.log(data);
    setTodos(data);
  };
 

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h3>{todos.name}</h3>
      <img src={todos.image} style={{ width: '22rem' }} alt="" />
      <KidUpdate key={todos.id} todos={todos} />
     
    </div>
  );
}

export default KidDetail;
