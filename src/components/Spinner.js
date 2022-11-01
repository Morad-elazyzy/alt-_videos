import { Box, Skeleton } from "@mui/material";
import { flexbox } from "@mui/system";

const Spinner = ({ spinnerStyle }) => {
  const defaultStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={{ ...defaultStyle, ...spinnerStyle }}>
      <div class="lds-dual-ring"></div>
    </div>
  );
};

export default Spinner;
