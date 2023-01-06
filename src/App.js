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
import Gallery from "./pages/Galleries";
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
import Login from "./pages/Login";
import Reset_password from "./pages/Reset_password";
import PrivateRoute from "./components/ProtectedRoutes";
import LoginPrivateRoute from "./components/LoginPrivateRoute";
import Booking_view from "./pages/Booking_view";
import Booking_list from "./pages/Booking_list";
import { checkAuth } from "./redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getMetaData, getStaticData } from "./redux/features/cms/staticDataSlice";
import Loader from "./components/loader/Loader";
import { Helmet } from "react-helmet";
import Payment_getway from "./pages/Payment_getway";
import Offers from "./pages/Offers";

function App() {
  const disptach = useDispatch();
  const [meta_data, setMedata_data]=useState([]);
  useEffect(() => {
    disptach(getStaticData());
    disptach(getMetaData()).then((res)=>{
      setMedata_data(res.payload)
    });
    disptach(checkAuth())
      .then((res) => {})
      .catch((error) => {
        localStorage.clear();
        window.location.reload();
      });
  }, []);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getStaticData());
  // }, []);

  const static_data = JSON.parse(
    JSON.stringify(useSelector((state) => state.staticData))
  );
  if (static_data.loading == "PENDING") {
    return <Loader />;
  }

console.clear()


  
  return (
    <div className="App">
          <Helmet>
            {meta_data? meta_data.map((element, key)=>{
              return(
                element.tag_name.substring(0, 2)=='og' ?
                  <meta property={element.tag_name} content={element.tag_content} key={key}/>
                  :
                  <meta name={element.tag_name} content={element.tag_content} key={key}/>

              )
                })
                :null}
          </Helmet>

      <Router>
        <ScrollToTop />
        <Layout {...static_data.data}>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="about" element={<About_us />} />
            <Route exact path="blog" element={<Blogs />} />
            <Route exact path="contact-us" element={<Contact_us />} />
            <Route exact path="gallery" element={<Gallery />} />
            <Route exact path="get-quote" element={<Get_quote />} />
            <Route exact path="packages" element={<Packages />} />
            <Route exact path="offers" element={<Offers />} />
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
            <Route path="/profile">
              <Route
                path=""
                element={
                  <PrivateRoute>
                    <Myaccount />
                  </PrivateRoute>
                }
              />
            </Route>

            {/* <Route path="/payment-getway">
              <Route
                path=""
                element={
                  <PrivateRoute>
                    <Payment_getway />
                  </PrivateRoute>
                }
              />
            </Route> */}


            <Route path="/booking-service/:id">
              <Route
                path=""
                element={
                  <PrivateRoute>
                    <Book_service />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route path="/booking-list">
              <Route
                path=""
                element={
                  <PrivateRoute>
                    <Booking_list />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route path="/booking-view/:id">
              <Route
                path=""
                element={
                  <PrivateRoute>
                    <Booking_view />
                  </PrivateRoute>
                }
              />
            </Route>
            

            {/* if user logged in  redirect to profile */}
            <Route path="/auth">
              <Route
                path=""
                element={
                  <LoginPrivateRoute>
                    <Login />
                  </LoginPrivateRoute>
                }
              />
            </Route>

            <Route path="/reset-password">
              <Route
                path=""
                element={
                  <LoginPrivateRoute>
                    <Reset_password />
                  </LoginPrivateRoute>
                }
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
