<script setup>
const todolist = ref({
  data: [],
})
const queryTodoList = async () => {
  const res = await $fetch('/api/todo/list')
  todolist.value.data = res.data
}
await queryTodoList()
const deleteTodoItem = (data) => {
  console.log(data) //我是子组件的值
  queryTodoList()
}
</script>
<template>
  <ul class="todo-main" v-if="todolist.data.length > 0">
    <li v-for="todo in todolist.data" :key="todo.id">
      <TodoItem :todo="todo" @deleteTodoItem="deleteTodoItem"></TodoItem>
    </li>
  </ul>
  <div v-else class="todo-empty">暂无数据</div>
</template>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
.todo-main li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

.todo-main li:before {
  content: initial;
}

.todo-main li:last-child {
  border-bottom: none;
}
</style>