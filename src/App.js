import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import VideoDetails from "./components/videoDetails/VideoDetails";
import { Box } from "@mui/material";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/video/:id",
        element: <VideoDetails />,
      },

      {
        path: "/channel/:id",
        element: <ChannelDetail />,
      },

      {
        path: "/search/:searchTerm",
        element: <SearchFeed />,
      },
    ],
  },
]);
function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Box>
  );
}

export default App;
