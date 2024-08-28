import { Footer, FooterDivider, FooterIcon } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const FooterComp = () => {
  return (
    <Footer
      container
      className="border-t-4  bg-gray-300  dark:border-gray-700 rounded-none "
    >
      <div>
        <div>
          <div>
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-tr from-purple-950 via-sky-800 to-blue-600 rounded-lg text-white">
                Reflective
              </span>{" "}
              Blog
            </Link>
          </div>
          <div className="m-3 flex gap-x-20 mt-5 ">
            <div>
              <Footer.Title className="text-lg" title="ABOUT" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Reflective Blog
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Most Popular Blogs
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-lg" title="FOLLOW US" />

              <Footer.LinkGroup col>
                <div className="flex">
                  <Footer.Link
                    href="https://www.linkedin.com/in/hem-gajjar-970966284/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex gap-2">
                      <FooterIcon icon={BsLinkedin} />
                      Linkedin
                    </span>
                  </Footer.Link>
                  <Footer.Link
                    href="https://www.instagram.com/hem__gajjar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex gap-2">
                      <FooterIcon icon={BsInstagram} />
                      Instagram
                    </span>
                  </Footer.Link>
                </div>
                <div className="flex gap-2">
                  {" "}
                  <Footer.Link
                    href="https://github.com/Hem-Gajjar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex gap-2">
                      <FooterIcon icon={BsGithub} />
                      Github
                    </span>
                  </Footer.Link>
                  <Footer.Link
                    href="https://www.facebook.com/hem.gajjar.73/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex  items-center space-x-2 "
                  >
                    <span className="flex gap-2">
                      <FooterIcon icon={BsFacebook} />
                      Facebook
                    </span>
                  </Footer.Link>
                </div>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-lg" title="LEGAL" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex  items-center space-x-2 "
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex  items-center space-x-2 "
                >
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <FooterDivider />
          <span className="text-gray-500">
            © {new Date().getFullYear()} Reflective Blog. All rights reserved.
          </span>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
