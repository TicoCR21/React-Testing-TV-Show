import axios from "axios";

export default () => 
  axios( "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes" );