import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";

function PostsList() {
  return(
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Rin" body="React.js is awesome!"/>
        <Post author="Phynn" body="Lorem ipsum sit dolor" />
        <Post author="Ryan" body="Lorem test" />
      </ul>
    </>
  );
}

export default PostsList;