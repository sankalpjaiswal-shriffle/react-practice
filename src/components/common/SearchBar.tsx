import { ChangeEvent, memo } from "react";
import { debounce } from "../../utils/debounce";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";

type SearchBarProps = {
  setSearch: (value: string | null) => void;
};

const SearchBar = memo(({ setSearch }: SearchBarProps) => {
  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length >= 2) {
      setSearch(value);
    } else {
      setSearch(null);
    }
  }, 500);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mb: 3,
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        sx={{
          mb: 2,
          color: "text.primary",
        }}
      >
        Search product
      </Typography>
      <TextField
        type="text"
        name="search"
        placeholder="Search products..."
        onChange={handleSearch}
        variant="outlined"
        size="medium"
        sx={{
          width: { xs: "100%", sm: 400 },
          "& .MuiOutlinedInput-root": {
            bgcolor: "background.paper",
          },
        }}
      />
    </Box>
  );
});

export default SearchBar;
