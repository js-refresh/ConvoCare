import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { useHistory } from 'react-router';
import "./Journal.css";
import "./thread.css";



export default function Thread() {
    let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [activeEntry, setActiveEntry] = useState({ content: '' })
    const history = useHistory();
    const [form, setForm] = useState({
        title: '',
        content: '',
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showEntry, setShowEntry] = useState(false);
    const handleCloseEntry = () => setShowEntry(false);
    const handleShowEntry = (entry) => {
        setShowEntry(true);
        setEditForm({content: entry.content})
        setActiveEntry(entry);
    }
    const [editForm, setEditForm] = useState({
        content: '',
    });
    // const [threadEntries, setThreadEntries] = useState([]);
    const [journalEntries, setJournalEntries] = useState([]);
    // console.log(threadEntries)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleEditChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/v1/threads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: form.title,
                content: form.content,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    alert(data.error);
                } else {
                    // setThreadEntries(data)
                    fetch("/api/v1/threads")
                        .then((res) => res.json())
                        .then((data) => {
                            setJournalEntries(data);
                        });
                    alert('thread created')
                }
            });
    };

    const handleEdit = (e) => {
        e.preventDefault();
        fetch(`/api/v1/threads/${activeEntry.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: editForm.content,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    alert(data.error);
                } else {
                    setShowEntry(false);
                    // setThreadEntries(data)
                    fetch("/api/v1/threads")
                        .then((res) => res.json())
                        .then((data) => {
                            setJournalEntries(data);
                        });
                    alert('thread updated')
                }
            });
    };

    useEffect(() => {
        fetch("/api/v1/threads")
            .then((res) => res.json())
            .then((data) => {
                setJournalEntries(data);
            });
    }, []);

    return (
        <div>
            <br></br>
            <Container>
                <Row >
                    <Col className='user-profile-column' md={12} style={{ border: 'solid black 3px' }}>
                        <h1>ConvoCare Forum</h1>
                        <p>Ask the community or share stories</p>
                        <div style={{ marginTop: '25px' }}>
                            <div className="Button">
                                <Button onClick={handleShow} style={{ float: 'right', marginBottom: '15px', color: 'gold', }}>Post a New Thread</Button>
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
                                    <Modal.Title>New Thread Entry</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Thread Title</Form.Label>
                                            <Form.Control placeholder='Title goes here.'
                                                as="textarea"
                                                rows={1}
                                                name="title"
                                                onChange={handleChange}
                                                value={form.title}
                                            />
                                            <br />
                                            <Form.Label>Public question or comment</Form.Label>
                                            <Form.Control type='content' placeholder='Start writing about whatever
                                            youd like!'
                                                as="textarea"
                                                rows={3}
                                                name="content"
                                                onChange={handleChange}
                                                value={form.content}
                                            />
                                        </Form.Group>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button variant="primary"
                                            onClick={handleClose}
                                            type="submit">
                                            Post
                                    </Button>
                                    </Form>

                                </Modal.Body>
                                <Modal.Footer>

                                </Modal.Footer>
                            </Modal>
                            <Card style={{
                                height: '65vh',
                                width: '100%',
                                marginTop: '25px',
                                marginBottom: '25px'
                            }}>
                                <Card.Body style={{ overflowY: 'scroll' }}>
                                    {journalEntries.map((entry) =>
                                        // replace card array with thread entries from backend tied to user
                                        <Card key={entry.id} style={{ width: '100%', marginBottom: '5px' }}>
                                            <Card.Body>
                                                <Card.Title onClick={()=>handleShowEntry(entry)}>{entry.title}
                                                </Card.Title>
                                                <Card.Text>
                                                    {entry.content}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )}
                                            <Modal
                                                size="lg"
                                                show={showEntry}
                                                onHide={() => setShowEntry(false)}
                                                aria-labelledby="example-modal-sizes-title-lg"
                                            >
                                                <Form onSubmit={handleEdit}>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        {/* <Form.Label>Thread Title</Form.Label>
                                                        <Form.Control placeholder='Title goes here.'
                                                            as="textarea"
                                                            rows={1}
                                                            name="title"
                                                            onChange={handleChange}
                                                            value={form.title}
                                                        />
                                                        <br /> */}
                                                        <Form.Label>Public question or comment</Form.Label>
                                                        <Form.Control type='content' 
                                                            as="textarea"
                                                            rows={3}
                                                            name="content"
                                                            onChange={handleEditChange}
                                                            value={editForm.content}
                                                        />
                                                    </Form.Group>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Cancel
                                                    </Button>
                                                    <Button variant="primary"
                                                        type="submit">
                                                        Edit Post
                                                    </Button>
                                                </Form>
                                            </Modal>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}














//   return (
//     <div>
//       <h1>ConvoCare Forum</h1>
//       <Form onSubmit={handleSubmit}>
//   <Form.Group controlId="formBasicTitle">
//     <Form.Label>Title</Form.Label>
//     <Form.Control 
//     type="title" 
//     placeholder="Enter Title" 
//     value={form.title} 
//     onChange={handleChange} />

//   </Form.Group>

//   <Form.Group controlId="formBasicContent">
//     <Form.Label>Content</Form.Label>
//     <Form.Control 
//     type="content" 
//     placeholder="Content"  
//     value={form.content} 
//     onChange={handleChange}/>
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Post Thread
//   </Button>
// </Form>
//     </div>
//   );
// }