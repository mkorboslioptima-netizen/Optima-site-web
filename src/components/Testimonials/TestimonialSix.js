import React from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialSix() {
  const swiperOptions = {
    modules: [EffectFade, Pagination, Navigation, Autoplay],
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
    },
  };
  return (
    <section id="testimonials">
      <div className="testimoial-section-wrapper w-full bg-orange/5 pb-[188px]">
        <div className="relative z-10 mx-auto theme-container">
          <div className="flex flex-col justify-between sm:flex-row">
            <div className="">
              <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit">
                Why Choose Us
              </h1>
              <h2 className="mt-5 font-semibold sm:text-48 text-24 text-main-black w-fit">
                Our Student Feedback
              </h2>
            </div>
            <div className="flex flex-col mb-2 sm:flex-row sm:items-end">
              <div className="flex flex-col gap-5 lg:flex-row sm:items-center sm:justify-end">
                <h1 className="font-semibold text-48 text-main-black">150k+</h1>
                <img
                  src="/assets/images/home-six/authors.png"
                  alt=""
                  className=""
                />
                <h2 className="text-18 text-paragraph">Student Learn Us</h2>
              </div>
            </div>
          </div>
          <div className="w-full lg:grid grid-cols-12 items-stretch gap-[30px] mt-[58px]">
            <div className="col-span-4">
              <div className="w-full h-[401px] relative">
                <img
                  src="/assets/images/testimonial-thumb.webp"
                  alt=""
                  className="w-full h-full overflow-hidden rounded-[20px] object-top object-cover"
                />
              </div>
            </div>
            <div className="relative h-full col-span-8 mt-20 lg:mt-0">
              <div className="relative w-full h-full">
                <div className="w-full h-full testimonial-swiper">
                  <Swiper {...swiperOptions} className="w-full h-full ">
                    <SwiperSlide className="w-full h-full ">
                      <div className="w-full bg-green-dark h-full rounded-[20px] py-10 relative">
                        <div className="absolute left-0 shape top-10">
                          <img
                            src="/assets/images/testimonial-shape.webp"
                            alt=""
                          />
                        </div>
                        <div className="relative z-10">
                          <div className="flex justify-between md:pl-[70px] pl-5 mb-10">
                            <div>
                              <img src="/assets/images/quotation.webp" alt="" />
                            </div>
                            <div className="w-[422px] h-[60px] relative md:flex hidden justify-center">
                              <div className="absolute top-0 left-0 flex w-full h-full">
                                <div className="w-full h-full bg-gradient-to-l from-white/10"></div>
                              </div>
                              <div className="flex items-center space-x-5">
                                <span className="font-semibold text-white text-20">
                                  Quality Service
                                </span>
                                <div className="flex space-x-[11px] items-center">
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="md:px-[70px] px-5">
                            <p className="mb-10 font-semibold text-white text-24 line-clamp-3">
                              Optima a transformé notre gestion d'entreprise. Une solution exceptionnelle!
                            </p>
                            <div className="flex items-center space-x-5">
                              <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                                <img
                                  src="/assets/images/testimonial-p1.webp"
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div>
                                <p className="font-semibold text-white text-18">
                                  Matthew C. Lansberry
                                </p>
                                <p className="text-sm font-medium text-white">
                                  CEO & Founder
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full ">
                      <div className="w-full bg-green-dark h-full rounded-[20px] py-10 relative">
                        <div className="absolute left-0 shape top-10">
                          <img
                            src="/assets/images/testimonial-shape.webp"
                            alt=""
                          />
                        </div>
                        <div className="relative z-10">
                          <div className="flex justify-between md:pl-[70px] pl-5 mb-10">
                            <div>
                              <img src="/assets/images/quotation.webp" alt="" />
                            </div>
                            <div className="w-[422px] h-[60px] relative md:flex hidden justify-center">
                              <div className="absolute top-0 left-0 flex w-full h-full">
                                <div className="w-full h-full bg-gradient-to-l from-white/10"></div>
                              </div>
                              <div className="flex items-center space-x-5">
                                <span className="font-semibold text-white text-20">
                                  Quality Service
                                </span>
                                <div className="flex space-x-[11px] items-center">
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="md:px-[70px] px-5">
                            <p className="mb-10 font-semibold text-white text-24 line-clamp-3">
                              In this ever-evolving digital era, understand the
                              significance of staying ahead. Through our blog
                              invite explore the dynamic world of IT with us
                              decoding algorithms to unraveling
                            </p>
                            <div className="flex items-center space-x-5">
                              <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                                <img
                                  src="/assets/images/testimonial-p2.webp"
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div>
                                <p className="font-semibold text-white text-18">
                                  Matthew C. Lansberry
                                </p>
                                <p className="text-sm font-medium text-white">
                                  CEO & Founder
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full ">
                      <div className="w-full bg-green-dark h-full rounded-[20px] py-10 relative">
                        <div className="absolute left-0 shape top-10">
                          <img
                            src="/assets/images/testimonial-shape.webp"
                            alt=""
                          />
                        </div>
                        <div className="relative z-10">
                          <div className="flex justify-between md:pl-[70px] pl-5 mb-10">
                            <div>
                              <img src="/assets/images/quotation.webp" alt="" />
                            </div>
                            <div className="w-[422px] h-[60px] relative md:flex hidden justify-center">
                              <div className="absolute top-0 left-0 flex w-full h-full">
                                <div className="w-full h-full bg-gradient-to-l from-white/10"></div>
                              </div>
                              <div className="flex items-center space-x-5">
                                <span className="font-semibold text-white text-20">
                                  Quality Service
                                </span>
                                <div className="flex space-x-[11px] items-center">
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                  <span>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="md:px-[70px] px-5">
                            <p className="mb-10 font-semibold text-white text-24 line-clamp-3">
                              Optima a transformé notre gestion d'entreprise. Une solution exceptionnelle!
                            </p>
                            <div className="flex items-center space-x-5">
                              <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                                <img
                                  src="/assets/images/testimonial-p2.webp"
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div>
                                <p className="font-semibold text-white text-18">
                                  Matthew C. Lansberry
                                </p>
                                <p className="text-sm font-medium text-white">
                                  CEO & Founder
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="w-full absolute -bottom-[60px] z-10">
                    <div className="flex justify-center w-full">
                      <div className="flex space-x-5">
                        <div>
                          <button
                            type="button"
                            className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-green-dark custom-button-prev"
                          >
                            <span>
                              <svg
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div className="swiper-pagination swiper-pagination-h6"></div>
                        <div>
                          <button
                            type="button"
                            className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-green-dark custom-button-next "
                          >
                            <span>
                              <svg
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.25 9L11 5.25M11 5.25L7.25 1.5M11 5.25L1 5.25"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </button>
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
  );
}
