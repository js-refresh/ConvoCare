// import bootstrap
import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

export default function Comments(props) {
  const [showForm, setShowForm] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentForm, setCommentForm] = useState('');
  const handleCommentChange = (e) => {
    setCommentForm(e.target.value)
  };
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/v1/threads/${props.activeEntryId}/comments`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            comment: commentForm,
        })
    })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            alert('comment created')
            fetch(`/api/v1/threads/${props.activeEntryId}/comments`)
            .then((res) => res.json())
            .then((data) => {
              setComments(data);
            });
            setCommentForm('')
          }
        })
}
  useEffect(() => {
    fetch(`/api/v1/threads/${props.activeEntryId}/comments`)
        .then((res) => res.json())
        .then((data) => {
            setComments(data);
        });
}, []);

  return (
    <div>
      <h4 style={{paddingLeft: '10px'}}>Comments</h4>
      <Card
       style={{
        height: "30vh",
        width: "100%",
        marginTop: "25px",
        marginBottom: "25px",
      }}
      >
        <Card.Body style={{ overflowY: "scroll" }}>
          {comments.map((comment) =>
          <Card>
            <Card.Body style={{padding: '10px'}}>
              <Card.Text style={{fontSize: '0.85em', fontWeight: 'bold'}}>{comment.username}</Card.Text>
              <Card.Text>{comment.comment} 
                <span style={{ float: "right" }}>
                    {new Date(comment.createdAt)
                    .toString()
                    .split(" ")
                    .splice(0, 4)
                    .join(" ")}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
          )}
        </Card.Body>
      </Card>
      <div style={{padding: '25px 25px'}}>
        {showForm ? (
          <form onSubmit={handleCommentSubmit}>
            <TextField
              label="Comment"
              type="text"
              fullWidth
              onChange={handleCommentChange}
              value={commentForm}
              required
            />
            <br />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              style={{float: 'right', marginTop: '20px', marginBottom: '20px'}}
            >
              Submit
            </Button>
          </form>
        ) : (
          <Button
            color="primary"
            variant="contained"
            onClick={() => setShowForm(!showForm)}
            style={{float: 'right', marginBottom: '20px'}}
          >
            Add Comment
          </Button>
        )}
      </div> 
    </div>
  );
}