import { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import Backbtn from '../../component/Backbtn';
import { NavLink, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { green, ivory } from '../../styles/theme';
import getDay from 'date-fns/getDay';

const ChoicedateBlock = styled.div`
	.calendar-inner-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		margin-bottom: 100px;
		.hospital-info-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 80%;
			height: 20em;
			margin: 5rem 0rem;
			background: #f8f8f8;
			border: 1px solid #aaa;
			border-radius: 20px;
			span {
				display: flex;
				justify-content: center;
				margin-bottom: 1rem;
				font-size: 1.2em;
			}
			.title {
				font-size: 1.6em;
			}
		}
		.title-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 5rem;
			span {
				font-size: 1.5em;
				font-weight: bold;
				color: ${green};
			}
		}
		.calendar-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 5rem;
			.react-datepicker__input-container {
				width: 25rem;
				height: 3em;
				input[type='text'] {
					width: 100%;
					height: 100%;
					border: 1px solid #aaa;
					border-radius: 10px;
					text-align: center;
					font-size: 1.5em;
				}
			}
		}
		.time-box {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			width: 90%;
			height: 100%;
			margin-bottom: 5rem;
			.time-btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 120px;
				height: 4rem;
				padding: 0rem 4rem;
				input[type='radio'] {
					display: none;
				}
				input[type='radio'] + span {
					display: inline-block;
					padding: 20px 20px;
					border: 1px solid #dfdfdf;
					text-align: center;
					border-radius: 10px;
					cursor: pointer;
				}
				input[type='radio']:checked + span {
					background: ${green};
					color: ${ivory};
				}
			}
		}
		.next-btn-box {
			display: flex;
			justify-items: center;
			align-items: center;
			width: 100%;
			height: 3em;
			margin-bottom: 50px;
			.next-btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				margin: 0rem 5rem;
				border: 1px solid #aaa;
				border-radius: 10px;
				background: ${green};
				font-size: 1.5em;
				color: ${ivory};
				cursor: pointer;
				&:disabled {
					background: #ddd;
				}
				a {
					color: #fff;
				}
			}
		}
	}
`;

const Choicedate = () => {
	const [hospitalData, setHospitalData] = useState([]);
	const [namedata, setNameData] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [radioValue, setRadioValue] = useState('');
	const [disabled, setDisabled] = useState(true);
	const id = useParams();
	const url = id.id;

	useEffect(() => {
		fetch('http://127.0.0.1:4000/data/hospital.json')
			.then((res) => res.json())
			.then((data) => {
				setHospitalData(data.data[url].appointment);
			});
	}, []);

	const localSave = () => {
		localStorage.setItem('year', String(startDate.getFullYear()));
		localStorage.setItem('month', String(startDate.getMonth()));
		localStorage.setItem('date', String(startDate.getDate()));
		localStorage.setItem('appointmentTime', String(radioValue));
	};


	return (
		<>
			<Backbtn />
			<ChoicedateBlock>
				<div className='calendar-inner-box'>
					<div className='hospital-info-box'>
						<li className='hospital-box'>
							<div className='title'>
								<span className='hospital-name'>{localStorage.getItem('name')}</span>
							</div>
							<div className='time'>
								<span>{localStorage.getItem('time')}</span>
							</div>
							<div className='address'>
								<span>{localStorage.getItem('address')}</span>
							</div>
							<div className='category'>
								<span>{localStorage.getItem('category')}</span>
							</div>
							<div className='type'>
								<span>{localStorage.getItem('type')}</span>
							</div>
						</li>
					</div>
					<div className='title-box'>
						<span>원하는 날짜와 시간을 선택해 주세요</span>
					</div>
					<div className='calendar-box'>
						<DatePicker
							minDate={new Date()}
							dateFormat='yyyy-MM-dd'
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							popperPlacement='auto'
							withPortal
							filterDate={getDay}
						/>
					</div>

					<div className='time-box'>
						{hospitalData &&
							hospitalData.map((time, index) => {
								return (
									<label className='time-btn'>
										<input
											type='radio'
											name='time'
											value={time}
											onClick={(e) => {
												setDisabled(false);
												setRadioValue(e.target.value);
											}}
										/>
										<span> {time}</span>
									</label>
								);
							})}
					</div>

					<div className='next-btn-box'>
						<button disabled={disabled} className='next-btn' onClick={localSave()}>
							<NavLink to='/check'>예약하기</NavLink>
						</button>
					</div>
				</div>
			</ChoicedateBlock>
		</>
	);
};

export default Choicedate;
