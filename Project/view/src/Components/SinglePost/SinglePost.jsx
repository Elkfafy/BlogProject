// importing React
import React from "react";

// importing other components

// importing style page
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImage"
          src="https://images.pexels.com/photos/887353/pexels-photo-887353.jpeg?cs=srgb&dl=pexels-designecologist-887353.jpg&fm=jpg"
          alt="single post"
          width="100%"
          height="300px"
        />

        <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcon fa-regular fa-trash-can"></i>
        </div>

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <strong>Ahmed Elkfafy</strong>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>

        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugiat
          pariatur molestias neque debitis eaque quisquam porro sapiente
          placeat, optio blanditiis repellendus velit. Aspernatur, illo vero
          repudiandae laudantium possimus ab? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur maiores atque officia
          labore harum, aliquid amet aut voluptatibus non sit expedita esse
          recusandae nisi culpa sed nesciunt pariatur quam hic. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Et molestias voluptatem
          voluptatibus atque quod quibusdam corporis facilis nesciunt odio.
          Consequatur molestias repellendus obcaecati eligendi quos adipisci
          sint fugiat amet possimus? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Reprehenderit consectetur quod quaerat excepturi
          rerum repellendus, a dignissimos ex amet facilis? Beatae ipsam aut,
          porro vel dolorem in assumenda debitis fugit? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Eius mollitia est vel, tenetur nemo
          quos labore placeat aliquam unde adipisci praesentium, autem
          voluptates voluptas quidem molestias harum illo maiores. Pariatur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          voluptate quos eius, illum temporibus rem expedita quam, saepe
          inventore atque qui? Voluptates minima veritatis maiores quis rerum
          reiciendis porro dicta.
        </p>
      </div>
    </div>
  );
}
