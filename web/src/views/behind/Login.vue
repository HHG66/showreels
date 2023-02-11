
<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router'
import facebookIcon from '@/assets/facebook.svg'
import qqIcon from '@/assets/qq.svg'
// console.log(router);
const router = useRouter()
const formState = reactive({
  username: '',
  password: '',
  registerUserName: '',
  registerPassWord: '',
});
onMounted(() => {
  let switchCtn = document.querySelector("#switch-cnt");
  let switchC1 = document.querySelector("#switch-c1");
  let switchC2 = document.querySelector("#switch-c2");
  let switchCircle = document.querySelectorAll(".switch__circle");
  let switchBtn = document.querySelectorAll(".switch-btn");
  let aContainer = document.querySelector("#a-container");
  let bContainer = document.querySelector("#b-container");
  // let allButtons = document.querySelectorAll(".submit");

  const mainF = (e) => {
    for (var i = 0; i < switchBtn.length; i++)
      switchBtn[i].addEventListener("click", changeForm)
  }

  let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function () {
      switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");
    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
  }
  mainF()

  // window.addEventListener("load", mainF);
})

const onFinish = values => {
  console.log('Success:', values);
  router.push('/admin/home/index')
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

</script>
<template>
  <div class="login-box">
    <div class="main-login">
    <div class="container a-container" id="a-container">
      <form class="form" id="a-form" method="" action="">
        <h2 class="form_title title">创建 账户</h2>
        <div class="form__icons">
          <facebookIcon class="form__icon"></facebookIcon>
          <qqIcon class="form__icon"></qqIcon>
        </div><span class="form__span">或 者 通 过 邮 箱 注 册</span>
        <!-- <input class="form__input" type="text" placeholder="Name">
        <input class="form__input" type="text" placeholder="Email">
        <input class="form__input" type="password" placeholder="Password"> -->
        <a-form :model="formState" name="basic" :wrapper-col="{ span: 24 }" autocomplete="off" @finish="onFinish"
          @finishFailed="onFinishFailed" class="form">

          <a-form-item label="" name="registerUserName"
            :rules="[{ required: true, message: 'Please input your username!' }]" class="form">
            <a-input v-model:value="formState.registerUserName" class="form__input" placeholder="Email" />
          </a-form-item>

          <a-form-item label="" name="registerPassWord"
            :rules="[{ required: true, message: 'Please input your password!' }]" class="form">
            <a-input v-model:value="formState.registerPassWord" type="password" class="form__input"
              placeholder="Password" />
          </a-form-item>

          <a-form-item>
            <a-button type="primary" html-type="submit" class="form__button button submit">注 册</a-button>
          </a-form-item>
        </a-form>
      </form>
    </div>
    <div class="container b-container" id="b-container">
      <div class="form" id="b-form" method="" action="">
        <h2 class="form_title title">登 录 网 站</h2>
        <div class="form__icons">
          <facebookIcon class="form__icon"></facebookIcon>
          <qqIcon class="form__icon"></qqIcon>
        </div><span class="form__span">使 用 邮 箱 登 录</span>
        <!-- <input class="form__input" type="text" placeholder="Email"> -->
        <!-- <input class="form__input" type="password" placeholder="Password"> -->

        <!-- <button class="form__button button submit">登 录</button> -->

        <a-form :model="formState" name="basic" :wrapper-col="{ span: 24 }" autocomplete="off" @finish="onFinish"
          @finishFailed="onFinishFailed" class="form">

          <a-form-item label="" name="username" :rules="[{ required: true, message: 'Please input your username!' }]"
            class="form">
            <a-input v-model:value="formState.username" class="form__input" placeholder="Email" />
          </a-form-item>

          <a-form-item label="" name="password" :rules="[{ required: true, message: 'Please input your password!' }]"
            class="form">
            <a-input v-model:value="formState.password" type="password" class="form__input" placeholder="Password" />
          </a-form-item>

          <a-form-item class="forgot-pass">
            <a class="form__link">忘 记 密 码?</a>
          </a-form-item>

          <a-form-item>
            <a-button type="primary" html-type="submit" class="form__button button submit">登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="switch" id="switch-cnt">
      <div class="switch__circle"></div>
      <div class="switch__circle switch__circle--t"></div>
      <div class="switch__container" id="switch-c1">
        <h2 class="switch__title title">欢 迎 回 来 !</h2>
        <p class="switch__description description">To keep connected with us please login with your personal info</p>
        <button class="switch__button button switch-btn">登录</button>
      </div>
      <div class="switch__container is-hidden" id="switch-c2">
        <h2 class="switch__title title">你好 朋友 !</h2>
        <p class="switch__description description">Enter your personal details and start journey with us</p>
        <button class="switch__button button switch-btn">注 册</button>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped lang="less">
.login-box {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-login {
  display: block;
  position: relative;
  width: 1000px;
  min-width: 1000px;
  min-height: 600px;
  height: 600px;
  padding: 25px;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
}

@media (max-width: 1200px) {
  .main-login {
    transform: scale(0.7);
  }
}

@media (max-width: 1000px) {
  .main-login {
    transform: scale(0.6);
  }
}

@media (max-width: 800px) {
  .main-login {
    transform: scale(0.5);
  }
}

@media (max-width: 600px) {
  .main-login {
    transform: scale(0.4);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 600px;
  height: 100%;
  padding: 25px;
  background-color: #ecf0f3;
  transition: 1.25s;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.form__icon {
  object-fit: contain;
  width: 30px;
  margin: 0 5px;
  opacity: 0.5;
  transition: 0.15s;
}

.form__icon:hover {
  opacity: 1;
  transition: 0.15s;
  cursor: pointer;
}

.form__input {
  width: 350px;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}

.form__input:focus {
  box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}

.form__span {
  margin-top: 30px;
  margin-bottom: 12px;
}

.form__link {
  color: #181818;
  font-size: 15px;
  margin-top: 25px;
  border-bottom: 1px solid #a0a5a8;
  line-height: 2;
}

.title {
  font-size: 34px;
  font-weight: 700;
  line-height: 3;
  color: #181818;
}

.description {
  font-size: 14px;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
}

.button {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  background-color: #4B70E2;
  color: #f9f9f9;
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
  border: none;
  outline: none;
}

/**/
.a-container {
  z-index: 100;
  left: calc(100% - 600px);
}

.b-container {
  left: calc(100% - 600px);
  z-index: 0;
}

.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;
  padding: 50px;
  z-index: 200;
  transition: 1.25s;
  background-color: #ecf0f3;
  overflow: hidden;
  box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
}

.switch__circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #ecf0f3;
  box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
  bottom: -60%;
  left: -60%;
  transition: 1.25s;
}

.switch__circle--t {
  top: -30%;
  left: 60%;
  width: 300px;
  height: 300px;
}

.switch__container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 400px;
  padding: 50px 55px;
  transition: 1.25s;
}

.switch__button {
  cursor: pointer;
}

.switch__button:hover {
  box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
  transform: scale(0.985);
  transition: 0.25s;
}

.switch__button:active,
.switch__button:focus {
  box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
  transform: scale(0.97);
  transition: 0.25s;
}

/**/
.is-txr {
  left: calc(100% - 400px);
  transition: 1.25s;
  transform-origin: left;
}

.is-txl {
  left: 0;
  transition: 1.25s;
  transform-origin: right;
}

.is-z200 {
  z-index: 200;
  transition: 1.25s;
}

.is-hidden {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: 1.25s;
}

.is-gx {
  animation: is-gx 1.25s;
}

@keyframes is-gx {

  0%,
  10%,
  100% {
    width: 400px;
  }

  30%,
  50% {
    width: 500px;
  }
}
</style>