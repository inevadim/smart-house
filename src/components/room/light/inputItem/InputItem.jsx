import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeLight } from '../../../../redux/roomSlice';
import style from './InputItem.module.scss';

export const InputItem = ({ defValue, id }) => {
  const dispatch = useDispatch();
  const [countInput, setCountInput] = useState(defValue);

  let shadowLight = `4px 4px 30px ${defValue / 5}px rgba(202, 223, 16, 0.719)`;
  const changeInput = id => {
    let item = {
      id,
      countInput,
    };
    dispatch(changeLight(item));
  };
  return (
    <div>
      <input onChange={e => setCountInput(e.target.value)} defaultValue={defValue} type="range" />
      countInput:{countInput}
      <div onClick={() => changeInput(id)}>save</div>
      <div style={{ boxShadow: shadowLight }} className={style.light}></div>
      <div className={style.lightUnder}></div>
    </div>
  );
};
