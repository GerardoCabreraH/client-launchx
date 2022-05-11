import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/mission-commanders",
    name: "mission-commanders",
    component: () => import("./components/MissionCommanderList")
  },
  {
    path: "/mission-commanders/:id",
    name: "mission-commander-details",
    component: () => import("./components/MissionCommander")
  },
  {
    path: "/add-mission-commander",
    name: "add-mission-commander",
    component: () => import("./components/AddMissionCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
