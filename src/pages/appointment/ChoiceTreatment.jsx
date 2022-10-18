import { green, ivory } from '../../styles/theme';
import styled from 'styled-components';
import Backbtn from '../../component/Backbtn';
import { FaRegHospital } from 'react-icons/fa';
import { RiSyringeLine } from 'react-icons/ri';
import { GiHealing } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';
import { NavLink, useParams } from 'react-router-dom';
import OverlapPage from './OverlapPage';
OverlapPage
const ChoiceTreatmentBlock = styled.div`
	padding: 1rem;
	.treatment-inner-box {
		.treatment-text-box {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			.treatment-text {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				padding: 5rem 0rem;
				span {
					font-size: 3em;
				}
			}
		}
		.treatment-btn-box {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 100%;
			.choice-btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 70%;
				height: 3.5em;
				margin-bottom: 2rem;
				font-size: 1.5em;
				color: #000;
				border: 1px solid #000;
				border-radius: 10px;
				transition: all 0.5s;
				cursor: pointer;
				&:hover {
					background: ${green};
					color: ${ivory};
				}
			}
		}
	}
`;

const ChoiceTreatment = () => {
const id = useParams()
const getLocalId = localStorage.getItem("hospitalId")
	

	return (
		<ChoiceTreatmentBlock>
			<Backbtn />
			{id.id == getLocalId ? (
				<OverlapPage/>
			):(
				<div className='treatment-inner-box'>
				<div className='treatment-text-box'>
					<div className='treatment-text'>
						<span>어떤 진료를 원하세요?</span>
					</div>
					<div className='treatment-btn-box'>
						<NavLink
							onClick={() => {
								localStorage.setItem('type', '일반검진');
							}}
							to='choicedate'
							className='normal-inner-box choice-btn'>
							<span>
								<FaRegHospital />
								일반검진
							</span>
						</NavLink>
						<NavLink
							onClick={() => {
								localStorage.setItem('type', '예방접종');
							}}
							to='choicedate'
							className='prevention-inner-box choice-btn'>
							<span>
								<RiSyringeLine />
								예방접종
							</span>
						</NavLink>
						<NavLink
							onClick={() => {
								localStorage.setItem('type', '건강검진');
							}}
							to='choicedate'
							className='health-inner-box choice-btn'>
							<span>
								<GiHealing />
								건강검진
							</span>
						</NavLink>
						<dNavLink
							onClick={() => {
								localStorage.setItem('type', '기타상담');
							}}
							to='choicedate'
							className='etc-inner-box choice-btn'>
							<span>
								<AiOutlinePlus />
								기타
							</span>
						</dNavLink>
					</div>
				</div>
			</div>
			)}
		
		</ChoiceTreatmentBlock>
	);
};

export default ChoiceTreatment;
