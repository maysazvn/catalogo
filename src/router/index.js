import { createRouter, createWebHistory } from "vue-router";
import HomeVIew from "@/views/HomeVIew.vue";
import AlimentosView from "@/views/AlimentosView.vue";
import BrinquedosView from "@/views/BrinquedosView.vue";
import HigieneView from "@/views/HigieneView.vue";
import AcessoriosView from "@/views/AcessoriosView.vue";

const routes = [
    { path: '/', component: HomeVIew},
    {path: '/alimentos', component: AlimentosView},
    {path: '/brinquedos', component: BrinquedosView},
    {path: '/higiene', component: HigieneView},
    {path: '/acessorios', component: AcessoriosView}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router