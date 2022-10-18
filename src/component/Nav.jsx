import { Link, NavLink, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { FaHeartbeat } from 'react-icons/fa';
import { GiTalk } from 'react-icons/gi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { ivory } from '../styles/theme';
import { useEffect } from 'react';
import { green } from '../styles/theme';


const NavBlock = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	transform: rotate(-50%, 50%);
	z-index: 10;
	.nav-inner-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100px;
		background: ${ivory};
		border-top: 1px solid #ddd;
		.nav-btn-box {
			display: flex;
			flex-grow: 1;
			width: 100%;
			font-size: 2.5em;
			.nav-link-off {
				color: #aaa;
			}
			.nav-link-on {
				color: ${green};
			}
			.home {
				margin: 0 auto;
			}
			.health {
				margin: 0 auto;
			}
			.question {
				margin: 0 auto;
			}
			.chart {
				margin: 0 auto;
			}
			.mypage {
				margin: 0 auto;
			}
		}
	}
`;

const Nav = () => {
	const location =useLocation();

	return (
		<NavBlock>
			<div className='nav-inner-box'>
				<div className='nav-btn-box'>
					<div className='home'>
						<span className='hidden'>홈버튼</span>
						<Link className={location.pathname == '/home' ?'nav-link-on' :'nav-link-off'  } to='/home'>
							<AiFillHome />
						</Link>
					</div>
					<div className='health'>
						<span className='hidden'>병원리스트</span>
						<NavLink className={location.pathname == '/hospitallist' ?'nav-link-on' :'nav-link-off'  } to='/hospitallist'>
							<FaHeartbeat />
						</NavLink>
					</div>
					<div className='question'>
						<span className='hidden'>실시간 진료보기</span>
						<NavLink className={location.pathname == '/live' ?'nav-link-on' :'nav-link-off'  } to='/live'>
							<GiTalk />
						</NavLink>
					</div>
					<div className='chart'>
						<span className='hidden'>예약확인</span>
						<NavLink className={location.pathname == '/market' ?'nav-link-on' :'nav-link-off'  } to='/market'>
							<AiOutlineFileDone />
						</NavLink>
					</div>
					<div className='mypage'>
						<span className='hidden'>마이페이지</span>
						<NavLink className={location.pathname == '/login' ?'nav-link-on' :'nav-link-off'  } to='/login'>
							<FaUserCircle />
						</NavLink>
					</div>
				</div>
			</div>
		</NavBlock>
	);
};

export default Nav;
