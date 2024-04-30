import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Component/Startup/SignIn";
import SignUp from "./Component/Startup/SignUp";
import ForgotPassword from "./Component/Startup/ForgotPassword";
import JobCreation from "./Component/Waiverdetails/JobCreation";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/JobCreation" element={<JobCreation />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
