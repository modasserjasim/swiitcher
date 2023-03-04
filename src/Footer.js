import { Box, Divider, Link, Stack } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: { xs: "150px" },
        p: "3%",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ width: "100%", height: "100%" }}
      >
        {/* ------ 1st Line ------ */}

        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Link
            target="_blank"
            href="https://www.facebook.com/people/Swiitcherde/100089565417468/"
          >
            <FacebookRoundedIcon
              sx={{
                fontSize: "35px",
                "&:hover": { color: "secondary.main", cursor: "pointer" },
              }}
            />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/swiitcher.de/">
            <InstagramIcon
              sx={{
                fontSize: "35px",
                "&:hover": { color: "secondary.main", cursor: "pointer" },
              }}
            />
          </Link>
        </Box>

        {/* ------ 1st Line end ------ */}

        {/* ------ 2nd Line start ------ */}

        <Box component="span" sx={{ fontFamily: "VagRoundedRegular" }}>
          © TT-Verlag
        </Box>
        {/* ------ 2nd Line end ------ */}

        {/* ------ 3rd Line start ------ */}

        <Box>
          <Link
            target="_blank"
            href="https://www.swiitcher.de/datenschutzerkl%C3%A4rung"
            sx={{
              textDecoration: "none",
              color: "black",
              pr: "5px",
              fontSize: "10px",
              fontFamily: "VagRoundedRegular",
              "&:hover": { color: "secondary.main" },
            }}
          >
            Datenschutz{" "}
          </Link>
          |
          <Link
            target="_blank"
            href="https://www.swiitcher.de/impressum"
            sx={{
              textDecoration: "none",
              color: "black",
              px: "5px",
              fontSize: "10px",
              fontFamily: "VagRoundedRegular",
              "&:hover": { color: "secondary.main" },
            }}
          >
            {" "}
            Impressum{" "}
          </Link>
          |
          <Link
            target="_blank"
            href="https://www.swiitcher.de/agb"
            sx={{
              textDecoration: "none",
              color: "black",
              pl: "5px",
              fontSize: "10px",
              fontFamily: "VagRoundedRegular",
              "&:hover": { color: "secondary.main" },
            }}
          >
            AGB
          </Link>
        </Box>
        {/* ------ 3rd Line end ------ */}
      </Stack>
    </Box>
  );
}

export default Footer;
