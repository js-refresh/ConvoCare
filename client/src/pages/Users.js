import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Users.css'


export default function Users() {

    let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div>
            <Container>
                <Row >
                    <Col className='user-profile-column' md={5} style={{border: 'solid black 1px'}}>
                        <h1>User Profile</h1>
                        <div>
                            <div>
                                <h2 style={{float: 'left'}}>Threads</h2>
                                <Button style={{float: 'right', display: 'inline'}}>New thread</Button>
                                 {// button will open up modal
                                }
                            </div>
                            <Card style={{ width: '100%' }}>
                                <Card.Body style={{height: '18em', overflowY: 'scroll'}}>
                                    {cardArray.map((thread)=>
                                    // replace card array with threads from backend tied to user
                                    <Card style={{ width: '100%', marginBottom: '5px' }}>
                                        <Card.Body>
                                        <Card.Title>Thread name</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    )}
                                </Card.Body>
                            </Card>
                        </div>
                        <div style={{marginTop: '25px'}}>
                            <div>
                                <h2 style={{float: 'left'}}>Journal</h2>
                                <Button style={{float: 'right', display: 'inline'}}>New entry</Button>
                                {// button will open up modal
                                }
                            </div>
                            <Card style={{ width: '100%' }}>
                                <Card.Body style={{height: '18em', overflowY: 'scroll'}}>
                                    {cardArray.map((entry)=>
                                    // replace card array with journal entries from backend tied to user
                                    <Card style={{ width: '100%', marginBottom: '5px' }}>
                                        <Card.Body>
                                        <Card.Title>Journal name</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    )}
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col className='user-profile-column' md={{ span: 5, offset: 2 }} style={{border: 'solid black 1px'}}><h1>hello</h1></Col>
                </Row>
            </Container>
        </div>
    )
}
