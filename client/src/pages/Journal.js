import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import './Journal.css'


export default function Journal() {
    let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [journalEntries, setJournalEntries ] = useState([])
    // const [threads, setThreads ] = useState([])
    // const [rightSide, setRightSide ] = useState({})

    // console.log(threads)

    // const handleRight = (id) => {
    //     console.log('click')
    //     fetch(`/api/v1/threads/${id}`)
    //     .then(res => res.json())    
    //     .then(data => {
    //         setRightSide(data)
    //     })
    // }

    // useEffect(() => {
    //     fetch('/api/v1/threads') //TODO update to get only threads from current user
    //         .then(res => res.json())
    //         .then(data => {
    //             setThreads(data)
    //         })
    // }, [])

    //TODO second useEffect to get only entries from current user


    return (
        <div>
            <Container>
                <Row >
                    <Col className='user-profile-column' md={12} style={{border: 'solid black 1px'}}>
                        <h1>My Journal</h1>
                        <div style={{marginTop: '25px'}}>
                            <div>
                                <Button onClick={handleShow} style={{float: 'right', marginBottom: '15px'}}>New entry</Button>
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
                            <Card style={{ height: '65vh', width: '100%', marginTop: '25px', marginBottom: '25px' }}>
                                <Card.Body style={{overflowY: 'scroll'}}>
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
                </Row>
            </Container>
        </div>
    )
}
