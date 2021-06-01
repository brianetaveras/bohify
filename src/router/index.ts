import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Home",
		component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
	},
	{
		path: "/signup",
		name: "Signup",
		component: () =>
			import(/* webpackChunkName: "Signup" */ "../views/Signup.vue"),
	},
	{
		path: "/signin",
		name: "Signin",
		component: () =>
			import(/* webpackChunkName: "Signin" */ "../views/Signin.vue"),
	},
	{
		path: "/app",
		name: "App",
		component: () => import(/* webpackChunkName: "App" */ "../views/App.vue"),
	},
	{
		path: "/app/about",
		name: "About",
		component: () =>
			import(/* webpackChunkName: "About" */ "../views/About.vue"),
	},
	{
		path: "/app/playlist/:id",
		name: "Playlist",
		component: () =>
			import(/* webpackChunkName: "Playlist" */ "../views/ListOfPlaylist.vue"),
	},
	{
		path: "/app/search",
		name: "Search",
		component: () =>
			import(/* webpackChunkName: "Search" */ "../views/Search.vue"),
	},
	{
		path: "/app/playlists",
		name: "PlaylistPage",
		component: () =>
			import(/* webpackChunkName: "PlaylistPage" */ "../views/Playlists.vue"),
	},
	{
		path: "*",
		name: "NotFound",
		component: () =>
			import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
