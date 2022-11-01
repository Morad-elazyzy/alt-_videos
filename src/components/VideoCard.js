import { useNavigate } from "react-router-dom";
import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function VideoCard({
  videoDetail: {
    id: { videoId },
    snippet: { channelTitle, title, thumbnails },
  },
}) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: "300px", backgroundColor: "#272727", cursor: "pointer" }}
      onClick={() => navigate(`/video/${videoId}`)}
    >
      <CardMedia component="img" height="194" image={thumbnails.medium.url} />
      <CardContent>
        <Typography component="h3" color="#fff">
          {title.slice(0, 60)}
        </Typography>
        <Typography
          mt={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          component="h3"
          color="#a4a4a4"
        >
          {channelTitle}{" "}
          <CheckBoxIcon sx={{ fontSize: "15px", marginLeft: "5px" }} />
        </Typography>
      </CardContent>
    </Card>
  );
}
