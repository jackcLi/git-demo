<template>
  <div class="home">
    <div class="head">
      <div class="head-top">
        <div class="left">
          <i class="el-icon-eleme" style="color: #fff; font-size: 2rem"></i>
        </div>
        <div class="right">
          <span>登录</span> |
          <span>注册</span>
        </div>
      </div>

      <div class="head-main">
        <div class="head-box">
          <span style="font-size: 0.8rem; padding-left: 5px; color: #666"
            >当前定位城市：</span
          >
          <span
            style="
              font-size: 0.7rem;
              color: #9f9f9f;
              font-weight: bold;
              padding-right: 5px;
            "
            >定位不准时，请在城市列表中选择</span
          >
        </div>
      </div>
      <div class="head-bottom">
        <span style="color: #3190e8; font-size: 1.2rem; padding-left: 5px">{{
          guess
        }}</span>
        <span>
          <i
            class="el-icon-arrow-right"
            style="
              color: #999;
              font-size: 1.2rem;
              font-weight: bold;
              padding-right: 5px;
            "
          ></i>
        </span>
      </div>
    </div>
    <section class="hotCity">
      <div class="hotCity_top">
        <div
          style="
            width: 100%;
            font-size: 0.8rem;
            color: #666;
            line-height: 42px;
            padding: 5px;
          "
        >
          热门城市
        </div>
      </div>
      <div class="hotCity_bottom">
        <ul>
          <li v-for="item in hot" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    </section>
    <!-- ////// -->
    <div class="main" v-for="i in sum" :key="i">
      <p>{{ i }}</p>
      <div v-for="k in group" :key="k">
        <ul v-for="j in k" :key="j">
          <li>{{ j.name }}</li>
        </ul>
      </div>
    </div>
    <!-- ////// -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "City",
  data() {
    return {
      guess: "",
      hot: [],
      group: [],
      sum: [],
    };
  },
  created() {
    axios.get("https://elm.cangdu.org/v1/cities?type=guess").then((res) => {
      this.guess = res.data.name;
    });
    axios.get("https://elm.cangdu.org/v1/cities?type=hot").then((res) => {
      // console.log(res.data);
      this.hot = res.data;
    });
    axios.get("https://elm.cangdu.org/v1/cities?type=group").then((res) => {
      // console.log(res.data);
      for (var key in res.data) {
        this.sum.push(key);
      }

      this.sum.sort();

      this.group = res.data;
      console.log(this.group);
    });
  },
  components: {},
};
</script>
<style scoped>
.home {
  background: #f5f5f5;
}
.head-top {
  display: flex;
  width: 100%;
  background: #3190e8;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 42px;
}
.left {
  display: flex;
  align-items: center;
  padding-left: 5px;
}
.right {
  font-size: 1rem;
  color: white;
  padding-right: 10px;
}

.head-main {
  width: 100%;
  line-height: 3rem;
  border-bottom: 1px #ccc solid;
}
.head-box {
  display: flex;
  justify-content: space-between;
  background: white;
}
.head-bottom {
  width: 100%;
  display: flex;
  background: white;
  line-height: 3rem;
  border-bottom: 1px #ccc solid;
  box-shadow: 1px 0.5px 1px #ccc;
  justify-content: space-between;
}
.hotCity {
  margin: 10px auto;
  background: white;
  border-top: 1px #ccc solid;
  box-shadow: 1px 0.5px 5px #ccc;
}

.hotCity_bottom ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #3190e8;
  font-size: 1rem;
  border-top: 1px solid #ccc;
  padding-top: 5px;
}
.hotCity_bottom ul li {
  width: 22%;
  line-height: 3rem;
  text-align: center;
  color: white;
  background: #3190e8;
  border: 1px solid #ccc;
  margin: 0 5px 5px 0;
  box-shadow: 2px 1px 3px #ccc;
}
</style>