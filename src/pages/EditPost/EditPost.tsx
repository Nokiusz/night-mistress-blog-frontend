import React, { useRef, useState } from 'react';
import { Button, Container, Heading, InputWithLabel, Wrapper } from './EditPost.styles';
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

    updatePost({
      postId: post.postId,
      thumbnail: thumbnailRef.current?.input?.value ?? '',
      description: descriptionRef.current?.input?.value ?? '',
      author: {
        id: post.author.id,
        email: post.author.email,
        firstName: post.author.firstName,
        lastName: post.author.lastName,
        avatarLink: post.author.avatarLink
      },
      friendlyName: friendlyNameRef.current?.input?.value ?? '',
      authorId: user?.id ?? 0,
      created: post.created,
      title: titleRef.current?.input?.value ?? '',
      content: fileState.file ? fileState.content : post.content,
      tags: tagsRef.current?.input?.value.split(',').map((i) => i.trim()) ?? []
    });
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
