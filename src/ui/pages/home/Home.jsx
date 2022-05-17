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

	return (
		<div className="Home">
			{/* <button onClick={logout}>Logout</button> */}
			<header>
				<div className="container">
					<SearchBar/>
				</div>
			</header>
			
			<section>
				<div className="container">
					<div className="ContentWrapper">
						<div className="SearchResultsContainer">
							<SearchResults />
						</div>
						<div className="TrackResultsContainer">
							<TrackResults />
						</div>
					</div>
				</div>
			</section>

			
			{/* {renderArtist()}
			{renderTracks()} */}
		</div>
	)
}

export default Home
