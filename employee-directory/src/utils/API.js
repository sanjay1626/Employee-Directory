import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200";
const APIKEY = "&nat=us";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

 

