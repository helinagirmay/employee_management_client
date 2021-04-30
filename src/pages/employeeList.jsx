//
import React from "react";
import Table from "react-tailwind-table";
import "react-tailwind-table/dist/index.css";
import { useQuery, gql } from "@apollo/client";
import ViewDetail from "./viewDetail";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: column(),
      rows: fakePlayers(),
      viewDetail: false,
      deleteEmployee: false,
    };
  }

  handleView = () => {
    this.setState({
      viewDetail: true,
    });
  };
  handleDelete = () => {
    this.setState({
      deleteEmployee: true,
    });
  };

  rowcheck = (row, column, display_value) => {
    if (column.field === "") {
      return (
        <>
          <button className="border p-2" onClick={this.handleView}>
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
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
          <button className="border p-2" onClick={this.handleDelete}>
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          ;
        </>
      );
    }
    if (column.field === "status") {
      return (
        <>
          <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
            Inactive
          </span>
          <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
            Active
          </span>
        </>
      );
    }

    if (column.field === "name") {
      return <b>{display_value}</b>;
    }

    return display_value;
  };

  render() {
    return (
      <div>
        <Table
          columns={this.state.columns}
          rows={this.state.rows}
          per_page={3}
          table_header="Test Table"
          row_render={this.rowcheck}
        />
        {this.state.viewDetail ? (
          <ViewDetail open={this.state.viewDetail} />
        ) : null}
        {this.state.deleteEmployee ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-l font-semibold">Add Employees</h3>
                  </div>

                  {/*body*/}
                  <div>Are you sure you want to remove this user??</div>
                  {/*footer*/}
                  <br />
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => this.setState({ deleteEmployee: false })}
                    >
                      Cancel
                    </button>{" "}
                    <button
                      //   className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      onClick={() => this.setState({ deleteEmployee: false })}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-4 bg-black"></div>
          </>
        ) : null}
      </div>
    );
  }
}

function column() {
  return [
    {
      field: "front_end_position.name",
      use: "Position",
    },
    {
      // use_in_display: false,
      field: "firstName", //Object destructure
      use: "First Name",
    },
    {
      // use_in_display: false,
      field: "lastName", //Object destructure
      use: "Last Name",
    },
    {
      // use_in_display: false,
      field: "email", //Object destructure
      use: "Email",
    },
    {
      // use_in_display: false,
      field: "phoneNo", //Object destructure
      use: "Phone Number",
    },
    {
      // use_in_display: false,
      field: "status", //Object destructure
      use: "Status",
    },

    {
      field: "",
      use: "View Detail",
      // use_in_search:false
    },
  ];
}

function fakePlayers() {
  return [
    {
      id: 1,
      name: "Sadio Mane",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "10",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position: {
        name: "attach",
        id: 2,
      },
    },
  ];
}

export default App;
