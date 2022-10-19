import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const BackbtnBlock = styled.div`
	width: 100%;
	.back-btn-box {
		display: flex;
		justify-content: flex-start;
		width: 100%;
		padding: 1.5rem;
		.back-btn {
			font-size: 2em;
			color: #000;
			cursor: pointer;
		}
	}
`;

const Backbtn = ({setIsAppointment }) => {
	// 로컬스토리지 삭제 함수
	const localReset = () => {
		localStorage.removeItem('name');
		localStorage.removeItem('year');
		localStorage.removeItem('month');
		localStorage.removeItem('date');
		localStorage.removeItem('appointmentTime');
		localStorage.removeItem('type');
		localStorage.removeItem('open');
		localStorage.removeItem('time');
		localStorage.removeItem('address');
		localStorage.removeItem('category');
		localStorage.removeItem('hospitalId');
	};
	return (
		<BackbtnBlock className='fade-in'>
			<div className='back-btn-box'>
				<NavLink
					to='/home'
					className='back-btn'
					onClick={() => {
						localReset()
						setIsAppointment(true)
					}}>
					<span className='hidden'>뒤로가기</span>
					<BiArrowBack />
				</NavLink>
			</div>
		</BackbtnBlock>
	);
};

export default Backbtn;
