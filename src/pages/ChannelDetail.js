import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

import { Spinner, Error } from "../components";
import { fetchData } from "../utils/fetchData";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const [status, setStatus] = useState("ideal");

  const { id } = useParams();
  const getChannel = () => {
    setStatus("loading");
    fetchData(`channels?part=snippet&id=${id}`)
      .then((res) => {
        setChannelDetail(res?.items[0]);
        setStatus("ideal");
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
    fetchData(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      .then((res) => {
        setVideos(res?.items);
        setStatus("ideal");
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  };

  useEffect(() => {
    getChannel();
  }, [id]);

  let FeedHtml;
  if (status === "loading") {
    FeedHtml = <Spinner spinnerStyle={{ marginTop: "100px" }} />;
  } else if (status === "error") {
    FeedHtml = (
      <Error
        tryAgainClick={() => getChannel()}
        ErrorStyle={{ marginTop: "100px" }}
      />
    );
  } else if (status === "idle" && videos && videos.length > 0) {
    // FeedHtml = videos.map((i) => console.log(i));
  }
  return <Container>{FeedHtml} </Container>;
};

export default ChannelDetail;
