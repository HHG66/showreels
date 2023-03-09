<!--
 * @Author: HHG
 * @Date: 2023-01-23 16:52:49
 * @LastEditTime: 2023-03-09 21:16:40
 * @LastEditors: 韩宏广
 * @FilePath: /showreel/web/src/views/front/Home/index.vue
 * @文件说明: 
-->
<script setup></script>
<template>
  <div class="main">
    <div class="header">
      <div>Home</div>
      <a href="./about/about.html">About me</a>
      <div class="head-icon-box">
        <div class="head-icon"></div>
      </div>
      <a href="./project">Portfolio</a>
      <div>Contact</div>
    </div>

    <div class="content-box">
      <div class="txt-box">
        <h1 class="home-tit">欢迎来到我的网页</h1>
        <h1 class="home-tit">此网站展示优秀项目和实现优美的设计</h1>
        <h1 class="home-tit">希望你能喜欢</h1>
        <div class="btn-box">
          <button class="btn btn-1">项 目</button>
          <button class="btn btn-2">点 击</button>
        </div>
      </div>

    </div>

    <div class="img-box2">
      <div class="img-2"></div>
    </div>
    <div class="img-box1">
      <div class="img-1"></div>
    </div>

    <!-- <div>
      <h1>欢迎来到我的网页</h1>
    </div> -->

    <div class="portfolio">
      <div class="portfolio-back3"></div>

      <div class="portfolio-back1"></div>
      <div class="portfolio-back2"></div>
      <div class="uniterm-box">
        <div class="uniterm">123</div>
        <div class="uniterm2">123</div>
        <div class="uniterm3">123</div>
      </div>
    </div>
    <div class="about">
      <div class="back-box">
        <div class="back2"></div>
        <div class="back1"></div>
        <div class="back3"></div>
        <div class="back4"></div>

        <div class="contend-box">
          <h2>关于我</h2>
          <p>一个开发两年的小菜鸡</p>
          <p>一个开发两年的小菜鸡</p>
          <p>一个开发两年的小菜鸡</p>
          <p>一个开发两年的小菜鸡</p>
          <p>一个开发两年的小菜鸡</p>
          <p>一个开发两年的小菜鸡</p>
          <p>一个开发两年的小菜鸡</p>
        </div>

      </div>

    </div>
  </div>
</template>
 
 
<style  scoped>
/* 超小屏幕 */
@media screen and (max-width: 576px) {
  .main {
    width: 100%;
  }

  .img-1 {
    background-image: url(../../../assets/image/img1.png), radial-gradient(circle, rgb(41, 84, 163), #0F103F 55%);
    background-position: 0 0, 10% -40px;
    background-repeat: no-repeat;
    background-size: 10%;
    width: 50%;
    height: 100%;
    position: absolute;
    bottom: -25%;
    right: -50px;
    /* transform: translateZ(-2px) scale(4); */
  }

  .img-2 {
    background-image: url(.../../../assets/image/img2.png);
    background-repeat: no-repeat;
    background-size: 90%;
    width: 20%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0px;
  }
}

/* 小屏幕 */
@media screen and (min-width: 768px) {
  .main {
    width: 768px;
  }
}

/* 中等屏幕 */
@media screen and (min-width: 992px) {
  .main {
    width: 992px;
  }
}

/* 大屏幕 */
@media screen and (min-width: 1400px) {
  .main {
    width: 100%;
  }

  .img-1 {
    background-image: url(../../../assets/image/img1.png), radial-gradient(circle, rgb(41, 84, 163), #0F103F 55%);
    /* background-position: 0 0, 10% -40px; */
    background-position: 0 0, 0 0px;
    background-repeat: no-repeat;
    background-size: 65%;
    width: 100%;
    height: 110%;
    position: absolute;
    bottom: 130%;
    left: 200%;
    z-index: -1;
    transform: translateZ(-2px) scale(5);
  }

  .img-2 {
    background-image: url(../../../assets/image/img2.png);
    background-repeat: no-repeat;
    background-size: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 5%;
    left: -26%;
  }
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}

a {
  color: aliceblue;
}

.main {
  width: 100%;
  height: 100%;
  background-color: #0F103F;
  overflow: auto;
  overflow-x: hidden;

  perspective: 1px;
  transform-style: preserve-3d;

}

.header {
  margin: 0 auto;
  width: 80%;
  color: white;
  display: flex;
  justify-content: space-evenly;
  padding-top: 45px;
  position: relative;
  z-index: 10;
}

.head-icon-box {
  width: 100px;
  text-align: center;
}

.head-icon {
  width: 150px;
  height: 150px;
  background-size: 150px;
  background-repeat: no-repeat;
  background-image: url(../../../assets/image/高清logo透明底原色字.png);
  position: absolute;
  top: -20px;
}

.content-box {
  width: 100%;
  height: 100%;
  position: relative;
  float: left;
}

.img-box1 {
  width: 100%;
  height: 100%;
  position: relative;
  /* float: right; */
  /* transform: translateZ(-2px) scale(4) ; */
  /* z-index: -1; */
  perspective: 1px;
  transform-style: preserve-3d;
}

.img-box2 {
  width: 30%;
  height: 60%;
  position: relative;
  /* float: right; */
  left: 0%;
  top: -4%;
  perspective: 1;
  transform: translateZ(-1px) scale(3);

}

.txt-box {
  position: absolute;
  left: 18%;
  top: 36%;
  font-family: cursive;
  z-index: 10;
}

h2 {
  color: white !important;
}

h1 {
  color: white !important;
}

.home-tit {
  font-size: 55px;
  margin: 8px;
}


.btn-box {
  text-align: center;
  margin-top: 50px;
}

.btn {
  border: none;
  line-height: 50px;
  height: 50px;
  width: 160px;
  border-radius: 40px;
  color: white;
}

.btn-1 {
  background: rgb(255, 255, 255, 0.3);
  margin-right: 20px;
  font-weight: bold;
  cursor:pointer;
}

.btn-2 {
  background: linear-gradient(135deg, rgb(201, 97, 222) 34%, rgb(41, 84, 163) 70%);
  font-weight: bold;
  cursor:pointer;
}


.back-box {
  /* width: 100%;
  height: 100%; */
  width: 1400px;
  height: 1000px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.back1 {
  width: 100%;
  height: 100%;
  background: url(../../../assets/image/BGSmallCircle.png);
  /* background: url(../../../assets/image/BGSmallCircle.png); */
  background-repeat: no-repeat;
  background-size: 70%;
  position: absolute;
  top: 40%;
  left: -27%;
  filter: drop-shadow(2000px 0 #2954A3);
  transform: translateX(-100%);
}

.back2 {
  width: 600px;
  height: 600px;
  border-radius: 100%;
  background: linear-gradient(-45deg, #2954A3, #C961DE);
  box-shadow: 10px 10px 100px #2954A3;
  background-repeat: no-repeat;
  position: absolute;
  top: 10%;
  left: 30%;
}

.back3 {
  width: 100%;
  height: 100%;
  /* background: url(./about/Illustration.png); */
  background: url(../../../assets/image/Illustration.png);
  background-repeat: no-repeat;
  background-size: 25%;
  position: absolute;
  top: 50%;
  left: 60%;
  filter: drop-shadow(0 0 #2954A3);
}

.back4 {
  width: 100%;
  height: 100%;
  /* background: url(./about/programmer.svg); */
  background: url(../../../assets/image/programmer.svg);
  background-repeat: no-repeat;
  background-size: 35%;
  position: absolute;
  top: 33%;
  left: 10%;
  filter: drop-shadow(0 0 #2954A3);
}

.contend-box {
  position: absolute;
  top: 16%;
  left: 44%;
  color: white;
  font-family: cursive;
  font-size: 20px;
}

.about {
  position: relative;
  width: 100%;
  height: 100%;
  /* margin-top: 500px; */
}

.portfolio {
  width: 1400px;
  height: 1000px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  /* margin-top: 15%; */
  text-align: center;
}

.portfolio-back1 {
  width: 100%;
  height: 100%;
  /* background-image: url(./images/BGSmallCircle1.png); */

  background-image: url(../../../assets/image/bg1.png);
  background-repeat: no-repeat;
  background-size: 58%;
  filter: drop-shadow(1400px 0 #2954A3);
  position: absolute;
  top: 17%;
  left: -80%;
  z-index: -1;
}

.portfolio-back2 {
  width: 100%;
  height: 100%;
  background-image: url(.../../../assets/image/bg2.png);
  background-size: 95%;
  background-repeat: no-repeat;
  filter: drop-shadow(1850px 0 #2954A3);
  /* filter: drop-shadow(10vh 0 #2954A3); */
  position: absolute;
  top: 10%;
  left: -130%;
  z-index: 11;

}

.portfolio-back3 {
  z-index: 0;
  width: 65%;
  height: 70%;
  /* position: absolute; */
  /* top: 10%;
  left: -130%; */
  background-image: radial-gradient(circle, rgb(41, 84, 163), rgb(15, 16, 63) 60%);
  display: inline-block;
  opacity: 0.7;
}

.uniterm-box {
  width: 1400px;
  height: 1000px;
  position: absolute;
  top: 0;
}

.uniterm {
  width: 25%;
  height: 24%;
  border: 1px solid red;
  /* margin: 0 auto; */
  position: absolute;
  top: 18%;
  left: 37%;
  background-image: url(../../../assets/image/c53c811f880411ebb6edd017c2d2eca2.jpg);
  z-index: 10;
  border-radius: 15px;
}

.uniterm2 {
  width: 25%;
  height: 24%;
  border: 1px solid red;
  /* margin: 0 auto; */
  position: absolute;
  top: 19%;
  left: 15%;
  background-image: url(../../../assets/image/Snipaste_2022-05-22_02-51-52.png);
  border-radius: 15px;
}

.uniterm3 {
  width: 25%;
  height: 24%;
  border: 1px solid red;
  /* margin: 0 auto; */
  position: absolute;
  top: 19%;
  left: 58%;
  background-image: url(../../../assets/image/th.jpeg);
  border-radius: 15px;

}
</style>