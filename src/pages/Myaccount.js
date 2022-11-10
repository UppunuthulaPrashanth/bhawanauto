import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/loader/Loader";
import { getProfile, updateProfile } from "../redux/features/profile/profileSlice";

export default function Myaccount() {

  const [update_data, setUpdate_data] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch();

  const onChange = (e)=>{
    const { name, value } = e.target;
    setUpdate_data({ ...update_data, [name]: value });
  }

  useEffect(() => {
      setIsLoading(true)
    dispatch(getProfile()).then(()=>{
      setIsLoading(false)
    })
  }, []);


  const onSubmit=(e)=>{
    setIsLoading(true)
      dispatch(updateProfile(update_data)).then(()=>{
        dispatch(getProfile()).then(()=>{
          setIsLoading(false)
        })
      },[])
  }

  const gettingProfile = JSON.parse(
    JSON.stringify(useSelector((state) => state.getProfile))
  );


// Api loading
if(isLoading){
  return(
    <Loader/>
  )
}


  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="wrapper-myaccount bg-white mt-sm-5">
          <h4 className="pb-4 border-bottom text-center">Account profile</h4>
          <div className="py-2">
            <div className="row py-2">
              <div className="col-md-6">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  className="bg-light form-control"
                  name="firstname"
                  placeholder="Prashanth"
                  defaultValue={gettingProfile.data?gettingProfile.data.firstname:null}
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
                  defaultValue={gettingProfile.data?gettingProfile.data.lastname:null}
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
                  defaultValue={gettingProfile.data?gettingProfile.data.email:null}
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
                  defaultValue={gettingProfile.data?gettingProfile.data.phone:null}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-md-6">
                <label htmlFor="country">Country</label>
                <select name="country" id="country" onChange={(e) => onChange(e)} className="bg-light">
                {gettingProfile.data?
                <option value={gettingProfile.data.country}>{gettingProfile.data.country}</option>:null}
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
    </div>
  );
}
