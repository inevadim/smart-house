import React from 'react';
import style from './Content.module.scss';
import { Nav } from './nav/Nav';
import { Room } from './room/Room';

export const Content = () => {
  return (
    <div className={style.content}>
      <Nav />
      <Room />
    </div>
  );
};
