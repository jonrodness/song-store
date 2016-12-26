import React, { Component, PropTypes } from 'react'
import { Table, Column, Cell } from 'fixed-data-table'
import { Link } from 'react-router'
import Dimensions from 'react-dimensions'
import '../sass/chart.scss'

class ArtistsChart extends Component  {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<Table
				rowsCount={this.props.artists.length}
				rowHeight={50}
				width={this.props.containerWidth}
				height={this.props.containerHeight}
				headerHeight={50}>
				<Column
					header={<Cell>Artist</Cell>}
					cell={props => (
						<Cell {...props}>
							<Link to={'/artists/' + this.props.artists[props.rowIndex].id}>{this.props.artists[props.rowIndex].username}</Link>
						</Cell>
					)}
					width={400}
					flexGrow={1}					
				/>
				<Column
					header={<Cell>Number of Tracks</Cell>}
					cell={props => (
						<Cell {...props}>
							{ this.props.artists[props.rowIndex].tracksLength }
						</Cell>
					)}
					width={10}
					flexGrow={1}					
				/>					
			</Table>	
		)
	}
}

ArtistsChart.propTypes = {
	artists: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		tracksLength: PropTypes.number.isRequired
	}).isRequired).isRequired
}

// Use react-dimensions to make component responsive
export default Dimensions({className:'react-dimensions-chart-wrapper', elementResize: true})(ArtistsChart)