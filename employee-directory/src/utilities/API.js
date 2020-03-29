import axios from "axios";

const RandomUser = "https://randomuser.me/api/?results=10&nat=us";


export default {
  search: function() {
       return axios.get(RandomUser);
  }
};