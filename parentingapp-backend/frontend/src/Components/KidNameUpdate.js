import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function KidNameUpdate( { detail }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [chores, setChores] = useState([]);
  const [homework, setHomework] = useState([]);
  const [recreational, setRecreational] = useState([])

  const history = useHistory();
  const { id } = useParams();


  const kidDetails = async () => {
    const { data } = await axios.get(`http://localhost:8000/kids/${id}`);
    console.log(data)
    setName(data.name);
    setImage(data.image);
    setChores(data.chores)
    setHomework(data.homework)
    setRecreational(data.recreational)
    
  };
 

  useEffect(() => {
    kidDetails();
  }, []);

  const UpdateKid = async () => {
    let formField = new FormData();
    formField.append('name', name);
    formField.append('chores', chores);
    formField.append('homework', homework);
    formField.append('recreational', recreational);
    if (image !== null ){
      formField.append('image', image);
    }
    await axios({
      method: 'PUT',
      url: `http://localhost:8000/kids/${id}`,
      data: formField,
    }).then((res) => {
      console.log(res.data);
      history.push('/');
    });
  };

  return (
    <div>
      <h1>Update Here</h1>
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
              id="name"
              name="name"
              value={chores}
              placeholder="Update Chores"
              onChange={(e) => setChores(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="count-pill"
              type="text"
              id="name"
              name="name"
              value={homework}
              placeholder="Update Homework"
              onChange={(e) => setHomework(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="count-pill"
              type="text"
              id="name"
              name="name"
              value={recreational}
              placeholder="Update Activities"
              onChange={(e) => setRecreational(e.target.value)}
            />
          </div>
          <button className="btn btn-success" onClick={UpdateKid}>
            Update
          </button>
          {/* <Link
            className="btn btn-danger m-2"
            oncClick={() => deleteKid(kids.id)}
          >
            Delete
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default KidNameUpdate;
