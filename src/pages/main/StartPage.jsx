import styled from 'styled-components';
import { green, ivory } from '../../styles/theme';
import logo from '../../assets/images/appLogo.png';
import { NavLink } from 'react-router-dom';

const StartPageBlock = styled.div`
	width: 100%;
	height: 100%;
	.start-inner-box {
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		background: ${green};
		.logo-inner-box {
			display: flex;
			justify-items: center;
			align-items: center;
			width: 100%;
			height: 20rem;
			padding-top: 20rem;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.btn {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 30%;
			a {
        display: flex;
				justify-content: center;
				align-items: center;
        font-size: 2em;
        font-weight: bold;
				color: #005f197d;
        transition: all 0.5s;
        &:hover{
          color:${ivory} ;
        }
			}
		}
	}
`;

const StartPage = () => {
	return (
		<StartPageBlock>
			<div className='start-inner-box fade-in'>
				<div className='logo-inner-box'>
					<NavLink to='/main'>
						<img src={logo} alt='룰루랩 로고사진' />
					</NavLink>
				</div>
				<div className='btn'>
					<NavLink to='/home'>시작하기</NavLink>
				</div>
			</div>
		</StartPageBlock>
	);
};

export default StartPage;
