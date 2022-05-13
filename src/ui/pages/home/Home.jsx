import { useEffect, useState } from 'react'

import './Home.scss'
import SearchBar from '../../molecules/searchBar/SearchBar'
import SearchResults from '../../organisms/searcResults/SearchResults'
import TrackResults from '../../organisms/trackResults/TrackResults'
function Home() {
	const [token, setToken] = useState('')

	useEffect(() => {
		const tokenHash = window.location.hash
		let token = window.localStorage.getItem('token')

		if (!token && tokenHash) {
			token = tokenHash
				.substring(1)
				.split('&')
				.find(userToken => userToken.startsWith('access_token'))
				.split('=')[1]
		}

		window.location.hash = ''
		window.history.pushState(
			'',
			document.title,
			window.location.pathname + window.location.search
		)
		window.localStorage.setItem('token', token)

		setToken(token)
	}, [])

/*	const logout = () => {
		setToken('')
		window.localStorage.removeItem('')
	}
 	const [searchKey, setSearchKey] = useState('')
	const [artists, setArtists] = useState([])
	const [tracks, setTracks] = useState([])

	const searchArtist = async e => {
		e.preventDefault()
		const { data } = await spotifyAPI.get(
			`${appConfig.spotify.search.searchItem}`,
			{
				headers: {
					Authorization: `Bearer ${token}`
				},
				params: {
					q: searchKey,
					type: 'track,artist'
				}
			}
		)
		setArtists(data.artists.items)
		setTracks(data.tracks.items)
	}

	const renderArtist = () => {
		return artists.map(artist => (
			<div key={artist.id}>
				{ {artist.images.length ? (
					<img width={'100%'} src={artist.images[0].url} alt='' />
				) : (
					<div>No Image</div>
				)} }
				{artist.name}
			</div>
		))
	}

	const renderTracks = () => {
		return tracks.map(track => (
			<div key={track.id}>
				{track.name}
			</div>
		))
	} */

	return (
		<div className="Home">
			{/* <button onClick={logout}>Logout</button> */}
			<SearchBar/>
			<div className="ResultsContainer">
				<div className="TrackListResults">
					<SearchResults />
				</div>
				<div className="TrackResultsContainer">
					<TrackResults />
				</div>
			</div>
			
			{/* {renderArtist()}
			{renderTracks()} */}
		</div>
	)
}

export default Home
