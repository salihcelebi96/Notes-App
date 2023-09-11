import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewItem } from '../reducers/inputReducer';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const inputStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2rem',
  padding: '2rem',
};

const buttonStyle = {
  background: '#1976D2',
  color: 'white',
};

const Input: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [itemIdCounter, setItemIdCounter] = useState<number>(1);

  const handleAddItem = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      const newItemData = {
        id: itemIdCounter,
        title: title,
        content: content,
      };

      setItemIdCounter(itemIdCounter + 1);

      dispatch(addNewItem(newItemData));

      setTitle('');
      setContent('');

      console.log('Yeni Öğe Verileri:', newItemData);
    }
  };

  return (
    <Paper elevation={3} sx={inputStyle}>
      <TextField
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: '2rem' }}
      />
      <TextField
        type="text"
        placeholder="Content"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ marginBottom: '2rem' }}
      />
      <Button onClick={handleAddItem} variant="contained" sx={buttonStyle}>
        Ekle
      </Button>
    </Paper>
  );
};

export default Input;
