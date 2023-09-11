import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Card from './cardPage'; // Yukarıda oluşturduğumuz Card bileşeni
import { deleteItem } from '../reducers/inputReducer'; // Input bileşenindeki öğe silme eylemi

const CardsList: React.FC = () => {
  const dispatch = useDispatch(); 
  const items = useSelector((state: RootState) => state.input.items); 

  const handleDeleteItem = (itemId:number) => {
    // Silme eylemini başlatmak için Redux eylemini kullanın
    dispatch(deleteItem(itemId));
  };
  

  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 mx-1'> 
      {items.map((item) => (
        <div key={item.id} className=""> 
          <Card
            title={item.title} 
            content={item.content}
            onDelete={() => handleDeleteItem(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsList;
