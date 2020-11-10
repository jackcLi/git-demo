<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-1">
        <i class="el-icon-arrow-left"></i>
        <p>我的</p>
      </div>
      <div class="header-top-2">
        <div class="logo">
          <p>
            <i style="font-size: 3rem" class="el-icon-user"></i>
          </p>
          <p>
            <span>登录/注册</span>
            <i class="el-icon-phone">暂无绑定手机号</i>
          </p>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="section">
      <div class="section-1">
        <p>
          <span>0.00</span>
          <span>元</span>
        </p>
        <router-link :to="{ name: 'balance' }">
          <p>我的余额</p>
        </router-link>
      </div>
      <div class="section-2">
        <p>
          <span>0</span>
          <span>个</span>
        </p>
        <router-link :to="{ name: 'discount' }">
          <p>我的优惠</p>
        </router-link>
      </div>
      <div class="section-3">
        <li>
          <span>0</span>
          <span>分</span>
          <router-link :to="{ name: 'integral' }">
            <p>我的积分</p>
          </router-link>
        </li>
      </div>
    </div>

    <div class="footer">
      <div class="footer-1">
        <div>
          <i class="el-icon-chat-line-square"></i>
          <router-link :to="{ name: 'order' }">
            <p>我的订单</p>
          </router-link>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="footer-2">
        <div>
          <i class="el-icon-goods"></i>
          <p>积分商城</p>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="footer-3">
        <div>
          <i class="el-icon-s-flag"></i>
          <p>饿了么会员卡</p>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>

    <div class="footer-bom">
      <div class="footer-bom-1">
        <div>
          <i class="el-icon-s-claim"></i>
          <router-link :to="{ name: 'service' }">
            <p>服务中心</p>
          </router-link>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="footer-bom-2">
        <div>
          <i class="el-icon-platform-eleme"></i>
          <router-link :to="{ name: 'download' }">
            <p>下载饿了么APP</p>
          </router-link>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
// import vant from(vant)
export default {};
</script>

<style scoped>
.header-top {
  width: 100%;
  height: 10rem;
  background-color: #3190e8;
}
.header-top-1 {
  width: 50%;
  /* background-color: wheat; */
  display: flex;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
}
.header-top-1 p {
  font-size: 1.5rem;
  color: white;
}
i {
  font-size: 1.5rem;
  color: white;
}
.header-top-2 {
  width: 90%;
  display: flex;
  justify-content: space-between;
  /* background-color: violet; */
  margin-left: 1rem;
  margin-top: 1.3rem;
}
.logo {
  display: flex;
}

.logo p:nth-child(2) span {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  color: white;
}
.logo p:nth-child(2) i {
  font-size: 1rem;
  margin-top: 0.3rem;
}
.section {
  width: 90%;
  /* background-color: thistle; */
  height: 6rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.section div {
  width: 30%;
  height: 100%;
  border-right: solid 1px #e6e6e6;
}
.section div:nth-child(3) {
  border-right: none;
}
.section-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.section-1 span:first-child {
  font-size: 1.5rem;
  color: orange;
  width: 100%;
  text-align: center;
  /* background-color: red; */
}
.section-1 span:nth-child(2) {
  font-size: 1rem;
}
.section-1 p {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

.section div:nth-child(2) {
  width: 30%;
  height: 100%;
  /* border-right: solid 1px #E6E6E6; */
}
.section div:last-child {
  width: 30%;
  height: 100%;
  /* border-right: solid 1px #E6E6E6; */
}

.section-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.section-2 span:first-child {
  font-size: 1.5rem;
  color: red;
  width: 100%;
  text-align: center;
  /* background-color: red; */
}
.section-2 span:nth-child(2) {
  font-size: 1rem;
}
.section-2 p {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

.section-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.section-3 span:first-child {
  font-size: 1.5rem;
  color: green;
  width: 100%;
  text-align: center;
  /* background-color: red; */
}
.section-3 span:nth-child(2) {
  font-size: 1rem;
}
.section-3 p {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

.footer {
  width: 90%;
  /* background-color: paleturquoise; */
  height: 10rem;
  margin: 0.5rem auto;
}
.footer-1 {
  display: flex;
  justify-content: space-between;
  height: 3rem;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}
.footer-2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid #eeeeee;
}
.footer-3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid #eeeeee;
}
.footer-1 div {
  display: flex;
}
.footer-2 div {
  display: flex;
}
.footer-3 div {
  display: flex;
}
.footer-1 p {
  font-size: 1rem;
}

.footer-2 p {
  font-size: 1rem;
}

.footer-3 p {
  font-size: 1rem;
}
.footer-1 i:last-child {
  color: #dddddd;
}
.footer-2 i:last-child {
  color: #dddddd;
}
.footer-3 i:last-child {
  color: #dddddd;
}
.footer-1 i:first-child {
  color: palegreen;
}
.footer-2 i:first-child {
  color: red;
}
.footer-3 i:first-child {
  color: yellow;
}

.footer-bom {
  width: 90%;
  height: 10rem;
  margin: 0.5rem auto;
}
.footer-bom-1 {
  display: flex;
  justify-content: space-between;
  height: 3rem;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}
.footer-bom-1 i:last-child {
  color: #dddddd;
}
.footer-bom-1 i:first-child {
  color: blue;
}
.footer-bom-1 div {
  display: flex;
}
.footer-bom-1 p {
  font-size: 1rem;
}

.footer-bom-2 {
  display: flex;
  justify-content: space-between;
  height: 3rem;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}
.footer-bom-2 i:last-child {
  color: #dddddd;
}
.footer-bom-2 i:first-child {
  color: blue;
  font-size: 1rem;
}
.footer-bom-2 div {
  display: flex;
}
.footer-bom-2 p {
  font-size: 1rem;
}
</style>
