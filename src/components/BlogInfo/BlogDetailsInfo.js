import React from "react";
import BlogSidebar from "./BlogSidebar";
import BlogAuthor from "./BlogAuthor";
import BlogComment from "./BlogComment";
import BlogCommentForm from "./BlogCommentForm";

export default function BlogDetailsInfo() {
  return (
    <section className="py-16 md:py-[130px]">
      <div className="theme-container w-full mx-auto grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
        {/* <!-- blogs start  --> */}
        <div className="col-span-8">
          {/* <!-- single blog start --> */}
          <div className="w-full">
            <img
              src="/assets/images/blogs/detail-1.webp"
              alt=""
              className="object-cover w-full"
            />
            <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[30px]">
              People The Office Analyzing Checking Finance Graphs
            </h1>
            <div className="flex mt-[22px] mb-2 gap-4 items-center">
              <svg
                className="hidden md:block"
                width="33"
                height="39"
                viewBox="0 0 33 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4489 24.2727H20.1761L23.5682 28.6705L25.9886 31.5341L31.8011 39H25.6648L21.7102 33.9886L20.0227 31.6023L14.4489 24.2727ZM32.6364 18.5455C32.6364 22.3068 31.9318 25.5284 30.5227 28.2102C29.125 30.8807 27.2159 32.9261 24.7955 34.3466C22.3864 35.767 19.6534 36.4773 16.5966 36.4773C13.5398 36.4773 10.8011 35.767 8.38068 34.3466C5.97159 32.9148 4.0625 30.8636 2.65341 28.1932C1.25568 25.5114 0.556818 22.2955 0.556818 18.5455C0.556818 14.7841 1.25568 11.5682 2.65341 8.89773C4.0625 6.21591 5.97159 4.16477 8.38068 2.74432C10.8011 1.32386 13.5398 0.613635 16.5966 0.613635C19.6534 0.613635 22.3864 1.32386 24.7955 2.74432C27.2159 4.16477 29.125 6.21591 30.5227 8.89773C31.9318 11.5682 32.6364 14.7841 32.6364 18.5455ZM26.2784 18.5455C26.2784 15.8977 25.8636 13.6648 25.0341 11.8466C24.2159 10.017 23.0795 8.63636 21.625 7.70455C20.1705 6.76136 18.4943 6.28977 16.5966 6.28977C14.6989 6.28977 13.0227 6.76136 11.5682 7.70455C10.1136 8.63636 8.97159 10.017 8.14205 11.8466C7.32386 13.6648 6.91477 15.8977 6.91477 18.5455C6.91477 21.1932 7.32386 23.4318 8.14205 25.2614C8.97159 27.0795 10.1136 28.4602 11.5682 29.4034C13.0227 30.3352 14.6989 30.8011 16.5966 30.8011C18.4943 30.8011 20.1705 30.3352 21.625 29.4034C23.0795 28.4602 24.2159 27.0795 25.0341 25.2614C25.8636 23.4318 26.2784 21.1932 26.2784 18.5455Z"
                  fill="#D2A98E"
                />
              </svg>

              <p className="flex-1 text-paragraph">
                Meet our Support Engineer, the backbone of our technical
                assistance and customer satisfaction. Armed with a robust blend
                of technical acumen and exceptional problem-solving skills, our
                Support dedicated
              </p>
            </div>
            <p className="text-paragraph mb-[25px]">
              Our team is comprised of seasoned professionals, each bringing a
              wealth of experience and expertise to the table With years of
              dedicated service in their respective fields, our team members
              have honed their skills to deliver unparalleled results. From
              intricate problem-solving innovative strategizing, their
              collective experience forms the backbone of our success. Guided by
              a commitment to excellence, our team combines their extensive
              knowledge a passion for staying at the forefront of industry
              advancements.
            </p>
            <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[30px]">
              Efficiency Elevated Unleashing the Power of IT Managed Solutions
              Navigating Your IT Queries with Ease
            </h1>
            <p className="text-paragraph mt-5 mb-[25px]">
              Our team is comprised of seasoned professionals, each bringing a
              wealth of experience and expertise to the table With years of
              dedicated service in their respective fields, our team members
              have honed their skills to deliver unparalleled results. From
              intricate problem-solving innovative strategizing, their
              collective experience forms the backbone of our success. Guided by
              a commitment to excellence, our team combines their extensive
              knowledge a passion for staying at the forefront of industry
              advancements.
            </p>
            <div className="flex flex-col xl:flex-row gap-[30px] pt-6">
              <img
                src="/assets/images/blogs/detail-2.webp"
                alt=""
                className=""
              />
              <img
                src="/assets/images/blogs/detail-3.webp"
                alt=""
                className=""
              />
            </div>
            <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[50px]">
              A checklist to improve your daily routine
            </h1>
            <p className="text-paragraph mt-5 mb-[25px]">
              From intricate problem-solving to innovative strategizing, their
              collective experience forms the backbone of our success. Guided by
              a commitment to excellence, our team combines their extensive
              knowledge with a passion for staying at the forefront of industry
              advancements.
            </p>
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="">
                <h1 className="font-semibold text-18 text-main-black">
                  Popular Tags
                </h1>
                <div className="mt-3 flex gap-2.5 flex-wrap">
                  <a
                    href=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative z-20 transition-colors ease-in-out duration-300 group-hover:text-white">
                      IT Manage
                    </span>
                  </a>
                  <a
                    href=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative z-20 transition-colors ease-in-out duration-300 group-hover:text-white">
                      IT Design
                    </span>
                  </a>
                  <a
                    href=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative z-20 transition-colors ease-in-out duration-300 group-hover:text-white">
                      UX/UI
                    </span>
                  </a>
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <h1 className="font-semibold text-18 text-main-black">
                  Share projects
                </h1>
                <div className="flex flex-wrap gap-6 mt-3">
                  <a
                    href=""
                    aria-label="facebook"
                    className="transition-all duration-300 text-paragraph hover:text-purple"
                  >
                    <svg
                      width="11"
                      height="16"
                      viewBox="0 0 11 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6667 0H8.55556C5.79413 0 3.55556 2.23857 3.55556 5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111 4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href=""
                    aria-label="twitter"
                    className="transition-all duration-300 text-paragraph hover:text-purple"
                  >
                    <svg
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4302 0C11.2382 0 9.46131 1.86585 9.46131 4.1675C9.46131 4.5153 9.50189 4.85315 9.57834 5.17611C7.47071 5.17611 4.29615 4.74999 1.64488 2.09376C1.29233 1.74054 0.642232 1.9767 0.666686 2.47516C1.0596 10.484 4.48955 12.8202 6.25587 12.9656C5.11528 14.0921 3.45844 14.9813 1.79122 15.3804C1.35121 15.4857 1.24251 15.9674 1.67277 16.1073C2.86574 16.4953 4.57331 16.6448 5.49244 16.67C11.9946 16.67 17.2794 11.1972 17.3971 4.3991C18.2507 3.84394 18.7976 2.63855 19.1048 1.78464C19.1796 1.57667 18.8388 1.33436 18.6348 1.41931C17.9971 1.68479 17.1874 1.74773 16.4978 1.52302C15.7699 0.593104 14.666 0 13.4302 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href=""
                    aria-label="instagram"
                    className="transition-all duration-300 text-paragraph hover:text-purple"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.11523 0C2.35381 0 0.115234 2.23858 0.115234 5V11.33C0.115234 14.0914 2.35381 16.33 5.11524 16.33H11.4452C14.2067 16.33 16.4452 14.0914 16.4452 11.33V5C16.4452 2.23858 14.2067 0 11.4452 0H5.11523ZM13.1798 4.08222C13.6307 4.08222 13.9963 3.71666 13.9963 3.26572C13.9963 2.81478 13.6307 2.44922 13.1798 2.44922C12.7288 2.44922 12.3633 2.81478 12.3633 3.26572C12.3633 3.71666 12.7288 4.08222 13.1798 4.08222ZM12.3623 8.16551C12.3623 10.4202 10.5345 12.248 8.27977 12.248C6.02506 12.248 4.19727 10.4202 4.19727 8.16551C4.19727 5.91081 6.02506 4.08301 8.27977 4.08301C10.5345 4.08301 12.3623 5.91081 12.3623 8.16551ZM8.27958 10.6138C9.6324 10.6138 10.7291 9.51717 10.7291 8.16434C10.7291 6.81152 9.6324 5.71484 8.27958 5.71484C6.92676 5.71484 5.83008 6.81152 5.83008 8.16434C5.83008 9.51717 6.92676 10.6138 8.27958 10.6138Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href=""
                    aria-label="dribble"
                    className="transition-all duration-300 text-paragraph hover:text-purple"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.524052 9.30802C0.924329 12.1654 2.80355 14.5487 5.36306 15.659C5.47512 13.356 5.95067 11.1433 6.7362 9.07041C5.89882 8.9105 5.03169 8.82648 4.14321 8.82648C2.88602 8.82648 1.67174 8.99469 0.524052 9.30802ZM6.57217 16.0737C7.22347 16.241 7.90618 16.33 8.60968 16.33C10.953 16.33 13.0657 15.3429 14.5548 13.7617C12.9294 11.6968 10.6209 10.1289 7.93798 9.35723C7.1216 11.4629 6.64582 13.7214 6.57217 16.0737ZM15.3419 12.7863C16.2457 11.4722 16.7747 9.88038 16.7747 8.165C16.7747 8.02114 16.771 7.87815 16.7636 7.73612C15.8939 7.89367 14.9964 7.97608 14.079 7.97608C12.2835 7.97608 10.5646 7.66043 8.98191 7.0839C8.78252 7.4571 8.59437 7.83648 8.41787 8.22164C11.1904 9.04927 13.5969 10.6611 15.3419 12.7863ZM16.6088 6.51933C16.1842 4.44472 14.9728 2.65674 13.3 1.48077C11.864 2.8241 10.6176 4.3446 9.60064 6.00404C10.9951 6.48713 12.5035 6.75133 14.079 6.75133C14.9453 6.75133 15.7911 6.67147 16.6088 6.51933ZM12.2047 0.832001C11.12 0.299202 9.89978 0 8.60968 0C6.71878 0 4.978 0.642773 3.59394 1.72174C4.84339 3.34139 6.5099 4.66239 8.44771 5.54348C9.48209 3.81972 10.748 2.23669 12.2047 0.832001ZM2.68441 2.54729C1.31815 3.98787 0.471669 5.92628 0.445312 8.06219C1.62485 7.76178 2.8647 7.60173 4.14321 7.60173C5.1964 7.60173 6.22326 7.71034 7.21172 7.91649C7.40855 7.47512 7.61972 7.04087 7.84467 6.61427C5.79912 5.66611 4.02972 4.26525 2.68441 2.54729Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Author  --> */}
            <BlogAuthor />
            {/* <!-- comments --> */}
            <BlogComment />
            {/* <!-- comment form  --> */}
            <BlogCommentForm />
          </div>
        </div>
        {/* <!-- blogs end  --> */}
        {/* <!-- side bar start --> */}
        <BlogSidebar />
        {/* <!-- side bar end  --> */}
      </div>
    </section>
  );
}
