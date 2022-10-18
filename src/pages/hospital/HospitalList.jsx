import { NavLink } from 'react-router-dom';
import { ivory, green } from '../../styles/theme';
import styled from 'styled-components';

const HospitalListBlock = styled.div`
h1{
  width: 100%;
  padding: 3rem 3rem 0rem 3rem;
  font-size: 1.5em;
}
	.hospital-list-box {
		width: 100%;
		height: 100%;
    margin-bottom: 200px;
		padding: 3rem 3rem 3rem 3rem;


		.hospital-box {
			width: 100%;
			height: 12rem;
      padding: 1rem;
      margin-bottom: 1rem;
      border: 1px solid #ddd;
      span{
        font-size: 1.2em;
        line-height: 1.5;
      }
      .appointment-btn{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 2rem;
        a{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30%;
          height: 100%;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 20px;
          background: ${green};
          color: ${ivory};
        }
      }
		}
	}
`;

const HospitalList = ({ hospitalData, setHospitalData,isAppointment,setIsAppointment }) => {
	return (
		<HospitalListBlock>
				<h1>병원리스트</h1>
			<ul className='hospital-list-box'>
				{hospitalData &&
					hospitalData.map((hospital, index) => {
						return (
							<li className='hospital-box'>
								<div className='title'>
									<span className='hospital-name'>{hospital.name}</span>
								</div>
								<div className='time'>
									<span>{hospital.open == true ? '영업중' : '휴무'}</span>
									<span>{hospital.time}</span>
								</div>
								<div className='address'>
									<span>{hospital.address}</span>
								</div>
								<div className='category'>
									<span>{hospital.category}</span>
								</div>
								<div className='appointment-btn'>
									<NavLink
										onClick={() => {
											localStorage.setItem('name', hospital.name);
											localStorage.setItem('open', hospital.open);
											localStorage.setItem('time', hospital.time);
											localStorage.setItem('address', hospital.address);
											localStorage.setItem('category', hospital.category);
										}}
										to={`/appointment/${hospital.id}`}>
										예약하기
									</NavLink>
								</div>
							</li>
						);
					})}
			</ul>
		</HospitalListBlock>
	);
};

export default HospitalList;
