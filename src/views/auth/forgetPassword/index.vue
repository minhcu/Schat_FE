<template>
  <!-- This is Login view -->
  <div class="login flex">
    <div class="w-1/3">
       <img src="/img/left.png" class="h-full">
    </div>
    <div class="h-1/2 my-40 bg-white rounded-md shadow-2xl flex items-center justify-center sm:px-6 lg:px-8 xl:w-1/3 md:w-2/5 w-4/5">
      <div class="max-w-md w-full space-y-4 h-full">
        <div>
          <p class="mt-12 text-center text-2xl font-extrabold text-gray-900 ">
            Chào mừng tới <a class="text-blue-700 font-sans">S-CHAT</a>
          </p>
          <p class="mt-2 text-center text-sm text-gray-900 font-extrabold">
            Vì sao lại quên mật khẩu nà :-)
          </p>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="submitHandler" ref="form">
          <div>
            <div class="w-full flex bg-input rounded-md mt-10 mb-4">
               <i class="fa fa-envelope m-4" aria-hidden="true" ></i>
              <input 
                 v-model="email"
                 id="email"
                 type="email" 
                 autocomplete="email" 
                 required
                 class="bg-input h-12 relative block w-11/12 py-2 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm " placeholder="example@gmail.com">
            </div>
            </div>
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              NHẬN MẬT KHẨU MỚI
            </button>
          </div>
             <p for="remember-me" class=" text-center block text-sm text-gray-900">
                Bạn đã có tài khoản?<a class="text-indigo-600 hover:text-indigo-500 cursor-pointer" @click="$router.push('/login').catch(() => {})">Đăng nhập</a>
              </p>
        </form>
      </div>
    </div>
    <div class="w-1/3">
       <img src="/img/Group.png" class="h-2/5 mt-96 ml-36">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showPassword: false,
      email:'',
      password:'',
    };
  },
  methods:{
    submitHandler(){
      console.log(this.email)
    }
  }

};

</script>

<style>
.login{
  background-image: url("/img/Background.png");
  height: 100vh;
}
.bg-input{
  background: rgb(236, 236, 236);
}
.show-hide i{
  display: none;
}
input:valid ~ .show-hide i{
  display: block;
}
</style>
