import React from 'react';

interface CardProps {
  title: string;
  content: string;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ title, content,onDelete }) => {
  return (
    <div className='h-48 relative '>
      <div className="card border h-full flex flex-col overflow-hidden">
        <div className='border h-1/3 flex justify-center items-center'>  
            <h2 className=''>{title}</h2>
        </div>
      
        <div className='overflow-auto h-2/3 pt-2 whitespace-pre-line break-words'>
          <p className='h-full'>{content}</p>
        </div>
        <button onClick={onDelete} className='absolute bottom-0 right-0 bg-red-400 hover:bg-red-800 border rounded-sm text-white px-1'>Delete</button>
      </div>
    </div>
  );
};

export default Card;
