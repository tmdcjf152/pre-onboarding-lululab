import styled from 'styled-components';
import { green, ivory } from '../../styles/theme';
import { AiOutlineWarning } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const OverlapPageBlock = styled.div`
	width: 100%;
	height: 100vh;
	.overlap-inner-box {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		.overlap-img-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 30rem;
			svg {
				font-size: 10rem;
				color: #ddd;
			}
		}
		.overlap-text-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			.overlap-text {
				position: absolute;
				top: 350px;
				font-size: 2em;
				color: #ddd;
			}
		}
		.overlap-next-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
            height: 3em;
			a {
				width: 80%;
                height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
                border: 1px solid #ddd;
                border-radius: 10px;
                background: ${green};
				font-size: 1.5em;
                color: ${ivory};
			}
		}
	}
`;

const OverlapPage = () => {
	return (
		<OverlapPageBlock>
			<div className='overlap-inner-box'>
				<div className='overlap-img-box'>
					<AiOutlineWarning />
				</div>
				<div className='overlap-text-box'>
					<span className='overlap-text'> 이미 예약이 완료된 병원입니다.</span>
				</div>
				<div className='overlap-next-btn'>
					<NavLink to='/home'>확인</NavLink>
				</div>
			</div>
		</OverlapPageBlock>
	);
};

export default OverlapPage;
