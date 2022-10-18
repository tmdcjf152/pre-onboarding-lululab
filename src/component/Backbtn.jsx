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

const Backbtn = () => {
	return (
		<BackbtnBlock>
			<div className='back-btn-box'>
				<NavLink to='/home' className='back-btn'>
					<span className='hidden'>뒤로가기</span>
					<BiArrowBack />
				</NavLink>
			</div>
		</BackbtnBlock>
	);
};

export default Backbtn;
