import StartIcon from '@/src/assets/icons/star.svg';
const words = [
  "Responsive",
  "Optimized",
  "Dynamic",
  "Scalable",
  "Robust",
  "Maintainable",
  "Modular",
  "Efficient",
  "Modern",
  "Innovative"
];

export const TapeSection = () => {
  return <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-sky-100 to-sky-300 overflow-x-clip -rotate-3 -mx-1">
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className="flex-none gap-4 py-3">
            {words.map(word => <div key={word} className="inline-flex gap-4 items-center">
                <span className='text-gray-900 uppercase font-extrabold text-sm'>
                  {word}
                </span>
                <StartIcon className="size-6 text-gray-900 -rotate-12" />
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
