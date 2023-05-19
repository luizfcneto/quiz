import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/modules/helloWorld/HelloWorld';
import Quiz from '../pages/Quiz.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/quiz',
            name: 'Quiz',
            component: Quiz
        }
    ],
    mode: 'history'
});
