import React from "react";

export default function ServiceDetailsSidebar() {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="col-span-8 lg:col-span-4"
    >
      <div className="border border-purple/10 rounded-2xl py-[30px] bg-main-gray">
        <div className="flex gap-5 items-center px-10 pb-[30px]">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_460_43030)">
              <path
                d="M0.126211 3.66959L2.79389 8.33776C2.88387 8.4955 3.03449 8.60963 3.21061 8.6538L5.69942 9.276L14.2355 17.8121L15.1787 16.8692L6.509 8.19976C6.42368 8.11417 6.31669 8.05354 6.19954 8.02419L3.80813 7.42421L1.53687 3.44738L3.48413 1.50011L7.4626 3.77357L8.06286 6.16499C8.09194 6.2824 8.15284 6.38967 8.23816 6.47499L16.9078 15.1447L17.8508 14.2015L9.31467 5.66541L8.69247 3.17798C8.6483 3.00158 8.53418 2.85069 8.37643 2.76043L3.70799 0.0930262C3.44764 -0.0551171 3.12008 -0.0112228 2.90774 0.200293L0.240337 2.86797C0.025803 3.07894 -0.0208347 3.40705 0.126211 3.66959Z"
                fill="#794AFF"
              />
              <path
                d="M27.8529 13.1436L13.1815 27.8153L12.2383 26.8721L26.91 12.2007L27.8529 13.1436Z"
                fill="#794AFF"
              />
              <path
                d="M10.6135 28.3342C10.4928 28.1334 10.2761 28.0107 10.0418 28.0107H6.04052C5.80651 28.0107 5.58951 28.1334 5.46907 28.3342L3.46831 31.6685C3.34129 31.8798 3.34129 32.1439 3.46831 32.3555L5.46907 35.6898C5.58951 35.8903 5.80651 36.0132 6.04052 36.0132H10.0418C10.2761 36.0132 10.4928 35.8903 10.6135 35.6898L12.614 32.3555C12.741 32.1439 12.741 31.8798 12.614 31.6685L10.6135 28.3342ZM9.66455 34.6794H6.41801L4.81751 32.012L6.41801 29.3443H9.66455L11.265 32.012L9.66455 34.6794Z"
                fill="#794AFF"
              />
              <path
                d="M32.0496 16.0066C36.4541 16.0214 40.037 12.4627 40.0518 8.05817C40.054 7.38768 39.9717 6.71994 39.8068 6.07003C39.7179 5.71256 39.3561 5.49501 38.9986 5.5839C38.8812 5.61325 38.7742 5.67388 38.6886 5.7592L34.5373 9.90777L31.2436 8.81013L30.1451 5.51723L34.2964 1.3651C34.5568 1.10448 34.5565 0.682268 34.2959 0.421919C34.21 0.336051 34.1019 0.275147 33.9837 0.246067C29.7122 -0.835654 25.373 1.75 24.2913 6.02119C24.1269 6.66918 24.0449 7.33528 24.0471 8.00385C24.0487 8.52893 24.1028 9.05237 24.2092 9.56649L9.6042 24.1712C9.09009 24.0651 8.56665 24.011 8.04183 24.0091C3.62194 24.0091 0.0390625 27.592 0.0390625 32.0119C0.0390625 36.4315 3.62194 40.0144 8.04183 40.0144C12.4614 40.0144 16.0443 36.4315 16.0443 32.0119C16.0427 31.4868 15.9884 30.9633 15.8822 30.4492L19.3787 26.9528L20.9078 28.4819C21.1685 28.7423 21.5904 28.7423 21.851 28.4819L22.1843 28.1483C22.4768 27.8578 22.9495 27.8578 23.2419 28.1483C23.5341 28.4397 23.5346 28.9127 23.2433 29.2048C23.243 29.2051 23.2425 29.2056 23.2419 29.2062L22.9086 29.5395C22.6482 29.7999 22.6482 30.2221 22.9086 30.4824L30.8639 38.4377C32.9563 40.5493 36.3641 40.5647 38.4757 38.4723C40.5871 36.3799 40.6024 32.9718 38.51 30.8605C38.4988 30.8489 38.4873 30.8374 38.4757 30.8259L30.5204 22.8709C30.2601 22.6105 29.8379 22.6105 29.5775 22.8709L29.2442 23.2042C28.9515 23.495 28.4791 23.495 28.1863 23.2042C27.8944 22.9128 27.8936 22.4399 28.185 22.148C28.1855 22.1474 28.1861 22.1472 28.1863 22.1466L28.5199 21.813C28.7803 21.5527 28.7803 21.1305 28.5199 20.8701L26.9908 19.3409L30.4872 15.8445C31.0013 15.9506 31.5248 16.005 32.0496 16.0066ZM34.6698 38.6808C34.1853 38.68 33.705 38.5925 33.2515 38.4221L38.4598 33.2135C39.2458 35.3042 38.1882 37.6361 36.0975 38.4221C35.6413 38.5936 35.1576 38.6813 34.6698 38.6808ZM27.1148 21.3483C26.3762 22.2292 26.492 23.5422 27.3729 24.2804C28.1471 24.9292 29.2755 24.9287 30.0488 24.2785L37.5328 31.7691C37.614 31.8506 37.69 31.9364 37.7635 32.0237L32.0617 37.7255C31.9742 37.6523 31.8883 37.5763 31.8068 37.4948L24.3171 30.0045C25.0556 29.1236 24.9398 27.8106 24.0589 27.0724C23.2847 26.4233 22.1561 26.4241 21.3827 27.074L20.3158 26.0071L26.0476 20.2838L27.1148 21.3483ZM29.8077 14.641L14.6792 29.7664C14.5132 29.9321 14.4466 30.1727 14.5031 30.4001C15.418 33.9932 13.2469 37.6476 9.65358 38.5623C6.06055 39.4772 2.40607 37.3061 1.49114 33.7128C0.576494 30.1197 2.74762 26.4653 6.34093 25.5503C7.42786 25.2738 8.56665 25.2738 9.65358 25.5503C9.88101 25.606 10.1211 25.5394 10.2873 25.3745L25.4122 10.2488C25.5779 10.0831 25.6446 9.84247 25.5875 9.61532C24.6789 6.06427 26.821 2.44902 30.372 1.54013C31.043 1.36867 31.7371 1.30282 32.4285 1.3459L28.9106 4.86513C28.732 5.04345 28.6695 5.30764 28.7493 5.54713L30.0829 9.54866C30.1495 9.74755 30.3059 9.90392 30.5051 9.97004L34.5066 11.3039C34.7458 11.3837 35.01 11.3214 35.1886 11.1431L38.7065 7.62526C38.7144 7.75255 38.7185 7.87847 38.7185 8.00385C38.7372 11.6682 35.782 14.6538 32.1176 14.6728C31.5511 14.6755 30.9865 14.6058 30.4378 14.4654C30.2104 14.4086 29.9698 14.475 29.8041 14.6407H29.8077V14.641Z"
                fill="#794AFF"
              />
              <path
                d="M34.522 33.5407L33.5788 34.4839L26.9102 27.8153L27.8531 26.8721L34.522 33.5407Z"
                fill="#794AFF"
              />
            </g>
            <defs>
              <clipPath id="clip0_460_43030">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="font-semibold text-22 text-main-black">
            Services Category
          </h1>
        </div>
        <hr className="bg-purple/10" />
        <div className="pt-10 flex flex-col px-10 gap-[30px]">
          <a href="#">
            <div className="flex items-center gap-2 group text-gray-69 hover:text-purple">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300"
                  d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-18 font-medium text-gray-69 font-inter border-b border-transparent leading-5 before:leading-5 before:block before:text-18 before:pb-[1px] before:border-purple before:font-medium before:text-purple before:font-inter before:border-b before:content-['Digital_Marketing_Solutions'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                Digital Marketing Solutions
              </p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center gap-2 group text-gray-69 hover:text-purple">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300"
                  d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-18 font-medium text-gray-69 font-inter border-b border-transparent leading-5 before:leading-5 before:block before:text-18 before:pb-[1px] before:border-purple before:font-medium before:text-purple before:font-inter before:border-b before:content-['Website_Design_&_Development'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                Website Design & Development
              </p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center gap-2 group text-gray-69 hover:text-purple">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300"
                  d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-18 font-medium text-gray-69 font-inter border-b border-transparent leading-5 before:leading-5 before:block before:text-18 before:pb-[1px] before:border-purple before:font-medium before:text-purple before:font-inter before:border-b before:content-['SEO_Optimizations'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                SEO Optimizations
              </p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center gap-2 group text-gray-69 hover:text-purple">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300"
                  d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-18 font-medium text-gray-69 font-inter border-b border-transparent leading-5 before:leading-5 before:block before:text-18 before:pb-[1px] before:border-purple before:font-medium before:text-purple before:font-inter before:border-b before:content-['Cyber_Data_Security'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                Cyber Data Security
              </p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center gap-2 group text-gray-69 hover:text-purple">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300"
                  d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-18 font-medium text-gray-69 font-inter border-b border-transparent leading-5 before:leading-5 before:block before:text-18 before:pb-[1px] before:border-purple before:font-medium before:text-purple before:font-inter before:border-b before:content-['Business_Solutions'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                Business Solutions
              </p>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center gap-2 group text-gray-69 hover:text-purple">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300"
                  d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-18 font-medium text-gray-69 font-inter border-b border-transparent leading-5 before:leading-5 before:block before:text-18 before:pb-[1px] before:border-purple before:font-medium before:text-purple before:font-inter before:border-b before:content-['IT_Design_Solutions'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                IT Design Solutions
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="border border-purple/10 rounded-2xl py-[30px] bg-main-gray mt-[30px]">
        <div className="flex gap-5 items-center px-10 pb-[30px]">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_460_43069)">
              <path
                d="M9.13852 7.38056C9.46211 7.38056 9.72445 7.11822 9.72445 6.79462C9.72445 6.47103 9.46211 6.20868 9.13852 6.20868C8.81492 6.20868 8.55258 6.47103 8.55258 6.79462C8.55258 7.11822 8.81484 7.38056 9.13852 7.38056ZM4.45102 7.38056C4.77461 7.38056 5.03695 7.11822 5.03695 6.79462C5.03695 6.47103 4.77461 6.20868 4.45102 6.20868C4.12742 6.20868 3.86508 6.47103 3.86508 6.79462C3.86508 7.11822 4.12734 7.38056 4.45102 7.38056ZM6.79477 7.38056C7.11836 7.38056 7.3807 7.11822 7.3807 6.79462C7.3807 6.47103 7.11836 6.20868 6.79477 6.20868C6.47117 6.20868 6.20883 6.47103 6.20883 6.79462C6.20883 7.11822 6.47109 7.38056 6.79477 7.38056ZM6.66625 13.5878C6.66984 13.5879 6.67344 13.5879 6.67703 13.5879L11.9746 13.5892H11.9749C12.3409 13.5892 12.6516 13.3521 12.7483 12.9992C12.845 12.646 12.6982 12.2836 12.3832 12.0973L11.5775 11.6206C12.8725 10.337 13.6009 8.58579 13.5893 6.75095C13.5661 3.08158 10.5628 0.0535288 6.89453 0.000716346C3.09336 -0.053893 0 3.02087 0 6.79478C0 10.4138 2.98188 13.5095 6.66625 13.5878ZM2.84766 2.79009C3.92813 1.72509 5.35625 1.15126 6.87773 1.17244C9.91313 1.21611 12.3982 3.72189 12.4174 6.75829C12.4278 8.3965 11.7253 9.95439 10.49 11.0324C10.2834 11.2125 10.1752 11.4829 10.2002 11.7556C10.2252 12.0282 10.3809 12.2742 10.6165 12.4135L10.6223 12.4169L6.68281 12.416C3.63734 12.3575 1.17188 9.84861 1.17188 6.79478C1.17188 5.27751 1.76703 3.85533 2.84766 2.79009ZM39.4141 38.8281H38.8281V30.1024C38.8281 27.8163 37.4773 25.7403 35.3801 24.8107L32.2921 23.4872C33.0435 23.2501 33.7223 22.8273 34.2747 22.2408C35.108 21.356 35.5859 20.1555 35.5859 18.947C35.5859 17.8365 35.198 16.7884 34.4638 15.9156C33.5455 14.8252 33.0398 13.4395 33.0398 12.0134V9.20556C33.0398 6.74634 32.0821 4.43478 30.3432 2.69673C28.6043 0.957669 26.2925 1.32211e-05 23.8336 1.32211e-05C18.7577 1.32211e-05 14.6281 4.12954 14.6281 9.20548V11.9219C14.6284 13.3975 14.0485 14.806 13.1062 15.9414C11.9202 17.3703 11.6738 19.3023 12.4632 20.9833C13.0491 22.2311 14.106 23.1276 15.3713 23.507L12.3048 24.8405C10.1535 25.7458 8.76336 27.8388 8.76336 30.1727V37.0704C8.76336 37.394 9.02563 37.6563 9.3493 37.6563C9.67297 37.6563 9.93523 37.394 9.93523 37.0704V30.1727C9.93523 28.3117 11.0437 26.6425 12.7658 25.9179L16.6094 24.2465V27.7735H14.8435C14.3459 27.7735 13.8695 27.9856 13.5366 28.3556C13.2038 28.7256 13.043 29.2217 13.0955 29.7165L14.0614 38.8281H0.585938C0.262266 38.8281 0 39.0905 0 39.4141C0 39.7377 0.262266 40 0.585938 40H39.4141C39.7377 40 40 39.7377 40 39.4141C40 39.0905 39.7377 38.8281 39.4141 38.8281ZM33.5673 16.6702C34.1213 17.3288 34.4141 18.116 34.4141 18.9469C34.4141 19.8599 34.0523 20.7676 33.4216 21.4373C32.7538 22.1463 31.8364 22.5367 30.8384 22.5367H30.0748L29.0717 22.1068C28.1955 21.731 27.5962 20.9255 27.4737 19.9982C29.2816 19.0248 30.5134 17.1143 30.5134 14.9211V10.5162C30.6848 10.5278 30.8562 10.5342 31.027 10.5342C31.3088 10.5342 31.5895 10.5181 31.868 10.4866V12.0133C31.868 13.7152 32.4716 15.3691 33.5673 16.6702ZM23.976 25.9202C21.8798 25.9574 19.7995 25.6917 17.7812 25.132V23.7369L17.9507 23.6632C17.952 23.6627 17.9534 23.662 17.9548 23.6615L19.0001 23.207C20.1637 22.7011 20.9859 21.665 21.2352 20.4542C21.7455 20.6026 22.284 20.6837 22.8415 20.6837H24.7508C25.3104 20.6837 25.8509 20.602 26.3629 20.4525C26.6204 21.6577 27.4458 22.6845 28.6099 23.1839L29.7255 23.662C29.7262 23.6624 29.727 23.6627 29.7277 23.6629L29.8103 23.6983V25.0168C27.914 25.5818 25.9535 25.8857 23.976 25.9202ZM29.8102 26.2368V27.7735H17.7812V26.3454C19.6808 26.8435 21.6311 27.0955 23.5946 27.0955C23.7285 27.0955 23.8625 27.0943 23.9965 27.092C25.9645 27.0576 27.9163 26.77 29.8102 26.2368ZM31.868 9.30501C30.254 9.52306 28.4347 9.09072 27.1813 8.11954C26.9255 7.92142 26.5575 7.96798 26.3592 8.22384C26.161 8.47962 26.2077 8.84767 26.4635 9.04587C27.283 9.68072 28.2713 10.1279 29.3415 10.3534V13.5433C29.0599 14.185 28.7465 14.7187 28.0398 15.3017C27.7423 15.5471 27.4167 15.751 27.068 15.9127C26.7832 15.357 26.2048 14.9756 25.5387 14.9756H24.1656C23.2185 14.9756 22.448 15.7461 22.448 16.6931C22.448 17.6402 23.2185 18.4107 24.1656 18.4107H25.5387C26.3358 18.4107 27.0077 17.8649 27.2005 17.1276C27.9844 16.8289 29.2624 15.7635 29.2627 15.7631C28.8659 17.8933 26.9944 19.5115 24.7509 19.5115H22.8414C20.3102 19.5115 18.2508 17.4522 18.2508 14.9209V10.3917C20.2409 10.0797 22.1209 9.40626 23.8452 8.38642C26.4705 6.83353 28.1545 4.80431 29.1707 3.20111C30.9095 4.74978 31.8987 6.97001 31.868 9.30501ZM26.0843 16.6948C26.0834 16.995 25.8391 17.239 25.5387 17.239H24.1655C23.8646 17.239 23.6198 16.9942 23.6198 16.6933C23.6198 16.3924 23.8647 16.1476 24.1655 16.1476H25.5387C25.839 16.1476 26.0833 16.3914 26.0843 16.6915V16.6948ZM15.8 9.20548C15.8 4.77572 19.4038 1.17189 23.8336 1.17189C25.4223 1.17189 26.9404 1.63048 28.2377 2.48423C27.3024 3.98337 25.7283 5.91119 23.2485 7.37806C21.5473 8.38431 19.6813 9.02673 17.7021 9.28751H17.6655C17.6653 9.28751 17.6651 9.28751 17.6648 9.28751C17.6645 9.28751 17.6643 9.28751 17.664 9.28751H15.7999V9.20548H15.8ZM13.5238 20.4852C12.9297 19.2197 13.1152 17.7654 14.0072 16.6907C15.1265 15.3422 15.8013 13.676 15.8 11.9219V10.4594H17.0789V14.9211C17.0789 17.1156 18.3123 19.027 20.1218 19.9999C20.0086 20.9342 19.411 21.7503 18.5327 22.1322L17.6024 22.5367H16.7531C15.3555 22.5367 14.1181 21.7506 13.5238 20.4852ZM33.9212 29.5931L32.9423 38.8281H15.2398L14.2609 29.5931C14.2431 29.4256 14.2953 29.2645 14.4079 29.1395C14.5205 29.0143 14.6752 28.9454 14.8435 28.9454H33.3386C33.5069 28.9454 33.6616 29.0143 33.7742 29.1395C33.8868 29.2645 33.939 29.4256 33.9212 29.5931ZM37.6562 38.8281H34.1207L35.0866 29.7167C35.1391 29.2217 34.9782 28.7257 34.6455 28.3557C34.3126 27.9857 33.8363 27.7735 33.3386 27.7735H30.982V24.2006L34.9118 25.8849C36.579 26.624 37.6562 28.2794 37.6562 30.1024V38.8281ZM24.091 31.6602C22.8633 31.6602 21.8645 32.659 21.8645 33.8867C21.8645 35.1145 22.8633 36.1133 24.091 36.1133C25.3187 36.1133 26.3176 35.1145 26.3176 33.8867C26.3176 32.659 25.3187 31.6602 24.091 31.6602ZM24.091 34.9414C23.5095 34.9414 23.0363 34.4683 23.0363 33.8867C23.0363 33.3052 23.5095 32.832 24.091 32.832C24.6726 32.832 25.1457 33.3052 25.1457 33.8867C25.1457 34.4683 24.6727 34.9414 24.091 34.9414Z"
                fill="#794AFF"
              />
            </g>
            <defs>
              <clipPath id="clip0_460_43069">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1 className="font-semibold text-22 text-main-black">
            Get Consultation
          </h1>
        </div>
        <hr className="bg-purple/10" />
        <div className="pt-10 flex flex-col px-10 gap-[30px]">
          <input
            placeholder="Full Name"
            id="fullName"
            type="text"
            className="placeholder:text-paragraph w-full h-[56px] bg-white border border-white rounded-md focus:border-purple focus:outline-none focus:right-0 px-[25px]"
          />
          <input
            placeholder="Enter your email..."
            id="eOne"
            type="text"
            className="placeholder:text-paragraph w-full h-[56px] bg-white border border-white rounded-md focus:border-purple focus:outline-none focus:right-0 px-[25px]"
          />
          <textarea
            placeholder="Your message..."
            id="message"
            type="text"
            className="placeholder:text-paragraph w-full bg-white border border-white rounded-md focus:border-purple focus:outline-none focus:right-0 px-[25px] py-5 h-[140px]"
          ></textarea>
          <a href="#">
            <div className="inline-flex py-3 home-two-btn-bg group bg-purple border-purple">
              <span className="relative z-10 text-base text-white transition-all duration-300 group-hover:text-purple font-inter">
                Get A Quote
              </span>
              <svg
                className="relative z-10"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 group-hover:stroke-blue-seo"
                  d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-[30px] flex justify-center items-end relative w-full rounded-2xl overflow-hidden">
        <img
          src="./assets/images/service/detail-3.webp"
          alt=""
          className="object-cover w-full"
        />
        <div className="absolute w-full h-full black_overlay"></div>
        <div className="w-full max-w-[277px] absolute bottom-[30px]">
          <h1 className="mb-5 font-semibold text-center text-white text-24">
            Modern IT Design Consulting Services
          </h1>
          <a href="#">
            <div className="inline-flex w-full py-3 home-two-btn-bg group bg-purple border-purple">
              <svg
                className="relative z-10"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-300 group-hover:fill-purple"
                  d="M24.1094 2.17188C24.625 2.3125 25 2.73438 25 3.25C25 15.2969 15.25 25 3.25 25C2.6875 25 2.26562 24.6719 2.125 24.1562L1 19.2812C0.90625 18.7656 1.14062 18.2031 1.65625 17.9688L6.90625 15.7188C7.375 15.5312 7.89062 15.6719 8.21875 16.0469L10.5625 18.9062C14.2188 17.1719 17.1719 14.1719 18.8594 10.6094L16 8.26562C15.625 7.9375 15.4844 7.42188 15.6719 6.95312L17.9219 1.70312C18.1562 1.1875 18.7188 0.90625 19.2344 1.04688L24.1094 2.17188Z"
                  fill="white"
                />
              </svg>

              <span className="relative z-10 text-base text-white transition-all duration-300 group-hover:text-purple font-inter">
                +236 (456) 896 22
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
