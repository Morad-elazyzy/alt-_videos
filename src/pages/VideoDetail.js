// import {} from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Grid, Container, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchData } from "../utils/fetchData";
import { VideoCard } from "../components/index";
const VideoDetail = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("idle");
  const [video, setVideo] = useState(null);
  const [similarVideos, setSimilarVideos] = useState(null);
  useEffect(() => console.log(status), [status]);

  ///fetch video base on page:videoId
  useEffect(() => {
    setStatus("loading");
    fetchData(`videos?part=snippet,statistics&id=${id} `)
      .then((res) => {
        setVideo(res.items[0]);
        ///fetch similar video
        fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
          .then((res) => {
            setSimilarVideos(res.items);
            setStatus("idle");
          })
          .catch((err) => {
            setStatus("error");
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setStatus("error");
      });
  }, [id]);

  /// render html base on status == idel | loading | error
  let htmlContent;
  if (status === "idle" && video && similarVideos && similarVideos.length > 0) {
    htmlContent = (
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Box>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video.id}`}
              className="react-player"
              controls
            />
          </Box>
          <Typography color="#fff" variant="h5" fontWeight="bold" py={2}>
            {video.snippet.title}
          </Typography>
          <Link to={`/channel/${video.snippet.channelId}`}>
            <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
              {video.snippet.channelTitle}
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack sx={{ flexWrap: "wrap", gap: "1rem" }}>
            {similarVideos.map((i) => (
              <VideoCard videoDetail={i} key={i.id.videoId} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    );
  } else if (status === "loading") {
    htmlContent = <div style={{ color: "#fff" }}>loading</div>;
  } else if (status === "error") {
    htmlContent = <div style={{ color: "#fff" }}>err</div>;
  }

  return <Container>{htmlContent}</Container>;
};

export default VideoDetail;
