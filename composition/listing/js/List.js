'use strict';

const List = ({items}) => {
  function getColor(type) {
    switch(type) {
      case 'unisex':
        return "black";
      case 'male':
        return "blue";
      case 'female':
        return "orange";
    }
  }

  return (
    <main>
      {items.map(item => {
        return <Item color={getColor(item.type)} item={item} />;
      })}
    </main>
  );
}
