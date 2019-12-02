import Vue from 'vue'
import Router from 'vue-router'
import Student_M from '../views/Student_M.vue'
import Clazz_L from '../views/Clazz_L.vue'
import Student_L from '../views/Student_L.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Student_M',
            component: Student_M
        },
        {
            path: '/Clazz_List',
            name: 'Clazz_L',
            component: Clazz_L
        },
        {
            path: '/Student_List',
            name: 'Student_L',
            component: Student_L
        },
    ]
})