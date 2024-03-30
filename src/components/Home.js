import { useEffect, useState } from "react";
import "./default.css";
import { useNavigate } from "react-router-dom";
const Default = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  const visit = () => {
    navigate("/item/id");
    
  }

  const run = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    run();
  }, []);

  return (
    <div className="main">
      <div className="navbar">
        <p>TravelMedia.in</p>
        <div className="options"></div>
      </div>
      <div className="para">
        <h3>Social Media for Travellers</h3>
      </div>
      <div className="input">
        <input />
      </div>
      <div className="container">
        {
        posts.map((x) => {
          return (
            <div key={x.id} className="Post">
              <div className="image">
                <img src={` https://picsum.photos/200?random=${x.id}`} />
              </div>
              <h2>{x.title}</h2>

              <div className="low">
               <div className="para1"><p>{x.body}</p></div>
               <button className="btn1" onClick={visit}> btn </button>
              </div>
            </div>
          );
        }) 
        }
      </div>
    </div>
  );
};
export default Default;
