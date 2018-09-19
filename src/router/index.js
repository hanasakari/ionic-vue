import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList'
import AddTodoItem from '../components/AddTodoItem'

Vue.use(Router)

export default new Router({

  routes: [
    {path: '', redirect: '/todos'},
    {path: '/todos', component: TodoList},
    {path: '/todos/add', component: AddTodoItem}
  ]
})
