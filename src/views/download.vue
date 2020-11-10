<template>
  <div class="drap-header">
    <div class="header">
      <router-link :to="{ name: 'User' }">
        <div>
          <p class="el-icon-arrow-left"></p>
        </div>
      </router-link>
      <h3>下载</h3>
    </div>

    <div class="header-logo">
      <img src="../assets/下载.jpg" alt="" />
    </div>
    <el-row>
      <el-button id="Btn" size="medium" type="success">下载</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handle: {},
  },
};
</script>

<style scoped>
.header {
  /* width: 5rem; */
  height: 3rem;
  background-color: red;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: #3190e8;
}
h3 {
  margin-left: 10rem;
  font-size: 1.5rem;
  color: white;
}
.header p:first-child {
  font-size: 1.5rem;
  color: white;
}
.header-logo img {
  margin-left: 8rem;
  margin-top: 4rem;
}
#Btn {
  width: 90%;
  margin: 0.5rem 1.2rem;
}
</style>
