import { Button, styled } from "@mui/material";

export const GreenButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  fontFamily: "VagRoundedBold",
  color: theme.palette.primary.main,
  border: `2px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    background: "transparent",
    color: "white",
  },
}));

export const BlueButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  fontFamily: "VagRoundedBold",
  color: "white",
  border: `2px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    background: "transparent",
    color: theme.palette.primary.main,
  },
}));
