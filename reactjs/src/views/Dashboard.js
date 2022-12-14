import React from 'react'
import "../App.css"
import {Container} from 'react-bootstrap'
import Cards from './HomeCard/Cards'

const Dashboard = () => {
  return (
    <div className="landing">
            <div className="dark-overlay">
                <Container className='BodyContainer'>
                  <h2>Daily New</h2>
                  <Cards/>
                </Container>
            </div>
        </div> 
  )
}


export default Dashboard