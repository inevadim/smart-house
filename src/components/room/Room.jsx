import React from 'react';
import { Light } from './light/Light';
import style from './Room.module.scss';
import { Sockets } from './sockets/Sockets';

export const Room = () => {
  return (
    <div className={style.room}>
      <Sockets />
      <Light />
    </div>
  );
};
