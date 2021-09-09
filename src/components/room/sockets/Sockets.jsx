import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Sockets.module.scss';
import { addSocket, deleteSocket, changeVisibleSocket } from '../../../redux/roomSlice';
export const Sockets = () => {
  const dispatch = useDispatch();
  const socketState = useSelector(state => state.room.sockets);
  const changeVisible = itemId => {
    dispatch(changeVisibleSocket(itemId));
  };
  useEffect(() => {
    localStorage.setItem('sockets', JSON.stringify(socketState));
  }, [socketState]);
  const deleteSocketState = itemId => {
    dispatch(deleteSocket(itemId));
  };
  const addSocketState = nameSocket => {
    const item = {
      id: Date.now(),
      nameSocket,
      activ: false,
    };
    dispatch(addSocket(item));
  };
  return (
    <div className={style.wrapSockets}>
      SOCKETS
      <br />
      <button onClick={() => addSocketState(prompt())}>plus</button>
      {socketState.map(item => {
        return (
          <div key={item.id}>
            socket: {item.nameSocket}
            <div
              onClick={() => changeVisible(item.id)}
              className={item.activ === true ? style.socketActive : style.socketUnActive}></div>
            <div onClick={() => deleteSocketState(item.id)}>delete</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
