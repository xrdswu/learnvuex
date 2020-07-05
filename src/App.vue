<template>
  <div id="app">
    <h2>-----------App: modules中的内容-----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>-----------App info 是响应式-----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="changeInfo">修改信息</button>

    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-----------App getters-----------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.moreThan20}}</h2>
    <h2>{{$store.getters.moreThan20Length}}</h2>
    <h2>{{$store.getters.moreThanAge(30)}}</h2>

    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT} from "./store/mutation_types";

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: '我是app组件',
        counter: 0
      }
    },
    computed: {
      // moreThan20() {
      //   return this.$store.state.students.filter(s => s.age > 20);
      // }
    },
    methods: {
      add() {
        this.$store.commit(INCREMENT);
      },
      sub() {
        this.$store.commit('decrement');
      },
      addCount(count) {
        //this.$store.commit('incrementCount', count)
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      },
      addStudent() {
        const stu = {id: 115, name: 'Alan', age: 35}
        this.$store.commit('addStudent', stu)
      },
      changeInfo() {
        this.$store.dispatch('aUpdateInfo', '我是携带的信息').then(
          res => console.log(res)
        )
      },
      updateName() {
        this.$store.commit('updateName', 'lisi')
      },
      asyncUpdateName () {
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>
