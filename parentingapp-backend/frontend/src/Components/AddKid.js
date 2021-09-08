import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function AddKid() {

    const [name, setName] =useState("")
    const [image, setImage] = useState(null)
    const history = useHistory()

    const addKid = async () => {
        let formField = new FormData()

        formField.append('name', name)
        if(image !== null){
            formField.append('image',image)
        }
        await axios({
          method: 'post',
          url: 'http://localhost:8000/kids/',
          data: formField
        }).then((response) => {
            console.log(response.data)
            history.push('/')
        })
    }
    return (
      <div className="container">
        <h1>Add Kid</h1>
        <div className="form-group">
          <div className="form-group">
            <input
              className="count-pill"
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Add Kid Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <div className="form-group">
              <input
                className="count-pill"
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <button className="btn btn-success" onClick={addKid}>Add Kid</button>
          </div>
        </div>
      </div>
    );
}

export default AddKid
