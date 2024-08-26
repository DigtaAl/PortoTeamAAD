<template>
  <div class="btn--animateglowPink m-1 p-1.5 min-h-svh overflow-hidden" x-data="{ openError: false }">
    <div class="btn--animateglowPink m-1 p-1.5 min-h-svh overflow-hidden" x-data="{ openError: false }">
      <div class="min-h-svh max-w-[1440px] mx-auto">
        <nav class="max-w-[1240px] mx-auto" x-data="{ openNav: false }">
          <div class="px-4 pt-4 pt-0 min-[845px]:pt-9 transition-all">
            <div class="flex justify-between">
              <div class="flex">
                <div class="logo flex flex-shrink-0 items-center text-white hover:text-[#E730CA] transition-colors">
                  <svg class="hidden md:block logo-svg transform hover: transition-transform duration-700" style="transform-style: preserve-3d" width="52" height="44" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8601 0.415039L51.0641 28.5049V43.5849H37.9022V33.9259L17.4173 13.5237H13.1619V43.5849H0V0.415039H22.8601ZM37.9022 15.3963V0.415039H51.0641V15.3963H37.9022Z" fill="currentColor" />
                  </svg>

                  <svg class="md:hidden" width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5639 0L37 20.1712V31H27.4632V24.064L12.6202 9.41322H9.53683V31H0V0H16.5639ZM27.4632 10.758V0H37V10.758H27.4632Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div class="hidden min-[845px]:flex sm:space-x-8">
                <router-link
                  to="/"
                  class="relative text-[#E730CA] hover:text-[#E730CA] inline-flex items-center font-bold before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2 before:h-[1.5px] before:w-full before:bg-white"
                  aria-current="page"
                  >Home</router-link
                >
                <router-link
                  to="/"
                  class="relative text-white hover:text-[#E730CA] inline-flex items-center font-bold before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2 before:h-[1.5px] before:w-0 before:bg-white before:transition-all before:hover:w-full before:duration-500"
                  >Marketplace</router-link
                >
                <router-link
                  to="/"
                  class="relative text-white hover:text-[#E730CA] inline-flex items-center font-bold before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2 before:h-[1.5px] before:w-0 before:bg-white before:transition-all before:hover:w-full before:duration-500"
                  >Collections</router-link
                >
                <router-link
                  to="/"
                  class="relative text-white hover:text-[#E730CA] inline-flex items-center font-bold before:content-[''] before:absolute before:bottom-2.5 before:left-1/2 before:transform before:-translate-x-1/2 before:h-[1.5px] before:w-0 before:bg-white before:transition-all before:hover:w-full before:duration-500"
                  >Community</router-link
                >
              </div>

              <div class="flex items-center space-x-7">
                <a
                  class="relative group hidden min-[845px]:flex bg-transparent min-w-44 w-44 h-12 rounded-lg overflow-hidden border border-[#E730CA] font-semibold text-[#E730CA] sm:hover:text-white sm:hover:border-[#561950] transition-all duration-700"
                  style="will-change: transform"
                  id="cta"
                >
                  <span x-on:mouseover="openError = true" class="flex justify-center items-center h-full w-full sm:transform sm:group-hover:-translate-x-3.5 transition-transform cursor-pointer duration-700">Connect Wallet</span>
                  <span class="absolute top-0 -right-8 sm:group-hover:right-0 h-full flex justify-center items-center px-1.5 bg-[#E730CA] transition-all cursor-pointer duration-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#131313" class="w-[18px] h-4">
                      <path
                        d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z"
                      />
                    </svg>
                  </span>
                </a>

                <div class="hidden min-[845px]:flex justify-center">
                  <div
                    x-data="{
												open: false,
												toggle() {
														if (this.open) {
																return this.close()
														}

														this.$refs.button.focus()

														this.open = true
												},
												close(focusAfter) {
														if (! this.open) return

														this.open = false

														focusAfter && focusAfter.focus()
												},
												items: [
													{
														id: 1,
														text: 'Your <a href=\'#\' class=\'text-[#e730ca] font-medium\'>bid</a> expires soon'
													},
													{
														id: 2,
														text: 'Someone liked your <a href=\'#\' class=\'text-[#e730ca] font-medium\'>NFT</a>'
													},
													{
														id: 3,
														text: 'Your <a href=\'#\' class=\'text-[#e730ca] font-medium\'>purchase</a> was successful'
													},
												],
												get count() {
														return this.items.length;
												},
												removeItemFromItems(id) {
														this.items = this.items.filter(item => item.id !== id);
												}
										}"
                    x-on:keydown.escape.prevent.stop="close($refs.button)"
                    x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
                    x-id="['dropdown-button']"
                    class="relative"
                  >
                    <!-- Button -->
                    <!-- <button
                      x-ref="button"
                      x-on:click="toggle()"
                      :aria-expanded="open"
                      :aria-controls="$id('dropdown-button')"
                      type="button"
                      class="flex hover:text-white transition-colors"
                      :class="count > 0 ? 'text-[#e730ca] max-w-[46px]' : 'text-white/20 max-w-[28px]'"
                    >
                      <svg class="bell-con" fill="currentColor" viewBox="0 0 448 512" width="50" title="bell">
                        <path
                          d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                        />
                      </svg>
                      <span x-show="count > 0" class="flex justify-center items-center text-xs notification-count text-white bg-[#e730ca] rounded-full min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]" x-text="count"></span>
                    </button> -->

                    <!-- Panel -->
                    <!-- <div
                      x-ref="panel"
                      x-show="open"
                      x-transition.origin.top.left
                      x-on:click.outside="close($refs.button)"
                      :id="$id('dropdown-button')"
                      style="display: none"
                      class="absolute right-0 top-[42px] mt-2 min-w-[262px] rounded-md bg-white z-50"
                    >
                      <template x-for="item in items" :key="item.id">
                        <div class="flex items-center justify-between gap-1 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm disabled:text-gray-500 group">
                          <span x-html="item.text"> </span>
                          <svg
                            x-on:click="removeItemFromItems(item.id)"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="w-5 h-5 group-hover:text-gray-300 text-transparent hover:stroke-[#e730ca] stroke-transparent transition-colors cursor-pointer"
                          >
                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                          </svg>
                        </div>
                      </template>
                    </div> -->
                  </div>
                </div>
              </div>

              <!-- <div class="-mr-2 flex items-center min-[845px]:hidden">
                <button
                  type="button"
                  x-on:click="openNav = true"
                  class="relative inline-flex items-center justify-center p-1 text-white hover:text-[#E730CA] focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 transition-colors"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div> -->
            </div>
          </div>

          <div x-cloak x-show="openNav" class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
            <div
              x-cloak
              x-show="openNav"
              x-transition:enter="transition-opacity ease-linear duration-300"
              x-transition:enter-start="opacity-0"
              x-transition:enter-end="opacity-100"
              x-transition:leave="transition-opacity ease-linear duration-300"
              x-transition:leave-start="opacity-100"
              x-transition:leave-end="opacity-0"
              class="fixed inset-0 bg-gray-900/80"
            ></div>

            <div
              x-cloak
              x-show="openNav"
              x-transition:enter="transition ease-in-out duration-300 transform"
              x-transition:enter-start="-translate-x-full"
              x-transition:enter-end="translate-x-0"
              x-transition:leave="transition ease-in-out duration-300 transform"
              x-transition:leave-start="translate-x-0"
              x-transition:leave-end="-translate-x-full"
              class="fixed inset-0 flex"
            >
              <div
                x-cloak
                x-show="openNav"
                x-transition:enter="ease-in-out duration-300"
                x-transition:enter-start="opacity-0"
                x-transition:enter-end="opacity-100"
                x-transition:leave="ease-in-out duration-300"
                x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0"
                class="relative mr-16 flex w-full max-w-xs flex-1"
              >
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" x-on:click="openNav = false" class="-m-2.5 p-2.5">
                    <span class="sr-only">Close sidebar</span>
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-[#131313] px-6 pb-2">
                  <div class="flex h-16 shrink-0 items-center">
                    <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5639 0L37 20.1712V31H27.4632V24.064L12.6202 9.41322H9.53683V31H0V0H16.5639ZM27.4632 10.758V0H37V10.758H27.4632Z" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" class="-mx-2 space-y-1">
                          <li>
                            <a href="#" class="bg-[#E730CA]/80 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"> Home </a>
                          </li>
                          <li>
                            <a href="#" class="text-gray-300 hover:text-white hover:bg-[#E730CA]/80 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"> Marketplace </a>
                          </li>
                          <li>
                            <a href="#" class="text-gray-300 hover:text-white hover:bg-[#E730CA]/80 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"> Collections </a>
                          </li>
                          <li>
                            <a href="#" class="text-gray-300 hover:text-white hover:bg-[#E730CA]/80 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"> Community </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div class="pt-20 lg:pt-40 xl:pt-60">
          <!-- header -->
          <!-- <header>
            <div class="relative isolate">
              <div class="mx-auto max-w-7xl px-6 space-y-20 sm:space-y-52 lg:space-y-0 lg:flex lg:items-center lg:gap-x-10 lg:pl-8 lg:pr-20">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                  <div class="flex">
                    <div
                      x-on:mouseover="openError = true"
                      class="relative flex items-center gap-x-4 rounded-full px-4 py-1 leading-6 text-sm xl:text-base text-white xl:font-semibold border border-[#CACACA]/60 bg-transparent hover:bg-[#E730CA] hover:border-transparent transition-colors"
                    >
                      <a href="#" class="flex items-center gap-x-1">
                        New update is coming
                        <svg class="-mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h1 class="mt-10 max-w-lg text-4xl sm:text-7xl lg:text-6xl font-semibold text-white xl:text-7xl tracking-tight">Discover your own NFT <span class="text-[#FF33DE]">here!</span></h1>
                  <p class="mt-6 xl:text-lg font-medium leading-8 text-white max-w-[553px]">Buy and Sell your favorite NFT here from the top artist in the world, more than 10.000 collection are available just for you</p>
                  <div class="mt-10 flex items-center gap-x-6">
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
                  </div>
                </div>
                <div class="relative flex justify-center items-center mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                  <svg class="mx-auto max-w-md max-h-md lg:max-w-full lg:min-w-[445px] lg:max-h-full lg:min-h-[445px] text-gray-300" aria-hidden="true" viewBox="0 0 580 580" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="290" cy="290" r="289.5" stroke="currentColor" stroke-opacity="0.2" />
                    <circle cx="290" cy="290" r="231.5" stroke="currentColor" stroke-opacity="0.2" />
                  </svg>

                  <div class="circle w-full h-full max-w-md max-h-md lg:max-w-full lg:min-w-[445px] lg:max-h-full lg:min-h-[445px]" style="--total: 12">
                    <div class="stat" style="--i: 3">
                      <div
                        class="flex items-end mr-[55px] 2xl:mr-0 w-[85px] sm:w-[175px] h-[126px] sm:h-[225px] 2xl:w-[200px] 2xl:h-[250px] rounded-md sm:rounded-2xl 2xl:rounded-3xl bg-center bg-cover bg-no-repeat scale-[0.6] sm:scale-100 overflow-hidden transition-all"
                        style="background-image: url('https://coinstats.app/blog/wp-content/uploads/2023/06/The-Rise-of-NFTs-How-Will-AI-Impact-the-NFT-Art-Ecosystem-copy-1-1200x900.webp'); animation: float 6s ease-in-out infinite"
                      >
                        <div class="hidden sm:block flex-1 bg-white h-[95px] px-4 glass">
                          <h4 class="text-xs font-bold text-[#161616] py-4 truncate max-w-[145px] 2xl:max-w-none">Balistic Wave Collection #1</h4>
                          <div class="flex items-center justify-between font-bold text-[0.625rem]">
                            <div class="flex flex-col">
                              <span class="text-[#646464]">Curent Bid</span>
                              <span class="flex items-center space-x-1 text-[#161616]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8 16C3.5815 16 0 12.4185 0 8C0 3.5815 3.5815 0 8 0C12.4185 0 16 3.5815 16 8C16 12.4185 12.4185 16 8 16ZM11.997 8.1095L8.249 2L4.5 8.11L8.249 10.2865L11.997 8.1095ZM12 8.808L8.249 10.9835L4.5 8.8085L8.249 13.9975L12 8.808Z"
                                    fill="#F1F1F1"
                                  />
                                  <path d="M8.24902 2V6.435L11.9975 8.11L8.24902 2ZM8.24902 10.984V13.9975L12 8.808L8.24902 10.984Z" fill="blue" fill-opacity="0.298" />
                                  <path d="M8.24902 10.2865L11.9975 8.11003L8.24902 6.43604V10.2865Z" fill="blue" fill-opacity="0.801" />
                                  <path d="M4.5 8.11003L8.249 10.2865V6.43604L4.5 8.11003Z" fill="blue" fill-opacity="0.298" />
                                </svg>
                                <span>0.2 ETH</span>
                              </span>
                            </div>
                            <div>
                              <button type="button" class="text-[#161616] hover:text-[#E730CA] border rounded-full border-[#161616] hover:border-[#E730CA] w-12 h-6 transition-colors">Bid</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="stat" style="--i: 7">
                      <div
                        class="flex items-end mr-[55px] 2xl:mr-0 w-[85px] sm:w-[175px] h-[126px] sm:h-[225px] 2xl:w-[200px] 2xl:h-[250px] rounded-md sm:rounded-2xl 2xl:rounded-3xl bg-center bg-cover bg-no-repeat scale-[0.6] sm:scale-100 overflow-hidden transition-all"
                        style="background-image: url('https://uk.sganalytics.com/assets/uploads/fcimages/images/NFT%20digital%20art.jpg'); animation: float 8s ease-in-out infinite"
                      >
                        <div class="hidden sm:block flex-1 bg-white h-[95px] px-4 glass">
                          <h4 class="text-xs font-bold text-[#161616] py-4 truncate max-w-[145px] 2xl:max-w-none">Balistic Wave Collection #1</h4>
                          <div class="flex items-center justify-between font-bold text-[0.625rem]">
                            <div class="flex flex-col">
                              <span class="text-[#646464]">Curent Bid</span>
                              <span class="flex items-center space-x-1 text-[#161616]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8 16C3.5815 16 0 12.4185 0 8C0 3.5815 3.5815 0 8 0C12.4185 0 16 3.5815 16 8C16 12.4185 12.4185 16 8 16ZM11.997 8.1095L8.249 2L4.5 8.11L8.249 10.2865L11.997 8.1095ZM12 8.808L8.249 10.9835L4.5 8.8085L8.249 13.9975L12 8.808Z"
                                    fill="#F1F1F1"
                                  />
                                  <path d="M8.24902 2V6.435L11.9975 8.11L8.24902 2ZM8.24902 10.984V13.9975L12 8.808L8.24902 10.984Z" fill="blue" fill-opacity="0.298" />
                                  <path d="M8.24902 10.2865L11.9975 8.11003L8.24902 6.43604V10.2865Z" fill="blue" fill-opacity="0.801" />
                                  <path d="M4.5 8.11003L8.249 10.2865V6.43604L4.5 8.11003Z" fill="blue" fill-opacity="0.298" />
                                </svg>
                                <span>0.2 ETH</span>
                              </span>
                            </div>
                            <div>
                              <button type="button" class="text-[#161616] hover:text-[#E730CA] border rounded-full border-[#161616] hover:border-[#E730CA] w-12 h-6 transition-colors">Bid</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="stat" style="--i: 11">
                      <div
                        class="flex items-end mr-[55px] 2xl:mr-0 w-[85px] sm:w-[175px] h-[126px] sm:h-[225px] 2xl:w-[200px] 2xl:h-[250px] rounded-md sm:rounded-2xl 2xl:rounded-3xl bg-center bg-cover bg-no-repeat overflow-hidden transition-all"
                        style="
                          background-image: url('https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/05/merlin_184196631_939fb22d-b909-4205-99d9-b464fb961d32-superJumbo.jpeg?auto=format&q=60&fit=max&w=930');
                          animation: floatdown 6.5s ease-in-out infinite;
                        "
                      >
                        <div class="hidden sm:block flex-1 bg-white h-[95px] px-4 glass">
                          <h4 class="text-xs font-bold text-[#161616] py-4 truncate max-w-[145px] 2xl:max-w-none">Balistic Wave Collection #1</h4>
                          <div class="flex items-center justify-between font-bold text-[0.625rem]">
                            <div class="flex flex-col">
                              <span class="text-[#646464]">Curent Bid</span>
                              <span class="flex items-center space-x-1 text-[#161616]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8 16C3.5815 16 0 12.4185 0 8C0 3.5815 3.5815 0 8 0C12.4185 0 16 3.5815 16 8C16 12.4185 12.4185 16 8 16ZM11.997 8.1095L8.249 2L4.5 8.11L8.249 10.2865L11.997 8.1095ZM12 8.808L8.249 10.9835L4.5 8.8085L8.249 13.9975L12 8.808Z"
                                    fill="#F1F1F1"
                                  />
                                  <path d="M8.24902 2V6.435L11.9975 8.11L8.24902 2ZM8.24902 10.984V13.9975L12 8.808L8.24902 10.984Z" fill="blue" fill-opacity="0.298" />
                                  <path d="M8.24902 10.2865L11.9975 8.11003L8.24902 6.43604V10.2865Z" fill="blue" fill-opacity="0.801" />
                                  <path d="M4.5 8.11003L8.249 10.2865V6.43604L4.5 8.11003Z" fill="blue" fill-opacity="0.298" />
                                </svg>
                                <span>0.2 ETH</span>
                              </span>
                            </div>
                            <div>
                              <button type="button" class="text-[#161616] hover:text-[#E730CA] border rounded-full border-[#161616] hover:border-[#E730CA] w-12 h-6 transition-colors">Bid</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useId } from "vue";

export default {
  name: "Home",
};
</script>
