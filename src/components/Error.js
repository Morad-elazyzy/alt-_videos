import { Stack, Button, Typography } from "@mui/material";

const Error = ({ msg = "Some went wrong", tryAgainClick, ErrorStyle }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={ErrorStyle}
      color="#fff"
      width="100%"
    >
      <Typography mb={3} component="h2" fontSize={30}>
        {msg}{" "}
      </Typography>
      <Button variant="contained" color="error" onClick={() => tryAgainClick()}>
        Try Again{" "}
      </Button>
    </Stack>
  );
};

export default Error;
