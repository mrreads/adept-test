import './index.scss';

function CompaniesTable() {
  return (
    <div className='companies-table'>

      <div className='companies-header'>
        <p className='companies-header__title'>Компании</p>

        <p className='companies-checkbox__text'>Выделить всё</p>
      </div>

      <div className="table title">
        <p className="table__item"> Чекбокс </p>
        <p className="table__item"> Название компании </p>
        <p className="table__item"> Кол-во сотрудников </p>
        <p className="table__item"> Адрес </p>
      </div>

      <div className="table">
        <p className="table__item"> 1 </p>
        <p className="table__item"> 2 </p>
        <p className="table__item"> 3 </p>
        <p className="table__item"> 4 </p>

        <p className="table__item"> 1 </p>
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

export default CompaniesTable;