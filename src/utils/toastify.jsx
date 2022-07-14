import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const deleteNoteToast = (message) => {
  toast.warn(message, {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  });
};
const retrieveNoteToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  });
};
const createUpdateNoteToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  });
};
const loginToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 1400,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  });
};

export {
  deleteNoteToast,
  retrieveNoteToast,
  loginToast,
  createUpdateNoteToast,
};
