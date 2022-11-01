import { Stack, Box, Typography } from "@mui/material";
import { categories } from "../utils/constans";
const SideBar = ({ setCategorie }) => {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      spacing={1}
      sx={{
        position: "fixed",
        color: " red",
        overflow: "auto",
        bgcolor: "black",
      }}
    >
      {categories.map((i) => (
        <button
          key={i.name}
          className="category-btn"
          onClick={() => setCategorie(i.name.toLowerCase())}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            color="red"
          >
            {i.icon}{" "}
            <Typography color="#fff" ml={2}>
              {i.name}{" "}
            </Typography>
          </Stack>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
