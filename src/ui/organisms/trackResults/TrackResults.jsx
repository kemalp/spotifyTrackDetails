import "./TrackResults.scss"

//React and dependencies
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TrackDetails from '../../molecules/trackDetails/TrackDetails'

import returnConversionValue from "../../../utils/keyConverter"

const TrackResults = () => {

	const trackData = useSelector(state => state.trackResults)

	// Page Load
	useEffect(() => {

	}, [])

	
	
	const renderTrackDetails = () => {

		const trackDetailsMap = [
			{
				name: 'Camelot Key',
				value: returnConversionValue(trackData.track.mode, trackData.track.key)[0].camelotKey
			},
			{
				name: 'Open Key',
				value: returnConversionValue(trackData.track.mode, trackData.track.key)[0].openKey
			},
			{
				name: 'Music Key',
				value: returnConversionValue(trackData.track.mode, trackData.track.key)[0].musicKey
			},
			{
				name: 'Pitch Class',
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
				value: Math.round((trackData.track.duration / 60) * 100) / 100
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
		<div className="TrackResults column">
		
			{
				trackData &&
				<>
				{renderTrackDetails()}
				</>
			}
		</div>
	)
}

export default TrackResults