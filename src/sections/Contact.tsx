import ArrowUpIcon from '@/src/assets/icons/arrow-up-right.svg'

export const ContactSection = () => {

  return <div className="py-16 pt-14">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
          <div className="flex flex-col gap-8 items-center md:flex-row">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together{" "}
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life ? let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>

            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
