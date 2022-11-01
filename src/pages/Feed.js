import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box, Container, Typography, Stack } from "@mui/material";
import { SideBar, VideoCard, Spinner, Error } from "../components/index";
import { fetchData } from "../utils/fetchData";

const Feed = () => {
  const [categorie, setCategorie] = useState("new");
  const [feedVideos, setFeedVideos] = useState([]);
  const [status, setStatus] = useState("ideal");

  const getFeedData = () => {
    setStatus("loading");
    fetchData(`search?part=snippet&q=${categorie}`)
      .then((res) => {
        setStatus("idle");
        setFeedVideos(res.items);
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  };

  useEffect(() => {
    getFeedData();
  }, [categorie]);

  let FeedHtml;
  if (status === "loading") {
    FeedHtml = <Spinner spinnerStyle={{ marginTop: "100px" }} />;
  } else if (status === "error") {
    FeedHtml = (
      <Error
        tryAgainClick={() => getFeedData()}
        ErrorStyle={{ marginTop: "100px" }}
      />
    );
  } else if (status === "idle" && feedVideos.length > 0) {
    FeedHtml = feedVideos.map((i) => (
      <VideoCard videoDetail={i} key={i.id.videoId} />
    ));
  }
  return (
    <Container>
      <Grid container>
        <Grid item md={2} xs={12}>
          <SideBar setCategorie={(cat) => setCategorie(cat)} />{" "}
        </Grid>
        <Grid item md={10} xs={12}>
          <Stack
            component="h2"
            direction="row"
            fontSize={40}
            sx={{ textTransform: "capitalize" }}
            color="#fff"
          >
            {categorie + " videos"}
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ flexWrap: "wrap", gap: "1rem" }}
          >
            {FeedHtml}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feed;
