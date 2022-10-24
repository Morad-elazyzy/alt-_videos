import { Stack, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./index";
const Navbar = () => {
  return (
    <Box py={2} bgcolor="black" position="sticky" component="nav">
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://i.ibb.co/s9Qys2j/logo.png"
              alt="logo"
              height={45}
            />
          </Link>
          <SearchBar />
          <Button color="error" variant="contained">
            Login
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
