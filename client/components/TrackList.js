import React from 'react'

class TrackRow extends React.Component {
	constructor() {
		super(props)
	}

	render() {
		<tr>
			<td>{this.props.track.title}</td>
			<td></td>
		</tr>
	}
}


class TrackList extends React.Component {
	constructor() {
		super(props)
	}

	render() {
		rowNodes = this.props.tracks.map((track) => {
			return <TrackRow key={track.id} track={track}</TrackRow>
		})

		return(
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{rowNodes}
				</tbody>
			</table>
		)
	}
}

export default TrackList