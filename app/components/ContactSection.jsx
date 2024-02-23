import Image from 'next/image';
import { MdOutlineEmail } from "react-icons/md";

const icon_size = 75;

const ContactSection = () => {
    return (
      <section className="text-white" id="contact">
        <div className=" gap-8 items-center py-8 px-4 sm:py-16 xl:px-16">
          <div className="mt-4 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">Connect with Me</h2>
              <div className="grid grid-cols-4 gap-8">

                <a href="mailto:chengmic@oregonstate.edu">
                  <div className='flex flex-col items-center'>
                    <MdOutlineEmail
                      style={{ width: icon_size, height: icon_size }}
                      alt="email"
                    />
                    <p className="text-white text-s mt-1 text-center font-normal">Email</p>
                  </div>
                </a>

                <a href="https://github.com/chengmic" target="_blank" rel="noopener noreferrer">
                  <div className='flex flex-col items-center'>
                    <Image
                    src="/images/github.svg"
                    width={icon_size}
                    height={icon_size}
                    alt="github"
                    />
                    <p className="text-white text-s mt-1 text-center font-normal">GitHub</p>
                  </div>
                </a>

                <a href ="https://www.linkedin.com/in/michellencheng/" target="_blank" rel="noopener noreferrer">
                  <div className='flex flex-col items-center'>
                    <Image
                    src="/images/linkedin.svg"
                    width={icon_size}
                    height={icon_size}
                    alt="linkedin"
                    />
                    <p className="text-white text-s mt-1 text-center font-normal">LinkedIn</p>
                  </div>
                </a>

                <a href="https://app.joinhandshake.com/stu/users/37099075" target="_blank" rel="noopener noreferrer">
                  <div className='flex flex-col items-center'>
                    <Image
                    src="/images/handshake.svg"
                    width={icon_size}
                    height={icon_size}
                    alt="handshake"
                    />
                    <p className="text-white text-s mt-1 text-center font-normal">Handshake</p>
                  </div>
                </a>
              </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;