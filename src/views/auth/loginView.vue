<template>
  <!-- This is Login view -->
  <div class="h-screen flex bg-[url('@/assets/img/login-background.png')]">
    <div class="w-1/3">
      <img src="/img/left.png" class="h-full" />
    </div>

    <!-- Form -->
    <div class="flex-auto flex items-center justify-center">
      <div class="bg-white py-16 px-20 w-full rounded-md shadow-2xl max-w-lg">
        <div>
          <p class="text-center text-2xl font-extrabold text-gray-900">
            Chào mừng tới <a class="text-blue-700 font-sans">S-CHAT</a>
          </p>
          <p class="mt-2 text-center text-sm text-gray-900 font-extrabold">
            Nơi Deadline Bắt đầu :-(
          </p>
        </div>

        <!-- Form -->
        <form class="mt-8 space-y-6" @submit.prevent="submitHandler" ref="form">
          <div class="relative">
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
              <span
                @click="showPassword = !showPassword"
                class="cursor-pointer opacity-60 hover:opacity-100 select-none"
                ><i class="fa fa-eye m-4 relative">
                  <span
                    class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-55%]"
                    v-if="showPassword"
                    >/</span
                  ></i
                ></span
              >
            </div>
            <div
              v-if="wrongPassword"
              class="absolute bottom-[-25px] w-full text-center"
            >
              <span class="text-center text-xs text-red-500">
                Email hoặc mật khẩu không đúng
              </span>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center cursor-pointer">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
              />
              <label
                for="remember-me"
                class="ml-2 block text-sm text-gray-900 cursor-pointer"
              >
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
      wrongPassword: false,
      email: "minhdong@gmail.com",
      password: "123123",
    };
  },
  watch: {
    password: function () {
      this.wrongPassword = false;
    },
  },
  methods: {
    async submitHandler() {
      const email = this.email;
      const password = this.password;

      const response = await fetch("http://localhost:4040/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          credentials: "include",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        this.wrongPassword = true;
      }

      const userData = await response.json();

      localStorage.setItem("user", JSON.stringify(userData));

      this.$store.dispatch("fetchUserData", userData);

      this.$socket.emit(
        "event:authenticateUser",
        `Bearer ${this.$store.state.user.accessToken}`
      );
    },
  },
};
</script>

<style>
.login {
  background-image: url("@/assets/img/login-background.png");
}
.bg-input {
  background: rgb(236, 236, 236);
}
</style>
