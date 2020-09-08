<template>
  <h1>Todo App</h1>
  <input type='text' v-model="currentTodo" placeholder="What is your todo" />
  <button type='submint' @click="createTodo">Submit</button>
  <div id='toComplete'>
    <h3>Not Done</h3>
    <ul>
      <li 
        v-for='(item,i) in todo' 
        :key='item.id' 
        :class='{completed : item.completed}'>
        <input type='checkbox' v-model="item.completed" />
        {{item.item}} 
        <button @click='deleteTodo(i)'>Delete</button>
      </li>
    </ul>
  </div>
   <div id='Completed' v-show='this.completed.length'>
     <h3>Done</h3>
    <ul>
      <li v-for='(item,i) in completed' :key='i'>{{item}} <button @click='deleteTodo(i)'>Delete</button></li>
    </ul>
  </div>
  <p>{{currentTodo}}</p>
</template>
<script>
export default {
  data () {
    return {
      todo: [],
      currentTodo: '',
      idForTodo: 0
    }
  },
  methods : {
    createTodo() {
      if (this.currentTodo === '') {
        return
      }
      this.todo.push({
        id: this.idForTodo,
        item: this.currentTodo,
        completed: false
        })
      console.log(this.todo)
      this.currentTodo = ''
      this.idForTodo++
    },
    deleteTodo(i) {
      console.log(i)
      this.todo.splice(i, 1)
    }
  }
}
</script>
<style scoped>
.completed{
  text-decoration: line-through;
  color: red
}

</style>