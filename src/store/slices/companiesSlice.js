import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import config from './../../config';
let { companyCount } = config;

function generateCompanies(count) {
  for (let i = count; i > 0; i--)
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
        state.list.unshift(temp);
    },
    remove: (state, action) => {
        state.list = state.list.filter(company => company.id !== action.payload.id);
    },
  },
})

export const { add, remove } = companiesSlice.actions

export default companiesSlice.reducer