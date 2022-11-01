import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Grid, Container, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchData } from "../utils/fetchData";
import { VideoCard, Spinner, Error } from "../components/index";

const VideoDetail = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("idle");
  const [video, setVideo] = useState(null);
  const [similarVideos, setSimilarVideos] = useState(null);
  useEffect(() => console.log(status), [status]);

  ///fetch video base on page:videoId
  const getVideoData = () => {
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
  };
  useEffect(() => {
    getVideoData();
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
          <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
            {video.snippet.channelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
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
    htmlContent = <Spinner spinnerStyle={{ marginTop: "100px" }} />;
  } else if (status === "error") {
    htmlContent = (
      <Error
        tryAgainClick={() => getVideoData()}
        ErrorStyle={{ marginTop: "100px" }}
      >
        err
      </Error>
    );
  }

  return <Container>{htmlContent}</Container>;
};

export default VideoDetail;
