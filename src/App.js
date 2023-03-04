import { Box } from "@mui/material";
import BottomSection from "./BottomSection";
import Footer from "./Footer";
import TopSection from "./TopSection";

function App() {
  return (
    <Box sx={{ backgroundColor: "primary.main" }}>
      <TopSection></TopSection>
      <BottomSection></BottomSection>
      <Footer></Footer>
    </Box>
  );
}

export default App;
