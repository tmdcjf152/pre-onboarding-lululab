import styled from 'styled-components';
import { green, ivory } from '../../styles/theme';
import { AiOutlineWarning } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const BlockPageBlock = styled.div`
	width: 100%;
	height: 100vh;
	.block-inner-box {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		.block-img-box {
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
		.block-text-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			.block-text {
				position: absolute;
				top: 350px;
				font-size: 2em;
				color: #ddd;
			}
			.block-sub-text {
				position: absolute;
				top: 400px;
				font-size: 1em;
				color: #ddd;
			}
		}
		.block-next-btn {
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

const BlockPage = () => {
  return (
    <BlockPageBlock>
      	<div className='block-inner-box'>
				<div className='block-img-box'>
					<AiOutlineWarning />
				</div>
				<div className='block-text-box'>
					<span className='block-text'> 예약을 할 수 없습니다.</span>
					<span className='block-sub-text'> 해당 병원으로 전화문의해 주십시오.</span>
				</div>
				<div className='block-next-btn'>
					<NavLink to='/home'>확인</NavLink>
				</div>
			</div>
    </BlockPageBlock>
  );
};

export default BlockPage;
