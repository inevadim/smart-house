import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Light.module.scss';

import { addLight, deleteLight } from '../../../redux/roomSlice';
import { InputItem } from './inputItem/InputItem';

export const Light = () => {
  const dispatch = useDispatch();
  const lightState = useSelector(state => state.room.light);

  useEffect(() => {
    localStorage.setItem('light', JSON.stringify(lightState));
  }, [lightState]);
  const addRangeInput = valueInput => {
    const item = {
      id: Date.now(),
      valueInput,
    };
    dispatch(addLight(item));
  };

  const deleteInput = itemId => {
    dispatch(deleteLight(itemId));
  };
  return (
    <div>
      LIGHT
      <br />
      <div onClick={() => addRangeInput(prompt())}>add light</div>
      {lightState.map(item => {
        return (
          <div key={item.id}>
            {item.id}
            <InputItem defValue={item.valueInput} id={item.id} />

            <div className={style.delItem} onClick={() => deleteInput(item.id)}>
              delete
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
