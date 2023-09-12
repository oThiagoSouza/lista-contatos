import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ContatoState = [
  {
    nome: string
    telefone: number
    email: string
  }
]

const initialState: ContatoState[] = [

]

export const contatoSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    adicionaContato(state, { payload }: PayloadAction) {
      return [...state]
    }
  }
})
