import axios from "axios";

export default {
  // Gets all entrys
  getEntries: function() {
    return axios.get("/api/");
  },
  // Gets the entrys with the given id
  getEntry: function(id) {
    console.log("hits get entry");
    return axios.get("/api/entry/" + id);
  },
  // Deletes the entrys with the given id
  deleteEntry: function(id) {
    return axios.delete("/api/entry/" + id);
  },
  // Saves an entry to the database
  saveEntry: function(entryData) {
    console.log("made it to the api saveEntry, ", entryData);
    return axios.post("/api/entry", entryData);
    
  }
};
