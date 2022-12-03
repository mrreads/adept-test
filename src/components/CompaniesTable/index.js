import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { add } from '../../store/slices/companiesSlice';

import Checkbox from '../Checkbox';
import './index.scss';

function CompaniesTable({selectedCompanies, setSelectedCompanies}) {
  const companies = useSelector((state) => state.companies.list);
  const workers = useSelector((state) => state.workers.list);
  const dispatch = useDispatch();

  const handleCompany = (bool, id) => {
    if (bool)
      setSelectedCompanies([...selectedCompanies, +id]);
    else
      setSelectedCompanies(selectedCompanies.filter(c => c !== id));
  }

  const companyIsSelected = (id) => {
     return selectedCompanies.indexOf(+id) >= 0 ? true : false;
  }

  const selectAllCompanies = () => {
    if (allCompaniesSelected)
      setSelectedCompanies([]);
    else
      setSelectedCompanies(companies.map(c => c.id));
  }

  const [allCompaniesSelected, setAllCompaniesSelected] = useState(false);
  useEffect(() => {
    setAllCompaniesSelected(selectedCompanies.length === companies.length);
  }, [companies, selectedCompanies]);

  return (
    <div className='companies-table'>

      <div className='companies-header'>
        <p className='companies-header__title'>Компании</p>

        <p className='companies-checkbox__text'>Выделить всё</p>
        <Checkbox customToggle customStatus={allCompaniesSelected} callback={selectAllCompanies} />
      </div>

      <div className="table title">
        <p className="table__item"> </p>
        <p className="table__item"> Название компании </p>
        <p className="table__item"> Кол-во сотрудников </p>
        <p className="table__item"> Адрес </p>
      </div>

      <div className='table-control'>
        <button className="table__button" onClick={() => dispatch(add())}> Добавить компанию </button>
      </div>


      <div className="table">

        {
          companies.map(company => {
            return (
            <React.Fragment key={company.id}>
                <div className="table__item" data-active={companyIsSelected(company.id)} data-id={company.id}> 
                  <Checkbox customToggle customStatus={companyIsSelected(company.id)} callback={(e, value) => handleCompany(value, company.id) } /> 
                </div>
                <p className="table__item"> {company.name} </p>
                <p className="table__item"> { workers.filter(w => w.company === company.id).length } </p>
                <p className="table__item"> {company.address} </p>
            </React.Fragment>)
          })
        }

      </div>

    </div>
  );
}

export default CompaniesTable;