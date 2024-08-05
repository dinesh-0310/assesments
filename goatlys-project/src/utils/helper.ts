const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);    
      return parsedUser;
    }
    return null;
  };
  
  const handleNewPost = (content: string) => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      const currentPosts = parsedUser?.posts ?? [];
      const postDetails = {
          user: parsedUser.username,
          avatar: 'https://via.placeholder.com/40',
          time: new Date().toLocaleString(),
          content,
      }
      const updatedUser = {
        ...parsedUser,
        posts: [postDetails, ...currentPosts ],
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };
  
  export { getCurrentUser, handleNewPost };
  