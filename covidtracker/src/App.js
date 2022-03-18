import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import PatientPage from "./pages/PatientPage";
import DoctorPage from './pages/DoctorPage';
import Information from './pages/Information';
import MainPatient from './pages/MainPatient';
import Homepage from './pages/Homepage';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Homepage />} />
                    <Route path="/register" exact element={<Register />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/patientpage" exact element={<PatientPage />} />
                    <Route path="/doctorpage" exact element={<DoctorPage />} />
                    <Route path="/mainpatient" exact element={<MainPatient />} />
                    <Route path="/information" exact element={<Information />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;
