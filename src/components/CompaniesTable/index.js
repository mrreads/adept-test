import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { add, remove } from '../../store/slices/companiesSlice';

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

  const deleteCompanies = () => {
    if (selectedCompanies.length > 0) {
      let companiesToRemove = [];
      companies.filter(f => selectedCompanies.indexOf(f.id) >= 0).forEach(c => { 
        companiesToRemove.push(+c.id); 
        dispatch(remove(c));
      });
      setSelectedCompanies(companies.filter(c => companiesToRemove.indexOf(c.id) < 0));
    }
  }

  useEffect(() => {
    console.log(selectedCompanies);
  }, [selectedCompanies]);

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
        <button className={`table__button ${selectedCompanies.length <= 0 ? 'disabled' : ''}`} onClick={deleteCompanies}> Удалить компанию/ии</button>
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