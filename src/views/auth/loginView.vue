<template>
  <!-- This is Login view -->
  <div class="login flex">
    <div class="w-1/3">
      <img src="/img/left.png" class="h-full" />
    </div>
    <div
      class="h-4/5 my-16 bg-white rounded-md shadow-2xl flex items-center justify-center sm:px-6 lg:px-8 xl:w-1/3 md:w-2/5 w-4/5"
    >
      <div class="max-w-md w-full space-y-4 h-full">
        <div>
          <p class="mt-10 text-center text-2xl font-extrabold text-gray-900">
            Chào mừng tới <a class="text-blue-700 font-sans">S-CHAT</a>
          </p>
          <p class="mt-2 text-center text-sm text-gray-900 font-extrabold">
            Nơi Deadline Bắt đầu :-(
          </p>
        </div>
        <button
          class="items-center justify-center w-full h-12 shadow-md rounded-md flex"
        >
          <img src="/img/logogg.png" class="h-full" /> Login with Google
        </button>
        <button
          class="items-center justify-center w-full h-12 shadow-md rounded-md flex"
        >
          <img src="/img/logofb.png" class="h-full" /> Login with Facebook
        </button>
        <div class="flex h-8">
          <p class="border-b-2 w-5/12 h-3/5"></p>
          <p class="mt-2 text-center text-sm text-gray-900 font-extrabold mx-6">
            OR
          </p>
          <p class="border-b-2 w-5/12 h-3/5"></p>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="submitHandler" ref="form">
          <div>
            <div class="w-full flex bg-input rounded-md mb-4">
              <i class="fa fa-envelope m-4" aria-hidden="true"></i>
              <input
                v-model="email"
                id="email"
                type="email"
                autocomplete="email"
                required
                class="bg-input h-12 relative block w-11/12 py-2 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="example@gmail.com"
              />
            </div>
            <div class="w-full h-12 flex bg-input rounded-md">
              <i class="fa fa-key m-4" aria-hidden="true"></i>
              <input
                v-model="password"
                v-bind:type="[showPassword ? 'text' : 'password']"
                id="password"
                autocomplete="current-password"
                required
                class="bg-input h-12 relative block w-11/12 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="**********"
              />
              <span @click="showPassword = !showPassword" class="show-hide"
                ><i class="fa fa-eye m-4 cursor-pointer"></i
              ></span>
            </div>
            <div v-if="password.length > 1 && password.length < 8">
              <h5 class="text-center text-xs text-red-500">
                Password length should be greater than 8
              </h5>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
                @click="$router.push('/forgetpassword').catch(() => {})"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="w-1/3">
      <img src="/img/Group.png" class="h-2/5 mt-96 ml-36" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
    };
  },
  methods: {
    submitHandler() {
      console.log(this.email);
    },
  },
};
</script>

<style>
.login {
  background-image: url("/img/Background.png");
  height: 100vh;
}
.bg-input {
  background: rgb(236, 236, 236);
}
.show-hide i {
  display: none;
}
input:valid ~ .show-hide i {
  display: block;
}
</style>
