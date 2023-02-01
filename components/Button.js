import React from 'react';

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
}
