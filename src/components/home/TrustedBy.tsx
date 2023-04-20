import SBB from 'public/images/example/SBB-3.svg'
import Vector1 from 'public/images/example/Vector-1.svg'
import Vector2 from 'public/images/example/Vector-2.svg'
import Bundeshaus from 'public/images/example/bundeshaus-5.svg'
import { HomeMobileTitle } from './common/HomeMobileTitle'

export function TrustedBy() {
    return (
        <section>
            <HomeMobileTitle className="md:hidden mt-20">Trusted by</HomeMobileTitle>

            <div className="md:hidden mt-[64px] flex flex-col justify-center items-center w-full">
                <div className="w-[184px] h-[122px] ml-[-56px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                    <img src={Bundeshaus} className={`w-[154px] h-[49px] mx-[15px] mt-[37px] mb-[36px]`} />
                </div>

                <div className="mt-[27px] w-[184px] ml-[56px] h-[122px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                    <img src={Vector2} className={`w-[104px] h-[48px] mt-[41px] mb-[33px] ml-[45px] mr-[35px]`} />
                </div>

                <div className="mt-[25px] w-[184px] ml-[-56px] h-[122px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                    <img src={Vector1} className={`w-[104px] h-[30px] mt-[51px] mb-[41px] ml-[48px] mr-[32px]`} />
                </div>

                <div className="mt-[27px] w-[184px] ml-[56px] h-[122px] rounded-[15px] shadow-[0_15px_46px_8px_rgba(38,38,38,0.08)]">
                    <img src={SBB} className={`w-[105px] h-[58px] mt-[37px] mb-[27px] ml-[48px] mr-[31px]`} />
                </div>
            </div>
        </section>
    )
}