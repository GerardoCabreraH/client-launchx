<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Lista de Mission Commanders </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(missionCommander, index) in missionCommander"
          :key="index"
          @click="setActiveMissionCommander(missionCommander, index)"
        >
          {{ missionCommander.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMissionCommander">
        <h4>Mission Commander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMissionCommander.name}}
          <br><label><strong>Username:</strong></label> {{ currentMissionCommander.username}}
          <br><label><strong>Main Stack:</strong></label> {{ currentMissionCommander.mainStack}}
        </div>
        <router-link :to="'/mission-commanders/' + currentMissionCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un mission commander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import ExplorerService from "../services/ExplorerService";

export default {
  name: "mission-commander-list",
  data() {
    return {
      tutorials: [],
      missionCommander: [],
      currentTutorial: null,
      currentMissionCommander: null,
      currentIndex: -1,
      title: "",
      missionCommanderId: ""
    };
  },
  methods: {
    getAllMissionCommanders(){
      ExplorerService.getAllMissionCommander()
        .then(response => {
          this.missionCommander = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMissionCommander(missionCommander, index) {
      this.currentMissionCommander= missionCommander;
      this.currentIndex = missionCommander? index : -1;
    }
  },
  mounted() {
    this.getAllMissionCommanders();
  }
};
</script>
