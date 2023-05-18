import calendarIcon from '@assets/calendarIcon.svg';
import defaultPostThumbnail from '@assets/defaultPostThumbnail.jpg';
import defaultAvatar from '@assets/defaultAvatar.svg';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import { Post } from '../../../types';
import formatDate from '../../../utils/formatDate';
import {
  AuthorAvatar,
  CreatedSection,
  DeleteButton,
  Description,
  LeftSection,
  LeftTopSection,
  PostContainer,
  RightSection,
  Tag,
  Tags,
  TitleLink
} from '../Posts.styles';
import { Link } from 'react-router-dom';

import { DeleteOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { BASE_URL } from '../../../constants';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { user } = useAuth();
  const { postId, tags, title, created, author, friendlyName, thumbnail, description } = post;
  const { firstName, lastName, avatarLink } = author;

  const [modalOpen, setModalOpen] = useState(false);

  const deletePost = async (postId: number) => {
    if (!postId) return;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`${BASE_URL}/Post/${postId}`, options);
    window.location.reload();
  };

  return (
    
    <PostContainer
      tabIndex={0}
      key={postId}
    >
      <LeftSection>
        <LeftTopSection>
          <Tags>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          <TitleLink to={`/post/${friendlyName}`}>{title}</TitleLink>
          <Description>{description}</Description>
        </LeftTopSection>
        <CreatedSection>
          <div>
            <img
              src={calendarIcon}
              alt="calendar icon"
              width={16}
              height={16}
            />
            {formatDate(created)}
          </div>
          <div>
            <AuthorAvatar
              src={avatarLink || defaultAvatar}
              alt="avatar"
            />
            {firstName}&nbsp;
            {lastName}
          </div>
          {user && <DeleteButton onClick={() => setModalOpen(true)}>
            <DeleteOutlined />
          </DeleteButton>}
        </CreatedSection>
      </LeftSection>
      <RightSection>
        <Link to={`/post/${friendlyName}`}>
          <img src={thumbnail || defaultPostThumbnail} />
        </Link>
      </RightSection>

      <Modal
        title="Are you sure to delete this post?"
        centered
        open={modalOpen}
        onOk={() => deletePost(postId)}
        onCancel={() => setModalOpen(false)}
      >
        <p>Post id: {postId}</p>
      </Modal>
    </PostContainer>
  );
};

export default PostItem;
