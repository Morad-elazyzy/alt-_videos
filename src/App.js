import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar } from "./components/index";
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from "./pages/index";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchKey" exact element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
