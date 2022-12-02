import { useRef } from 'react';
import { ViewportList } from 'react-viewport-list';

const ItemList = ({ items }) => 
{
  const ref = useRef(null);

  return (
    <div className="scroll-container" ref={ref}>
      <ViewportList
        viewportRef={ref}
        items={items}
      >
        {(item) => (
          <div key={item.id} className="item">
            {item.id}
          </div>
        )}
      </ViewportList>
    </div>
  );
};

export default { ItemList };