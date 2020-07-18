import axios from "axios";

export default {
	getApp: function() {
    return axios.get("/api/appointments");
	},
	
  // Gets all books
  getMeds: function() {
    return axios.get("/api/medications");
  },
  // Gets the book with the given id
  getMedsId: function(id) {
    return axios.get("/api/medications/" + id);
  },
  // Deletes the book with the given id
  deleteMeds: function(id) {
    return axios.delete("/api/medications/" + id);
  },
  // Saves a book to the database
  saveMeds: function(medData) {
    return axios.post("/api/medications", medData);
  }
};