import { Box } from "@mui/material";

const Strong = ({ children }: { children: React.ReactNode }) => (
  <Box fontWeight="fontWeightBold" display="inline">
    {children}
  </Box>
);

export default Strong;
