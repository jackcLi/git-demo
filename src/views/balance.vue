<template>
  <div class="header">

        <div class="header-top">
           
            <div class="header-center">
            <router-link :to="{name:'User'}">
               
                <i class="el-icon-arrow-left"></i>
               
                
               
            
           </router-link>
           <h3>我的余额</h3>
            </div>


            <div class="header-bottom">
                <div class="header-bottom-1">
                    <span>当前余额</span>
                    <p>
                        
                        <img src="../assets/下载 (1).png" alt="">
                        <span>余额说明</span>
                    </p>
                   
                </div>
                <div class="header-bottom-2">
                    <span>0.00</span>
                    <span>元</span>
                </div>
                <div class="Btn1">
                        <el-button class="Btn1-1" type="info">提现</el-button>
                </div>
            </div>
          
        </div>




            <div class="header-bottom-3">
                <p>交易明细</p>
            </div>
            <div class="header-bottom-4">
                    <i>
                        <img src="../assets/下载.png" alt="">
                            <span>暂无明细记录</span>
                        </i>
                    
            </div>
          


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header-top{
    width: 100%;
    height: 16rem;
    background-color: #3190E8;
}
.header-top p{
    font-size: 1.5rem;
    color: #3190e8;
   
}
h3{
    font-size: 1.5rem;
    color: white;
    margin-left: 7rem;

}
.header-center{
    display: flex;
    height: 3rem;
    /* background-color: red; */
    align-items: center;
}
.header-center i{
    color: white;
}
.header-bottom{
    width: 90%;
    height: 12rem;
    background-color: white;
    /* margin-top: 1rem; */
    margin-left: 1.3rem;
}
.header-bottom-1 span:first-child{
    font-size: 1rem;
    margin-left: .5rem;
    margin-top: .5rem;
}
.header-bottom-1{
    display: flex;
    justify-content: space-between;
}
.header-bottom-1 p{
    display: flex;
    font-size: 1rem;
    margin-top: .5rem;
    margin-right: .5rem;
}
.header-bottom-1 img{
    width: 1rem;
}
.header-bottom-2{
    widows: 100%;
    height: 5rem;
    margin-top: 1rem;
    /* background-color: red; */
}
.header-bottom-2 span:first-child{
    font-size: 3rem;
    margin-left: .5rem;
    

}
.header-bottom-2 span:last-child{
    font-size: 1.5rem;
margin-left: .5rem;
}
.Btn1-1{
    width: 90%;
    height: 3.5rem;
    margin-top: .5rem;
    margin-left: 1.3rem;
}
.header-bottom-3 p{
    font-size: 1rem;
    margin-top: .5rem;
    margin-left: .5rem;
     color: #999;
}
.header-bottom-4{
    width: 100%;
    display: flex;
    justify-content: center;
}
i{
    text-align: center;
    font-size: 1.5rem;
    color:#999;
}
</style>