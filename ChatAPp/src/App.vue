<template>
  <div class="page-wrap-fix" v-bind:style="{width: windowWidth}">  
    <v-styles></v-styles>
    <div class="page-header-parent" v-bind:style="{width: windowWidth}">
      <v-header></v-header>
    </div>
    <div class="page-layout">
      <v-sidebar></v-sidebar>
      <article class="page-body">
        <router-view></router-view>
      </article>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import Styles from "./components/common";
export default {
  name: "App",
  data() {
    return {
      windowWidth: window.outerWidth
    };
  },
  components: {
    "v-sidebar": SideBar,
    "v-header": Header,
    "v-styles": Styles
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-body {
  max-width: 600px;
  margin: auto;
}
.fl_l {
  float: left;
}
.page-layout {
  width: 1100px;
  margin: 0 auto;
  margin-top:58px;
}
.page-header-parent {
  height: 50px;
  background-color:#2F4858;
  position:fixed;
  top:0;
  width:100%;
}

body{
  background-color: #E2D8D2;
}

article{
  background-color: #FFFAFA;
}
input:focus{
  outline: none;
}
a{
  color:#2F4858;
}

ul{
  list-style-type: none;
}
</style>
