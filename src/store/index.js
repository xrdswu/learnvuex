import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from "./mutation_types";
import moduleA from "./modules/moduleA";

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'wu', age: 39},
      {id: 111, name: 'cq', age: 24},
      {id: 112, name: 'kobe', age: 33},
      {id: 113, name: 'james', age: 15}
    ],
    info: {
      name: 'wu',
      age: 39,
      height: 177
    }
  },
  mutations: {
    //方法
    [INCREMENT](state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // incrementCount(state, count) {
    //   state.counter += count
    // },
    incrementCount(state, payload) {
      state.counter += payload.count;
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // state.info.name = 'kobe'
      Vue.set(state.info, 'address', '上海');
      Vue.delete(state.info, 'age')
    }
  },
  actions: {
    // context 上下文
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve('11111111')
        }, 1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    moreThan20(state) {
      return state.students.filter(s => s.age > 20);
    },
    moreThan20Length(state, getters) {
      return getters.moreThan20.length;
    },
    moreThanAge(state) {
      return age => state.students.filter(s => s.age > age)
    }
  },
  modules: {
    a: moduleA
  }
})

export default store