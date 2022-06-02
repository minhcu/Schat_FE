<template>
  <div class="py-3 pr-3">
    <!-- Wrap box so in order to padding instead of margin -->
    <div
      class="w-full h-full p-5 rounded-xl bg-white drop-shadow-xl border-slate-50 flex"
    >
      <div class="flex flex-col flex-1">
        <!-- Chat Head -->
        <div class="flex justify-between items-center">
          <h2 class="truncate py-3 font-bold text-xl">Channel - User name</h2>
          <!--  -->
          <div class="p-3 text-xl">
            <i class="fa-solid fa-circle-info"></i>
          </div>
        </div>

        <!-- Chat Content -->
        <div class="overflow-hidden flex-1">test</div>

        <!-- Chat Box -->
        <div class="flex justify-between items-center rounded-lg bg-[#EBEDEF]">
          <div class="px-4 py-[10px] text-[24px]">
            <i
              class="fa-solid fa-circle-plus cursor-pointer text-[#4F5660] hover:text-black"
            ></i>
          </div>
          <div class="w-full py-[10px] pr-[10px] bg-transparent relative">
            <div class="absolute text-[#747F8D]">Nói gì đó đi</div>
            <div
              class="w-full bg-transparent focus:outline-none"
              contenteditable="true"
            ></div>
          </div>
        </div>
      </div>

      <!-- Chat Info -->
      <div class="w-[20%] pl-3">
        <div>
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 text-center overflow-hidden rounded-full m-3">
              <img
                src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/265536014_7371688049523420_5244041507457832939_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ckOLPMQRTlAAX9Wztmv&_nc_oc=AQlE6yVCdgm-l6-nUIQAa2UQecukq8RFwQwRnPQfTFJYS2Jx1K7wH3NZZ7xR_Tuum2c&tn=xHMBSnEfqiaLXGeW&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8OA16KXXCgglku-acX4l4rN0tzCFoL6pyqd7K_niGkdg&oe=629D2F29"
                alt=""
              />
            </div>
            <h3>Channel - Username</h3>
          </div>
        </div>
        <div>
          <div class="flex items-center pl-2 py-3">
            <div class="w-[32px] pr-3 text-center">
              <i class="fa-solid fa-gear"></i>
            </div>
            <h3>Settings</h3>
          </div>
        </div>
        <div></div>
        <div>
          <div class="flex items-center pl-2 py-3">
            <div class="w-[32px] pr-3 text-center">
              <i class="fa-solid fa-user-group"></i>
            </div>
            <h3>Member</h3>
          </div>
        </div>
        <div>
          <div class="flex items-center pl-2 py-3">
            <div class="w-[32px] pr-3 text-center">
              <i class="fa-solid fa-file"></i>
            </div>
            <h3>File</h3>
          </div>
        </div>
        <div>
          <div class="flex items-center pl-2 py-3">
            <div class="w-[32px] pr-3 text-center">
              <i class="fa-solid fa-file-video"></i>
            </div>
            <h3>Media</h3>
          </div>
          <div>
            <div class="grid grid-cols-3">
              <div class="p-[1px]">
                <img
                  src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/265536014_7371688049523420_5244041507457832939_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ckOLPMQRTlAAX9Wztmv&_nc_oc=AQlE6yVCdgm-l6-nUIQAa2UQecukq8RFwQwRnPQfTFJYS2Jx1K7wH3NZZ7xR_Tuum2c&tn=xHMBSnEfqiaLXGeW&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8OA16KXXCgglku-acX4l4rN0tzCFoL6pyqd7K_niGkdg&oe=629D2F29"
                  alt=""
                />
              </div>
              <div class="p-[1px]">
                <img
                  src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/265536014_7371688049523420_5244041507457832939_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ckOLPMQRTlAAX9Wztmv&_nc_oc=AQlE6yVCdgm-l6-nUIQAa2UQecukq8RFwQwRnPQfTFJYS2Jx1K7wH3NZZ7xR_Tuum2c&tn=xHMBSnEfqiaLXGeW&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8OA16KXXCgglku-acX4l4rN0tzCFoL6pyqd7K_niGkdg&oe=629D2F29"
                  alt=""
                />
              </div>
              <div class="p-[1px]">
                <img
                  src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/265536014_7371688049523420_5244041507457832939_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ckOLPMQRTlAAX9Wztmv&_nc_oc=AQlE6yVCdgm-l6-nUIQAa2UQecukq8RFwQwRnPQfTFJYS2Jx1K7wH3NZZ7xR_Tuum2c&tn=xHMBSnEfqiaLXGeW&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8OA16KXXCgglku-acX4l4rN0tzCFoL6pyqd7K_niGkdg&oe=629D2F29"
                  alt=""
                />
              </div>
              <div class="p-[1px]">
                <img
                  src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/265536014_7371688049523420_5244041507457832939_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ckOLPMQRTlAAX9Wztmv&_nc_oc=AQlE6yVCdgm-l6-nUIQAa2UQecukq8RFwQwRnPQfTFJYS2Jx1K7wH3NZZ7xR_Tuum2c&tn=xHMBSnEfqiaLXGeW&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8OA16KXXCgglku-acX4l4rN0tzCFoL6pyqd7K_niGkdg&oe=629D2F29"
                  alt=""
                />
              </div>
              <div class="p-[1px]">
                <img
                  src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/265536014_7371688049523420_5244041507457832939_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ckOLPMQRTlAAX9Wztmv&_nc_oc=AQlE6yVCdgm-l6-nUIQAa2UQecukq8RFwQwRnPQfTFJYS2Jx1K7wH3NZZ7xR_Tuum2c&tn=xHMBSnEfqiaLXGeW&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8OA16KXXCgglku-acX4l4rN0tzCFoL6pyqd7K_niGkdg&oe=629D2F29"
                  alt=""
                />
              </div>
              <div class="p-[1px]">
                <img
                  src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/265536014_7371688049523420_5244041507457832939_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ckOLPMQRTlAAX9Wztmv&_nc_oc=AQlE6yVCdgm-l6-nUIQAa2UQecukq8RFwQwRnPQfTFJYS2Jx1K7wH3NZZ7xR_Tuum2c&tn=xHMBSnEfqiaLXGeW&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8OA16KXXCgglku-acX4l4rN0tzCFoL6pyqd7K_niGkdg&oe=629D2F29"
                  alt=""
                />
              </div>
              <div class="p-[1px]">
                <img
                  src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/265536014_7371688049523420_5244041507457832939_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ckOLPMQRTlAAX9Wztmv&_nc_oc=AQlE6yVCdgm-l6-nUIQAa2UQecukq8RFwQwRnPQfTFJYS2Jx1K7wH3NZZ7xR_Tuum2c&tn=xHMBSnEfqiaLXGeW&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8OA16KXXCgglku-acX4l4rN0tzCFoL6pyqd7K_niGkdg&oe=629D2F29"
                  alt=""
                />
              </div>
              <div class="p-[1px]">
                <img
                  src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/265536014_7371688049523420_5244041507457832939_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ckOLPMQRTlAAX9Wztmv&_nc_oc=AQlE6yVCdgm-l6-nUIQAa2UQecukq8RFwQwRnPQfTFJYS2Jx1K7wH3NZZ7xR_Tuum2c&tn=xHMBSnEfqiaLXGeW&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8OA16KXXCgglku-acX4l4rN0tzCFoL6pyqd7K_niGkdg&oe=629D2F29"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
