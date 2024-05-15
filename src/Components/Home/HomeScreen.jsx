
// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { useSelector, useDispatch } from 'react-redux';
// import { openModal, deleteUser, refreshUserList } from '../userSlice';
// import AddUserModal from '../AddUserModal';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Header from '../Header/Header'; 
// import EditUserModal from '../EditUserModel';
// import { logout } from '../AuthSlice';
// import './HomeScreen.css';
// import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

// const HomeScreen = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.user.users) || [];
//   const refreshUserData = useSelector((state) => state.user.refreshUserData);

//   useEffect(() => {
//     if (refreshUserData) {
//       dispatch(refreshUserList());
//     }
//   }, [dispatch, refreshUserData]);

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   const handleOpenModal = () => {
//     dispatch(openModal());
//   };

//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);

//   const handleMenuOpen = (event, userId) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedUserId(userId);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setSelectedUserId(null);
//   };

//   const handleEdit = (user) => {
//     setAnchorEl(null);
//     setSelectedUserId(null);
//     setSelectedUser(user);
//   };

//   const handleEditUserModalClose = () => {
//     setSelectedUser(null);
//   };

//   const handleDelete = (user) => {
//     console.log('Deleting user with ID:', user.id);
//     dispatch(deleteUser({ id: user.id }));
//     setAnchorEl(null);
//     setSelectedUserId(null);
//   };

//   return (
//     <div  className='mainHome'>
//       <Header />
//       <div style={{ padding: "35px 20px 20px 20px", borderRadius: "5px",  background: "#eeeeee"}}>
//         <Table style={{  borderRadius: "5px !important", borderCollapse: "unset", borderRadius: "5px"  , background: "#ffff" ,    padding: "0px 15px"}}>
//           <TableHead >
//             <TableRow >
//               <TableCell className='space-grotesk heading'>Name</TableCell>
//               <TableCell className='space-grotesk heading borderline'>Subject Name</TableCell>
//               <TableCell className='space-grotesk heading borderline'>Marks</TableCell>
//               <TableCell className='space-grotesk heading borderline'>Actions</TableCell>
//               <br></br>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell className='space-grotesk texts'>{user.name}</TableCell>
//                 <TableCell className='space-grotesk texts '>{user.subject}</TableCell>
//                 <TableCell className='space-grotesk texts '>{user.marks}</TableCell>
//                 <TableCell className='space-grotesk texts '>
//                   <ArrowDropDownCircleOutlinedIcon 
//                                       aria-controls={`menu-${user.id}`}
//                                       aria-haspopup="true"
//                                       onClick={(e) => handleMenuOpen(e, user.id)}
//                                       fontSize='large'
//                                       className='arrow'
//                                       >
//                   <Button
//                     variant="outlined"
//                     aria-controls={`menu-${user.id}`}
//                     aria-haspopup="true"
//                     onClick={(e) => handleMenuOpen(e, user.id)}
//                   >
//                   </Button>
//                   </ArrowDropDownCircleOutlinedIcon>
//                   <Menu
//                     id={`menu-${user.id}`}
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl) && selectedUserId === user.id}
//                     onClose={handleMenuClose}
//                   >
//                     <MenuItem onClick={() => handleEdit(user)}>Edit</MenuItem>
//                     <MenuItem onClick={() => handleDelete(user)}>Delete</MenuItem>
//                   </Menu>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <Button variant="contained" className='addbtn' onClick={handleOpenModal} style={{ marginTop: 20 }}>
//           Add User
//         </Button>
//         <AddUserModal />
//         {selectedUser && <EditUserModal user={selectedUser} onClose={handleEditUserModalClose} />}
//       </div>
//     </div>
//   );
// };

// export default HomeScreen;

import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, deleteUser, refreshUserList } from '../userSlice';
import AddUserModal from '../AddUserModal';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Header from '../Header/Header'; 
import EditUserModal from '../EditUserModel';
import { logout } from '../AuthSlice';
import './HomeScreen.css';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users) || [];
  const refreshUserData = useSelector((state) => state.user.refreshUserData);

  useEffect(() => {
    if (refreshUserData) {
      dispatch(refreshUserList());
    }
  }, [dispatch, refreshUserData]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleMenuOpen = (event, userId) => {
    setAnchorEl(event.currentTarget);
    setSelectedUserId(userId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUserId(null);
  };

  const handleEdit = (user) => {
    setAnchorEl(null);
    setSelectedUserId(null);
    setSelectedUser(user);
  };

  const handleEditUserModalClose = () => {
    setSelectedUser(null);
  };

  const handleDelete = (user) => {
    console.log('Deleting user with ID:', user.id);
    dispatch(deleteUser({ id: user.id }));
    setAnchorEl(null);
    setSelectedUserId(null);
  };

  return (
    <div className='mainHome'>
      <Header />
      <div className='customContainerStyle'>
        <Table lassName="customTableStyle">
          <TableHead>
            <TableRow>
              <TableCell className='space-grotesk heading'>Name</TableCell>
              <TableCell className='space-grotesk heading borderline'>Subject Name</TableCell>
              <TableCell className='space-grotesk heading borderline'>Marks</TableCell>
              <TableCell className='space-grotesk heading borderline'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className='space-grotesk texts'>{user.name}</TableCell>
                <TableCell className='space-grotesk texts'>{user.subject}</TableCell>
                <TableCell className='space-grotesk texts'>{user.marks}</TableCell>
                <TableCell className='space-grotesk texts'>
                  <ArrowDropDownCircleOutlinedIcon
                    aria-controls={`menu-${user.id}`}
                    aria-haspopup="true"
                    onClick={(e) => handleMenuOpen(e, user.id)}
                    fontSize='large'
                    className='arrow'
                  >
                    <Button
                      variant="outlined"
                      aria-controls={`menu-${user.id}`}
                      aria-haspopup="true"
                      onClick={(e) => handleMenuOpen(e, user.id)}
                    />
                  </ArrowDropDownCircleOutlinedIcon>
                  <Menu
                    id={`menu-${user.id}`}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && selectedUserId === user.id}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={() => handleEdit(user)}>Edit</MenuItem>
                    <MenuItem onClick={() => handleDelete(user)}>Delete</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button variant="contained" className='addbtn' onClick={handleOpenModal}>
          Add User
        </Button>
        <AddUserModal />
        {selectedUser && <EditUserModal user={selectedUser} onClose={handleEditUserModalClose} />}
      </div>
    </div>
  );
};

export default HomeScreen;
