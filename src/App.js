import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/index";
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Feed />} /> 
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchKey" exact element={<SearchFeed />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
