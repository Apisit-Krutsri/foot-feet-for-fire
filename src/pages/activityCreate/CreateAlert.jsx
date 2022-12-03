import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const CreateAlert = ({ msg, setAlert, list, severity }) => {
// this would create "Alert popup", the color is based on conditions in "activityCreate" file
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ show: false, msg: "", severity: "" });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <Stack spacing={2} className='flex w-80 m-3 rounded-3xl'>
      <Alert severity={severity}>{msg}</Alert>
    </Stack>
  );
};

export default CreateAlert;
