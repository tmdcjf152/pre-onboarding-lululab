import styled from 'styled-components';
import Backbtn from '../../component/Backbtn';
import logo from '../../assets/images/appLogo-green.png';
import { NavLink, useParams } from 'react-router-dom';
import { AiOutlineWarning } from 'react-icons/ai';
import { green, ivory } from '../../styles/theme';

const AppointmentCheckBlock = styled.div`
	.logo-box {
		width: 100%;
		height: 100%;
		img {
			width: 100%;
			height: 20em;
			padding-top: 10px;
			object-fit: cover;
		}
	}
	.text-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 20rem;
		margin-top: 2rem;
		.check-date {
			width: 100%;
			height: 2rem;
			margin-bottom: 1rem;
			text-align: center;
			font-size: 2em;
			font-weight: bold;
			color: ${green};
		}
		.warning {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 2rem;
			margin-bottom: 0.5rem;
			text-align: center;
			font-size: 0.9em;
			color: #999;
		}
		.warning-icon {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 3rem;
			font-size: 1.2em;
			font-weight: bold;
			color: #aaa;
		}
		svg {
			position: relative;
			top: -4px;
			font-size: 2em;
			color: #aaa;
		}
	}
	.next-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 4rem;
		padding: 0rem 5rem;
		margin-top: 3rem;
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			border: 1px solid #ddd;
			border-radius: 10px;
			background: ${green};
			font-size: 2em;
			color: #fff;
		}
	}
`;

const AppointmentCheck = ({ isAppointment, setIsAppointment }) => {

	const nextHandler =()=>{
		setIsAppointment(false);
	}
	return (
		<>
			<AppointmentCheckBlock>
				<div className='logo-box'>
					<img src={logo} alt='룰루랩로고' />
				</div>
				<div className='text-box'>
					<span className='check-date'>
						{localStorage.getItem('year')}년 {localStorage.getItem('month')}월 {localStorage.getItem('date')}일 {localStorage.getItem('appointmentTime')}
					</span>
					<span className='check-date'>예약이 완료되었습니다.</span>
					<span className='warning-icon'>
						주<AiOutlineWarning />의
					</span>
					<span className='warning'>예약후 무단으로 2회이상 방문하지 않을 경우 해당병원에서 블랙리스트 처리 될 수 있습니다.</span>
					<NavLink to='/' className='warning'>
						블랙릭스트처리에 대해 알아보기
					</NavLink>
				</div>
				<div className='next-btn'>
					<NavLink
						to='/home'
						onClick={()=>{nextHandler()}}>
						다음
					</NavLink>
				</div>
			</AppointmentCheckBlock>
		</>
	);
};

export default AppointmentCheck;
