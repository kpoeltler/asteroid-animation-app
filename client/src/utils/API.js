import axios from "axios";

export default {
  // Gets all entrys
  getentrys: function() {
    return axios.get("/api/entry");
  },
  // Gets the entrys with the given id
  getentry: function(id) {
    return axios.get("/api/entry/" + id);
  },
  // Deletes the entrys with the given id
  deleteentry: function(id) {
    return axios.delete("/api/entry/" + id);
  },
  // Saves an entry to the database
  saveentry: function(entryData) {
    return axios.post("/api/entry", entryData);
  }
};
