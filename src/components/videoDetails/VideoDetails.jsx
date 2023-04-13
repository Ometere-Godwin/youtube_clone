import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { Stack, Box, Typography } from "@mui/material";
import Videos from "../Videos";
import { fetchFromAPI } from "../../utils/FetchFromApi";

export default function VideoDetails() {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography color="white" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
