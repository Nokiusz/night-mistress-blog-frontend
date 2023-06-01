import React, { useRef, useState } from 'react';
import { Button, Container, Heading, InputWithLabel, Warning, Wrapper } from './AddPost.styles';
import { BASE_URL } from '../../constants';
import { Input, InputRef } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { PostToCreate } from '../../types';
import { Buffer } from 'buffer';

interface FileState {
  file: File | null;
  content: string;
}

const AddPost = () => {
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

  const navigate = useNavigate();

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target?.result?.toString() ?? '';
        const content = encodeURIComponent(Buffer.from(result).toString('base64'));
        setFileState({
          file,
          content
        });
      };
      reader.readAsText(file);
    }
  };

  const addPost = async (post: PostToCreate) => {
    if (!user) return;

    if (!post.friendlyName || !post.title) {
      return setWarning('Please fill in all required fields');
    }

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    };

    try {
      const response = await fetch(`${BASE_URL}/Post`, fetchOptions);
      if (response.ok) {
        navigate('/');      
      } else {
        throw new Error('Error adding post');
      }
    } catch (error) {
      alert('Error adding post');
    }

  };

  return (
    <>
      <Wrapper>
        <Container>
          <Heading>Add New Post</Heading>

          <InputWithLabel>
            <label htmlFor="title">Title*</label>
            <Input
              id="title"
              name="title"
              ref={titleRef}
              placeholder="Title"
            />
          </InputWithLabel>
          <InputWithLabel>
            <label htmlFor="friendly-name">Friendly name*</label>
            <Input
              id="friendly-name"
              name="friendly-name"
              placeholder="Friendly name"
              ref={friendlyNameRef}
            />
          </InputWithLabel>
          <InputWithLabel>
            <label htmlFor="thumbnail">Article Thumbnail</label>
            <Input
              id="thumbnail"
              name="thumbnail"
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
              placeholder="Tags, coma separated"
              ref={tagsRef}
            />
          </InputWithLabel>
          <InputWithLabel>
            <label htmlFor="description">Description</label>
            <Input
              id="description"
              name="description"
              placeholder="Description"
              ref={descriptionRef}
            />
          </InputWithLabel>
          <Warning>{warning}</Warning>
          <Button
            onClick={() =>
              addPost({
                thumbnail: thumbnailRef.current?.input?.value ?? '',
                description: descriptionRef.current?.input?.value ?? '',
                friendlyName: friendlyNameRef.current?.input?.value ?? '',
                authorId: user?.id ?? 0,
                content: fileState?.content,
                title: titleRef.current?.input?.value ?? '',
                tags: tagsRef.current?.input?.value.split(',').map((i) => i.trim()) ?? [],
                created: new Date().toISOString()
              })
            }
            variant="primary"
          >
            Add Post
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default AddPost;