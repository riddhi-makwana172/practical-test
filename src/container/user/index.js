import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserList } from "../../redux/actions";
import { DataGrid } from "@material-ui/data-grid";
import Avatar from "@material-ui/core/Avatar";
import Modal from "../../components/Modal";

const User = (props) => {
  const dispatch = useDispatch();

  //state to store user details
  const [userData, setUserData] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState({});

  // get the user list from API
  const { userList } = useSelector((state) => state);

  useEffect(() => {
    //call action to get user list
    dispatch(fetchUserList());
  }, []);

  // table columns
  const columns = [
    { field: "id", headerName: "Number", width: 150 },
    {
      field: "profileImage",
      headerName: "Profile Image",
      width: 150,
      renderCell: (params) => {
        return <Avatar alt="profile" src={params.row.profileImage} />;
      },
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "city", headerName: "City", width: 150 },
    { field: "state", headerName: "State", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <label
            style={{ color: "blue" }}
            onClick={() => {
              handleClickOpen(params.row);
            }}
          >
            View
          </label>
        );
      },
    },
  ];

  const handleClickOpen = (data) => {
    setOpen(true);
    setSelectedUserData(data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (userList) {
      const result = userList.map((user, index) => {
        return {
          id: index + 1,
          profileImage: user.picture.thumbnail,
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          email: user.email,
          city: user.location.city,
          state: user.location.state,
          gender: user.gender,
          country: user.location.country,
          age: user.dob.age,
          phone: user.phone,
          cell: user.cell,
          username: user.login.username,
        };
      });
      setUserData(result);
    }
  }, [userList]);

  return (
    <>
      <div style={{ height: 500, width: "100%" }}>
        {userData && <DataGrid rows={userData} columns={columns} />}
      </div>

      {open && (
        <Modal
          open={open}
          handleOpen={handleClickOpen}
          handleClose={handleClose}
          data={selectedUserData}
        />
      )}
    </>
  );
};

export default User;
