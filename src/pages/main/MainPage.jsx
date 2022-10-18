import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ivory, green } from '../../styles/theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

const MainPageBlock = styled.div`
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	.main-inner-box {
		width: 100%;
		padding-bottom: 100px;
		.main-header-box {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
			height: 10rem;
			padding-left: 5rem;
			font-size: 2em;
			border-bottom: 1px solid #ddd;
			span {
				margin-bottom: 1rem;
			}
			a {
				font-weight: bold;
				color: ${green};
			}
		}
		.main-appointment-box {
			flex-direction: column;
			width: 100%;
			height: 40rem;

			.appointment-title {
				width: 100%;
				padding-top: 2rem;
				padding-left: 5rem;
				font-size: 2em;
			}
			.appointment-content {
				flex-direction: column;
				width: 80%;
				height: 20rem;
				margin: 3rem;
				background-color: #dddddd25;
				border: 1px solid #ddd;
				border-radius: 20px;
				.user-name {
					font-size: 1.5em;
					margin-bottom: 1rem;
				}
				.appointment-content-title {
					font-size: 2em;
					color: #aaa;
					margin-bottom: 1em;
				}
				.appointment-content-text {
					font-size: 2em;
					text-align: center;
					line-height: 1.5em;
					.green {
						color: ${green};
					}
				}
				.appointment-hospital-name {
					font-size: 2em;
					margin-bottom: 1rem;
				}
				.appointment-date {
					font-size: 2em;
					margin-bottom: 1rem;
				}
				.appointment-type {
					font-size: 1.5em;
					margin-bottom: 1rem;
				}
				.warning {
					color: #aaa;
				}
			}
			.appointment-btn-box {
				width: 100%;
				height: 3rem;
				padding: 0 10rem;
				margin-bottom: 5rem;
				.appointment-btn {
					display: flex;
						justify-content: center;
						align-items: center;
					width: 100%;
					height: 100%;
					border: 1px solid #ddd;
					border-radius: 50px;
					background: ${green};
					font-size: 1.5em;
					color: ${ivory};
					cursor: pointer;
					transition: all 0.5s;
					&:hover {
						background: ${ivory};
						color: ${green};
					}
				}
			}
		}
		.list-inner-box {
			width: 100%;
			height: 25rem;
			padding: 2rem;
			.list-header-box {
				position: relative;
				display: flex;
				width: 100%;
				padding-left: 2rem;
				margin-bottom: 2rem;
				.hospital-list-title {
					font-size: 2em;
				}
				.more-btn {
					position: absolute;
					right: 20px;
					top: 5px;
					font-size: 1.2em;
					color: #aaa;
				}
			}
			.hospital-list-box {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				.hospital-box {
					display: flex;
					justify-content: flex-start;
					align-items: flex-start;
					flex-direction: column;
					width: 100%;
					padding: 2rem;
					border: 1px solid #ddd;
					border-radius: 20px;
					.title {
						font-size: 1.7em;
						margin-bottom: 0.7em;
					}
					.time {
						font-size: 1.2em;
						margin-bottom: 0.7em;
						span {
							margin-right: 0.5em;
						}
					}
					.address {
						font-size: 1.2em;
						margin-bottom: 0.7em;
					}
					.category {
						font-size: 1.2em;
						margin-bottom: 0.7em;
					}
					.appointment-btn {
						display: flex;
						justify-content: flex-end;
						width: 100%;
						a {
							display: flex;
							justify-content: center;
							align-items: center;
							width: 17%;
							height: 2.5rem;
							background: ${green};
							border: 1px solid #ddd;
							border-radius: 50px;
							color: ${ivory};
							font-size: 1em;
							transition: all 0.5s;
							cursor: pointer;
							&:hover {
								background: ${ivory};
								color: ${green};
							}
						}
					}
				}
				.swiper {
					width: 100%;
					height: 16rem;
					.swiper-wrapper {
						width: 100%;
						height: 100%;
						.swiper-slide {
							width: 100px;
						}
					}
					.swiper-pagination-bullet {
						background: ${green};
					}
				}
			}
		}
	}
`;

const MainPage = ({ hospitalData, setHospitalData, isLogin, isAppointment, setIsAppointment }) => {


	return (
		<MainPageBlock>
			<div className='main-inner-box'>
				<div className='main-header-box center'>
					<span>빠른 진료를 원하시나요?</span>
					<NavLink to='/hospitallist'>예약 시작하기</NavLink>
				</div>
				<div className='main-appointment-box center'>
					<span className='appointment-title'>예약현황</span>
					{isAppointment && isAppointment ? (
						<div className='appointment-content center'>
							<span className='appointment-content-title'>요청중인 예약이 없습니다.</span>
							<span className='appointment-content-text'>
								대기시간을 줄여주는
								<br />
								<span className='green'> 예약 서비스</span>를 이용해보세요
							</span>
						</div>
					) : (
						<div className='appointment-content center'>
							<span className='user-name'>안녕하세요, {localStorage.getItem('id')} 님 </span>
							<span className='appointment-hospital-name'>{localStorage.getItem('name')}</span>
							<span className='appointment-date'>
								{localStorage.getItem('year')}년 {localStorage.getItem('month')}월 {localStorage.getItem('date')}일 {localStorage.getItem('appointmentTime')}
							</span>
							<span className='appointment-type'>{localStorage.getItem('type')}이(가) 예약 되어 있습니다.</span>
							<span className='warning'>예약후 방문이 어려울경우 병원으로 알려주시기 바랍니다.</span>
						</div>
					)}

					<div className='appointment-btn-box center'>
						{isAppointment ? (
							<NavLink onClick={() => {
								setIsAppointment(!isAppointment);
							}} to='/hospitallist' className='appointment-btn'>진료 예약하기</NavLink>
						) : (
							<button
								className='appointment-btn'
								onClick={() => {
									setIsAppointment(!isAppointment);
								}}>
								예약 취소하기
							</button>
						)}
					</div>
				</div>
				<div className='list-inner-box'>
					<div className='list-header-box'>
						<span className='hospital-list-title'>바로예약 병원</span>
						<NavLink to='/hospitallist' className='more-btn'>모두보기</NavLink>
					</div>
					<ul className='hospital-list-box'>
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							loop={true}
							pagination={{
								clickable: true,
							}}
							navigation={false}
							modules={[Pagination, Navigation]}
							className='mySwiper'>
							{hospitalData &&
								hospitalData.map((hospital, index) => {
									return (
										<SwiperSlide>
											<li className='hospital-box'>
												<div className='title'>
													<span className='hospital-name'>{hospital.name}</span>
												</div>
												<div className='time'>
													<span>{hospital.open == true ? '영업중' : '휴무'}</span>
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
														to={`/appointment/${hospital.id}`}>
														예약하기
													</NavLink>
												</div>
											</li>
										</SwiperSlide>
									);
								})}
						</Swiper>
					</ul>
				</div>
			</div>
		</MainPageBlock>
	);
};

export default MainPage;

//
