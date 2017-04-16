import Router, {RouteConfig} from 'vue-router';
import {LoginPageContainer} from './pages/login';
import {RecipeListPageContainer} from './pages/recipe/list';

const routes: RouteConfig[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPageContainer },
  { path: '/recipe', component: RecipeListPageContainer },
];

export const router = new Router({
  routes
});