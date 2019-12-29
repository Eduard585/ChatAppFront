<template>
  <div>
    <a v-on:click="createRoom('2','1')" href="#/rooms/create-room">Создать комнату</a>
    <div class="room-list" v-if="!showUsers">
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
      <h1>ROOMLIST</h1>
    </div>
  </div>
</template>
<script>
import HTTP from "@/utils/axios";
import RoomUserList from "../components/CreateRoom"

export default {
  name: "RoomList",
  data(){
    return{
      showUsers:false
    }
  },
  methods:{
    toggleUsers(){
      HTTP.get('/')
      this.showUsers = !this.showUsers;
    },
    createRoom(userList,roomName){
      console.log("OK")
    }
  },
  beforeCreate(){
    RoomUserList.submitRoomUserList = this.createRoom
  }
};
</script>