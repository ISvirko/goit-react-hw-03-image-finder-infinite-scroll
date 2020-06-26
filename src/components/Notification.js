import React from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

const Notification = ({ message, error, type }) => {
  store.addNotification({
    title: `${message}`,
    message: `${error}`,
    type: `${type}`,
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 5000,
    },
  });

  return <ReactNotification />;
};

export default Notification;
