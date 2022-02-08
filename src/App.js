/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  Redirect,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/LoginOut/Login";
import SignUp from "./Components/LoginOut/SignUp";
import MainPage from "./Components/Customer/MainPage";
import Header from "./Components/Header";
import { useMediaQuery } from "react-responsive";
import CustomerProfile from "./Components/Customer/CustomerProfile";
import SearchCarCustomer from "./Components/Customer/SearchCarCustomer";
import CreateEmployeePage from "./Components/CreateEmployee/CreateEmployeePage";
import AddCarPage from "./Components/Car/AddCarPage";
import AddTransportation from "./Components/Car/AddTransportation";
import ManagerMainPage from "./Components/Manager/ManagerMainPage";
import EmployeeProfile from "./Components/Employee/EmployeeProfile";
import CarsInformation from "./Components/Manager/CarsInformation";
import EmployeeInformation from "./Components/Manager/EmployeeInformation";
import Error from "./Components/Error";
import useWindowSize from "./useWindowSize";
import AdminPage from "./Components/Admin/AdminPage";
import EmployeeMainPage from "./Components/Employee/EmployeeMainPage";
import EmployeeCreateForm from "./Components/Employee/EmployeeCreateForm";

/*<Login />  <SignUp /> <MainPage />  <CustomerProfile /> 
      <SearchCarCustomer /> <CreateEmployeePage /> 
      <AddCarPage /> <ManagerMainPage />  <EmployeeProfile />*/

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {localStorage.getItem("logedIn") === "true" ? (
          <Route path="/SearchCarCustomer" element={<SearchCarCustomer />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="*" element={<Error />} />
        <Route path="/customerMainPage" element={<MainPage />} />
        <Route path="/CustomerProfile" element={<CustomerProfile />} />
        <Route path="/SearchCarCustomer" element={<SearchCarCustomer />} />
        <Route path="/AddCarPage" element={<AddCarPage />} />
        <Route path="/CreateEmployeePage" element={<CreateEmployeePage />} />
        <Route path="/EmployeeProfile" element={<EmployeeProfile />} />
        <Route path="/CarsInformation" element={<CarsInformation />} />
        <Route path="/EmployeeInformation" element={<EmployeeInformation />} />
        <Route path="/ManagerMainPage" element={<ManagerMainPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/AddTransportation" element={<AddTransportation />} />
        <Route path="/EmployeeMainPage" element={<EmployeeMainPage />} />
        <Route path="/EmployeeCreateForm" element={<EmployeeCreateForm />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
{localStorage.getItem("logedIn") === "true" ? (
  <Redirect to="/intern/jr-revenue/admin/table" />
) : (
  <Redirect to="/intern/jr-revenue/admin/login" />
)}
<Route path="/intern/jr-revenue/admin/login" component={Login} />
<Route path="/intern/jr-revenue/admin/table" component={AdminTable} />
<Route
  path="/intern/jr-revenue/admin/campaign"
  component={Campaign}
/>
*/

/* 
      <Login />
      <Router>
        <div className="app">
          {localStorage.getItem("logedIn") === "true" ? (
            <Navigate to="/page" />
          ) : (
            <Navigate to="/login" />
          )}
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </div>
      </Router>
      */
