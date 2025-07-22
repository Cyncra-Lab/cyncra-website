"use client";


import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/Twitter.svg";
import linkedin from "../../assets/icons/LinkedIn.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-10 pb-5 lg:pt-17 h-auto lg:h-104 flex justify-center w-full">
      <div className="px-5 lg:px-20 w-full">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 py-4 pb-4 border-bottom border-secondary w-full">
          <div className="col-span-1">
            <h5 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-8">
              Contact Us{" "}
            </h5>
            <div className="flex gap-2 lg:gap-3">
              <a href="#" className="text-white">
                <Image src={facebook} alt="Facebook" width={36} height={27} />
              </a>
              <a href="#" className="text-white">
                <Image src={instagram} alt="Facebook" width={36} height={27} />
              </a>
              <a href="#" className="text-white">
                <Image src={twitter} alt="Facebook" width={36} height={27} />
              </a>
              <a href="#" className="text-white">
                <Image src={linkedin} alt="Facebook" width={36} height={27} />
              </a>
            </div>
          </div>

          <div className="col-span-1 text-right lg:text-left">
            <h5 className="font-bold text-xl lg:text-2xl mb-6">About</h5>
            <ul className="list-unstyled text-sm lg:text-base">
              <li className="mb-2">
                <a href="#" className="text-[#B5B5B5] text-decoration-none">
                  Our Story
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#B5B5B5] text-decoration-none">
                  Mission and Vision
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#B5B5B5] text-decoration-none">
                  Our Core Values
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#B5B5B5] text-decoration-none">
                  Meet the Team
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="font-bold text-xl lg:text-2xl mb-3">Services</h5>
            <ul className="list-unstyled text-sm lg:text-base">
              <li className="mb-2">
                <a href="#" className="text-[#B5B5B5] text-decoration-none">
                  Product Strategy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#B5B5B5] text-decoration-none">
                  UI/UX Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#B5B5B5] text-decoration-none">
                  MVP Development
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 text-right lg:text-left">
            <h5 className="font-bold text-xl lg:text-2xl mb-3">Support</h5>
            <ul className="list-unstyled text-sm lg:text-base">
              <li className="mb-2">
                <a href="#" className="text-[#B5B5B5] text-decoration-none">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#B5B5B5] text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#B5B5B5] text-decoration-none">
                  Complaints
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center pt-7 lg:pt-20">
          {/* <div className="col-md-6">
            <form action="/" className="d-flex">
              <input
                type="email"
                placeholder="Type Your Email Here"
                className="form-control me-2"
              />
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div> */}

 
          <p className="mb-0 text-base lg:text-lg">
            &copy; Cyncra - 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
