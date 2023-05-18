import React, { useState } from 'react';
import usePosts from '../../../hooks/usePosts';
import { AutoComplete } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Container, Icon } from './Search.styles';

const { Option } = AutoComplete;

const Search = () => {
  const { posts } = usePosts();

  const allTags = posts.reduce<string[]>(
    (tags, post) => [...tags, ...post.tags],
    []
  );

  const uniqueTags = [...new Set(allTags)];

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };

  const filteredTags = uniqueTags.filter((tag) =>
    tag.toLowerCase().includes(inputValue.toLowerCase())
  );

  const options = filteredTags.map((tag) => (
    <Option key={tag} value={tag}>
      {tag}
    </Option>
  ));

  return (
    <Container>
      <AutoComplete
        value={inputValue}
        onChange={handleInputChange}
        onSelect={handleSelect}
        style={{ width: '100%' }}
        placeholder="Search by tag"
        dropdownStyle={{ maxHeight: '105px', overflowY: 'auto' }}
      >
        {options}
      </AutoComplete>
      <Icon>
        <SearchOutlined/>
      </Icon> 
    </Container>
  );
};

export default Search;
