import React from 'react';

export default function Header(props) {
  return (
    <div>
      <h1>{props.data.welcome}</h1>
      <h1>{props.data.Dob}</h1>
      <h1>{props.data.title}</h1>
    </div>
  );
}
