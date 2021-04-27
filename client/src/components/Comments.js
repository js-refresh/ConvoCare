// import bootstrap
import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';

export default function Comments(props) {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState('');
  return (
    <div>
      <div>comments coming soon</div>
      <div>
        {showForm ? (
          <form>
            <TextField
              label="Comment"
              type="text"
              fullWidth
              onChange={(e) => setText(e.target.value)}
              value={text}
              required
            />
            <br />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowForm(!showForm)}
          >
            Add Comment
          </Button>
        )}
      </div>
    </div>
  );
}