import { Grid } from "@material-ui/core";
import React from "react";
import youtube from "./api/youtube";
import {
  SearchBar,
  SearchBar1,
  VideoDetail,
  VideoDetail1,
  VideoList
} from "./components";

const REACT_APP_API_KEY = `${process.env.REACT_APP_API_KEY}`;
console.log(`${process.env.REACT_APP_API_KEY}`);
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleSubmit("freeCodeCamp");
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: `${REACT_APP_API_KEY}`,
        q: searchTerm
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>

            <Grid item lg={8} m={12} xs={12} style={{ height: "1000px" }}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={12} lg={4} style={{ height: "250px" }}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar1 onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item lg={8} m={12} xs={12} style={{ height: "1000px" }}>
              <VideoDetail1 video={selectedVideo} />
            </Grid>
            <Grid item xs={12} lg={4} style={{ height: "250px" }}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
