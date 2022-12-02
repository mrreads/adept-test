import React, { useEffect, useRef  } from 'react';
import { useSelector } from 'react-redux'

import { ViewportList } from 'react-viewport-list';

function List() {
  const ref = useRef(null);
  const companies = useSelector((state) => state.companies.list);


  return (
      <div className="table" ref={ref}>

        <ViewportList viewportRef={ref} items={companies} >
        {
          companies.map(company => {
            return (
            <React.Fragment key={company.id}>
                <p className="table__item" data-active="false" data-id={company.id}> ч </p>
                <p className="table__item"> {company.name} </p>
                <p className="table__item"> {company.workers} </p>
                <p className="table__item"> {company.address} </p>
            </React.Fragment>)
          })
        }
        </ViewportList>
      </div>
  );
}

export default List;