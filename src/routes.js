import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Users from './components/Users';
import TodosShow from './components/TodosShow';


Vue.use(VueRouter);


const routes =  [
    { path : '/' , component: TodosShow },
    { path : '/home' , component: Home },
    { path : '/users' , component: Users },
] ;

export default new VueRouter({
    routes,
    mode: 'history'
});