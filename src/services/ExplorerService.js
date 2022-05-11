import http from "../http-common";

class ExplorerService {
  getAll() {
    return http.get("/explorers");
  }
  get(id) {
    return http.get(`/explorers/${id}`);
  }
  create(data) {
    return http.post("/explorers", data);
  }
  update(id, data) {
    return http.put(`/explorers/${id}`, data);
  }
  delete(id) {
    return http.delete(`/explorers/${id}`);
  }
  getAllMissionCommander() {
    return http.get("/mission-commanders");
  }
  getMissionCommander(id) {
    return http.get(`/mission-commanders/${id}`);
  }
  createMissionCommander(data) {
    return http.post("/mission-commanders", data);
  }
  updateMissionCommander(id, data) {
    return http.put(`/mission-commanders/${id}`, data);
  }
  deleteMissionCommander(id) {
    return http.delete(`/mission-commanders/${id}`);
  }
}

export default new ExplorerService();
