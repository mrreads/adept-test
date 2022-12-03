import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { add, remove, edit } from '../../store/slices/workersSlice';

import useEditable from './../hooks/useEditable';

import Checkbox from '../Checkbox';
import './index.scss';

function WorkersTable({ selectedCompanies }) {
  const tableRef = useRef(null);
  const workers = useSelector((state) => state.workers.list);
  const companies = useSelector((state) => state.companies.list);
  const dispatch = useDispatch();

  const editSave = (id, param, content) => {
    dispatch(edit({ id, param, content }))
  }
  useEditable(tableRef, editSave);

  const [filteredWorkers, setFilteredWorkers] = useState([]); 
  useEffect(() => {
    setFilteredWorkers(workers.filter(w => selectedCompanies.indexOf(w.company) >= 0 ? w : null));
  }, [workers, selectedCompanies]);
  
  const [selectedWorkers, setSelectedWorkers] = useState([]);
  const handleWorker = (bool, id) => {
    if (bool)
      setSelectedWorkers([...selectedWorkers, id]);
    else
      setSelectedWorkers(selectedWorkers.filter(c => c !== id));
  }

  const workerIsSelected = (id) => {
     return selectedWorkers.indexOf(id) >= 0 ? true : false;
  }

  const selectAllWorkers = () => {
    if (allWorkersSelected)
      setSelectedWorkers([]);
    else
      setSelectedWorkers(filteredWorkers.map(c => c.id));
  }

  const [allWorkersSelected, setAllWorkersSelected] = useState(false);
  useEffect(() => {
    setAllWorkersSelected(selectedWorkers.length === filteredWorkers.length);
  }, [filteredWorkers, selectedWorkers]);

  useEffect(() => {
    setSelectedWorkers(filteredWorkers.filter(f => selectedWorkers.indexOf(f.id) >= 0).map(w => selectedCompanies.indexOf(w.company) >= 0 ? w.id : null));
  }, [selectedCompanies, filteredWorkers]);

  const deleteWorkers = () => {
    if (selectedWorkers.length > 0) {
      filteredWorkers.filter(f => selectedWorkers.indexOf(f.id) >= 0).forEach(w => dispatch(remove(w)));
    }
  }

  const addWorker = () => {
    if (companies.length > 0)
      dispatch(add(companies.map(c => c.id)));
  };

  return (
    <div className='workers-table'>

      <div className='workers-header'>
        <p className='workers-header__title'>Сотрудники</p>

        <p className='workers-checkbox__text'>Выделить всё</p>
        <Checkbox customToggle customStatus={allWorkersSelected} callback={selectAllWorkers} />
      </div>

      <div className="table title">
        <p className="table__item"> </p>
        <p className="table__item"> Фамилия </p>
        <p className="table__item"> Имя </p>
        <p className="table__item"> Должность </p>
      </div>

      <div className='table-control'>
        <button className={`table__button ${companies.length <= 0 ? 'disabled' : ''}`} onClick={addWorker}> Добавить сотрудника </button>
        <button className={`table__button ${selectedWorkers.length <= 0 ? 'disabled' : ''}`} onClick={deleteWorkers}> Удалить сотрудника</button>
      </div>

      <div ref={tableRef}>
        { (filteredWorkers.length <= 0) ? <h1 style={{ textAlign: 'center', marginTop: '25px' }}> Выберите компанию </h1> : (
        <div className="table">
        {
              filteredWorkers.map(worker => {
                return (
                <React.Fragment key={worker.id}>
                    <div className="table__item" data-active={workerIsSelected(worker.id)} data-id={worker.id} data-company={worker.company}> 
                      <Checkbox customToggle customStatus={workerIsSelected(worker.id)} callback={(e, value) => handleWorker(value, e.target.parentElement.dataset.id) } /> 
                    </div>
                    <p className="table__item" title={worker.name} data-id={worker.id} data-editable={true} data-type="name"> {worker.name} </p>
                    <p className="table__item" title={worker.surname} data-id={worker.id} data-editable={true} data-type="surname"> {worker.surname} </p>
                    <p className="table__item" title={worker.job} data-id={worker.id} data-editable={true} data-type="job"> {worker.job} </p>
                </React.Fragment>)
              })
            }
        </div> 
        )}
      </div>

    </div> 
  );
}

export default WorkersTable;