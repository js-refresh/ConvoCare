import { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';


export default function Blog() {
  const [form, setForm] = useState({
    title: '',
    content: '',
  });

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
      <h1>ConvoCare Forum</h1>
      <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicTitle">
    <Form.Label>Title</Form.Label>
    <Form.Control 
    type="title" 
    placeholder="Enter Title" 
    value={form.title} 
    onChange={handleChange} />
    
  </Form.Group>

  <Form.Group controlId="formBasicContent">
    <Form.Label>Content</Form.Label>
    <Form.Control 
    type="content" 
    placeholder="Content"  
    value={form.content} 
    onChange={handleChange}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Post Thread
  </Button>
</Form>
    </div>
  );
}