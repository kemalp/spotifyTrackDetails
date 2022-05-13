import "./SearchResults.scss"

//React and dependencies
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

//Components
import Track from '../../molecules/track/Track'

const SearchResults = () => {

	const data = useSelector(state => state.searchResults)

	// Page Load
	useEffect(() => {

	}, [])

	const renderTracks = () => {
		return data.tracks.items.map(track => (
			<Track
				key={track.id}
				image={track.album.images[2].url}
				trackTitle={track.name}
				trackAlbum={track.album.name}
				trackArtist={track.artists[0].name}
				trackId={track.id}
			/>
		))
		
	}

	return (
		<div className="SearchResults">
			
			{
				data.tracks.items && 
				<>
					{renderTracks()}
				</>

			}
		</div>
	)
}

export default SearchResults
