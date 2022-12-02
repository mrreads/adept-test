import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

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
  list: []
}

generateCompanies(10);

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    add: (state, action) => {
        let temp = {
          'id': nanoid(),
          'name': `Компания ${state.list.length + 1}`,
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