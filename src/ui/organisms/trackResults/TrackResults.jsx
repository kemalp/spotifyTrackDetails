import "./TrackResults.scss"

//React and dependencies
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TrackDetails from '../../molecules/trackDetails/TrackDetails'


const TrackResults = () => {

	const trackData = useSelector(state => state.trackResults)

	// Page Load
	useEffect(() => {

	}, [])

	
	const renderTrackDetails = () => {
		const trackDetailsMap = [
			{
				name: 'Key',
				value: trackData.track.key
			},
			{
				name: 'Key Confidence',
				value: trackData.track.key_confidence
			},
			{
				name: 'Tempo',
				value: trackData.track.tempo
			},
			{
				name: 'Tempo Confidence',
				value: trackData.track.tempo_confidence
			},
			{
				name: 'Duration',
				value: trackData.track.duration
			},
			{
				name: 'Loudness',
				value: trackData.track.loudness
			},
			{
				name: 'Mode',
				value: trackData.track.mode
			}
		]
		return trackDetailsMap.map((detail, i) => (
			<TrackDetails key={i} name={detail.name} value={detail.value} />
		))
	}

	return (
		<>
			{
				trackData &&
				<>
				{renderTrackDetails()}
				</>
			}
		</>
	)
}

export default TrackResults