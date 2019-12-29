<template>
  <div class="room-user-list">
    <div class="room-user-list__header">
      <a href="#/rooms" class="room-list__link">Назад</a>
    </div>
    <div class="room-user-list__container">
      <a v-bind:class="{checked:user.checked}" v-on:click="toggleUser($event,user)" href="" class="room-user-list__wrap" v-for="user in userList" :key="user.login">
        <div class="room-user-list__item">
          <div class="room-user-list__ava">
            <p class="image">Krat</p>
          </div>
          <div class="room-user-list__name">{{user.login}}</div>
          <div class="room-user-list__checkbox"></div>
        </div>
      </a>
    </div>
    <div class="room-user-list__bottom">
      <v-chatCreate @submitRoomName="submitRoomUserList"></v-chatCreate>
    </div>
  </div>
</template>
<script>
import HTTP from "@/utils/axios";
import chatCreate from "./chatCreate";

const submitRoomUserList = "submitRoomUserList"

export default {
  data() {
    return {
      userList: [],
      roomName:"",
      
    };
  },
  components:{
    "v-chatCreate":chatCreate
  },
  methods:{
      toggleUser: function(evt,user){
        evt.preventDefault()
        user.checked = !user.checked     
      },
      submitRoomUserList(roomName){
        if(roomName && this.atLeastOneChecked(this.userList)){
          var room = this.getRoom(roomName,this.userList)
          HTTP.post("room/save",room).then(r=>{
            console.log("Room saved");
          })
        }
      },
      atLeastOneChecked(userList){
        var checked = function(el){
          return el.checked
        }
        if(userList.some(checked)){
          return true
        }
        return false
      },
      getRoom(name,userList){
        return {
          Id:0,
          Name:name,
          CreateDate: null,
          IsActive:1,
          Users: userList.map(x=>x.id)
        }
      }
  },
  beforeCreate() {
    HTTP.get("friends/my").then(response => {
      response.data.forEach(element => {
        let item={
            id:element.id,
            login:element.login,
            checked:false
        }
        this.userList.push(item);      
      });
    });
  }
};
</script>
<style>
.image {
  width: 50px;
  height: 50px;
}
.room-user-list__header{
  height:48px;
  border-bottom:solid 1px #DBD1D5;
}
.room-user-list__ava {
  float:left;
}

.room-user-list__name {
  float:left;
}

.room-user-list__checkbox {
  width: 30px;
  height: 30px;
  float: right;
  margin: 19px 10px;
}

.room-user-list__item {
  display: block;
  overflow: auto;
}

.room-user-list__wrap{
    display:block;
    margin:0 20px;
    border-bottom:solid 1px #DBD1D5;
}
  .room-user-list__wrap:hover{
    background-color: #DBD1D5;
}
.room-user-list__wrap:last-child{
    border-bottom: none;
}

.room-user-list__checkbox{
  background: url(../assets/checkbox-unchecked.svg); 
}

.room-user-list__wrap.checked
.room-user-list__checkbox{
    background: url(../assets/checkbox-checked.svg); 
}
</style>
