import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import KidDetail from './KidDetail';
import KidUpdate from './KidUpdate';
import NavBarMenu from './NavBarMenu';



function ShowKids() {

    const [kid, setKid] = useState([])
    const history = useHistory()

    const getKids = async () => {
        const response = await axios.get('http://localhost:8000/kids/');
        console.log(response.data)
        setKid(response.data)
    }
    useEffect(()=> {
        getKids()
    }, [])

     

   
    return (
      <div>
        <NavBarMenu />
          <h1>Kids</h1>
        <section className="kid-card-info">
          {kid.map((kids, index) => (
          <Card style={{ width: '18rem', borderRadius: '30px', }}>
              {kids.image ? (
                <Card.Img
                  variant="top"
                  style={{ height: '20rem' }}
                  src={kids.image}
                />
              ) : null}
              <Card.Body>
                <Card.Title>{kids.name}</Card.Title>
                <Link className="btn btn-primary m-2" to={`/${kids.id}/`}>
                  View
                </Link>
              </Card.Body>
            </Card>
          ))}
        </section>
      </div>
    );
}

export default ShowKids
