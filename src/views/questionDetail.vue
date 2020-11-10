<template>
<div class="header">
<div class="header-top">
    <router-link :to="{name:'service'}">
        <div>
<p class="el-icon-arrow-left"></p>
        </div>

</router-link>
<p>{{$route.query.card}}</p>


</div>
<div class="section">
<p>{{$route.query.title}}</p>
</div>



</div>
</template>

<script>
export default {

}
</script>

<style scoped>
      .header-top{
          background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height:3rem;
    display: flex;
    align-items: center;
      }
      .header-top p:first-child{
          font-size: 1.3rem;
          color: white;

      }
         .header-top p:last-child{
          font-size: 1.3rem;
          color: white;
          margin-left: 2rem;

      }
      .section{
          flex: 1;
          font-size: 1.2rem;
          margin-top: 3rem;
      }
</style>