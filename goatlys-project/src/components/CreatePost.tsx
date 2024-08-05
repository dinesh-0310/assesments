import { useState } from "react";
import { Button, CreatePostContainer, InputArea } from ".";


interface CreatePostProps {
    handleCreatePost: (content: string) => void;
};

const CreatePost: React.FC<CreatePostProps> = ({ handleCreatePost }) => {
    const [content, setContent] = useState<string>("");

    const onCreateNewPost = (content: string) => {
        if(!content) return;
        const contentValue = content;
        setContent("");
        handleCreatePost(contentValue);
        
    }
    return (
      <CreatePostContainer>
        <InputArea value={content} placeholder="How are you feeling today?" onChange={(e) => setContent(e?.target?.value)}/>
        <Button onClick={()=> onCreateNewPost(content)}>Post</Button>
      </CreatePostContainer>
    );
  };

  export { CreatePost }
  