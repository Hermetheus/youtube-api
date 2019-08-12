import { Grid } from "@material-ui/core";
import React from "react";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";
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
        key: "AIzaSyA3_o79QOsYgno6y5YG4C2Ih7NUHqP4FF0",
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

            <Grid
              item
              lg={8}
              m={12}
              xs={12}
              spacing={4}
              style={{ height: "1000px" }}
            >
              <VideoDetail video={selectedVideo} />
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
