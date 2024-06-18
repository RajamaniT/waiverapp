import "./App.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import SignIn from "./Component/Startup/SignIn";
import SignUp from "./Component/Startup/SignUp";
import ForgotPassword from "./Component/Startup/ForgotPassword";
import JobCreation from "./Component/Waiverdetails/JobCreation";
import Dashboard from "./Component/Dashboard/Dashboard";
import RouteLayout from "./Component/Layout/RouteLayout";
import Home from "./Component/Dashboard/Home";
import JobCreationPage from "./Component/Waiverdetails/JobCreationPage";
import JobDetails from "./Component/Waiverdetails/JobDetails";
import Others from "./Component/Waiverdetails/Others";
import LoginLayout from "./Component/Layout/LoginLayout";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="/JobCreation" element={<JobCreationPage />} />
      <Route path="/JobDetails" element={<JobDetails />} />
      <Route path="/Others" element={<Others />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/" element={<RouteLayout />}>
            <Route index element={<Home />} />
            <Route path="/JobCreation" element={<JobCreationPage />} />
            <Route path="/JobDetails" element={<JobDetails />} />
            <Route path="/Others" element={<Others />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
