<template>
  <div class="min-h-svh max-w-[1440px] mx-auto">
    <HeaderNav />
    <!-- <SplitHome /> -->
    <div class="pt-20">
      <!-- header -->
      <header>
        <div class="relative isolate">
          <div class="mx-auto max-w-7xl px-6 space-y-20 sm:space-y-52 lg:space-y-0 lg:flex lg:items-center lg:gap-x-10 lg:pl-8 lg:pr-20">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div class="flex">
                <div
                  x-on:mouseover="openError = true"
                  class="relative flex items-center gap-x-4 rounded-full px-4 py-1 leading-6 text-sm xl:text-base text-white xl:font-semibold border border-[#CACACA]/60 bg-transparent hover:bg-[#E730CA] hover:border-transparent transition-colors"
                >
                  <router-link to="/news" class="flex items-center gap-x-1">
                    Everything about a team
                    <svg class="-mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                    </svg>
                  </router-link>
                </div>
              </div>
              <h1 class="mt-6 max-w-lg text-4xl sm:text-7xl lg:text-6xl font-semibold text-white xl:text-7xl tracking-tight">AL-'AADIYAAT</h1>
              <p class="text-[#FF33DE] sm:text-xl font-semibold tracking-tight max-w-lg">Kuda Perang Lapangan, Juara di Setiap Pertandingan!</p>
              <p class="xl:text-lg font-medium leading-8 text-white max-w-[553px]">Humanoid Robosoccer Team From UNY</p>
              <!-- <div class="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  x-on:mouseover="openError = true"
                  class="rounded-xl bg-[#E730CA] w-32 xl:w-40 py-2.5 font-semibold text-sm xl:text-base text-white text-center border border-transparent hover:border-[#E730CA] hover:bg-transparent focus-visible:outline-none focus-visible:outline-0 focus-visible:outline-offset-0 focus-visible:outline-transparent transition-colors"
                  >Find NFT</a
                >
                <a
                  href="#"
                  x-on:mouseover="openError = true"
                  class="border border-[#E730CA] hover:border-[#E730CA]/30 bg-transparent hover:bg-[#E730CA]/30 rounded-xl w-32 xl:w-40 py-2.5 font-semibold leading-6 text-sm xl:text-base text-[#E730CA] hover:text-white text-center transition-colors"
                  >Create NFT</a
                >
              </div> -->
            </div>
            <div class="relative flex justify-center items-center mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <svg class="mx-auto max-w-md max-h-md lg:max-w-full lg:min-w-[445px] lg:max-h-full lg:min-h-[445px] text-gray-300" aria-hidden="true" viewBox="0 0 580 580" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="290" cy="290" r="289.5" stroke="currentColor" stroke-opacity="0.2" />
                <circle cx="290" cy="290" r="231.5" stroke="currentColor" stroke-opacity="0.2" />
              </svg>

              <div class="circle w-full h-full max-w-md max-h-md lg:max-w-full lg:min-w-[445px] lg:max-h-full lg:min-h-[445px]" style="--total: 12">
                <div class="stat" style="--i: 2">
                  <div
                    class="flex items-end mr-[55px] 2xl:mr-0 w-[85px] sm:w-[175px] h-[126px] sm:h-[225px] 2xl:w-[200px] 2xl:h-[250px] rounded-md sm:rounded-2xl 2xl:rounded-3xl bg-center bg-cover bg-no-repeat scale-[0.6] sm:scale-100 overflow-hidden transition-all"
                    style="background-image: url('./Robot3.jpg'); animation: float 3s ease-in-out infinite"
                  >
                    <div class="hidden sm:block flex-1 bg-white h-[95px] px-4 glass">
                      <h4 class="text-xs font-bold text-[#161616] py-4 truncate max-w-[145px] 2xl:max-w-none">Robot #3</h4>
                      <div class="flex items-center justify-between font-bold text-[0.625rem]">
                        <div class="flex flex-col">
                          <span class="text-[#646464]">Pono</span>
                        </div>
                        <div>
                          <router-link to="/robots" class="flex items-center gap-x-1">
                            <button type="button" class="text-[#161616] hover:text-[#E730CA] border rounded-full border-[#161616] hover:border-[#E730CA] w-12 h-6 transition-colors">See</button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="stat" style="--i: 5">
                  <div
                    class="flex items-end mr-[55px] 2xl:mr-0 w-[85px] sm:w-[175px] h-[126px] sm:h-[225px] 2xl:w-[200px] 2xl:h-[250px] rounded-md sm:rounded-2xl 2xl:rounded-3xl bg-center bg-cover bg-no-repeat scale-[0.6] sm:scale-100 overflow-hidden transition-all"
                    style="background-image: url('./Robot2.jpg'); animation: float 4s ease-in-out infinite"
                  >
                    <div class="hidden sm:block flex-1 bg-white h-[95px] px-4 glass">
                      <h4 class="text-xs font-bold text-[#161616] py-4 truncate max-w-[145px] 2xl:max-w-none">Robot #2</h4>
                      <div class="flex items-center justify-between font-bold text-[0.625rem]">
                        <div class="flex flex-col">
                          <span class="text-[#646464]">Ujang</span>
                        </div>
                        <div>
                          <router-link to="/robots" class="flex items-center gap-x-1">
                            <button type="button" class="text-[#161616] hover:text-[#E730CA] border rounded-full border-[#161616] hover:border-[#E730CA] w-12 h-6 transition-colors">See</button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="stat" style="--i: 8">
                  <div
                    class="flex items-end mr-[55px] 2xl:mr-0 w-[85px] sm:w-[175px] h-[126px] sm:h-[225px] 2xl:w-[200px] 2xl:h-[250px] rounded-md sm:rounded-2xl 2xl:rounded-3xl bg-center bg-cover bg-no-repeat scale-[0.6] sm:scale-100 overflow-hidden transition-all"
                    style="background-image: url('./Robot1.jpg'); animation: float 4s ease-in-out infinite"
                  >
                    <div class="hidden sm:block flex-1 bg-white h-[95px] px-4 glass">
                      <h4 class="text-xs font-bold text-[#161616] py-4 truncate max-w-[145px] 2xl:max-w-none">Robot #1</h4>
                      <div class="flex items-center justify-between font-bold text-[0.625rem]">
                        <div class="flex flex-col">
                          <span class="text-[#646464]">Mono</span>
                        </div>

                        <div>
                          <router-link to="/robots" class="flex items-center gap-x-1">
                            <button type="button" class="text-[#161616] hover:text-[#E730CA] border rounded-full border-[#161616] hover:border-[#E730CA] w-12 h-6 transition-colors">See</button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="stat" style="--i: 11">
                  <div
                    class="flex items-end mr-[55px] 2xl:mr-0 w-[85px] sm:w-[175px] h-[126px] sm:h-[225px] 2xl:w-[200px] 2xl:h-[250px] rounded-md sm:rounded-2xl 2xl:rounded-3xl bg-center bg-cover bg-no-repeat overflow-hidden transition-all"
                    style="background-image: url('./Robot4.jpg'); animation: floatdown 5s ease-in-out infinite"
                  >
                    <div class="hidden sm:block flex-1 bg-white h-[95px] px-4 glass">
                      <h4 class="text-xs font-bold text-[#161616] py-4 truncate max-w-[145px] 2xl:max-w-none">Robot #4</h4>
                      <div class="flex items-center justify-between font-bold text-[0.625rem]">
                        <div class="flex flex-col">
                          <span class="text-[#646464]">Arno</span>
                        </div>
                        <div>
                          <router-link to="/robots" class="flex items-center gap-x-1">
                            <button type="button" class="text-[#161616] hover:text-[#E730CA] border rounded-full border-[#161616] hover:border-[#E730CA] w-12 h-6 transition-colors">See</button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main class="max-w-[1240px] mx-auto pb-32">
        <!-- Logo cloud -->
        <section class="my-20 sm:my-60">
          <div class="grid grid-cols-4 items-center gap-x-8 gap-y-12 sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:grid-cols-5">
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg" alt="Transistor" width="158" height="48" />
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg" alt="Reform" width="158" height="48" />
            <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg" alt="Tuple" width="158" height="48" />
            <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg" alt="SavvyCal" width="158" height="48" />
            <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg" alt="Statamic" width="158" height="48" />
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/Header.vue";
// import SplitHome from "@/components/SplitHome.vue";

export default {
  name: "Home",
  components: {
    HeaderNav,
    // SplitHome,
  },
};
</script>
