import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api'
import defaultCharacter from '../character'

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    character: defaultCharacter,
  },
  reducers: {
    set: (state, action) => {
      const newState = { ...state.character, ...action.payload }
      localStorage.setItem("character", JSON.stringify(newState));
      state.character = newState
      console.log('State updated', newState);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.character = action.payload
        localStorage.setItem("character", JSON.stringify(action.payload));
      })
      .addCase(createCharacter.fulfilled, (state, action) => {
        state.character = action.payload
        localStorage.setItem("character", JSON.stringify(action.payload));
      })
      .addCase(updateCharacter.fulfilled, (state, action) => {
        state.character = action.payload
        localStorage.setItem("character", JSON.stringify(action.payload));
      })
  }
})

export const fetchCharacter = createAsyncThunk('character/fetch', async ({ id }: any) => {
  const response = await api.get(`/character/${id}`)
  return response.data
})

export const createCharacter = createAsyncThunk('character/create', async ({ data }: any) => {
  console.log('Action: Create character', { data });

  const response = await api.post(`/character/`, data)
  return response.data
})

export const updateCharacter = createAsyncThunk('character/update', async ({ id, data }: any) => {
  console.log('Action: Update character', { id, data });

  const response = await api.patch(`/character/${id}`, { ...data, id })
  return { ...data, id }
})

export const { set } = characterSlice.actions

export default characterSlice.reducer