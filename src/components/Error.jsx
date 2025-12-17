import { Alert, Box } from "@mui/material";

export default function Error({ error }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
    >
      <Alert severity="error">{error.message}</Alert>
    </Box>
  );
}
