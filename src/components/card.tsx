import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Card from './cardPage';
import { deleteItem, editItem } from '../reducers/inputReducer';

const CardsList: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.input.items);

    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');
    const [editingItemId, setEditingItemId] = useState<number | null>(null);

    const handleDeleteItem = (itemId: number) => {
        dispatch(deleteItem(itemId));
    };

    const handleEdit = (item: { id: number; title: string; content: string }) => {
        setEditingItemId(item.id);
        setEditedTitle(item.title);
        setEditedContent(item.content);
    };

    const handleSaveEdit = () => {
        if (editingItemId !== null) {
            
            dispatch(editItem({ id: editingItemId, title: editedTitle, content: editedContent }));
            
            setEditingItemId(null);
        }
    };

    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 mx-1'>
            {items.map((item) => (
                <div key={item.id} className="">
                    <Card
                        title={item.title}
                        content={item.content}
                        onDelete={() => handleDeleteItem(item.id)}
                        onEdit={() => handleEdit(item)}
                    />
                </div>
            ))}
            {editingItemId !== null && (
                <div>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>Kaydet</button>
                </div>
            )}
        </div>
    );
};

export default CardsList;
