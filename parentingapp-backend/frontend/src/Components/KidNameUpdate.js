import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import KidTaskUpdate from './KidTaskUpdate'
import axios from 'axios'

function KidNameUpdate( { details }) {

    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
    const [todos, setTodos] = useState('');


    const history = useHistory()
    const { id } = useParams()

    const kidDetails = async () => {
        const { data } = await axios.get(`http://localhost:8000/kids/${id}`)
        // console.log(data)
        setName(data.name)
        setImage(data.image)
        setTodos(data.todos)
    }

    useEffect(() => {
        kidDetails()
    }, [])

    const UpdateKid = async () => {
        let formField = new FormData()
        formField.append('name', name)
        if(image !== null){
            formField.append('image', image)
        }
        await axios({
          method: 'PUT',
          url: `http://localhost:8000/kids/${id}`,
          data: formField
        }).then(res => {
            console.log(res.data)
            history.push('/')
        })
    }

    return (
      <div>
        <h1>Update Task</h1>
        <div className="form-group">
          <div className="form-group">
            <input
              className="count-pill"
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Update Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <div className="form-group">
              <img src={image} height="300" width="250" />
              <input
                className="form-control form-control-lg"
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
           
          <div className="form-group">
            <input
              className="count-pill"
              type="text"
              id="chores"
              name="chores"
              value={todos}
              placeholder="Update Todos"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
            <button className="btn btn-success" onClick={UpdateKid}>
              Update Task
            </button>
          </div>
        </div>
      </div>
    );
}

export default KidNameUpdate
