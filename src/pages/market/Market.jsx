import styled from 'styled-components';
import { green, ivory } from '../../styles/theme';
import { AiOutlineWarning } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const MarketBlock = styled.div`
	width: 100%;
	height: 100vh;
	.market-inner-box {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		.market-img-box {
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
		.market-text-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			.market-text {
				position: absolute;
				top: 350px;
				font-size: 2em;
        text-align: center;
				color: #ddd;
			}
		}
		.market-next-btn {
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

const Market = () => {
  return (
    <MarketBlock>
           	<div className='market-inner-box'>
				<div className='market-img-box'>
					<AiOutlineWarning />
				</div>
				<div className='market-text-box'>
					<span className='market-text'>서비스 준비중<br/>빠른시일내로 찾아뵙겠습니다.</span>
				</div>
				<div className='market-next-btn'>
					<NavLink to='/home'>확인</NavLink>
				</div>
			</div>
    </MarketBlock>
  );
};

export default Market;
