
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, addUser, refreshUserList } from "./userSlice";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validateName, validateSubject, validateMarks } from "./validation";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import InputAdornment from "@mui/material/InputAdornment";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

import './AddUserModal.css';

const AddUserModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.user.isModalOpen);
  const users = useSelector((state) => state.user.users);

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [nameError, setNameError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [marksError, setMarksError] = useState("");

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleAddUser = () => {
    if (validateForm()) {
      const id = users.length + 1; // Generate a unique ID based on the length of the users array
      console.log("Adding user:", { id, name, subject, marks });
      dispatch(addUser({ id, name, subject, marks }));
      dispatch(refreshUserList());
      dispatch(closeModal());
      setName("");
      setSubject("");
      setMarks("");
    }
  };

  const validateForm = () => {
    let isValid = true;

    const nameValidationResult = validateName(name);
    const subjectValidationResult = validateSubject(subject);
    const marksValidationResult = validateMarks(marks);

    if (nameValidationResult) {
      setNameError(nameValidationResult);
      isValid = false;
    } else {
      setNameError("");
    }

    if (subjectValidationResult) {
      setSubjectError(subjectValidationResult);
      isValid = false;
    } else {
      setSubjectError("");
    }

    if (marksValidationResult) {
      setMarksError(marksValidationResult);
      isValid = false;
    } else {
      setMarksError("");
    }

    return isValid;
  };

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30vw" ,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "5px",
          padding: "2% 8%",
        }}
        className="editfrom"
      >
        <h1 className="textHead"> Name </h1>
        <TextField
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!nameError}
          helperText={nameError}
          style={{ marginBottom: 20, borderRadius: 0 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person2OutlinedIcon className="addlockk" />
              </InputAdornment>
            ),
          }}
        />
        <h1 className="textHead"> Subject </h1>
        <TextField
          variant="outlined"
          fullWidth
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          error={!!subjectError}
          helperText={subjectError}
          style={{ marginBottom: 20, borderRadius: 0 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ChatOutlinedIcon className="addlockk" />
              </InputAdornment>
            ),
          }}
        />
        <h1 className="textHead"> Mark </h1>
        <TextField
          variant="outlined"
          fullWidth
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          error={!!marksError}
          helperText={marksError}
          style={{ marginBottom: 20, borderRadius: 0 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BookmarkBorderOutlinedIcon className="addlockk" />
              </InputAdornment>
            ),
          }}
        />
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Button variant="contained" className="addbtn" onClick={handleAddUser}>
            Add
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
