import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import Checkbox from '../Checkbox';
import './index.scss';

function WorkersTable({ selectedCompanies }) {
  const workers = useSelector((state) => state.workers.list)
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
  }, [selectedCompanies]);

  return (
    <div className='workers-table'>

      { (filteredWorkers.length <= 0) ? <h1 style={{ textAlign: 'right' }}> Выберите компанию </h1> : (

      <>
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

        <div className="table">
        {
              filteredWorkers.map(worker => {
                return (
                <React.Fragment key={worker.id}>
                    <div className="table__item" data-active={workerIsSelected(worker.id)} data-id={worker.id}> 
                      <Checkbox customToggle customStatus={workerIsSelected(worker.id)} callback={(e, value) => handleWorker(value, e.target.parentElement.dataset.id) } /> 
                    </div>
                    <p className="table__item"> {worker.name} </p>
                    <p className="table__item"> {worker.surname} </p>
                    <p className="table__item"> {worker.job} </p>
                </React.Fragment>)
              })
            }
        </div> 
      </> )}

    </div> 
  );
}

export default WorkersTable;