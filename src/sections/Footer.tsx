import ArrowUpRight from '@/src/assets/icons/arrow-up-right.svg';
export const Footer = () => {
  return <footer>
      <div className="container">
        <div className="border-white/15 border-t  py-6 text-sm flex flex-col items-center ">
          <div className="text-white/40 mb-8">&copy;2024.All rights reserved</div>
          <nav className='flex flex-col items-center gap-8'>
            <a href="#" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">
                LinkedIn
              </span> <ArrowUpRight className="size-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">
                GitHub
              </span> <ArrowUpRight className="size-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">
                Portfolio
              </span> <ArrowUpRight className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </footer>;
};
