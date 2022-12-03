import { createSlice } from '@reduxjs/toolkit';
import config from './../../config';
let { companyCount } = config;

function generateCompanies(count) {
  for (let i = 1; i <= count; i++)
  {
    let temp = {
      'id': i,
      'name': `Компания ${i}`,
      'address': `Адрес компании ${i}`,
    }
    initialState.list.push(temp);
  }
}

const initialState = {
  inc: companyCount,
  list: []
}

generateCompanies(companyCount);

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    add: (state, action) => {
        state.inc++;
        let temp = {
          'id': state.inc,
          'name': `Компания ${state.inc}`,
          'address': `Адрес компании ${state.inc}`,
        }
        state.list.push(temp);
    },
    addMultiply: (state, action) => {

      for (let i = 1; i <= action.payload; i++)
      {
        state.inc++;
        let temp = {
          'id': state.inc,
          'name': `Компания ${state.inc}`,
          'address': `Адрес компании ${state.inc}`,
        }
        state.list.push(temp);
      }
    },
    remove: (state, action) => {
        state.list = state.list.filter(company => company.id !== action.payload.id);
    },
  },
})

export const { add, remove, addMultiply } = companiesSlice.actions

export default companiesSlice.reducer