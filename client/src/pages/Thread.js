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
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Comments from "../components/Comments";
import "./thread.css";
import { ReactComponent as Friends } from "../images/friends.svg";

export default function Thread() {
  const user = useSelector((state) => state.user);
  const [activeEntry, setActiveEntry] = useState({
    title: "",
    content: "",
    id: null,
  });
  const history = useHistory();
  const [form, setForm] = useState({
    title: "",
    content: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showEntry, setShowEntry] = useState(false);
  const handleCloseEntry = () => setShowEntry(false);
  const handleShowEntry = (entry) => {
    setShowEntry(true);
    setEditForm({ title: entry.title, content: entry.content });
    setActiveEntry(entry);
  };
  const [showEditForm, setShowEditForm] = useState(false);
  const handleEditFormShow = () => {
    setShowEditForm(true);
    setShowEntry(false);
    setIsEdit(true);
  };
  const handleEditFormClose = () => setShowEditForm(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editForm, setEditForm] = useState({
    content: "",
  });

  const [threadEntries, setThreadEntries] = useState([]);
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
    fetch("/api/v1/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: form.title,
        content: form.content,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          fetch("/api/v1/threads")
            .then((res) => res.json())
            .then((data) => {
              setThreadEntries(data);
            });
          alert("thread created");
        }
      });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    fetch(`/api/v1/threads/${activeEntry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: editForm.title,
        content: editForm.content,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          setShowEntry(false);
          // setThreadEntries(data)
          fetch("/api/v1/threads")
            .then((res) => res.json())
            .then((data) => {
              setThreadEntries(data);
              setShowEditForm(false);
            });
          alert("thread updated");
        }
      });
  };

  useEffect(() => {
    fetch("/api/v1/threads")
      .then((res) => res.json())
      .then((data) => {
        setThreadEntries(data);
      });
  }, []);

  return (
      <Container>
        <Row>
          <Col
            className="user-profile-column"
            md={12}
            style={{
              boxShadow:
                "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            }}
          >
            <div>
              <h1 style={{ color: "#026296" }}>ConvoCare Forum</h1>
              <div className='info'>
                <h4 style={{margin: '0 auto', textAlign: 'center', width: '700px', maxWidth: '100%'}}>
                  Connect with our community! Create a new discussion or comment on
                  existing threads.
                </h4>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <div className='svg'>
                  <Friends
                    style={{
                      width: "auto",
                      height: "150px",
                    }}
                  />
                </div>
                <div>
                  <div className="Button">
                    <Button
                      onClick={handleShow}
                      style={{marginBottom: '20px'}}
                    >
                      New Thread
                    </Button>
                    {
                      // button will open up modal for new entry
                    }
                  </div>
                </div>
              </div>
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
                  <Modal.Title>New Thread Entry</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                  <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Thread Title</Form.Label>
                      <Form.Control
                        placeholder="Please title your thread"
                        as="textarea"
                        rows={1}
                        name="title"
                        onChange={handleChange}
                        value={form.title}
                      />
                      <Form.Label style={{ marginTop: "5px" }}>
                        Thread Body
                      </Form.Label>
                      <Form.Control
                        type="content"
                        placeholder="Write something to discuss with
                                            the community!"
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
                      onClick={handleClose}
                      type="submit"
                    >
                      Post Thread
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal>
              {
                // CONTAINER CARD FOR MAPPED ENTRIES
              }
              <Card
                style={{
                  height: "65vh",
                  width: "100%",
                  marginBottom: "25px",
                }}
              >
                <Card.Body style={{ overflowY: "scroll" }}>
                  {
                    //THREAD ENTRIES MAP BELOW
                  }
                  {threadEntries.map((entry) => (
                    // replace card array with thread entries from backend tied to user
                    <Card
                      key={entry.id}
                      style={{ width: "100%", marginBottom: "5px" }}
                      onClick={() => handleShowEntry(entry)}
                    >
                      <Card.Body>
                        <Card.Title>
                          {entry.title}
                          <span style={{ float: "right" }}>
                            {new Date(entry.createdAt)
                              .toString()
                              .split(" ")
                              .splice(0, 4)
                              .join(" ")}
                          </span>
                        </Card.Title>
                        <Card.Text>{entry.content}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                  <Modal
                    size="lg"
                    show={showEntry}
                    onHide={() => setShowEntry(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <h3>{activeEntry.title}</h3>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{activeEntry.content}</Modal.Body>

                    <Modal.Footer>
                      {user ? (
                        <Button variant="primary" onClick={handleEditFormShow}>
                          Edit post
                        </Button>
                      ) : (
                        <span></span>
                      )}
                    </Modal.Footer>
                    <Comments activeEntryId={activeEntry.id} />
                  </Modal>

                  {
                    // EDIT THREAD CONTENT MODAL BELOW
                  }

                  {isEdit && (
                    <Modal
                      size="lg"
                      show={showEditForm}
                      onHide={handleEditFormClose}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Edit Thread Entry</Modal.Title>
                      </Modal.Header>
                      <Form onSubmit={handleEdit}>
                        <Modal.Body>
                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Thread Title</Form.Label>
                            <Form.Control
                              placeholder="Title goes here."
                              as="textarea"
                              rows={1}
                              name="title"
                              onChange={handleEditChange}
                              value={editForm.title}
                            />
                            <br />
                            <Form.Label>Public question or comment</Form.Label>
                            <Form.Control
                              type="content"
                              as="textarea"
                              rows={3}
                              name="content"
                              onChange={handleEditChange}
                              value={editForm.content}
                            />
                          </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={handleEditFormClose}
                          >
                            Cancel
                          </Button>

                          <Button variant="primary" type="submit">
                            Edit Post
                          </Button>
                        </Modal.Footer>
                      </Form>
                    </Modal>
                  )}
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
  );
}
