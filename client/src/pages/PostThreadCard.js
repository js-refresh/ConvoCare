import { useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { useHistory } from 'react-router';


export default function Thread() {
    let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [form, setForm] = useState({
        title: '',
        content: '',
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const history = useHistory();

    const handleChange = (e) => {
        setForm({
            ...form,
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
                if (data.error) {
                    alert(data.error);
                } else {
                    alert('thread created')
                }
            });
    };

    return (
        <div>
            <Container>
                <Row >
                    <Col className='user-profile-column' md={12} style={{ border: 'solid black 1px' }}>
                        <h1>ConvoCare Forum</h1>
                        <p>Ask the community or share stories</p>
                        <div style={{ marginTop: '25px' }}>
                            <div>
                                <Button onClick={handleShow} style={{ float: 'right', marginBottom: '15px' }}>Post a New Thread</Button>
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
                                        <Form.Group controlId="formBasicTitle">
                                            <Form.Label>Thread Title</Form.Label>
                                            <Form.Control type="title" placeholder='Please title your entry.' as="textarea" rows={1} />
                                            <br />
                                            <Form.Label>Public question or comment</Form.Label>
                                            <Form.Control type='content' placeholder='Start writing about whatever
                                            youd like!'as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                </Button>
                                    <Button variant="primary" onClick={handleSubmit}>
                                        Post
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            <Card style={{ height: '65vh', width: '100%', marginTop: '25px', marginBottom: '25px' }}>
                                <Card.Body style={{ overflowY: 'scroll' }}>
                                    {cardArray.map((entry) =>
                                        // replace card array with journal entries from backend tied to user
                                        <Card style={{ width: '100%', marginBottom: '5px' }}>
                                            <Card.Body>
                                                <Card.Title>Thread Title</Card.Title>
                                                <Card.Text>
                                                    Thread Content
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