import { Loading } from '@/components';
import { getReq } from '@/utils/apiHandlers';
import { reactIcons } from '@/utils/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const getUserData = async () => {
    setLoading(true);
    try {
      const res = await getReq(`/user/users/${id}`);
      const { data, status, error } = res;

      console.log(res, ' res of users');
      if (status) {
        setUser(data[0]);
      } else {
        if (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getUserData();
    /*  eslint-disable */
  }, []);

  console.log(user);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container ">
          <div className="flex items-center gap-5 mt-14 mb-5">
            <button
              className=" text-black font-medium p-3 rounded-full text-14 bg-primary-1200 font-comfortaa "
              onClick={() => navigate(-1)}
            >
              {reactIcons.arrowLeft}
            </button>
            <h3 className="text-24 font-medium">User Detail</h3>
          </div>
          <div className="flex flex-col md:grid grid-cols-2 md:gap-x-5">
            <div className="input-div w-full">
              <label className="input-label" htmlFor="firstName">
                First Name
              </label>
              <input
                className="input-box"
                type="text"
                id="firstName"
                name="firstName"
                disabled
                value={user?.firstName}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="lastName">
                Last name
              </label>
              <input
                className="input-box"
                type="text"
                id="lastName"
                name="lastName"
                disabled
                value={user?.lastName}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="fatherName">
                Father&apos;s name
              </label>
              <input
                className="input-box"
                type="text"
                id="fatherName"
                name="fatherName"
                disabled
                value={user?.fatherName}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="currentAddress">
                Current Address
              </label>
              <input
                className="input-box"
                type="text"
                id="currentAddress"
                name="currentAddress"
                disabled
                value={user?.currentAddress}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="permanentAddress">
                Permanent Address
              </label>
              <input
                className="input-box"
                type="text"
                id="permanentAddress"
                name="permanentAddress"
                disabled
                value={user?.permanentAddress}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                className="input-box"
                type="text"
                id="contactNumber"
                name="contactNumber"
                disabled
                value={user?.contactNumber}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="alternateNumber">
                Alternate Number
              </label>
              <input
                className="input-box"
                type="text"
                id="alternateNumber"
                name="alternateNumber"
                disabled
                value={user?.alternateNumber}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="emergencyNumber">
                Emergency Number
              </label>
              <input
                className="input-box"
                type="text"
                id="emergencyNumber"
                name="emergencyNumber"
                disabled
                value={user?.emergencyNumber}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="emailId">
                Email
              </label>
              <input
                className="input-box"
                type="text"
                id="emailId"
                name="emailId"
                disabled
                value={user?.emailId}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="relativeName">
                Relative Name
              </label>
              <input
                className="input-box"
                type="text"
                id="relativeName"
                name="relativeName"
                disabled
                value={user?.relativeName}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="relativeRelation">
                Relative Relation
              </label>
              <input
                className="input-box"
                type="text"
                id="relativeRelation"
                name="relativeRelation"
                disabled
                value={user?.relativeRelation}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="relativeNumber">
                Relative Number
              </label>
              <input
                className="input-box"
                type="text"
                id="relativeNumber"
                name="relativeNumber"
                disabled
                value={user?.relativeNumber}
              />
            </div>
            <div className="input-div">
              <label
                className="input-label"
                htmlFor="currentWorkingCompanyName"
              >
                Current Working Company Name
              </label>
              <input
                className="input-box"
                type="text"
                id="currentWorkingCompanyName"
                name="currentWorkingCompanyName"
                disabled
                value={user?.currentWorkingCompanyName}
              />
            </div>

            <div className="input-div">
              <label className="input-label" htmlFor="companyAddress">
                Company Address
              </label>
              <input
                className="input-box"
                type="text"
                id="companyAddress"
                name="companyAddress"
                disabled
                value={user?.companyAddress}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="companyContactNumber">
                Company Contact Number
              </label>
              <input
                className="input-box"
                type="text"
                id="companyContactNumber"
                name="companyContactNumber"
                disabled
                value={user?.companyContactNumber}
              />
            </div>

            <div className="input-div">
              <label className="input-label" htmlFor="contactPersonName">
                Contact Person Name
              </label>
              <input
                className="input-box"
                type="text"
                id="contactPersonName"
                name="contactPersonName"
                disabled
                value={user?.contactPersonName}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="insuranceStatus">
                Insuarance Status
              </label>
              <select
                className="input-box"
                disabled
                value={user?.insuranceStatus}
                name="insuranceStatus"
                id=""
              >
                <option>--select--</option>
                <option value="new_customer">New Customer</option>
                <option value="existing_customer">Existing Customer</option>
              </select>
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="agentName">
                Agent Name
              </label>
              <input
                className="input-box"
                type="text"
                id="agentName"
                name="agentName"
                disabled
                value={user?.agentName}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="agentEmployeeId">
                Agent Employee Id
              </label>
              <input
                className="input-box"
                type="text"
                id="agentEmployeeId"
                name="agentEmployeeId"
                disabled
                value={user?.agentEmployeeId}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="verifyExecutive">
                Verify Executive
              </label>
              <input
                className="input-box"
                type="text"
                id="verifyExecutive"
                name="verifyExecutive"
                disabled
                value={user?.verifyExecutive}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="verifyName">
                Verify Name
              </label>
              <input
                className="input-box"
                type="text"
                id="verifyName"
                name="verifyName"
                disabled
                value={user?.verifyName}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="verifyEmployeeId">
                Verify Employee Id
              </label>
              <input
                className="input-box"
                type="text"
                id="verifyEmployeeId"
                name="verifyEmployeeId"
                disabled
                value={user?.verifyEmployeeId}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="verifyNumber">
                Verify Number
              </label>
              <input
                className="input-box"
                type="text"
                id="verifyNumber"
                name="verifyNumber"
                disabled
                value={user?.verifyNumber}
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="finalStatus">
                Final Status
              </label>
              <select
                className="input-box"
                disabled
                value={user?.finalStatus}
                name="finalStatus"
                id=""
              >
                <option>--select--</option>
                <option value="verification_complete">
                  Verification Complete
                </option>
                <option value="incomplete_verification">
                  Incomplete Verification
                </option>
                <option value="file_rejected">File Rejected</option>
              </select>
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="insurancePrice">
                Insuarance Price
              </label>
              <input
                className="input-box"
                type="text"
                id="insurancePrice"
                placeholder="Enter your Insuarance Price"
                name="insurancePrice"
                disabled
                value={user?.insurancePrice}
              />
            </div>
            <div className="input-div col-span-2">
              <label className="input-label" htmlFor="remark">
                Remark
              </label>
              <input
                className="input-box"
                type="text"
                id="remark"
                placeholder="Enter your Remark"
                name="remark"
                disabled
                value={user?.remark}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
