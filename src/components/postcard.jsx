import React from "react";
import LikeButton from "./likebutton"; // Import LikeButton

const PostCard = ({ post }) => {
  return (
    <div className="post-card" style={{ border: "1px solid #ccc", padding: "16px", margin: "10px", borderRadius: "8px" }}>
      <img src={post.profilePic} alt={post.username} style={{ width: "50px", borderRadius: "50%" }} />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
