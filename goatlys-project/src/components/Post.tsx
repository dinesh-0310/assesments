import React from "react";
import {
  PostContainer,
  PostContent,
  PostFooter,
  PostHeader,
  PostTime,
  UserAvatar,
  UserInfo,
  UserName,
} from ".";
import {formatRelativeTime} from '../utils'

interface PostProps {
  user: string;
  avatar: string;
  time: Date;
  content: string;
  comments: number;
}

const Post: React.FC<PostProps> = ({
  user,
  avatar,
  time,
  content,
  comments,
}) => {
  return (
    <PostContainer>
      <PostHeader>
        <UserInfo>
          <UserAvatar src={avatar} alt={user} />
          <div>
            <UserName>{user}</UserName>
            <PostTime>{formatRelativeTime(time)}</PostTime>
          </div>
        </UserInfo>
      </PostHeader>
      <PostContent>{content}</PostContent>
      <PostFooter>{comments ?? 0} comments</PostFooter>
    </PostContainer>
  );
};

export { Post };
