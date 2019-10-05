import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Counter from './components/Counter';
import YouTube from './components/YouTube';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			day: 0,
			hour: 0,
			minute: 0,
			second: 0,
		}
	}

	componentDidMount() {
		// update every second
		this.interval = setInterval(() => {
			const date = this.calculateCountdown(this.props.date);
			date ? this.setState(date) : this.stop();
		}, 1000);
	}

	componentWillUnmount() {
		this.stop();
	}

	calculateCountdown(endDate) {
		let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

		// clear countdown when date is reached
		if (diff <= 0) return false;

		const timeLeft = {
			day: 0,
			hour: 0,
			minute: 0,
			second: 0
		};

		// calculate time difference between now and expected date
		if (diff >= 86400) { // 24 * 60 * 60
			timeLeft.day = Math.floor(diff / 86400);
			diff -= timeLeft.day * 86400;
		}
		if (diff >= 3600) { // 60 * 60
			timeLeft.hour = Math.floor(diff / 3600);
			diff -= timeLeft.hour * 3600;
		}
		if (diff >= 60) {
			timeLeft.minute = Math.floor(diff / 60);
			diff -= timeLeft.minute * 60;
		}
		timeLeft.second = diff;

		return timeLeft;
	}

	stop() {
		clearInterval(this.interval);
	}

	addLeadingZeros(value) {
		value = String(value);
		while (value.length < 2) {
			value = '0' + value;
		}
		return value;
	}

	render() {
		const countDown = this.state;

		const boxes = ['day', 'hour', 'minute', 'second'];

		return (
			<>
				<div className='stars-container'>
					<div id="stars" />
					<div id="stars2" />
					<div id="stars3" />
				</div>
				<div className="Countdown">
					<h2 className='launch-title'>RideTheTeacups.com Launches In</h2>
					<div className='boxes'>
						{boxes.map(box => (
							<Counter
								number={this.addLeadingZeros(countDown[box])}
								label={countDown[box] === 1 ? box : `${box}s`}
							/>
						))}
					</div>
					<div className='movie-container'>
						<YouTube id="pj-6U2sjtus" />
					</div>
					<a className='github' href='https://github.com/SteveSonoa/disney-countdown' target='_blank' rel="noopener noreferrer">GitHub.com</a>
				</div>
			</>
		);
	}
}

App.propTypes = {
	date: PropTypes.string.isRequired
};

App.defaultProps = {
	date: moment('2019-11-9 12:00:00')
};

export default App;
