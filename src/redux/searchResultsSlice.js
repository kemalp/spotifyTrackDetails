import { createSlice } from '@reduxjs/toolkit'
import spotifyAPI from '../api/spotifyAPI'
import appConfig from '../config'

//Initial Slice
const initialState = {
	tracks: {
		href: null,
		items: [],
		limit: 0,
		next: null,
		offset: 0,
		previous: null,
		total: 0
	},
	loading: false,
	error: null
}

const searchResultsSlice = createSlice({
	name: 'searchResults',
	initialState,
	reducers: {
		firstPage: (state, action) => {
			state.tracks = action.payload.tracks
			state.loading = false
			state.error = null
		},
		error: (state, action) => {
			state.error = action.payload
			state.loading = false
		},
		loading: (state, action) => {
			state.loading = action.payload
		}
	}
})

export const { firstPage, loading, error } = searchResultsSlice.actions

export const searchResultsAsync = (searchQuery, page) => async dispatch => {
	dispatch(loading(true))

	const token = window.localStorage.getItem('token')

	const searchParams = {
		headers: {
			Authorization: `Bearer ${token}`
		},
		params: {
			q: searchQuery,
			type: 'track'
		}
	}

	spotifyAPI
		.get(appConfig.spotify.search.searchItem, searchParams)
		.then(apiResonse => {
			const tracks = apiResonse.data.tracks
			dispatch(firstPage({ tracks }))
		})
		.catch(error => {
			dispatch(error(error))
		})
}

export default searchResultsSlice.reducer
