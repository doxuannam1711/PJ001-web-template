

export function TrustedBy() {
    return (
        <section>
            <div className="w-full pl-[68px] pr-[69px]">
                <div className="font-bold leading-[48px] text-[40px]">
                    Trusted by
                </div>
            </div>

            <div className="mt-[11px] h-[3px] w-[184px] bg-[#ED4842] mx-[88px]" />

            <div className="sm:hidden mt-[64px] flex flex-col">
                <div className="w-[184px] h-[122px] ml-[32px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                    <img src="/bundeshaus-5.svg" className={`w-[154px] h-[49px] mx-[15px] mt-[37px] mb-[36px]`} />
                </div>

                <div className="mt-[27px] w-[184px] h-[122px] ml-[144px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                    <img src="/Vector-2.svg" className={`w-[104px] h-[48px] mt-[41px] mb-[33px] ml-[45px] mr-[35px]`} />
                </div>

                <div className="mt-[25px] w-[184px] h-[122px] ml-[32px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                    <img src="/Vector-1.svg" className={`w-[104px] h-[30px] mt-[51px] mb-[41px] ml-[48px] mr-[32px]`} />
                </div>

                <div className="mt-[27px] w-[184px] h-[122px] ml-[144px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                    <img src="/SBB-3.svg" className={`w-[105px] h-[58px] mt-[37px] mb-[27px] ml-[48px] mr-[31px]`} />
                </div>
            </div>
        </section>
    )
}