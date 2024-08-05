import React, { useState } from "react";
import { FeedContainer, Header, SubHeader } from "./styles";
import { CreatePost, Loader, Post } from "../components";
import { postsData } from "../data/posts";
import { getCurrentUser, handleNewPost } from "../utils";

interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [posts , setPosts] = useState(postsData);
    const currentUser = getCurrentUser();
    const userName = currentUser ? currentUser.username : "Jane";
    

    const handleCreatePost = (content: string) => {
        if(!content) return;
        setLoading(true);
        handleNewPost(content);
        const userPosts = getCurrentUser()?.posts ?? [];
        const postList = [...userPosts,...postsData];
        setPosts(postList);
        setLoading(false);
    }

    if (loading) {
        return <Loader />;
      }
  return (
    <FeedContainer>
      <Header>Hello {userName}</Header>
      <SubHeader>
        How are you doing today? Would you like to share something with the
        community?
      </SubHeader>
      <CreatePost handleCreatePost={handleCreatePost} />
      {posts.map((post, index) => (
        <Post
          key={index}
          user={post.user}
          avatar={post.avatar}
          time={post.time}
          content={post.content}
          comments={post.comments}
        />
      ))}
    </FeedContainer>
  );
};

export { Feed };
