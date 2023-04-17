export function UnserePartner() {
    return (
        <section className={`max-w-[1400px] m-auto mt-20`}>
            <h2 className={`text-[43px] m-auto text-center`}>Unsere Partner</h2>
            <div className={`w-full px-10 flex gap-8 mt-10`}>
                <a href="https://nativeops.ch/" className={`block`} target={`_blank`}>
                    <img src="/NativeOps_rgb500px.png" alt="" />
                </a>
                <a href="https://www.infomaniak.com/goto/de/home?utm_term=6225f8b55b86d" className={`block`}
                    target={`_blank`}>
                    <img src="/Infomaniak.png" alt="" />
                </a>
                <a href="https://bin.swiss" className={`block`} target={`_blank`}>
                    <img src="/BNI_logo_Red_CMYK.png" alt="" />
                </a>
            </div>

            <div className={`w-full flex gap-8 mt-10`}>
                <a href="https://itcheck.ch/" className={`block`} target={`_blank`}>
                    <img src="/Logo_IT-Check.ch-06.png" alt="" className={`max-w-[550px]`} />
                </a>
            </div>
        </section>
    )
}