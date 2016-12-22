import React, { Component, PropTypes } from 'react'
import { Table, Column, Cell } from 'fixed-data-table'
import Dimensions from 'react-dimensions'
import '../sass/chart.scss'

class TracksChart extends Component  {
	render() {
		// TODO: use tracks
		const dummyData = [
			{artist: "artist1", title: "title1", score: 50},
			{artist: "artist2", title: "title2", score: 87},
			{artist: "artist3", title: "title3", score: 12},
			{artist: "artist4", title: "title4", score: 96},
			{artist: "artist5", title: "title5", score: 70}
		]

		return(
			<Table
				rowsCount={dummyData.length}
				rowHeight={50}
				width={this.props.containerWidth}
				height={this.props.containerHeight}
				headerHeight={50}>
				<Column
					header={<Cell>Title</Cell>}
					cell={props => (
						<Cell {...props}>
							{dummyData[props.rowIndex].title}
						</Cell>
					)}
					width={200}
					flexGrow={1}					
				/>
				<Column
					header={<Cell>Artist</Cell>}
					cell={props => (
						<Cell {...props}>
							{dummyData[props.rowIndex].artist}
						</Cell>
					)}
					width={200}
					flexGrow={1}								
				/>		
				<Column
					header={<Cell>Score</Cell>}
					cell={props => (
						<Cell {...props}>
							{dummyData[props.rowIndex].score}
						</Cell>
					)}
					width={200}
				/>		
			</Table>	
		)
	}
}

TracksChart.propTypes = {
	tracks: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired
	}).isRequired).isRequired,
	containerWidth: PropTypes.number.isRequired,
	containerHeight: PropTypes.number.isRequired
}

// Use react-dimensions to make component responsive
export default Dimensions({className:'react-dimensions-chart-wrapper', elementResize: true})(TracksChart)