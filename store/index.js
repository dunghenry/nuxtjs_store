import Vuex from 'vuex';
new Vuex.Store({
    modules: {
      todos: {
        namespaced: true,
        state: () => ({
          list: []
        }),
        mutations: {
          add(state, { text }) {
            state.list.push({
              text,
              done: false
            })
          },
          remove(state, { todo }) {
            state.list.splice(state.list.indexOf(todo), 1)
          },
          toggle(state, { todo }) {
            todo.done = !todo.done
          }
        }
      }
    }
  })