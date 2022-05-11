<template>
<h4>Mission Commander</h4>
  <div v-if="currentMissionCommander" class="edit-form">
    <form>
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" disabled class="form-control" id="name"
          v-model="currentMissionCommander.name"
        />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" disabled class="form-control" id="username"
          v-model="currentMissionCommander.username"
        />
      </div>
      <div class="form-group">
        <label for="mainStack">Main Stack</label>
        <input type="text" class="form-control" id="mainStack"
          v-model="currentMissionCommander.mainStack"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteOneMissionCommander">
      Eliminar
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateOneMissionCommander">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un mission commander. </p>
  </div>
</template>
<script>
import ExplorerService from "../services/ExplorerService";
export default {
  name: "mission-commanders",
  data() {
    return {
      currentMissionCommander: null,
      message: ''
    };
  },
  methods: {
    getOneMissionCommander(id) {
      ExplorerService.getMissionCommander(id)
        .then(response => {
          this.currentMissionCommander= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteOneMissionCommander() {
      ExplorerService.deleteMissionCommander(this.currentMissionCommander.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "mission-commanders" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateOneMissionCommander() {
      ExplorerService.updateMissionCommander(this.currentMissionCommander.id, this.currentMissionCommander)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getOneMissionCommander(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
