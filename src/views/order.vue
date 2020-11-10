<template>
  <div class="header-top">
    <router-link :to="{ name: 'User' }">
      <p id="left-1" class="el-icon-arrow-left"></p>
    </router-link>
    <p>我的订单</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-top {
  width: 100%;
  left: 0;
  top: 0;
  height: 4.5rem;
  position: fixed;
  background-color: #3190e8;
}
.header-top p:first-child {
  font-size: 1.5rem;
  color: white;
  margin-top: 1.5rem;
}
.header-top p:last-child {
  font-size: 1.3rem;
  color: white;
  margin-left: 4rem;
  display: inline-block;
}
</style>
