export const state = () => ({
    todos: []
})
export const getters = {
    getTodos(state) {
      return state.todos
    }
  }

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false
        })
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    }
}

export const actions = {

}