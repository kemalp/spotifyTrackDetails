import { createSlice } from '@reduxjs/toolkit'
import spotifyAPI from '../api/spotifyAPI'
import appConfig from '../config'

//Initial State
const initialState = {
	track: {
		num_samples: 0,
		duration: 0,
		sample_md5: null,
		offset_seconds: 0,
		window_seconds: 0,
		analysis_sample_rate: 0,
		analysis_channels: 0,
		end_of_fade_in: 0,
		start_of_fade_out: 0,
		loudness: 0,
		tempo: 0,
		tempo_confidence: 0,
		time_signature: 0,
		time_signature_confidence: 0,
		key: 0,
		key_confidence: 0,
		mode: 0,
		mode_confidence: 0,
		codestring: null,
		code_version: 0,
		echoprintstring: null,
		echoprint_version: 0,
		synchstring: null,
		synch_version: 0,
		rhythmstring: null,
		rhythm_version: 0
	},
	loading: false,
	error: null
}

const trackResultsSlice = createSlice({
	name: 'trackResults',
	initialState,
	reducers: {
		setTrackDetails: (state, action) => {
			state.track = action.payload.track
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

export const {setTrackDetails, loading, error} = trackResultsSlice.actions

export const trackResultsAsync = trackID => async dispatch => {
	dispatch(loading(true))

	const token = window.localStorage.getItem('token')

	const trackParams = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	spotifyAPI
		.get(appConfig.spotify.tracks.analysis + '/' + trackID, trackParams)
		.then(apiResponse => {
			const track = apiResponse.data.track
			dispatch(setTrackDetails({ track }))
		})
		.catch(error => {
			dispatch(error(error))
		})
}

export default trackResultsSlice.reducer