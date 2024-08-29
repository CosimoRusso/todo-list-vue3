import { defineStore } from 'pinia'
import { convertToObject } from 'typescript';
import { ref } from 'vue'
// import { TodoInterface } from '../interfaces/TodoInterface'

export const useTodoListStore = defineStore('todo-list', () => {
    const todos = ref<Array<TodoInterface>>([]);
    const todoId = ref<number>(1);

    function addTodo(todoText: string): void {
        if (!todoText) throw Error("Missing ToDo content");
        const newTodo: TodoInterface = {todoId: todoId.value++, text: todoText, done: false};
        todos.value.push(newTodo);
    }

    function deleteTodo(todoId: number): void {
        todos.value = todos.value.filter((t: TodoInterface) => t.todoId != todoId)
    }

    function markTodoAs(todoId: number, done: boolean): void {
        todos.value = todos.value.map((t: TodoInterface) => {
            if (t.todoId != todoId) return t;
            return {...t, done};
        })
    }

    function markAllAs(done: boolean): void {
        todos.value = todos.value.map((t: TodoInterface) => {
            return {...t, done};
        })
    }

    return { todos, addTodo, deleteTodo, markTodoAs, markAllAs }
})