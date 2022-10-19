import styled from 'styled-components';
import { green, ivory } from '../../styles/theme';
import { AiOutlineWarning } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const LiveBlock = styled.div`
	width: 100%;
	height: 100vh;
	background: ${ivory};
	.live-inner-box {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		.live-img-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 30rem;
			svg {
				font-size: 8rem;
				color: #ddd;
			}
		}
		.live-text-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			.live-text {
				position: absolute;
				top: 320px;
				font-size: 1.5em;
        text-align: center;
				color: #ddd;
			}
		}
		.live-next-btn {
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
				transition: all 0.5s;
				&:hover{
					background: ${ivory};
					color: ${green};
				}
			}
		}
	}
`;

const Live = () => {
  return (
    <LiveBlock>
     	<div className='live-inner-box fade-in'>
				<div className='live-img-box'>
					<AiOutlineWarning />
				</div>
				<div className='live-text-box'>
					<span className='live-text'>서비스 준비중<br/>빠른시일내로 찾아뵙겠습니다.</span>
				</div>
				<div className='live-next-btn'>
					<NavLink to='/home'>확인</NavLink>
				</div>
			</div>
    </LiveBlock>
  );
};

export default Live;
