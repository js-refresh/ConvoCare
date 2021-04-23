import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useHistory } from "react-router";
import "./Journal.css";

export default function Journal() {
//   let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showEntry, setShowEntry] = useState(false);
  const handleCloseEntry = () => setShowEntry(false);
  const handleShowEntry = () => setShowEntry(true);

  const [journalEntries, setJournalEntries] = useState([]);
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
  //     fetch('/api/v1/f')
  //         .then(res => res.json())
  //         .then(data => {
  //             setThreads(data)
  //         })
  // }, [])

  const [form, setForm] = useState({
    description: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/v1/journals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: form.description,
        content: form.content,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          history.push("/");
        }
      });
  };

  useEffect(() => {
    fetch("/api/v1/journals/currentuser")
      .then((res) => res.json())
      .then((data) => {
        setJournalEntries(data);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col
            className="user-profile-column"
            md={12}
            style={{ border: "solid black 1px" }}
          >
            <h1>My Journal</h1>
            <div style={{ marginTop: "25px" }}>
              <div>
                <Button
                  onClick={handleShow}
                  style={{ float: "right", marginBottom: "15px" }}
                >
                  New entry
                </Button>
                {
                  // button will open up modal for new entry
                }
              </div>
              {
                // new modal post
              }
              <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title>New Journal Entry</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                  <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        placeholder="Please title your entry."
                        as="textarea"
                        rows={1}
                        name="description"
                        onChange={handleChange}
                        value={form.description}
                      />
                      <Form.Label>Entry</Form.Label>
                      <Form.Control
                        placeholder="Start writing about whatever
                                            youd like!"
                        as="textarea"
                        rows={3}
                        name="content"
                        onChange={handleChange}
                        value={form.content}
                      />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleClose}
                    >
                      Save your entry
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal>
              <Card
                style={{
                  height: "65vh",
                  width: "100%",
                  marginTop: "25px",
                  marginBottom: "25px",
                }}
              >
                <Card.Body style={{ overflowY: "scroll" }}>
                  {journalEntries.map((entry) => (
                    // replace card array with journal entries from backend tied to user
                    <Card style={{ width: "100%", marginBottom: "5px" }}>
                      <Card.Body>
                        <Card.Title onClick={handleShowEntry}>
                          {entry.description}
                        </Card.Title>
                        <Card.Text>{entry.content}</Card.Text>
                      </Card.Body>
                      <Modal
                        size="lg"
                        show={showEntry}
                        onHide={() => setShowEntry(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>{entry.description}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{entry.content}</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseEntry}>
                            Exit
                          </Button>
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={handleCloseEntry}
                          >
                            Edit your entry.
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Card>
                  ))}
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
