import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

function generateWorkers(count) {
  for (let i = count; i > 0; i--)
  {
    let temp = {
      'id': nanoid(),
      'surname': `Фамилия ${i}`,
      'name': `Имя ${i}`,
      'job ': `Должность ${i}`,
      'company': Math.floor(Math.random() * (1000 - 1 + 1) + 1)
    }
    initialState.list.push(temp);
  }
}

const initialState = {
  list: []
}

generateWorkers(6000);

export const workersSlice = createSlice({
  name: 'workers',
  initialState,
  reducers: {
    add: (state, action) => {
        let temp = {
          'id': nanoid(),
          'surname': `Фамилия ${state.list.length + 1}`,
          'name': `Имя ${state.list.length + 1}`,
          'job': `Должность ${state.list.length + 1}`,
          'company': Math.floor(Math.random() * (1000 - 1 + 1) + 1)
        }
        state.list.push(temp);
    },
    remove: (state, action) => {
        state.list = state.list.filter(worker => worker.id !== action.payload.id);
    },
  },
})

export const { add, remove } = workersSlice.actions

export default workersSlice.reducer