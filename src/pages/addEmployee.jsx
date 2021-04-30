import React from "react";
import Wrapper from "./wrapper";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USERS } from "../graphql/mutations";

export default function AddEmployee() {
  const [showModal, setShowModal] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const [createEmployee] = useMutation(CREATE_USERS);
  const onSubmit = (data, e) => {
    e.preventDefault();
    createEmployee({ ...data });
  };
  return (
    <>
      <button
        style={{
          float: "right",
          padding: "2%",
          marginTop: "5%",
          marginRight: "4%",
        }}
        className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <i className="fas fa-heart"></i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-l font-semibold">Add Employees</h3>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>

                {/*body*/}
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <div style={{ maxHeight: window.innerHeight - 200 }}>
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>First Name</label>
                          <input
                            {...register("firstName")}
                            placeholder="Enter First Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </Wrapper>
                      </div>
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>Last Name</label>
                          <input
                            {...register("lastName")}
                            placeholder="Enter Last Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </Wrapper>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>Phone Number</label>
                          <input
                            {...register("phoneNo")}
                            placeholder="Enter Phone Number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </Wrapper>
                      </div>
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>Email</label>
                          <input
                            {...register("email")}
                            placeholder="Enter Email"
                            type="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </Wrapper>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>Date of Birth</label>
                          <input
                            {...register("dateOfBirth")}
                            type="date"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </Wrapper>
                      </div>
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>Gender </label>

                          <select
                            {...register("gender")}
                            style={{
                              width: "100%",
                              padding: "9px 9px",
                              display: "-ms-inline-grid",
                              boxSizing: "border-box",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                          </select>
                        </Wrapper>
                      </div>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>City</label>
                          <input
                            {...register("city")}
                            placeholder="City"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </Wrapper>
                      </div>
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>Sub-City</label>
                          <input
                            {...register("subCity")}
                            placeholder="Enter Sub-City"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </Wrapper>
                      </div>
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>Woreda</label>
                          <input
                            {...register("woreda")}
                            placeholder="Enter Woreda"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </Wrapper>
                      </div>
                    </div>

                    <div class="grid grid-cols-3 gap-4">
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>Kebele</label>
                          <input
                            {...register("kebele")}
                            placeholder="Enter Kebele"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </Wrapper>
                      </div>
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>Zone</label>
                          <input
                            {...register("zone")}
                            placeholder="Enter Zone"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </Wrapper>
                      </div>
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>House Number</label>
                          <input
                            {...register("houseNo")}
                            placeholder="Enter House No"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </Wrapper>
                      </div>
                    </div>
                    <div class="grid grid-cols-1   gap-4">
                      <div>
                        {" "}
                        <Wrapper className="p-2">
                          <label>Employee Status </label>

                          <select
                            {...register("status")}
                            style={{
                              width: "100%",
                              padding: "9px 9px",
                              display: "-ms-inline-grid",
                              boxSizing: "border-box",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                          </select>
                        </Wrapper>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <br />
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      //   className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-4 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
