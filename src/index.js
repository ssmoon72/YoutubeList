import _ from 'lodash';
import React, { Component}  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//Create a new component that will produces HTML

const API_KEY = 'AIzaSyDEajLkX7R_EBesTvCXkxfIvHl3t6HD5os';



class App extends Component {
  constructor(props) {
    //constructor runs as soon as an instance of App appears on the DOM
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    //this function immediately searches for the term 'surfboards' and sets the state to the search results with a list of videos
    this.videoSearch('warrior wow');
  };

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term},
      (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
      //this.setState({videos: videos});
    });
  }

  //pass callback function onVideoSelect to VideoList component, this function is used to change the state of the App component, and display the slected video in the embedded player
  render(){
    //version of the videoSearch function that can only be called once every 300ms using debounce
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (

      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take the generated HTML and put it on the DOM (document object manager)
ReactDOM.render(<App />, document.querySelector('.container'));
