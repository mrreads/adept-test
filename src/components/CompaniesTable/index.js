import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { add, remove, edit, addMultiply } from '../../store/slices/companiesSlice';

import InfiniteScroll from 'react-infinite-scroller';

import useEditable from './../hooks/useEditable';

import Checkbox from '../Checkbox';
import './index.scss';

function CompaniesTable({selectedCompanies, setSelectedCompanies}) {
  const tableRef = useRef(null);
  const companies = useSelector((state) => state.companies.list);
  const workers = useSelector((state) => state.workers.list);
  const dispatch = useDispatch();

  const editSave = (id, param, content) => {
    dispatch(edit({ id, param, content }))
  }
  useEditable(tableRef, editSave);


  const [allCompaniesSelected, setAllCompaniesSelected] = useState(false);
  useEffect(() => {
    setAllCompaniesSelected(selectedCompanies.length === companies.length);
  }, [companies, selectedCompanies]);
  
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

  const deleteCompanies = () => {
    if (selectedCompanies.length > 0) {
      companies.filter(f => selectedCompanies.indexOf(f.id) >= 0).forEach(c => dispatch(remove(c)));
      setSelectedCompanies([])
    }
  }

  const loadFunc =  () => {
    dispatch(addMultiply(100))
  }

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
        <button className={`table__button ${selectedCompanies.length <= 0 ? 'disabled' : ''}`} onClick={deleteCompanies}> Удалить компанию</button>
      </div>

      <div ref={tableRef}>
        { (companies.length <= 0) ? null : (
        <InfiniteScroll 
            className='table'
            pageStart={0}
            loadMore={ loadFunc }
            hasMore={ (companies.length > 20) ? true : false }
            loader={<React.Fragment key={0}><div className="table__item" /> <div className="table__item">Загрузка</div> <div className="table__item">Загрузка</div> <div className="table__item">Загрузка</div></React.Fragment>}
          >
            {
              companies.map(company => {
                return (
                <React.Fragment key={company.id}>
                    <div className="table__item" data-active={companyIsSelected(company.id)} data-id={company.id}> 
                      <Checkbox customToggle customStatus={companyIsSelected(company.id)} callback={(e, value) => handleCompany(value, company.id) } /> 
                    </div>
                    <p className="table__item" title={company.name}  data-editable={true} data-id={company.id} data-type="name"> {company.name} </p>
                    <p className="table__item" style={{ textAlign: 'right' }}> { workers.filter(w => w.company === company.id).length } </p>
                    <p className="table__item" title={company.address}  data-editable={true} data-id={company.id} data-type="address"> {company.address} </p>
                </React.Fragment>)
              })
            }
        </InfiniteScroll>)}
      </div>

    </div>
  );
}

export default CompaniesTable;