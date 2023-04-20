import { Cursor, CursorMask } from "@components/vector";

export interface domainsCard {
  title: string;
  content: string;
  children: string;
  className?: string;
  typeName?: string;
  imageUrl?: string;
}
export function DomainsCard({
  title,
  children,
  content = "",
  className = "",
  typeName = "",
  imageUrl = "",
}: domainsCard) {
  return (
    <div
      className={`
        dcard flex-col grow items-center w-full md:min-h-[80vh] md:gap-[84px] md:px-[90px] md:flex-row-reverse md:items-center flex-1 flex ${className}
    `}
    >
      <div className="image px-[88px] md:px-0 md:max-h-[100vh] max-sm:h-full md:w-[460px] w-full flex justify-center overflow-hidden">
        <img src={imageUrl} alt="" className="image-mask h-full object-cover" />
      </div>

      <div className="content text-center mt-[40px] md:text-start md:flex md:flex-col w-[400px]">
        <h2 className="font-bold text-[30px] md:text-[44px] md:leading-[48px] md:p-0 px-[85px] leading-[36px]">
          {title}
        </h2>
        <p className="leading-[24px] font-normal px-[32px] md:text-[16px] md:pt-[8px] md:p-0 tracking-[-0.5px]">
          {content}
        </p>
        {/* button */}
        <button>Đây là button</button>
      </div>
    </div>
  );
}
