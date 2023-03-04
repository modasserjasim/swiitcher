import { Box, Link, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { GreenButton } from "./component/Buttons";
import HelpIcon from "@mui/icons-material/Help";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOneRounded";
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwoRounded";
import Looks3RoundedIcon from "@mui/icons-material/Looks3Rounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { List } from "./component/List";

function BottomSection() {
  return (
    <Container sx={{ pb: "3rem" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt={4}
      >
        {/* --------- 3rd section start --------- */}

        <Box
          sx={{
            width: { xs: "40%", sm: "30%", md: "20%", lg: "20%" },
            pt: "4rem",
          }}
        >
          <img
            src="./puzzle.svg"
            style={{
              transform: "rotate(35deg)",
            }}
          ></img>
        </Box>
        <Typography
          variant="h5"
          component="p"
          align="center"
          sx={{ color: "white", fontFamily: "VagRoundedBold" }}
        >
          <Box
            component="span"
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "VagRoundedBold",
              color: "secondary.main",
            }}
          >
            MATCH!
          </Box>{" "}
          Ein Unternehmen möchte dich als Mitarbeiter*in gewinnen.
        </Typography>

        <Typography
          variant="h5"
          component="p"
          align="center"
          sx={{ color: "white", fontFamily: "VagRoundedBold" }}
        >
          <Box
            component="span"
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "VagRoundedBold",
              color: "secondary.main",
            }}
          >
            Wie?
          </Box>{" "}
          Ganz einfach.
        </Typography>
        <Box>
          <List>
            <LooksOneRoundedIcon color="secondary" />
            {"    "}
            <Box
              component="span"
              pl={1}
              sx={{ fontFamily: "VagRoundedRegular" }}
            >
              Klicke auf JETZT ANONYM SWiiTCHEN
            </Box>
          </List>
          <List>
            <LooksTwoRoundedIcon color="secondary" />
            {"    "}
            <Box
              component="span"
              pl={1}
              sx={{ fontFamily: "VagRoundedRegular" }}
            >
              Erstelle ein anonymes Profil
            </Box>
          </List>
          <List>
            <Looks3RoundedIcon color="secondary" />
            {"    "}
            <Box
              component="span"
              pl={1}
              sx={{ fontFamily: "VagRoundedRegular" }}
            >
              Erhalte Anfragen von Unternehmen
            </Box>
          </List>
        </Box>
        <Link
          href="https://www.swiitcher.de/anonym-swiitchen"
          sx={{ textDecoration: "none" }}
        >
          <GreenButton variant="contained" size="large">
            JETZT ANONYM SWiiTCHEN
          </GreenButton>
        </Link>
        {/* --------- 3rd section end --------- */}

        {/* --------- 4th section start --------- */}
        <Box sx={{ pt: "4rem" }}>
          <HelpIcon color="secondary" sx={{ fontSize: "13rem" }}></HelpIcon>
        </Box>
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
            fontFamily: "VagRoundedBold",
          }}
        >
          Warum du über „swiitcher“ einen neuen Job suchen solltest?
        </Typography>
        <ul style={{ color: "white", paddingBottom: "1rem" }}>
          <List>
            <CheckCircleIcon color="secondary" />
            <Box sx={{ pl: 1, py: 0.5, fontFamily: "VagRoundedRegular" }}>
              Unternehmen bewerben sich bei dir
            </Box>{" "}
          </List>
          <List>
            <CheckCircleIcon color="secondary" />
            <Box sx={{ pl: 1, py: 0.5, fontFamily: "VagRoundedRegular" }}>
              Du bleibst anonym
            </Box>
          </List>
          <List>
            <CheckCircleIcon color="secondary" />
            <Box sx={{ pl: 1, py: 0.5, fontFamily: "VagRoundedRegular" }}>
              Es <span style={{ fontFamily: "Arial" }}>zählt</span> deine
              Qualifikation
            </Box>
          </List>
          <List>
            <CheckCircleIcon color="secondary" />
            <Box sx={{ pl: 1, py: 0.5, fontFamily: "VagRoundedRegular" }}>
              Jobwechsel ohne Vorurteile
            </Box>
          </List>
          <List>
            <CheckCircleIcon color="secondary" />
            <Box sx={{ pl: 1, py: 0.5, fontFamily: "VagRoundedRegular" }}>
              kostenfrei
            </Box>
          </List>
          <List>
            <CheckCircleIcon color="secondary" />
            <Box sx={{ pl: 1, py: 0.5, fontFamily: "VagRoundedRegular" }}>
              smart
            </Box>
          </List>
          <List>
            <CheckCircleIcon color="secondary" />
            <Box sx={{ pl: 1, py: 0.5, fontFamily: "VagRoundedRegular" }}>
              einzigartig
            </Box>
          </List>
        </ul>
        <Link
          href="https://www.swiitcher.de/anonym-swiitchen"
          sx={{ textDecoration: "none" }}
        >
          <GreenButton size="large">
            <span style={{ paddingRight: "30px", paddingLeft: "30px" }}>
              LOS GEHT`S!
            </span>
          </GreenButton>
        </Link>

        {/* --------- 4th section end --------- */}
      </Stack>
    </Container>
  );
}

export default BottomSection;
