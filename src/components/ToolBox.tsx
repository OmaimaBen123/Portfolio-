import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

interface ToolboxItem {
  title: string;
  iconType: React.ElementType;
  className?: string;
  itemWrapperClassname?:string
}

interface ToolboxProps {
  items: ToolboxItem[];
  className?: string;
  itemWrapperClassname?:string
}

export const Toolbox: React.FC<ToolboxProps> = ({ items, className, itemWrapperClassname }) => {
         return <div className={`flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className || ""}`}>
             <div className={twMerge("flex flex-none py-0.5 gap-6,pr-6", itemWrapperClassname)}>
               {items.map(item =>
                 <div
                   key={item.title}
                   className={`inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg ${item.className ||
                     ""}`}
                 >
                   <span>
                     <TechIcon component={item.iconType} />
                   </span>
                   <span className="font-semibold">
                     {item.title}
                   </span>
                 </div>
               )}
             </div>
           </div>;
       };
