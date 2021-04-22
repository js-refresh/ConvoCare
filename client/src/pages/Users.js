import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import './Users.css'


export default function Users() {
    let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [journalEntries, setJournalEntries ] = useState([])
    const [threads, setThreads ] = useState([])
    const [rightSide, setRightSide ] = useState({})

    console.log(threads)

    const handleRight = (id) => {
        console.log('click')
        fetch(`/api/v1/threads/${id}`)
        .then(res => res.json())    
        .then(data => {
            setRightSide(data)
        })
    }

    useEffect(() => {
        fetch('/api/v1/threads') //TODO update to get only threads from current user
            .then(res => res.json())
            .then(data => {
                setThreads(data)
            })
    }, [])

    //TODO second useEffect to get only entries from current user


    return (
        <div>
            <Container>
                <Row >
                    <Col className='user-profile-column' md={5} style={{border: 'solid black 1px'}}>
                        <h1>User Profile</h1>
                        <div>
                            <h5>User since:</h5>
                            <h5>Post activity:</h5>
                        </div>
                        <div>
                            <div>
                                <h2 style={{float: 'left'}}>My Threads</h2>
                                <Button style={{float: 'right', display: 'inline'}}>New thread</Button>
                                 {// button will open up modal
                                }
                            </div>
                            <Card style={{ width: '100%' }}>
                                <Card.Body style={{height: '18em', overflowY: 'scroll'}}>
                                    {threads.map((thread) => {
                                        return (
                                    // replace card array with threads from backend tied to user
                                    // arranged desc by date
                                    <Card onClick={() => handleRight(thread.id)} key={thread.id} style={{ width: '100%', marginBottom: '5px' }}>
                                        <Card.Body>
                                        <Card.Title>{thread.title}</Card.Title>
                                        <Card.Text>
                                        {thread.content}
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                        )
                                    }
                                    )}
                                </Card.Body>
                            </Card>
                        </div>
                        <div style={{marginTop: '25px'}}>
                            <div>
                                <h2 style={{float: 'left'}}>Journal</h2>
                                <Button onClick={handleShow} style={{float: 'right', display: 'inline'}}>New entry</Button>
                                {// button will open up modal for new entry
                                }
                            </div>
                            {// new modal post
                            } 
                            <Modal size="lg"
                                show={show}
                                onHide={() => setShow(false)}
                                aria-labelledby="example-modal-sizes-title-lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>New Journal Entry</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control placeholder='Please title your entry.'as="textarea" rows={1} />
                                        <Form.Label>Entry</Form.Label>
                                        <Form.Control placeholder='Start writing about whatever
                                        youd like!'as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save your entry
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Card style={{ width: '100%' }}>
                                <Card.Body style={{height: '18em', overflowY: 'scroll'}}>
                                    {cardArray.map((entry)=>
                                    // replace card array with journal entries from backend tied to user
                                    <Card style={{ width: '100%', marginBottom: '5px' }}>
                                        <Card.Body>
                                        <Card.Title>Journal name</Card.Title>
                                        <Card.Text>
                                            Basic text
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    )}
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col className='user-profile-column' md={{ span: 5, offset: 2 }} style={{border: 'solid black 1px'}}><h1>{rightSide.title}</h1>
                    
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
