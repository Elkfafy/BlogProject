import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImage"
        src="https://images.pexels.com/photos/887353/pexels-photo-887353.jpeg?cs=srgb&dl=pexels-designecologist-887353.jpg&fm=jpg"
        alt="post"
        width="100%"
        height="280px"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link to="/post/2" className="link">
            Lorem, ipsum dolor sit
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        debitis labore sint autem adipisci aut veniam repellendus culpa
        voluptatem numquam. At optio dicta laboriosam reiciendis asperiores
        ipsam. Iure, exercitationem nisi. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Similique debitis labore sint autem adipisci aut
        veniam repellendus culpa voluptatem numquam. At optio dicta laboriosam
        reiciendis asperiores ipsam. Iure, exercitationem nisi. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Similique debitis labore
        sint autem adipisci aut veniam repellendus culpa voluptatem numquam. At
        optio dicta laboriosam reiciendis asperiores ipsam. Iure, exercitationem
        nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        debitis labore sint autem adipisci aut veniam repellendus culpa
        voluptatem numquam. At optio dicta laboriosam reiciendis asperiores
        ipsam. Iure, exercitationem nisi. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Similique debitis labore sint autem adipisci aut
        veniam repellendus culpa voluptatem numquam. At optio dicta laboriosam
        reiciendis asperiores ipsam. Iure, exercitationem nisi. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Similique debitis labore
        sint autem adipisci aut veniam repellendus culpa voluptatem numquam. At
        optio dicta laboriosam reiciendis asperiores ipsam. Iure, exercitationem
        nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        debitis labore sint autem adipisci aut veniam repellendus culpa
        voluptatem numquam. At optio dicta laboriosam reiciendis asperiores
        ipsam. Iure, exercitationem nisi.
      </p>
    </div>
  );
}
