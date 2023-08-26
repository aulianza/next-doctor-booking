import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="top-center"
      containerStyle={{
        zIndex: 99999999,
      }}
      toastOptions={{
        duration: 3000,
        style: {
          marginBottom: " 3px",
          width: "100%",
          height: "50px",
          maxWidth: "450px",
          borderRadius: "10px",
          zIndex: "999999999",
        },
        success: {
          style: {
            background: "#63d246",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#63d246",
          },
        },
        error: {
          style: {
            background: "#ff4c4d",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ff4c4d",
          },
        },
      }}
    />
  );
};

export default Toast;
