import { Stack, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./index";
const Navbar = () => {
  return (
    <Box
      py={2}
      position="sticky"
      spacing={1}
      top={0}
      component="nav"
      sx={{ backgroundColor: "black" }}
    >
      <Container>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignIntems="center"
          height={40}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://i.ibb.co/s9Qys2j/logo.png"
              alt="logo"
              height={45}
            />
          </Link>
          <SearchBar />
          <Button color="error" size="small" variant="contained">
            Login
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
