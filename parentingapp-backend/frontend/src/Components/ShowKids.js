import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import KidDetail from './KidDetail';

function ShowKids() {

    const [kid, setKid] = useState([])

    const getKids = async () => {
        const response = await axios.get('http://localhost:8000/kids/');
        console.log(response.data)
        setKid(response.data)
    }
    useEffect(()=> {
        getKids()
    }, [])

    return (
      <div className="kid-card-info">
        <h1>Kids</h1>
        {kid.map((kids, index) => (
          <Card className="m-2 rounded shadow-lg" style={{ width: '22rem' }}>
          {kids.image ?  <Card.Img variant="top" src={kids.image} /> : null}
            <Card.Body>
              <Card.Title>{kids.name}</Card.Title>
              <Button  variant="primary">Task</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
}

export default ShowKids
