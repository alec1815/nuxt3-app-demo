<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader></TodoHeader>
      <TodoMain></TodoMain>
      <TodoFooter></TodoFooter>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  width: 600px;
  margin: 50px auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>