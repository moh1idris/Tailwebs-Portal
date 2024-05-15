import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { closeModal, editUser } from "./userSlice";
import { validateName, validateSubject, validateMarks } from "./validation"; 
import InputAdornment from "@mui/material/InputAdornment";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import "./EditUserModal.css";

const EditUserModal = ({ user, onClose }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [nameError, setNameError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [marksError, setMarksError] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setSubject(user.subject || "");
      setMarks(user.marks || "");
    }
  }, [user]);

  const handleEditUser = () => {
    if (validateForm()) {
      dispatch(
        editUser({ id: user.id, updatedData: { name, subject, marks } })
      );
      handleClose(); 
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
    onClose(); 
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

  if (!user) {
    return null; 
  }

  return (
    <Modal open={Boolean(user)} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30vw",
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
                <Person2OutlinedIcon className="editlockk" />
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
                <ChatOutlinedIcon className="editlockk" />
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
                <BookmarkBorderOutlinedIcon className="editlockk" />
              </InputAdornment>
            ),
          }}
        />
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Button
            variant="contained"
            className="editbtn"
            onClick={handleEditUser}
          >
            Update
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
