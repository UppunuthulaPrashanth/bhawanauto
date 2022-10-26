import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import About_us from "./pages/About_us";
import Blogs from "./pages/Blogs";
import Contact_us from "./pages/Contact-us";
import Gallery from "./pages/Gallery";
import Get_quote from "./pages/Get_quote";
import Packages from "./pages/Packages";
import Privacy_policy from "./pages/Privacy_policy";
import Services from "./pages/Services";
import Terms_conditions from "./pages/Terms_conditions";
import Book_service from "./pages/Book_service";
import ScrollToTop from "./components/ScrollToTop";
import Repair_car_quote from "./pages/Repair_car_quote";

// services
import Periodic_maintenance from "./pages/service-pages/Periodic_maintenance";
import Prepurchase_inspection from "./pages/service-pages/Prepurchase_inspection";
import General_maintenance from "./pages/service-pages/General_maintenance";
import Car_battery_tire_replacement from "./pages/service-pages/Car_battery_tire_replacement";
import Car_scanning from "./pages/service-pages/Car_scanning";
import Engine_repair from "./pages/service-pages/Engine_repair";
import Transmission_repair from "./pages/service-pages/Transmission_repair";
import Car_ac_repair from "./pages/service-pages/Car_ac_repair";
import Body_repair_repainting from "./pages/service-pages/Body_repair_repainting";
import Car_care_car_detailing from "./pages/service-pages/Car_care_car_detailing";
import Window_film from "./pages/service-pages/Window_film";
import Customized_body_fabrication from "./pages/service-pages/Customized_body_fabrication";
import Gear_box from "./pages/service-pages/Gear_box";
import Pod_modification from "./pages/service-pages/Pod_modification";
import Wheel_alignment_balancing from "./pages/service-pages/Wheel_alignment_balancing";
import Off_road_accessories from "./pages/service-pages/Off_road_accessories";
import Myaccount from "./pages/Myaccount";
import { useDispatch } from "react-redux";
import { getProfile } from "./redux/features/profile/profileSlice";
import Login from "./pages/Login";
import Reset_password from "./pages/Reset_password";
import Loader from "./components/loader/Loader";

function App() {
  const [loader, setLoader]=useState(false);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    setLoader(true)
    dispatch(getProfile()).then((res) => {
      var name = res.payload.firstname;
      localStorage.setItem("userData", name);
      if (name && localStorage.getItem("userData")) {
        setAuth(true);
        setLoader(false)
      }
    });
  }, []);

  if(loader){
    return <Loader />
  }
  

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="about" element={<About_us />} />
            <Route exact path="blog" element={<Blogs />} />
            <Route exact path="contact-us" element={<Contact_us />} />
            <Route exact path="gallery" element={<Gallery />} />
            <Route exact path="get-quote" element={<Get_quote />} />
            <Route exact path="packages" element={<Packages />} />
            <Route exact path="privacy-policy" element={<Privacy_policy />} />
            <Route
              exact
              path="terms-and-conditions"
              element={<Terms_conditions />}
            />
            <Route
              exact
              path="repair-car-quote"
              element={<Repair_car_quote />}
            />

            {/* services routes */}
            <Route path="/services">
              <Route path="" element={<Services />} />
              <Route
                exact
                path="periodic-maintenance"
                element={<Periodic_maintenance />}
              />
              <Route
                exact
                path="prepurchase-inspection"
                element={<Prepurchase_inspection />}
              />
              <Route
                exact
                path="general-maintenance"
                element={<General_maintenance />}
              />
              <Route
                exact
                path="car-battery-tire-replacement"
                element={<Car_battery_tire_replacement />}
              />
              <Route exact path="car-scanning" element={<Car_scanning />} />
              <Route exact path="engine-repair" element={<Engine_repair />} />
              <Route
                exact
                path="transmission_repair"
                element={<Transmission_repair />}
              />
              <Route exact path="car-ac-repair" element={<Car_ac_repair />} />
              <Route
                exact
                path="body-repair-repainting"
                element={<Body_repair_repainting />}
              />
              <Route
                exact
                path="car-care-car-detailing"
                element={<Car_care_car_detailing />}
              />
              <Route exact path="window-film" element={<Window_film />} />
              <Route
                exact
                path="customized-body-fabrication"
                element={<Customized_body_fabrication />}
              />
              <Route exact path="gear-box" element={<Gear_box />} />
              <Route
                exact
                path="pod-modification"
                element={<Pod_modification />}
              />
              <Route
                exact
                path="wheel-alignment-balancing"
                element={<Wheel_alignment_balancing />}
              />
              <Route
                exact
                path="off-road-accessories"
                element={<Off_road_accessories />}
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />

            {/* myaccoutn routes */}
            <Route path="/myaccount">
              <Route
                path=""
                element={auth ? <Myaccount /> : <Navigate to="/auth" />}
              />
            </Route>

            <Route path="/booking-service/:id">
              <Route
                path=""
                element={auth ? <Book_service /> : <Navigate to="/auth" />}
              />
            </Route>

             {/* if user logged in  redirect to profile */}
             <Route path="/auth">
              <Route
                path=""
                element={auth ? <Myaccount /> : <Login />}
              />
            </Route>

            <Route path="/reset-password">
              <Route
                path=""
                element={auth ? <Myaccount /> : <Reset_password />}
              />
            </Route>
            {/* end  */}

          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
