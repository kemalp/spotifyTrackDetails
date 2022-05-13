import { configureStore } from '@reduxjs/toolkit'
import searchResultsSlice from './searchResultsSlice'
import trackResultsSlice from './trackResultsSlice'

const store = configureStore({
	reducer: {
		searchResults: searchResultsSlice,
		trackResults: trackResultsSlice
	}
})

export default store