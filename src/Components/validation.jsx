// validation.js

export const validateName = (name) => {
    if (name.trim().length < 3 || name.trim().length > 12 || !/^[A-Za-z]+$/.test(name.trim())) {
      return 'Name should be alphabets only and between 4 to 12 characters.';
    }
    return '';
  };
  
  export const validateSubject = (subject) => {
    if (subject.trim().length < 3 || subject.trim().length > 12) {
      return 'Subject should be between 4 to 12 characters.';
    }
    return '';
  };
  
  export const validateMarks = (marks) => {
    if (isNaN(marks) || marks.trim().length === 0) {
      return 'Marks should be a number.';
    }
    return '';
  };
  