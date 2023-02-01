import React from 'react';
import style from "./Component1.module.css"

export default function Component1() {
  return (
    <div>
      <h1 className={style.heading1}>Hello Duniya</h1>
      <p className={style["heading-monu"]}>Lovely Professional University Punjab</p>
    </div>
  );
}
