<template>
    <div class="inputBox shadow">
        <input
            type="text"
            v-model="newTodoItem"
            placeholder="이곳에 해야할 일들을 적어주세요."
            v-on:keyup.enter="addTodo"
        />
        <span class="addContainer" v-on:click="addTodo">
            <font-awesome-icon icon="plus" class="addBtn" aria-hidden="true" />
        </span>

        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고</h3>
            <span slot="body">할 일을 입력해주세요.</span>
            <button slot="footer" @click ="showModal = false">닫기</button>
        </modal>
    </div>
</template>

<script>
    import Modal from "./common/AlertModal.vue";

    export default{
        data(){
            return{
                newTodoItem: "",
                showModal: false
            };
        },
        methods :{
            addTodo(){
                if(this.newTodoItem !== ""){
                    let value = this.newTodoItem && this.newTodoItem.trim();
                    this.$emit("addTodo", value);
                    this.clearInput();
                }else{
                    this.showModal =! this.showModal;
                }
            },
            clearInput(){
                this.newTodoItem = "";
            }
        },
        components : {
            Modal: Modal
        }
    };
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
}
.inputBox input {
  border-style: none;
  font-size: 1rem;
  text-align: center;
  width: 80%;
  border: 1px solid lightblue;
  border-radius: 5px;
  padding: 1%;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>