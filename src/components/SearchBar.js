import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");

  const onSearchSubmit = () => {
    if (searchKey.length > 0) {
      navigate(`/search/${searchKey}`);
    }
  };
  return (
    <OutlinedInput
      sx={{
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "30px",
      }}
      placeholder="Search"
      onChange={(e) => setSearchKey(e.target.value)}
      endAdornment={
        <InputAdornment sx={{ color: "#fff" }} position="end">
          <IconButton
            onClick={() => onSearchSubmit()}
            type="submit"
            sx={{ color: "#fff" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
