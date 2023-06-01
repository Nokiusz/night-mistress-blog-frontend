import React, { useRef, useState } from 'react';
import { Button, Container, Heading, InputWithLabel, Warning, Wrapper } from './EditPost.styles';
import { Input, InputRef } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import usePost from '../../hooks/usePost';
import { Spinner } from '../../components';
import { Buffer } from 'buffer';

interface FileState {
  file: File | null;
  content: string;
}

const EditPost = () => {
  const [fileState, setFileState] = useState<FileState>({
    file: null,
    content: ''
  });

  const [warning, setWarning] = useState('');
  const { user } = useAuth();
  const titleRef = useRef<InputRef>(null);
  const thumbnailRef = useRef<InputRef>(null);
  const tagsRef = useRef<InputRef>(null);
  const friendlyNameRef = useRef<InputRef>(null);
  const descriptionRef = useRef<InputRef>(null);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target?.result?.toString() ?? '';
        const content = Buffer.from(result).toString('base64');
        setFileState({
          file,
          content
        });
      };
      reader.readAsText(file);
    }
  };

  const { slug } = useParams();

  if (!slug) {
    return <></>;
  }

  const { post, updatePost, loading } = usePost(slug);

  const handleUpdatePost = () => {
    if (!post) return;

    const postId = post.postId;
    const thumbnail = thumbnailRef.current?.input?.value ?? '';
    const description = descriptionRef.current?.input?.value ?? '';
    const author = {
      id: post.author.id,
      email: post.author.email,
      firstName: post.author.firstName,
      lastName: post.author.lastName,
      avatarLink: post.author.avatarLink
    };
    const friendlyName = friendlyNameRef.current?.input?.value ?? '';
    const authorId = user?.id ?? 0;
    const created = post.created;
    const title = titleRef.current?.input?.value ?? '';
    const content = fileState.file ? fileState.content : post.content;
    const tags = tagsRef.current?.input?.value.split(',').map((i) => i.trim()) ?? [];

    if (!friendlyName || !title) {
      return setWarning('Please fill in all required fields');
    }

    updatePost({ postId, thumbnail, description, author, friendlyName, authorId, created, title, content, tags });
  };

  return (
    <>
      {loading && <Spinner />}
      {post && (
        <Wrapper>
          <Container>
            <Heading>Edit Post</Heading>
            <InputWithLabel>
              <label htmlFor="title">Title*</label>
              <Input
                id="title"
                name="title"
                defaultValue={post.title}
                ref={titleRef}
                placeholder="Title"
              />
            </InputWithLabel>
            <InputWithLabel>
              <label htmlFor="friendly-name">Friendly name*</label>
              <Input
                id="friendly-name"
                name="friendly-name"
                defaultValue={post.friendlyName}
                placeholder="Friendly name"
                ref={friendlyNameRef}
              />
            </InputWithLabel>
            <InputWithLabel>
              <label htmlFor="thumbnail">Article Thumbnail</label>
              <Input
                id="thumbnail"
                name="thumbnail"
                defaultValue={post.thumbnail}
                placeholder="Thumbnail URL (leave empty for default)"
                ref={thumbnailRef}
                prefix={<LockOutlined />}
              />
            </InputWithLabel>
            <InputWithLabel>
              <label htmlFor="file">Markdown file</label>
              <Input
                type="file"
                id="file"
                name="file"
                placeholder="File"
                accept=".md"
                onChange={handleFileInputChange}
              />
            </InputWithLabel>
            <InputWithLabel>
              <label htmlFor="tags">Tags</label>
              <Input
                id="tags"
                name="tags"
                defaultValue={post.tags}
                placeholder="Tags, coma separated"
                ref={tagsRef}
              />
            </InputWithLabel>
            <InputWithLabel>
              <label htmlFor="description">Description</label>
              <Input
                id="description"
                name="description"
                defaultValue={post.description}
                placeholder="Description"
                ref={descriptionRef}
              />
            </InputWithLabel>
            <Warning>{warning}</Warning>
            <Button
              onClick={handleUpdatePost}
              variant="primary"
            >
              Update Post
            </Button>
          </Container>
        </Wrapper>
      )}
    </>
  );
};

export default EditPost;
