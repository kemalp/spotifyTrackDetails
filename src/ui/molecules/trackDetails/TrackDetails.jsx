import "./TrackDetails.scss"

const TrackDetails = props => {


	return (
		<div className="TrackDetails">
			<div>{props.name}</div>
			<div>{props.value}</div>
		</div>
	)
}

export default TrackDetails