import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/index";
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from "./pages/index";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchKey" exact element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
