import {useState} from 'react';
import classes from './NewPost.module.css';

function NewPost() {
  const [ enteredBodyText, setEnteredBodyText ] = useState('');

  function changeBodyHandler(event) {
    setEnteredBodyText(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>{enteredBodyText}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;