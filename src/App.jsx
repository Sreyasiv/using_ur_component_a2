import React from "react";
import PostCard from "./components/postcard"; // Import PostCard
import LikeButton from "./components/likebutton";

function App() {
  const posts = [
    {
      id: 1,
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      username: "JohnDoe",
      content: "Just had an amazing day!",
    },
    {
      id: 2,
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      username: "JaneSmith",
      content: "Loving the new React features! 🚀",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
