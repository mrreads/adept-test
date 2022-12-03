import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import config from './../../config';
let { workersCount, companyCount } = config;


function generateWorkers(count) {
  for (let i = count; i > 0; i--)
  {
    let temp = {
      'id': nanoid(),
      'surname': `Фамилия ${i}`,
      'name': `Имя ${i}`,
      'job': `Должность ${i}`,
      'company': Math.floor(Math.random() * (companyCount - 1 + 1) + 1)
    }
    initialState.list.push(temp);
  }
}

const initialState = {
  inc: workersCount,
  list: []
}

generateWorkers(workersCount);

export const workersSlice = createSlice({
  name: 'workers',
  initialState,
  reducers: {
    add: (state, action) => {
        state.inc++;
        let temp = {
          'id': nanoid(),
          'surname': `Фамилия ${state.inc}`,
          'name': `Имя ${state.inc}`,
          'job': `Должность ${state.inc}`,
          'company': action.payload[Math.floor(Math.random() * action.payload.length)]
        }
        state.list.unshift(temp);
    },
    remove: (state, action) => {
        state.list = state.list.filter(worker => worker.id !== action.payload.id);
    },
  },
})

export const { add, remove } = workersSlice.actions

export default workersSlice.reducer