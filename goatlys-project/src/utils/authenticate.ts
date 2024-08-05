const handleLogin = (username: string, password: string) => {
    const user = localStorage.getItem("user");  
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.username === username && parsedUser.password === password) {
        return true;
      } else {
        alert("Invalid credentials");
        return false;
      }
    } else {
      alert("User not found");
      return false;
    }
  };
  
  const handleSignup = (email: string, username: string, password: string) => {
    const user = { email, username, password };
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  };
  
  
  
  export { handleLogin, handleSignup };
  