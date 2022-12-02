import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

function generateCompanies(count) {
  for (let i = count; i > 0; i--)
  {
    let temp = {
      'id': nanoid(),
      'name': `Компания ${i}`,
      'workers': parseInt(Math.random() * 100),
      'address': `Адрес компании ${i}`,
    }
    initialState.list.push(temp);
  }
}

const initialState = {
  list: []
}

generateCompanies(1000);

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    add: (state, action) => {
        let temp = {
          'id': nanoid(),
          'name': `Компания ${state.list.length + 1}`,
          'workers': parseInt(Math.random() * 100),
          'address': `Адрес компании ${state.list.length + 1}`,
        }
        state.list.push(temp);
    },
    remove: (state, action) => {
        state.list = state.list.filter(company => company.id !== action.payload.id);
    },
  },
})

export const { add, remove } = companiesSlice.actions

export default companiesSlice.reducer