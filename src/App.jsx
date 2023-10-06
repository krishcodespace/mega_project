import { useState, useEffect } from "react";

import authService from "./appwrite/auth";
import { login, logout } from "./store/features/authSlice";
import { useDispatch } from "react-redux";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getcurrnetUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-900 text-white">
        <div className="w-full block">
          <Header />
           <main>
            kano
              {/* <Outlet /> */}
           </main>
           <Input/>
          <Footer />
        </div>
      </div>
    </>
  
  ) : null;
}

export default App;
