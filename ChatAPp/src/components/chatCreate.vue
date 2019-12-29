<template>
    <div class="chat-create">
        <div class="chat-create__ava"></div>
        <div class="chat-create__name">
            <input type="text" placeholder="Введите название беседы" v-model="roomName" class="search-field">
        </div>
        <button type="button" v-on:click="submitRoomName" class="flat-button chat-create__btn">Создать беседу</button>
    </div>
</template>
<script>
export default {
    name:"chatCreate",   
    data(){
        return{
            roomName:""
        }
    },
    methods:{
        submitRoomName(){
            this.$emit('submitRoomName',this.roomName)
        }
    }
}
</script>
<style>
.chat-create{
    padding:11px 17px 12px;
    height: 70px;
    border-top: solid 1px #8B8796;
}
.chat-create__ava{
    width:46px;
    height: 46px;
    background-color: blue;
    float:left;
}
.chat-create__name{
    float:left;
    padding-left: 10px;
    height:46px;
}
.chat-create__btn{
    float:right;
    margin-top:8px
}
.search-field{
    background-color: #FFFAFA;   
    line-height: 18px;
    padding-top:13px;
    padding-bottom: 13px;
    padding-right: 100px;
    border-style: none;
}
</style>