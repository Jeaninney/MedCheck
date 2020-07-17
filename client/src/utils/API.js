import axios from "axios";

export default {
    
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
  },
  // Gets all doctors
  getDocs: function() {
    return axios.get("/api/doctors");
  },
  // Gets the book with the given id
  getDocsId: function(id) {
    return axios.get("/api/doctors/" + id);
  },
  // Deletes the book with the given id
  deleteDocs: function(id) {
    return axios.delete("/api/doctors/" + id);
  },
  // Saves a book to the database
  saveDocs: function(docData) {
    return axios.post("/api/doctors", docData);
  }

};