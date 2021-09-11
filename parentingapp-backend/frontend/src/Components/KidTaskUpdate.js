import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function KidTaskUpdate() {
 
  

  const [chores, setChores] = useState([])
  const [homework, setHomework] = useState([])
  const [recreational, setRecreational] = useState([])
  const [detail, setDetail] = useState('')

  const history = useHistory()
  const { id } = useParams()
 


  const getTask = async () => {
    const response = await axios.get(`http://localhost:8000/todos/`);
    console.log(response.data)
 
  }
  
   
  

  // const updateTask = async () => {
  //   let formField = new FormData()
  //   if(kid == todos){
  //     formField.append('chores', chores)
  //     formField.append('homework', homework)
  //     formField.append('recreational', recreational)
  //   }
  //   await axios({
  //     method: 'PUT',
  //     url: `http://localhost:8000/todos/${id}`,
  //     data: formField
  //   }).then(res => {
  //     console.log(res.data)
  //     history.push('/')
  //   })
  // }

  useEffect(() =>{
    getTask()
  }, [])
  
  return (
    <div>
      {/* <input
        className="count-pill"
        type="text"
        id="chores"
        name="chores"
        value={chores}
        // placeholder="Update Chore"
        onChange={(e) => setChores(e.target.value)}
      />
       <button className="btn btn-success" onClick={updateTask}>Update Chores</button> */}
    </div>

  );
}

export default KidTaskUpdate;
