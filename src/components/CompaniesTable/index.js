import React from 'react';
import { useSelector } from 'react-redux'
import './index.scss';

function CompaniesTable() {
  const companies = useSelector((state) => state.companies.list)

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

        {
          companies.map(company => {
            return (
            <React.Fragment key={company.id}>
                <p className="table__item" data-active="false" data-id={company.id}> ч </p>
                <p className="table__item"> {company.surname} </p>
                <p className="table__item"> {company.name} </p>
                <p className="table__item"> {company.job} </p>
            </React.Fragment>)
          })
        }

      </div>

    </div>
  );
}

export default CompaniesTable;