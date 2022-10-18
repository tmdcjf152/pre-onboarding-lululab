import styled from 'styled-components';
import { green, ivory } from '../../styles/theme';
import { FaUserCog } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillCreditCard } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { GrNext } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const MypageBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding-bottom: 100px;
	.mypage-inner-box {
		width: 100%;
		height: 100%;
		.user-info-box {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 100%;
			.user-info {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				width: 100%;
				height: 3em;
				margin: 3rem 0rem;
				span {
					font-size: 2em;
				}
			}
			/* 정보/주소/카드/후기 관리 */
			.mypage-content-box {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-grow: 1;
				width: 100%;
				.content-text {
					font-size: 1.1em;
					margin-top: 1rem;

				}
				.content-img {
					font-size: 1.5em;
				}
				.info-edit {
					display: flex;
					flex-direction: column;
					width: 100%;
					text-align: center;
					cursor: pointer;
					transition : all 0.5s;
					&:hover{
						color: ${green};
					}
				}
				.address {
					display: flex;
					flex-direction: column;
					width: 100%;
					text-align: center;
					cursor: pointer;
					transition : all 0.5s;

					&:hover{
						color: ${green};
					}
				}
				.card {
					display: flex;
					flex-direction: column;
					width: 100%;
					text-align: center;
					cursor: pointer;
					transition : all 0.5s;

					&:hover{
						color: ${green};
					}
				}
				.review {
					display: flex;
					flex-direction: column;
					width: 100%;
					text-align: center;
					cursor: pointer;
					transition : all 0.5s;

					&:hover{
						color: ${green};
					}
				}
			}
			/* 배너 */
			.appointment-banner {
				width: 90%;
				height: 5rem;
				margin: 3rem 0rem;
				border: 4px dashed ${green};
				a {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					background-color: #00800020;
					font-size: 1.5em;
                    color: ${green};
				}
			}
			/* QnA */
			.qna-box {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				width: 100%;
				height: 100%;
				margin-bottom: 5rem;
				.qna {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 100%;
					height: 4rem;
					padding: 0rem 2rem;
					border-bottom: 1px solid #aaa;
					transition: all 0.3s;
					cursor: pointer;
					&:hover{
						background-color: #00ff9535;
					}
				}
			}
		}
		.logout-btn-box {
            display: flex;
            justify-content: center;
            align-items: center;
			width: 100%;
			height: 3rem;
			button {
				width: 80%;
				height: 100%;
                background: ${green};
                border: 1px solid #ddd;
                border-radius: 10px;
                font-size: 1.2em;
                color: ${ivory};
                cursor: pointer;
				transition: all 0.5s;
				&:hover{
					background: ${ivory};
					color: ${green};
				}
			}
		}
	}
`;

const Mypage = ({ isLogin, setIsLogin, isAppointment, setIsAppointment }) => {
	setIsLogin(true);
	return (
		<MypageBlock>
			<div className='mypage-inner-box'>
				<div className='user-info-box'>
					<div className='user-info'>
						<span>안녕하세요, {localStorage.getItem('id')} 님</span>
					</div>
					<div className='mypage-content-box'>
						<div className='info-edit'>
							<span className='content-img'>
								<FaUserCog />
							</span>
							<span className='content-text'>내 정보 관리</span>
						</div>
						<div className='address'>
							<span className='content-img'>
								<FaMapMarkerAlt />
							</span>
							<span className='content-text'>주소 관리</span>
						</div>
						<div className='card'>
							<span className='content-img'>
								<AiFillCreditCard />
							</span>
							<span className='content-text'>카드 관리</span>
						</div>
						<div className='review'>
							<span className='content-img'>
								<BsPencil />
							</span>
							<span className='content-text'>후기 관리</span>
						</div>
					</div>
					<div className='appointment-banner'>
						<NavLink to='/home'>이젠 룰루랩 으로 손 쉽게 예약하세요</NavLink>
					</div>
					<div className='qna-box'>
						<div className='qna'>
							<span className='qna-text'>자주 하는 질문</span>
							<span className='qna-icon'>
								<GrNext />
							</span>
						</div>
						<div className='qna'>
							<span className='qna-text'>원격(FAX전송) 처방 조제 의무 약국 리스트</span>
							<span className='qna-icon'>
								<GrNext />
							</span>
						</div>
						<div className='qna'>
							<span className='qna-text'>가족 대리 신청 관리</span>
							<span className='qna-icon'>
								<GrNext />
							</span>
						</div>
						<div className='qna'>
							<span className='qna-text'>공지사항</span>
							<span className='qna-icon'>
								<GrNext />
							</span>
						</div>
						<div className='qna'>
							<span className='qna-text'>환경 설정</span>
							<span className='qna-icon'>
								<GrNext />
							</span>
						</div>
						<div className='qna'>
							<span className='qna-text'>약관 및 정책</span>
							<span className='qna-icon'>
								<GrNext />
							</span>
						</div>
						<div className='qna'>
							<span className='qna-text'>서비스문의</span>
							<span className='qna-icon'>
								<GrNext />
							</span>
						</div>
						<div className='qna'>
							<span className='qna-text'>버전 정보</span>
							<span className='qna-icon'>
								<GrNext />
							</span>
						</div>
					</div>
				</div>
				<div className='logout-btn-box'>
					<button
						onClick={() => {
							setIsLogin(false);
							setIsAppointment(true);
							localStorage.clear();
						}}>
						로그아웃
					</button>
				</div>
			</div>
		</MypageBlock>
	);
};

export default Mypage;
