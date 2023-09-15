import React, { useState } from 'react';

interface CardProps {
  title: string;
  content: string;
  onDelete: () => void;
  onEdit: () => void;
}

const Card: React.FC<CardProps> = ({ title, content, onDelete, onEdit }) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Düzenlenen başlığı ve içeriği kaydetmek için burada bir eylem gönderin
    // Örneğin, parent bileşeninizde bir fonksiyon aracılığıyla
    // veya Redux kullanarak verileri güncelleyebilirsiniz.
    setIsEditing(false); // Düzenleme modunu kapatmak için
  };

  return (
    <div className='h-60 relative'>
      <div className="card border bg-yellow-200  h-full flex flex-col overflow-hidden">
        <div className='border border-stone-700  h-1/3 flex justify-center items-center'>
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            <h2>{editedTitle}</h2>
          )}
        </div>

        <div className='overflow-auto h-2/3 pt-2 whitespace-pre-line break-words'>
          {isEditing ? (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            <p>{editedContent}</p>
          )}
        </div>
        <div>
          <button onClick={onDelete} className='absolute bottom-0 right-0 bg-red-800 hover:bg-red-500 border rounded-sm text-white px-1'>Delete</button>
        </div>
        <div>
          {isEditing ? (
            <button onClick={handleSave} className='absolute bottom-0 left-0 bg-green-900 hover:bg-green-600 border rounded-sm text-white px-1'>Kaydet</button>
          ) : (
            <button onClick={handleEdit} className='absolute bottom-0 left-0 bg-green-900 hover:bg-green-600 border rounded-sm text-white px-1'>Düzenle</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
