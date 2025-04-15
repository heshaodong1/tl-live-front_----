import { defineStore } from "pinia";

export const userLoginStore = defineStore('userStore',{
    actions:{
        //登录成功后保存用户信息
        storeUser(userName:string,passWord:string){

        }
    },
    getters:{
        //获取登录的用户信息
        getLoginedUser():any{
            if(this.userId){
                return {
                    userId:this.userId,
                    nickName:this.nickName,
                    avatar:this.avatar
                }
            }
        }
    },
    state:()=>{
        return {
            userId:'',
            nickName:'',
            avatar:''
        }
    }
})