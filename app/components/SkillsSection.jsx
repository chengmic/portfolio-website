import Image from 'next/image';

const icon_size = 75;
const SkillsSection = () => {
  return (
    <section className="text-white" id="skills">
      <div className="gap-8 items-center py-8 px-4 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          
          <div>
            <h3 className="text-2xl font-bold text-white mt-4 mb-4">Languages</h3>  
            <div className="grid grid-cols-3 gap-8">
              <div className='flex flex-col items-center'>
                <Image
                src="/images/python-original.svg"
                width={icon_size}
                height={icon_size}
                alt="python"
                />
                <p className="text-white text-s mt-1 text-center font-normal">Python</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                src="/images/csharp-original.svg"
                width={icon_size}
                height={icon_size}
                alt="c sharp"
                />
                <p className="text-white text-s mt-1 text-center">C#</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                src="/images/javascript-original.svg"
                width={icon_size}
                height={icon_size}
                alt="javascript"
                />
              <p className="text-white text-s mt-1 text-center">Javascript</p>
              </div>
              
              <div className='flex flex-col items-center'>
                <Image
                src="/images/html5-original-wordmark.svg"
                width={icon_size}
                height={icon_size}
                alt="html 5"
                />
                <p className="text-white text-s mt-1 text-center">HTML</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                src="/images/css3-original-wordmark.svg"
                width={icon_size}
                height={icon_size}
                alt="css 3"
                />
                <p className="text-white text-s mt-1 text-center">CSS</p>
              </div>
          </div>
        </div>

          <div>
            <h3 className="text-2xl font-bold text-white mt-6 mb-4">Technologies</h3>
            <div className="grid grid-cols-3 gap-8">
              <div className='flex flex-col items-center'>
                <Image
                src="/images/unity-original.svg"
                width={icon_size}
                height={icon_size}
                alt="unity"
                />
                <p className="text-white text-s mt-1 text-center">Unity</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                src="/images/mysql-original.svg"
                width={icon_size}
                height={icon_size}
                alt="my sql"
                />
                <p className="text-white text-s mt-1 text-center">MySQL</p>
              </div>
              
              <div className='flex flex-col items-center'>
                <Image
                src="/images/flask-original.svg"
                width={icon_size}
                height={icon_size}
                alt="flask"
                />
                <p className="text-white text-s mt-1 text-center">Flask</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                src="/images/react-original.svg"
                width={icon_size}
                height={icon_size}
                alt="react"
                />
                <p className="text-white text-s mt-1 text-center">React.js</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                src="/images/nextjs-original.svg"
                width={icon_size}
                height={icon_size}
                alt="next.js"
                />
                <p className="text-white text-s mt-1 text-center">Next.js</p>
              </div>
              
              <div className='flex flex-col items-center'>
                <Image
                src="/images/git-original.svg"
                width={icon_size}
                height={icon_size}
                alt="git"
                />
                <p className="text-white text-s mt-1 text-center">Git</p>
              </div>


              <div className='flex flex-col items-center'>
                <Image
                src="/images/vercel-original.svg"
                width={icon_size}
                height={icon_size}
                alt="vercel"
                />
                <p className="text-white text-s mt-1 text-center">Vercel</p>
              </div>


              <div className='flex flex-col items-center'>
                <Image
                src="/images/figma-original.svg"
                width={icon_size}
                height={icon_size}
                alt="figma"
                />
                <p className="text-white text-s mt-1 text-center">Figma</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;