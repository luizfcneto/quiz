import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/modules/helloWorld/HelloWorld';
import Quiz from '../pages/Quiz.vue';
import CreatedQuestion from '@/components/modules/createdQuestion/createdQuestion';

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
        },
        {
            path: '/created-question',
            name: 'CreatedQuestion',
            component: CreatedQuestion
        }
    ],
    mode: 'history'
});
