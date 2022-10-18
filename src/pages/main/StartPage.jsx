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
    .logo-inner-box{
      display: flex;
      justify-items: center;
      align-items: center;
      width: 100%;
      height: 20rem;
      padding-top: 20rem;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
	}
`;

const StartPage = () => {
	return (
		<StartPageBlock>
			<div className='start-inner-box'>
       <div className="logo-inner-box">
        <NavLink to='/main'><img src={logo} alt='룰루랩 로고사진' /></NavLink>
       </div>
        </div>
		</StartPageBlock>
	);
};

export default StartPage;
