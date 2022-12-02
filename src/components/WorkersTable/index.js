import './index.scss';

function WorkersTable() {
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
      <p className="table__item"> 1 </p>
      <p className="table__item"> 2 </p>
      <p className="table__item"> 3 </p>
      <p className="table__item"> 4 </p>


      <p className="table__item" data-active="true"> 1 </p>
      <p className="table__item"> 2 </p>
      <p className="table__item"> 3 </p>
      <p className="table__item"> 4 </p>

      <p className="table__item"> 1 </p>
      <p className="table__item"> 2 </p>
      <p className="table__item"> 3 </p>
      <p className="table__item"> 4 </p>
    </div>

  </div>
  );
}

export default WorkersTable;