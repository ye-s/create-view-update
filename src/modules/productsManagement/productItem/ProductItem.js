import React from 'react';

const ProductItem = (props) => {

  return (
    <div>
      <p>{props.id}. {props.name}</p>
    </div>
  );
}

const MemoTaskItem = React.memo(ProductItem, (prevProps, nextProps) => {
  let taskChanged = true
  if (prevProps.id === nextProps.id
    && prevProps.name === nextProps.name) {
    taskChanged = false;
  }

  return taskChanged;
});

export default MemoTaskItem;
