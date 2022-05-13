import './Track.scss'

//React and dependencies
import { useDispatch } from 'react-redux'
import { trackResultsAsync } from '../../../redux/trackResultsSlice'

//Components
import Image from '../../atoms/image/Image'

const Track = props => {

	//Redux Hooks
	const dispatch = useDispatch()
	
	const changeTrackDetails = (trackID) => {
		dispatch(trackResultsAsync(trackID))
	}

	return (
		<div className="Track" onClick={() => changeTrackDetails(props.trackId)}>
			<Image src={props.image} alt={props.trackAlbum} />
			<div className='Track__Details'>
				<h3>{props.trackTitle}</h3>
				<p>
					<span>Album</span>
					<span>{props.trackAlbum}</span>
				</p>
				<p>
					<span>Artist</span>
					<span>{props.trackArtist}</span>
				</p>
			</div>
		</div>
	)
}

export default Track
