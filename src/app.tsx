import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import UserDetails from "./pages/UserDetails";


const RootApp = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/details/:id" element={<UserDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default RootApp;


