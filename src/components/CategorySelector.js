import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Temperature from './Temperature';
import Length from './Length';
import Weight from './Weight';
import Speed from './Speed';
import Cooking from './Cooking';

const CategorySelector = () => {
  const [displaying, setDisplaying] = useState('');

  const renderComponent = () => {
    switch (displaying) {
      case 'temperature':
        return <Temperature setDisplaying={setDisplaying} />;
      case 'length':
        return <Length setDisplaying={setDisplaying} />;
      case 'weight':
        return <Weight setDisplaying={setDisplaying} />;
      case 'speed':
        return <Speed setDisplaying={setDisplaying} />;
      case 'cooking':
        return <Cooking setDisplaying={setDisplaying} />;
      default:
        return <ButtonGroup setDisplaying={setDisplaying} />;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default CategorySelector;
