import React, { Component, PropTypes } from 'react'
import { Table, Column, Cell } from 'fixed-data-table'
import Dimensions from 'react-dimensions'

class ArtistTracksChart extends Component  {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<Table
				rowsCount={this.props.tracks.length}
				rowHeight={50}
				width={this.props.containerWidth}
				height={this.props.containerHeight}
				headerHeight={50}>
				<Column
					header={<Cell>Title</Cell>}
					cell={props => (
						<Cell {...props}>
							{this.props.tracks[props.rowIndex].title}
						</Cell>
					)}
					width={200}
					flexGrow={1} />
				<Column
					header={<Cell>Details</Cell>}
					cell={props => (
						<Cell {...props}>
						</Cell>
					)}
					width={200}
					flexGrow={1} />
			</Table>	
		)
	}
}

ArtistTracksChart.propTypes = {
	tracks: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired).isRequired
}

// Use react-dimensions to make component responsive
export default Dimensions({className:'react-dimensions-chart-wrapper', elementResize: true})(ArtistTracksChart)