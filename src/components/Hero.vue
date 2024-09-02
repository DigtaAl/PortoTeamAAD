<template>
  <section>
    <div class="pt-20">
      <div class="relative isolate">
        <div class="mx-auto max-w-7xl px-6 space-y-20 sm:space-y-52 lg:space-y-0 lg:flex lg:items-center lg:gap-x-10 lg:pl-8 lg:pr-20">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div class="flex">
              <div
                x-on:mouseover="openError = true"
                class="relative flex items-center gap-x-4 rounded-full px-4 py-1 leading-6 text-sm xl:text-base text-white xl:font-semibold border border-[#CACACA]/60 bg-transparent hover:bg-[#E730CA] hover:border-transparent transition-colors"
              >
                <router-link to="/achievement" class="flex items-center gap-x-1">
                  Everything about a team
                  <svg class="-mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                  </svg>
                </router-link>
              </div>
            </div>
            <h1 class="mt-6 max-w-lg text-4xl sm:text-7xl lg:text-6xl font-semibold text-white xl:text-7xl tracking-tight">AL-'AADIYAAT</h1>
            <p class="text-[#ff5e14] sm:text-xl font-semibold tracking-tight max-w-lg">Kuda Perang Lapangan, Juara di Setiap Pertandingan!</p>
            <p class="xl:text-lg font-medium leading-8 text-white max-w-[553px]">Humanoid Robosoccer Team From UNY</p>
          </div>
          <div class="relative flex justify-center items-center mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <svg class="mx-auto max-w-md max-h-md lg:max-w-full lg:min-w-[445px] lg:max-h-full lg:min-h-[445px] text-gray-300" aria-hidden="true" viewBox="0 0 580 580" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="290" cy="290" r="289.5" stroke="currentColor" stroke-opacity="0.2" />
              <circle cx="290" cy="290" r="231.5" stroke="currentColor" stroke-opacity="0.2" />
            </svg>

            <div class="circle w-full h-full max-w-md max-h-md lg:max-w-full lg:min-w-[445px] lg:max-h-full lg:min-h-[445px]" style="--total: 12">
              <div class="stat" style="--i: 2">
                <div class="card3d">
                  <div class="wrapper3d">
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
                </div>
              </div>
              <div class="stat" style="--i: 5">
                <div class="card3d">
                  <div class="wrapper3d">
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
                </div>
              </div>
              <div class="stat" style="--i: 8">
                <div class="card3d">
                  <div class="wrapper3d">
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
                </div>
              </div>
              <div class="stat" style="--i: 11">
                <div class="card3d">
                  <div class="wrapper3d">
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
        </div>
      </div>
    </div>
  </section>
  <AboutUs />
</template>

<script>
import AboutUs from "@/components/AboutUs.vue";

export default {
  name: "Hero",
  components: {
    AboutUs,
  },
};
</script>
