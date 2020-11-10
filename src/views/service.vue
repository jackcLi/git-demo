<template>
  <div class="header">

      <div class="header-top">
         
         <router-link :to="{name:'User'}">
           <p id="left-1" class="el-icon-arrow-left"></p>
           </router-link>
         <p>服务中心</p>
         

      </div>
 
       <div class="wrapbox">
      <div class="header-center">
          <div class="header-center1">
            <p> <i class="el-icon-s-promotion"></i></p>
            <p>在线客服</p>
          </div>
          <div class="header-center2">
            <p><i class="el-icon-phone-outline"></i></p>
            <p>在线客服</p>
          </div>
      </div>
      <div class="content">
        <p>热门问题</p>
      
      </div>
          <div class="footer">
              <ul class="footer-1">
                <li>
                   <router-link :to="{name:'questionDetail',query:{
                     title:this.list.supervipContent,
                     card:this.list.supervipCaption
                   }}">
           <p>
           <span>{{list.supervipCaption}}</span>
           <span><i class="el-icon-arrow-right"></i></span>
           </p>
           </router-link>
                </li>
                <li>
                    <router-link :to="{name:'questionDetail',query:{
                     title:this.list.signContent,
                      card:this.list.signCaption
                   }}">
                   <p>
                    <span>{{list.signCaption}}</span>
                    <span><i class="el-icon-arrow-right"></i></span>
                    </p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'questionDetail',query:{
                     title:this.list.rankContent,
                     card:this.list.rankCaption
                   }}">
                   <p>
           <span>{{list.rankCaption}}</span>
           <span><i class="el-icon-arrow-right"></i></span>
           </p>
           </router-link>
                </li>
                <li>
                    <router-link :to="{name:'questionDetail',query:{
                     title:this.list.pointtextContent,
                      card:this.list.pointtextCaption
                   }}">
                   <p>
           <span>{{list.pointtextCaption}}</span>
           <span><i class="el-icon-arrow-right"></i></span>
           </p>
           </router-link>
                </li>
                <li>
                   <router-link :to="{name:'questionDetail',query:{
                     title:this.list.phototutorialContent,
                     card:this.list.phototutorialCaption
                   }}">
                   <p>
           <span>{{list.phototutorialCaption}}</span>
           <span><i class="el-icon-arrow-right"></i></span>
           </p>
           </router-link>
                </li>
                <li>
                    <router-link :to="{name:'questionDetail',query:{
                     title:this.list.paymentContent,
                     card:this.list.paymentCaption
                   }}">
                   <p>
           <span>{{list.paymentCaption}}</span>
           <span><i class="el-icon-arrow-right"></i></span>
           </p>
           </router-link>
                </li>
                <li>
                  
         <router-link :to="{name:'questionDetail',query:{
                     title:this.list.otherContent,
                     card:this.list.otherCaption
                   }}">
                   <p>
           <span>{{list.otherCaption}}</span>
           <span><i class="el-icon-arrow-right"></i></span>
           </p>
           </router-link>
                </li>
                <li>
                   
         <router-link :to="{name:'questionDetail',query:{
                     title:this.list.ontimeContent,
                     card:this.list.ontimeCaption
                   }}">
                   <p>
           <span>{{list.ontimeCaption}}</span>
           <span><i class="el-icon-arrow-right"></i></span>
           </p>
           </router-link>
                </li>
                <li>       
         <router-link :to="{name:'questionDetail',query:{
                     title:this.list.memberTimesContent,
                     card:this.list.memberTimesCaption
                   }}">
                   <p>
           <span>{{list.memberTimesCaption}}</span>
           <span><i class="el-icon-arrow-right"></i></span>
           </p>
           </router-link>
                </li>
                <li>    
         <router-link :to="{name:'questionDetail',query:{
                     title:this.list.memberContent,
                      card:this.list.memberCaption
                   }}">
                   <p>
           <span>{{list.memberCaption}}</span>
           <span><i class="el-icon-arrow-right"></i></span>
           </p>
           </router-link>
                </li>
              </ul>
         
          </div>
      </div>

  </div>
  
       
       
       
        
    
     
</template>

<script>
import axios from "axios"
export default {
    name:"service",
    data(){
     return{
       list:{}
     }
    },
    async created(){
      const res = await axios.get('https://elm.cangdu.org/v3/profile/explain');
      // console.log(res.data);
      this.list=res.data;
      console.log(this.list);
      console.log(res);
    }
}
</script>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  position: relative;
  
}
  .header-top{
    width: 100%;
    left: 0;
    top: 0;
    height:4.5rem;
    position: fixed;
    background-color:#3190E8;
   
  }
   .header-top p:first-child{
     font-size: 1.5rem;
     color: white;
     margin-top: 1.5rem;
     
   }
   .header-top p:last-child{
     
     font-size: 1.3rem;
     color: white;
     margin-left: 4rem;
     display: inline-block;
       
   }
  
   .wrapbox{
     
     margin-top: 4.3rem;
     flex: 1;
   }
   .header-center{
     display: flex;
     
   }
   .header-center div:first-child{
     width: 50%;
     text-align: center;
     height: 6rem;
   }
   .header-center div:last-child{
     width: 50%;
     text-align: center;
   }
   .header-center1{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     justify-content: space-evenly;
      border: 1px solid #cecece;
      border-left: none;
       border-right: none;
   }
    .header-center1 p:first-child{
      font-size: 1.5rem;
      color: orange;
    }
    .header-center1 p:last-child{
      font-size: 1rem;
    }
    .header-center2{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     justify-content: space-evenly;
     border: 1px solid #cecece;
     border-right: none;
   }
   .header-center2 p:first-child{
      font-size: 1.5rem;
      color: violet;
    }
    .header-center2 p:last-child{
      font-size: 1rem;
      
    }
    .content{
      height: 5rem;
      width: 100%;
      /* background-color: palegoldenrod; */
      /* text-align: center; */
      line-height: 5rem;
      font-size: 1.5rem;
      border-bottom: 1px solid #cecece;
      
    }
    .content p {
      margin-left: 2rem;
    }
    .footer-1{
       display: flex;
      flex-direction: column;
      overflow-y:auto;
      flex: 1;
      width: 100%;
      /* background-color: red; */
      justify-content: space-around;
      
    }
     .footer-1 li{ 
       height: 3rem;
       /* background-color: palegreen; */
       margin-bottom: 1rem;
       line-height: 3rem; 
     
     }
     .footer-1 li p{
       width: 23rem;
       margin: 0 auto;
       /* background-color: wheat; */
       display: flex;
       justify-content: space-between;
     }
      .footer-1 li p span{
       font-size: 1rem;
       color: #333;
       font-family:  Helvetica Neue,Tahoma,Arial;
     }
    
    
   
</style>>

