import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export { uiSlice }
export const { setLoading } = uiSlice.actions