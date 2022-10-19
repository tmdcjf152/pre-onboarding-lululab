import { green, ivory } from '../../styles/theme';
import styled from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { AiFillApple } from 'react-icons/ai';
import logo from '../../assets/images/appLogo-green.png';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Mypage from './Mypage';

const LoginBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding-bottom: 100px;
	.logo-inner-box {
		width: 100%;
		height: 20em;
		margin-bottom: 1rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.input-inner-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 70%;
		height: 10em;
		margin-bottom: 2rem;
		input[type='text'] {
			width: 100%;
			height: 2.5em;
			margin-bottom: 1.5rem;
			padding: 1em;
			border-radius: 10px;
			font-size: 1.2em;
		}
		input[type='password'] {
			width: 100%;
			height: 2.5em;
			margin-bottom: 2.5rem;
			padding: 1em;
			border-radius: 10px;
			font-size: 1.2em;
		}
	}
	.login-btn-box {
		width: 70%;
		margin-bottom: 2rem;
		.login-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 3em;
			border-radius: 10px;
			background-color: ${green};
			color: ${ivory};
			font-size: 1.2em;
			cursor: pointer;
		}
	}
	.search-user-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-bottom: 4rem;

		.search-id {
			margin-right: 1rem;
			transition: all 0.5s;
			cursor: pointer;
			&:hover {
				color: ${green};
			}
		}
		.search-pwd {
			margin-left: 1rem;
			transition: all 0.5s;
			cursor: pointer;
			&:hover {
				color: ${green};
			}
		}
	}
	.sns-inner-box {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: row;
		width: 70%;

		svg {
			font-size: 2.5em;
		}
		.kakao-login-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			background: #f8f811;
			cursor: pointer;
			svg {
				color: #423131;
			}
		}
		.naver-login-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			background: #20c320;
			cursor: pointer;
			svg {
				font-size: 2em;
				color: #fff;
			}
		}
		.apple-login-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			background: #000000;
			cursor: pointer;
			svg {
				color: #fff;
			}
		}
	}

	/* ======================== 반응형 460px ======================== */
	@media screen and (max-width: 460px) {
		padding-bottom: 200px;
		.logo-inner-box {
			height: 15em;
		}
		.input-inner-box {
			width: 70%;
			height: 5em;
			margin-bottom: 2rem;
			input[type='text'] {
				height: 2em;
			}
			input[type='password'] {
				height: 2em;
			}
		}
		.login-btn-box {

			.login-btn {
				height: 2.5em;
			}
		}

		.sns-inner-box {
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-direction: row;
			width: 70%;
			svg {
				font-size: 1.5em;
			}
			.kakao-login-box {
				width: 50px;
				height: 50px;
			}
			.naver-login-box {
				width: 50px;
				height: 50px;
				svg {
					font-size: 1em;
				}
			}
			.apple-login-box {
				width: 50px;
				height: 50px;
			}
		}
	}
`;

const Login = ({ isLogin, setIsLogin, isAppointment, setIsAppointment }) => {
	const [inputId, setInputId] = useState('');
	const [inputPwd, setInputPwd] = useState('');
	const loginInfo = () => {
		localStorage.setItem('id', inputId);
		setIsLogin(true);
	};

	useEffect(() => {
		if (localStorage.getItem('id') !== null) {
			setIsLogin(true);
		}
	});

	return (
		<LoginBlock className='fade-in'>
			{isLogin == true ? (
				<Mypage isLogin={isLogin} setIsLogin={setIsLogin} isAppointment={isAppointment} setIsAppointment={setIsAppointment} />
			) : (
				<>
					<div className='logo-inner-box'>
						<img src={logo} alt='룰루랩 로고사진' />
					</div>
					<div className='input-inner-box'>
						<input
							type='text'
							placeholder='이름'
							onChange={(e) => {
								setInputId(e.target.value);
							}}></input>
						<input
							type='password'
							placeholder='비밀번호'
							onChange={(e) => {
								setInputPwd(e.target.value);
							}}></input>
					</div>
					<div className='login-btn-box'>
						<NavLink
							to='/home'
							className='login-btn'
							onClick={() => {
								loginInfo();
							}}>
							로그인
						</NavLink>
					</div>
					<div className='search-user-box'>
						<span className='search-id'>아이디 찾기</span>|<span className='search-pwd'>비밀번호 찾기</span>
					</div>
					<div className='sns-inner-box'>
						<div className='kakao-login-box'>
							<span className='hidden'>카카오로 로그인하기</span>
							<span>
								<RiKakaoTalkFill />
							</span>
						</div>
						<div className='naver-login-box'>
							<span className='hidden'>네이버로 로그인하기</span>
							<span>
								<SiNaver />
							</span>
						</div>
						<div className='apple-login-box'>
							<span className='hidden'>애플로 로그인하기</span>
							<span>
								<AiFillApple />
							</span>
						</div>
					</div>
				</>
			)}
		</LoginBlock>
	);
};

export default Login;
