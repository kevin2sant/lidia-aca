import { createRouter, createWebHistory } from 'vue-router'
import TestView from '../views/TestView.vue'
import LoginView from '../views/LoginView.vue'
import PropertysView from '../views/property/PropertysView.vue'
import PropertyCreateView from '../views/property/PropertyCreateView.vue'
import PropertyEditView from '../views/property/PropertyEditView.vue'

const routes = [
  {path: '/test',           name: 'test',                 component: TestView},
  {path: '/login',          name: 'login',                component: LoginView},
  {path: '/propertys',      name: 'propertys',            component: PropertysView},
  {path: '/property/:id',   name: 'propertyid',           component: PropertyEditView},
  {path: '/createproperty', name: 'createproperty',       component: PropertyCreateView}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router