import { NavLink } from 'react-router-dom';
import { ivory, green } from '../../styles/theme';
import styled from 'styled-components';

const HospitalListBlock = styled.div`
	/* 병원리스트 제목 */
	h1 {
		width: 100%;
		padding: 2rem 3rem 2rem 3rem;
		font-size: 1.5em;
		font-weight: bold;
		background: ${ivory};
		border-bottom: 1px solid #ddd;
		&::before {
			position: absolute;
			top:25px;
			left: 30px;
			display: block;
			content: '';
			width: 5px;
			height: 35px;
			background: #000;
		}
	}
	/* 병원리스트박스 */
	.hospital-list-box {
		width: 100%;
		height: 100%;
		margin-bottom: 200px;
		padding: 3rem 2rem 3rem 2rem;
		/* 병원정보카드 */
		.hospital-box {
			width: 100%;
			height: 12rem;
			padding: 1rem;
			margin-bottom: 1rem;
			border: 1px solid #ddd;
			border-radius: 20px;
			/* 카드내부 전체텍스트 */
			span {
				font-size: 1em;
				line-height: 1.5;
			}
			/* 병원이름 */
			.title{
				font-size: 1.2em;
				font-weight: bold;
			}
			/* 예약하기버튼 */
			.appointment-btn {
				display: flex;
				justify-content: flex-end;
				width: 100%;
				height: 2rem;
				a {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					margin-top: 1rem;
					padding: 1rem;
					border: 1px solid #ddd;
					border-radius: 20px;
					background: ${green};
					color: ${ivory};
					transition: all 0.5s;
					&:hover {
						background: ${ivory};
						color: ${green};
					}
				}
			}
		}
	}
`;

const HospitalList = ({ hospitalData, setHospitalData, isAppointment, setIsAppointment ,isLogin}) => {
	return (
		<HospitalListBlock className='fade-in'>
			<h1>병원리스트</h1>
			<ul className='hospital-list-box'>
				{hospitalData &&
					hospitalData.map((hospital, index) => {
						return (
							<li className='hospital-box'>
								<div className='title'>
									<span className='hospital-name'>{hospital.name}</span>
								</div>
								<div className='time'>
									<span>{hospital.open == true ? '영업중' : '휴무'} </span> 
									<span>{hospital.time}</span>
								</div>
								<div className='address'>
									<span>{hospital.address}</span>
								</div>
								<div className='category'>
									<span>{hospital.category}</span>
								</div>
								<div className='appointment-btn'>
									<NavLink
										onClick={() => {
											localStorage.setItem('name', hospital.name);
											localStorage.setItem('open', hospital.open);
											localStorage.setItem('time', hospital.time);
											localStorage.setItem('address', hospital.address);
											localStorage.setItem('category', hospital.category);
										}}
										to={isLogin == true ? `/appointment/${hospital.id}` : '/login'}>
										예약하기
									</NavLink>
								</div>
							</li>
						);
					})}
			</ul>
		</HospitalListBlock>
	);
};

export default HospitalList;
