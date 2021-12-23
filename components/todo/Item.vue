<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'

type Todo = { id: number; title: string; done: boolean }

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
  },
})

//自定义函数，父组件可以触发
const emits = defineEmits(['deleteTodoItem'])
const removeTodo = async (id: number) => {
  const res = await $fetch('/api/todo/remove', {
    params: { id: id },
    method: 'Delete',
  })
  emits('deleteTodoItem', '我是子组件的值')
  console.log(res)
}
</script>

<template>
  <div class="todolist-item">
    <label>
      <input type="checkbox" v-model="todo.done" />
      <span>{{ todo.title }}</span>
    </label>
    <button @click="removeTodo(todo.id)">删除</button>
  </div>
</template>

<style scoped>
.todolist-item label {
  float: left;
  cursor: pointer;
}

.todolist-item label,
.todolist-item input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

.todolist-item button {
  float: right;
  margin-top: 3px;
}
</style>
