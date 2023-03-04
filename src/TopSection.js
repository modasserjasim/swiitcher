import React from "react";
import { Box, Container, Link, Stack, styled, Typography } from "@mui/material";
import { BlueButton, GreenButton } from "./component/Buttons";
import "./iconAnimation.css";
import "./logoAnimation.css";

function TopSection() {
  return (
    <Container maxWidth="xl" sx={{ pt: 4 }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {/* --------- 1st section start --------- */}

        <Box
          sx={{ width: { xs: "70%", sm: "60%", md: "40%" }, maxWidth: "400px" }}
        >
          {/* --------- logo start --------- */}
          <svg
            id="logoHeaderWhite"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 864.39 134.39"
            style={{ cursor: "pointer", width: "100%" }}
          >
            <g>
              <g>
                <path
                  className="st0"
                  d="M681.58,101.05c-6.7,0-12.08,5.24-12.08,11.79c0,6.55,5.24,11.94,11.94,11.94c6.41,0,11.79-5.39,11.79-11.94 C693.23,106.44,687.99,101.05,681.58,101.05L681.58,101.05z M753.86,53.69c-5.83-4.8-10.93-6.7-17.35-6.7 c-6.71,0-14.72,3.06-20.25,7.86c-7.86,6.84-13.1,18.64-13.1,30.01c0,8.89,2.91,18.08,8.01,25.5c6.11,8.59,14.7,13.39,24.47,13.39 c8.31,0,13.99-2.62,18.51-8.88c2.18,6.13,5.09,8.44,10.34,8.44c6.84,0,10.77-4.5,10.77-12.22V29.66c0-5.25-0.15-6.41-1.46-8.89 c-1.6-3.21-5.39-5.39-9.17-5.39c-3.93,0-7.72,2.19-9.32,5.39c-1.31,2.48-1.46,3.79-1.46,8.89V53.69L753.86,53.69z M739.43,65.92 c8.31,0,14.58,8.02,14.58,18.36c0,10.5-6.27,18.52-14.58,18.52c-8.6,0-14.87-7.87-14.87-18.66 C724.56,73.79,730.97,65.92,739.43,65.92L739.43,65.92z M846.95,92.43c6.56,0,9.32-2.47,9.32-8.44c0-20.84-15.59-37-35.55-37 c-21.13,0-36.72,16.74-36.72,39.47c0,21.86,16.03,37.29,38.9,37.29c16.46,0,32.05-8.15,32.05-16.88c0-4.52-4.22-8.75-8.6-8.75 c-1.6,0-3.35,0.44-4.66,1.02c-11.22,5.54-12.53,5.98-17.63,5.98c-8.45,0-13.84-4.09-17.05-12.69H846.95L846.95,92.43z  M806.3,77.88c3.06-9.34,7.72-13.42,14.86-13.42c4.37,0,8.45,2.04,10.93,5.54c1.31,2.04,2.04,3.79,3.06,7.88H806.3L806.3,77.88z"
                  style={{ fill: "rgb(200, 212, 0)" }}
                ></path>
                <path
                  className="st1"
                  d="M71.4,33.89c0,6.04-4.53,10.72-10.27,10.72c-2.26,0-2.26,0-8-2.11c-3.32-1.21-7.1-1.96-10.27-1.96 c-6.79,0-11.63,3.47-11.63,8.3c0,2.26,1.21,4.53,3.17,5.74c2.72,1.96,2.72,1.96,12.38,4.53C68.99,65.14,78.5,74.65,78.5,90.96 c0,8.76-3.17,17.21-8.61,23.1c-6.34,6.95-16.91,10.72-29.74,10.72c-20.08,0-34.27-7.1-34.27-17.06c0-6.04,4.53-11.02,9.96-11.02 c2.87,0,2.87,0,13.89,4.23c3.47,1.36,7.85,2.26,11.32,2.26c7.7,0,12.68-4.23,12.68-10.57c0-3.17-1.36-5.74-3.93-7.25 c-2.87-1.96-4.98-2.72-16-6.04c-11.78-3.47-16.46-5.74-20.68-9.96C8.9,65.29,6.63,58.8,6.63,51.1c0-18.72,15.55-32.16,37.14-32.16 C59.93,18.94,71.4,25.13,71.4,33.89L71.4,33.89z"
                  style={{ fill: "rgb(255, 255, 255)" }}
                ></path>
              </g>
              <path
                className="st1"
                d="M169.31,56.08c2.57-8.61,5.59-11.63,11.78-11.63c6.04,0,11.17,4.98,11.17,10.87c0,2.11-0.3,3.47-1.66,7.55 l-15.7,44.69c-4.08,11.63-8,15.7-15.25,15.7c-6.19,0-9.96-3.32-12.83-11.78l-9.51-27.78l-7.7,23.85 c-3.77,11.78-7.55,15.7-14.64,15.7c-6.19,0-10.87-4.08-13.59-11.78L84.31,62.73c-1.66-4.53-1.81-5.28-1.81-7.7 c0-5.74,4.98-10.57,11.02-10.57c6.19,0,9.21,3.02,11.78,11.47L115.11,89l10.87-34.27c2.27-7.25,5.59-10.12,11.63-10.12 c5.44,0,8.76,3.02,11.02,10.12l10.87,34.12L169.31,56.08L169.31,56.08z"
                style={{ fill: "rgb(255, 255, 255)" }}
              ></path>
              <path
                className="st1"
                d="M359.76,108.47c0,5.28-0.15,6.64-1.51,9.21c-1.66,3.32-5.59,5.59-9.51,5.59c-4.08,0-8-2.26-9.66-5.59 c-1.36-2.57-1.51-3.77-1.51-9.21V65.75c-5.89,0.15-9.21-0.91-11.17-3.17c-1.66-2.11-2.57-4.38-2.57-6.79 c0-5.13,3.32-9.06,8.61-9.81c1.51-0.3,1.51-0.3,5.13-0.3V34.19c0-5.28,0.15-6.64,1.51-9.06c1.66-3.32,5.59-5.59,9.66-5.59 c3.93,0,7.85,2.26,9.51,5.44c1.36,2.57,1.51,3.77,1.51,9.21v11.47h4.08c4.83,0,6.19,0.15,8.46,1.36c2.87,1.51,4.98,5.13,4.98,8.76 c0,3.62-2.11,7.25-4.98,8.61c-2.42,1.21-3.47,1.36-8.46,1.36h-4.08V108.47L359.76,108.47z"
                style={{ fill: "rgb(255, 255, 255)" }}
              ></path>
              <path
                className="st1"
                d="M439.67,48.69c3.77,2.11,6.19,6.04,6.19,10.12c0,5.43-3.93,9.96-8.76,9.96c-1.96,0-2.57-0.15-8-2.26 c-3.17-1.21-5.59-1.66-8-1.66c-9.51,0-16.3,8-16.3,19.17c0,11.47,6.79,19.02,16.91,19.02c2.72,0,5.74-0.75,8.76-2.11 c3.77-1.81,4.38-1.96,6.34-1.96c5.13,0,9.21,4.38,9.21,10.12c0,3.02-1.66,6.19-4.23,8.15c-5.28,3.92-13.89,6.49-22.19,6.49 c-10.87,0-19.93-3.92-26.87-11.47c-7.1-7.7-10.12-16.16-10.12-28.54c0-12.08,4.08-22.65,11.47-29.29 c7.1-6.49,17.06-10.27,26.42-10.27C427.29,44.16,434.54,45.82,439.67,48.69L439.67,48.69z"
                style={{ fill: "rgb(255, 255, 255)" }}
              ></path>
              <path
                className="st1"
                d="M482.13,50.5c7.55-4.53,13.28-6.34,20.38-6.34c7.4,0,14.49,2.72,19.48,7.4c5.43,4.98,7.55,11.02,7.55,20.68 v36.24c0,5.28-0.15,6.64-1.51,9.21c-1.66,3.32-5.59,5.59-9.51,5.59c-4.08,0-8-2.26-9.66-5.59c-1.36-2.57-1.51-3.77-1.51-9.21V78.58 c0-9.51-4.68-15.25-12.38-15.25c-7.4,0-12.83,5.89-12.83,13.74v31.4c0,5.28-0.15,6.64-1.51,9.21c-1.66,3.32-5.59,5.59-9.51,5.59 c-4.08,0-8-2.26-9.66-5.59c-1.36-2.57-1.51-3.77-1.51-9.21V26.19c0-5.28,0.15-6.64,1.51-9.21c1.66-3.32,5.59-5.59,9.66-5.59 c3.92,0,7.85,2.26,9.51,5.59c1.36,2.57,1.51,3.77,1.51,9.21V50.5L482.13,50.5z"
                style={{ fill: "rgb(255, 255, 255)" }}
              ></path>
              <path
                className="st1"
                d="M567.48,91.26c3.32,8.91,8.91,13.14,17.66,13.14c5.28,0,6.64-0.45,18.27-6.19c1.36-0.6,3.17-1.06,4.83-1.06 c4.53,0,8.91,4.38,8.91,9.06c0,9.06-16.16,17.51-33.22,17.51c-23.7,0-40.31-16-40.31-38.65c0-23.55,16.15-40.92,38.05-40.92 c20.68,0,36.84,16.76,36.84,38.35c0,6.19-2.87,8.76-9.66,8.76H567.48L567.48,91.26z M596.62,76.16c-1.06-4.23-1.81-6.04-3.17-8.15 c-2.57-3.62-6.79-5.74-11.32-5.74c-7.4,0-12.23,4.23-15.4,13.89H596.62L596.62,76.16z"
                style={{ fill: "rgb(255, 255, 255)" }}
              ></path>
              <path
                className="st1"
                d="M632.44,57.29c0-7.7,4.38-12.68,11.17-12.68c4.98,0,8.61,2.57,11.02,7.85c6.19-6.19,10.11-8.3,15.25-8.3 c6.34,0,11.32,5.13,11.32,11.47c0,5.28-2.27,7.4-11.32,10.12c-12.08,4.08-15.55,7.4-15.25,14.8v27.93c0,5.28-0.15,6.64-1.51,9.21 c-1.66,3.32-5.59,5.59-9.51,5.59c-4.08,0-8-2.26-9.66-5.59c-1.36-2.57-1.51-3.77-1.51-9.21V57.29L632.44,57.29z"
                style={{ fill: "rgb(255, 255, 255)" }}
              ></path>
              <path
                className="st0"
                d="M 252.77 91.82 L 252.77 50.99 C 252.77 39.76 252.45 36.87 249.56 31.42 C 246.03 24.36 237.69 19.55 229.02 19.55 C 220.68 19.55 212.33 24.36 208.8 31.42 C 205.91 36.87 205.59 39.44 205.59 50.99 L 205.59 91.82 C 205.59 103.05 205.91 105.94 208.8 111.39 C 212.33 118.45 220.67 123.26 229.02 123.26 C 237.68 123.26 246.03 118.45 249.56 111.39 C 252.45 105.94 252.77 103.37 252.77 91.82 Z"
                transform="matrix(-1, 0, 0, -1, 458.360001, 142.810005)"
                style={{ fill: "rgb(200, 212, 0)" }}
              ></path>
              <path
                className="st0"
                d="M 311.24 91.82 L 311.24 50.99 C 311.24 39.76 310.92 36.87 308.03 31.42 C 304.5 24.36 296.16 19.55 287.81 19.55 C 279.15 19.55 270.8 24.36 267.27 31.42 C 264.38 36.87 264.06 39.44 264.06 50.99 L 264.06 91.82 C 264.06 103.05 264.38 105.94 267.27 111.39 C 270.8 118.45 279.14 123.26 287.81 123.26 C 296.15 123.26 304.5 118.45 308.03 111.39 C 310.92 105.94 311.24 103.37 311.24 91.82 Z"
                transform="matrix(-1, 0, 0, -1, 575.299988, 142.810005)"
                style={{ fill: "rgb(200, 212, 0)" }}
              ></path>
              <path
                id="leftDingen"
                className="st0"
                d="M 247.646 155.412 C 247.646 165.542 239.626 173.562 229.496 173.562 C 219.576 173.562 211.556 165.542 211.556 155.412 C 211.556 145.702 219.576 137.472 229.286 137.472 C 239.416 137.472 247.646 145.492 247.646 155.412 Z"
                transform="matrix(-1, 0, 0, -1, 458.578003, 198.662003)"
                style={{ fill: "rgb(0, 55, 78)" }}
              ></path>
              <path
                id="rightDingen"
                className="st0"
                d="M 305.302 97.702 C 305.302 107.832 297.282 115.852 287.152 115.852 C 277.232 115.852 269.212 107.832 269.212 97.702 C 269.212 87.992 277.232 79.762 286.942 79.762 C 297.072 79.762 305.302 87.782 305.302 97.702 Z"
                transform="matrix(-1, 0, 0, -1, 574.826019, 197.996002)"
                style={{ fill: "rgb(0, 55, 78)" }}
              ></path>
            </g>
          </svg>
          {/* --------- logo end --------- */}
        </Box>
        <Typography
          sx={{
            color: "white",
            fontFamily: "VagRoundedBold",
            fontSize: "20px",
          }}
          align="center"
          variant="p"
          component="p"
        >
          Mit „swiitcher“ bewirbt sich der Arbeitgeber direkt bei dir.
        </Typography>
        <Typography
          align="center"
          variant="p"
          component="p"
          sx={{
            pb: 4,
            color: "white",
            fontFamily: "VagRoundedBold",
            fontSize: "20px",
          }}
        >
          Dabei bleibst du{" "}
          <Box
            component="span"
            sx={{
              fontWeight: "bold",
              color: "#c8d400",
              fontFamily: "VagRoundedBold",
            }}
          >
            anonym!
          </Box>{" "}
          Wie das geht?
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{
            color: "white",
            fontFamily: "VagRoundedBold",
            fontSize: "20px",
          }}
        >
          … erklärt in nur 90 Sekunden.
        </Typography>

        <Box
          sx={{
            position: "relative",
            width: { xs: "98%", sm: "80%", md: "70%", xl: "60%" },
            maxWidth: "745px",
            height: { xs: "250px", sm: "300px", md: "360px", xl: "419px" },
          }}
        >
          <iframe
            style={{
              position: "absolute",
              width: "100%",
              height: " 100%",
              left: "0",
              top: "0",
            }}
            src="https://killerplayer.com/new/video/088c1005-ce7a-43c7-8c49-142a5a0c55e2"
            width="745"
            height="419"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          ></iframe>
        </Box>
        <Box sx={{ pt: "3rem" }}>
          <Link
            href="https://www.swiitcher.de/anonym-swiitchen"
            sx={{ textDecoration: "none" }}
          >
            <GreenButton variant="contained" size="large">
              JETZT ANONYM SWiiTCHEN
            </GreenButton>
          </Link>
        </Box>
        <Typography
          variant="p"
          component="p"
          align="center"
          sx={{
            color: "white",
            pt: 1,
            pb: "4rem",
            fontFamily: "VagRoundedBold",
            fontSize: "20px",
          }}
        >
          Erstelle jetzt in nur 3 Minuten dein anonymes Profil!
        </Typography>

        {/* --------- 1st section end --------- */}

        {/* --------- 2nd section start --------- */}

        <Box
          sx={{
            backgroundColor: "secondary.main",
            p: "5%",
            maxWidth: "745px",
            width: { sm: "80%", md: "70%", lg: "70%" },
            borderRadius: "5px",
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Box
              sx={{
                width: { xs: "40%", sm: "30%", md: "20%", lg: "20%" },
                maxWidth: "90px",
              }}
            >
              {/* --------- icon start --------- */}

              <svg
                id="blauweiß"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 293.39 289.39"
                style={{ height: "80px" }}
              >
                <g>
                  <path
                    className="st0"
                    d="M 131.504 200.924 L 131.504 88.85 C 131.504 58.026 130.627 50.092 122.692 35.131 C 113.005 15.753 90.113 2.55 66.315 2.55 C 43.42 2.55 20.501 15.753 10.811 35.131 C 2.879 50.092 2 57.147 2 88.85 L 2 200.924 C 2 231.75 2.879 239.683 10.811 254.644 C 20.501 274.021 43.392 287.225 66.315 287.225 C 90.083 287.225 113.005 274.021 122.692 254.644 C 130.627 239.683 131.504 232.629 131.504 200.924 Z"
                    transform="matrix(-1, 0, 0, -1, 133.503998, 289.775018)"
                    style={{ fill: "rgb(0, 55, 78)" }}
                  ></path>
                  <path
                    className="st0"
                    d="M 292 200.924 L 292 88.85 C 292 58.026 291.121 50.092 283.189 35.131 C 273.498 15.753 250.608 2.55 227.685 2.55 C 203.916 2.55 180.995 15.753 171.308 35.131 C 163.373 50.092 162.496 57.147 162.496 88.85 L 162.496 200.924 C 162.496 231.75 163.373 239.683 171.308 254.644 C 180.995 274.021 203.887 287.225 227.685 287.225 C 250.58 287.225 273.498 274.021 283.189 254.644 C 291.121 239.683 292 232.629 292 200.924 Z"
                    transform="matrix(-1, 0, 0, -1, 454.496002, 289.775018)"
                    style={{ fill: "rgb(0, 55, 78)" }}
                  ></path>
                  <path
                    id="leftDingens"
                    className="st0"
                    d="M 115.727 67.029 C 115.727 94.834 93.715 116.849 65.908 116.849 C 38.677 116.849 16.663 94.834 16.663 67.029 C 16.663 40.376 38.677 17.785 65.331 17.785 C 93.136 17.785 115.727 39.799 115.727 67.029 Z"
                    transform="matrix(-1, 0, 0, -1, 132.389996, 134.633995)"
                    style={{ fill: "rgb(199, 211, 0)" }}
                  ></path>
                  <path
                    id="rightDingens"
                    className="st0"
                    d="M 276.556 223.609 C 276.556 251.413 254.545 273.428 226.738 273.428 C 199.507 273.428 177.492 251.413 177.492 223.609 C 177.492 196.955 199.507 174.365 226.161 174.365 C 253.967 174.365 276.556 196.379 276.556 223.609 Z"
                    transform="matrix(-1, 0, 0, -1, 454.048004, 447.793015)"
                    style={{ fill: "rgb(199, 211, 0)" }}
                  ></path>
                </g>
              </svg>
              {/* --------- icon end --------- */}
            </Box>

            <Typography
              variant="h2"
              component="h2"
              align="center"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                fontFamily: "VagRoundedBold",
              }}
            >
              Jetzt anonym swi!tchen
            </Typography>
            <Typography
              variant="p"
              component="p"
              align="center"
              sx={{
                color: "primary.main",
                pb: 4,
                fontFamily: "VagRoundedRegular",
              }}
            >
              Stell dir vor, du{" "}
              <span style={{ fontFamily: "Arial" }}>könntest</span> in nur 3
              Minuten hunderten Unternehmen und Arbeitgebern zeigen, was dich
              als Mitarbeiter*in ausmacht - ohne dabei erkannt zu werden! Mit
              wenigen Fragen erstellst du ein Profil zu deiner Qualifikation und
              wir matchen dich mit passenden Jobangeboten. An dir interessierte
              Unternehmen stellen eine Anfrage, um dich zu kontaktieren.
              Neugierig? Dann{" "}
              <span style={{ fontFamily: "Arial" }}>bestätige</span> die Anfrage
              und tritt via Chat in Kontakt. 100 % anonym und kostenfrei.
            </Typography>

            <Link
              href="https://www.swiitcher.de/anonym-swiitchen"
              sx={{ textDecoration: "none" }}
            >
              <BlueButton variant="contained" size="large">
                JETZT ANONYM SWiiTCHEN
              </BlueButton>
            </Link>
          </Stack>
        </Box>
        {/* --------- 2nd section end --------- */}
      </Stack>
    </Container>
  );
}

export default TopSection;