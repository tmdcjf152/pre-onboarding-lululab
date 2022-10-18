import { Route, Routes, useParams } from 'react-router-dom';
import GlobalStyle from './styles/Globalstyled';
import MainPage from './pages/main/MainPage';
import StartPage from './pages/main/StartPage';
import Nav from './component/Nav';
import Login from './pages/user/Login';
import ChoiceTreatment from './pages/appointment/ChoiceTreatment';
import AppointmentCheck from './pages/appointment/AppointmentCheck';
import Live from './pages/live/Live';
import Choicedate from './pages/appointment/Choicedate';
import { useEffect, useState } from 'react';
import HospitalList from './pages/hospital/HospitalList';

const App = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [isAppointment, setIsAppointment] = useState(false);
	const [hospitalData, setHospitalData] = useState([]);

	const id = useParams();

	useEffect(() => {
		fetch('http://127.0.0.1:4000/data/hospital.json')
			.then((res) => res.json())
			.then((data) => {
				setHospitalData(data.data);
			});
	}, []);

	useEffect(() => {
		if (sessionStorage.getItem('id') !== null) {
			setIsLogin(true);
		}
	}, []);
	useEffect(() => {
		if (sessionStorage.getItem('appoinmentTime') !== null) {
			setIsAppointment(true);
		}
	}, [isAppointment]);

	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<StartPage />} />
				<Route
					path='/home'
					element={
						<MainPage
							hospitalData={hospitalData}
							setHospitalData={setHospitalData}
							isLogin={isLogin}
							isAppointment={isAppointment}
							setIsAppointment={setIsAppointment}
						/>
					}
				/>
				<Route path='/login' element={<Login isLogin={isLogin} setIsLogin={setIsLogin} isAppointment={isAppointment} />} />
				<Route path='/appointment/:id' element={<ChoiceTreatment />} />
				<Route path='/appointment/:id/choicedate' element={<Choicedate hospitalData={hospitalData} setHospitalData={setHospitalData} />} />
				<Route path='/check' element={<AppointmentCheck isAppointment={isAppointment} setIsAppointment={setIsAppointment} />} />
				<Route path='/live' element={<Live />} />
				<Route path='/hospitallist' element={<HospitalList hospitalData={hospitalData} setHospitalData={setHospitalData}  isAppointment={isAppointment} setIsAppointment={setIsAppointment} />} />
			</Routes>
			<Nav />
		</>
	);
};

export default App;
