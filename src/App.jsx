import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  let [likes, setLikes] = useState(0);
  let [comments, setComments] = useState([]);
  let [load, setLoad] = useState(false);
  let [msg, setMsg] = useState("");
  useEffect(() => {
    if (likes === 5 && comments.length >= 3) {
      setMsg("You're getting impressions");
    } else if (likes === 10 && comments.length >= 5) {
      setMsg("Famous");
    }
    console.log(msg);
  }, [likes, comments.length]);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      alert("Welcome");
    }, 2000);
    setLoad(false);

    // alert("entered");
  }, []);
  useEffect(() => {
    localStorage.setItem("comments", comments);
  }, [comments]);
  return (
    <div className="App">
      <h1>Social Media App</h1>
      <div className="container">
        <div>
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            minima quas
          </h3>
          <div className="likesDisplay">
            <div className="spans">
              <span>Likes : {likes}</span>
              <span>Comments : {comments.length}</span>
            </div>

            <button onClick={() => setLikes(likes + 1)}>👍</button>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setComments([...comments, e.target.comment.value]);
          }}
        >
          <input type="text" placeholder="Enter Comment" name="comment" />
          <button>Add Comment</button>
        </form>
        <div className="msg">{msg}</div>
        {/* {load ? <h1>Loading</h1> : null} */}
      </div>
    </div>
  );
}

export default App;
