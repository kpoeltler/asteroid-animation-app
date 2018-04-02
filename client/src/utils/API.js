import axios from "axios";

export default {
  // Gets all entrys
  getEntries: function() {
    return axios.get("/api/entry");
  },
  // Gets the entrys with the given id
  getEntry: function(id) {
    return axios.get("/api/entry/" + id);
  },
  // Deletes the entrys with the given id
  deleteEntry: function(id) {
    return axios.delete("/api/entry/" + id);
  },
  // Saves an entry to the database
  saveEntry: function(entryData) {
    console.log("made it to the api saveEntry");
    return axios.post("/api/entry", entryData);
    
  }
};
