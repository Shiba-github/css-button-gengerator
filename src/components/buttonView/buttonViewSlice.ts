import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getStateType } from '../../store'
import { cssTypes } from '../../types/cssTypes'

// TODO:ぶくぶくになる未来が容易に想像できる(要リファクタリング
// type buttonViewType = {
//     color: string
//     backgroundColor: string
//     border: string
//     padding: string
//     textDecoration: string
//     display: string
//     fontSize: string
//     borderColor: string
//     borderStyle: string
//     borderWidth: string
//     borderRadius: string
//     width: string
//     height: string
// }

const initialState: cssTypes = {
    color: 'rgba(255,0,0,1)',
    backgroundColor: 'rgba(0,0,255,1)',
    border: 'none',
    padding: '0px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '30px',
    borderColor: 'none',
    borderStyle: 'none',
    borderWidth: '0px',
    borderRadius: '0px',
    width: '150px',
    height: '75x',
}

export const buttonViewSlice = createSlice({
    name: 'buttonView',
    initialState,
    reducers: {
        setColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        },
        setBackgroundColor: (state, action: PayloadAction<string>) => {
            state.backgroundColor = action.payload
        },
        setBorder: (state, action: PayloadAction<string>) => {
            state.border = action.payload
        },
        setPadding: (state, action: PayloadAction<string>) => {
            state.padding = action.payload
        },
        setTextDecoration: (state, action: PayloadAction<string>) => {
            state.textDecoration = action.payload
        },
        setDisplay: (state, action: PayloadAction<string>) => {
            state.display = action.payload
        },
        setFontSize: (state, action: PayloadAction<string>) => {
            state.fontSize = action.payload
        },
        setBorderColor: (state, action: PayloadAction<string>) => {
            state.borderColor = action.payload
        },
        setBorderStyle: (state, action: PayloadAction<string>) => {
            state.borderStyle = action.payload
        },
        setBorderWidth: (state, action: PayloadAction<string>) => {
            state.borderWidth = action.payload
        },
        setBorderRadius: (state, action: PayloadAction<string>) => {
            state.borderRadius = action.payload
        },
        setWidth: (state, action: PayloadAction<string>) => {
            state.width = action.payload
        },
        setHeight: (state, action: PayloadAction<string>) => {
            state.height = action.payload
        },
    },
})

export const {
    setColor,
    setBackgroundColor,
    setBorder,
    setPadding,
    setTextDecoration,
    setDisplay,
    setFontSize,
    setBorderColor,
    setBorderStyle,
    setBorderWidth,
    setBorderRadius,
    setWidth,
    setHeight,
} = buttonViewSlice.actions

export const color = (state: getStateType) => state.buttonView.color
export const backgroundColor = (state: getStateType) => state.buttonView.backgroundColor
export const border = (state: getStateType) => state.buttonView.border
export const padding = (state: getStateType) => state.buttonView.padding
export const fontSize = (state: getStateType) => state.buttonView.fontSize
export const textDecoration = (state: getStateType) => state.buttonView.textDecoration
export const display = (state: getStateType) => state.buttonView.display
export const borderColor = (state: getStateType) => state.buttonView.borderColor
export const borderStyle = (state: getStateType) => state.buttonView.borderStyle
export const borderWidth = (state: getStateType) => state.buttonView.borderWidth
export const borderRadius = (state: getStateType) => state.buttonView.borderRadius
export const width = (state: getStateType) => state.buttonView.width
export const height = (state: getStateType) => state.buttonView.height

export default buttonViewSlice.reducer
