import React from 'react';
import { useSelector } from 'react-redux'
import './index.scss';

function WorkersTable() {
  const workers = useSelector((state) => state.workers.list)

  return (
    <div className='workers-table'>

    <div className='workers-header'>
      <p className='workers-header__title'>Сотрудники</p>

      <p className='workers-checkbox__text'>Выделить всё</p>
    </div>

    <div className="table title">
      <p className="table__item"> Чекбокс </p>
      <p className="table__item"> Фамилия </p>
      <p className="table__item"> Имя </p>
      <p className="table__item"> Должность </p>
    </div>

    <div className="table">
    {
          workers.map(worker => {
            return (
            <React.Fragment key={worker.id}>
                <p className="table__item" data-active="false" data-id={worker.id}> ч </p>
                <p className="table__item"> {worker.name} </p>
                <p className="table__item"> {worker.workers} </p>
                <p className="table__item"> {worker.address} </p>
            </React.Fragment>)
          })
        }
    </div>

  </div>
  );
}

export default WorkersTable;