import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { getProfile, updateProfile } from "../redux/features/profile/profileSlice";

export default function Myaccount() {

  const [profile_data, setProfile_data] = useState({});
  const [update_data, setUpdate_data] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile()).then((res) => {
      setProfile_data(res.payload);
    });
  }, [dispatch]);

  const onChange = (e)=>{
    const { name, value } = e.target;
    setUpdate_data({ ...update_data, [name]: value });
  }

  const onSubmit=(e)=>{
      dispatch(updateProfile(update_data)).then(()=>{
        dispatch(getProfile())
      },[])
  }


  const updateProfile = JSON.parse(
    JSON.stringify(useSelector((state) => state.updateProfile))
  );
  const gettingProfile = JSON.parse(
    JSON.stringify(useSelector((state) => state.getProfile))
  );
// Api loading
if(updateProfile.loading=='PENDING'|| gettingProfile.loading=='PENDING'){
  return(
    <Loader/>
  )
}


  return (
    <div className="row">
      <div className="col-md-8">
        <div className="wrapper-myaccount bg-white mt-sm-5">
          <h4 className="pb-4 border-bottom text-center">Account settings</h4>
          <div className="py-2">
            <div className="row py-2">
              <div className="col-md-6">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  className="bg-light form-control"
                  name="firstname"
                  placeholder="Prashanth"
                  defaultValue={profile_data?profile_data.firstname:null}
                  onChange={(e) => onChange(e)}
                  />
              </div>
              <div className="col-md-6 pt-md-0 pt-3">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  className="bg-light form-control"
                  placeholder="Goud"
                  name="lastname"
                  defaultValue={profile_data?profile_data.lastname:null}
                  onChange={(e) => onChange(e)}
                  />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-md-6">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  className="bg-light form-control"
                  placeholder="bhawanauto@email.com"
                  name="email"
                  defaultValue={profile_data?profile_data.email:null}
                  onChange={(e) => onChange(e)}
                  />
              </div>
              <div className="col-md-6 pt-md-0 pt-3">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  readOnly
                  className="bg-light form-control"
                  placeholder="+1 213-548-6015"
                  defaultValue={profile_data?profile_data.phone:null}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-md-6">
                <label htmlFor="country">Country</label>
                <select name="country" id="country" onChange={(e) => onChange(e)} className="bg-light">
                {profile_data?
                <option value={profile_data.country}>{profile_data.country}</option>:null}
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="UAE">UAE</option>
                </select>
              </div>
            </div>
            <div className="py-3 pb-4  text-center mt-2">
              <button className="btn btn-primary mr-3" onClick={onSubmit}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3 important-section">
        <div className="col-md-12" style={{ paddingTop: "50px" }}>
          <div className="card ccard radius-t-0 h-100">
            <div className="position-tl w-102 border-t-3 brc-primary-tp3 ml-n1px mt-n1px"></div>

            <div className="card-header pb-3 brc-secondary-l3 text-center">
              <h5 className="card-title mb-2 mb-md-0 text-dark-m3">
                Important section
              </h5>
            </div>

            <div className="card-body pt-2 pb-1 text-center">
            <Link to="/">

              <div
                role="button"
                className="flex-wrap align-items-center my-2 bgc-secondary-l4 bgc-h-secondary-l3 radius-1 p-25 d-style"
              >
                <span className="ml-2">
                  <i className="fa fa-server text-green-m1 text-95"></i>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>Active Services</span>
              </div>
              </Link>
            </div>

            <div className="card-body pt-2 pb-1 text-center">
            <Link to="/">

              <div
                role="button"
                className="flex-wrap align-items-center my-2 bgc-secondary-l4 bgc-h-secondary-l3 radius-1 p-25 d-style"
              >
                <span className="ml-2">
                  <i className="fa fa-check-circle text-green-m1 text-95"></i>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>Active Packages</span>
              </div>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
