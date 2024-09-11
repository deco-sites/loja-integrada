import type { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface IImage {
    src: ImageWidget;
    alt?: string;
}

/** @title {{title}} */
export interface IBenefit {
    title: string;
    caption: string;
    icon: IImage;
}

export interface IInput {
    caption: string;
    placeholder?: string;
}

export interface CTA {
    id?: string;
    href: string;
    text: string;
    icon?: IImage;
    outline?: boolean;
}

export interface Page1 {
    contentTitle: HTMLWidget;
    contentTitleIcon?: IImage;
    contentCaption?: string;
    asideTopIcon?: IImage;
}

export interface Result {
    montlyFeeLabel: string;
    salesComissionLabel: string;
    platformTotal: string;
    cardLabel: string;
    boletoLabel: string;
    pixLabel: string;
    totalPaymentLabel: string;
    totalLabel: string;
    totalTcoLabel: string;
    migrateCta: CTA;
}

export interface Page4 {
    progressImage?: IImage
    contentBackground?: IImage;
    result: Result;
    saving: {
        textBefore: string;
        textAfter: string;
        background: IImage;
    }
    whatsappText: string;
    whatsappNameInput: IInput;
    whatsappNumberInput: IInput;
    whasappCta: CTA;
    benefit1: {
        text: string;
        image?: IImage;
    }
    benefit2: {
        text: string;
        image?: IImage;
    }
}

function ResultRow({ label }: { label: string }) {
    return <div class="flex gap-2.5 text-sm text-base-300 font-normal">
        <div>
            <div class="flex justify-between min-w-[390px] py-[18px]">
                <p>{label}</p>
                <p class="min-w-40 text-center">R$ 389,00</p>
            </div>
            <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral to-transparent" />
        </div>
        <div class="bg-primary py-[18px] px-3 max-w-[193px] w-full">
            <p class="bg-transparent text-primary-content text-center font-semibold">R$ 259,00</p>
        </div>
    </div>
}

function TcoCalculatorPage4(
    { page1, rootId, page4 }: { page1: Page1; page4: Page4; rootId: string, },
) {
    const {
        contentTitle, contentTitleIcon, contentCaption, asideTopIcon
    } = page1;

    const { progressImage, contentBackground, saving, whasappCta, whatsappNameInput, whatsappNumberInput, whatsappText, benefit1, benefit2, result } = page4;

    const inputCaptionClass = "text-base text-primary font-bold flex justify-between items-center";
    const inputClass = "bg-transparent min-h-[38px] w-full rounded-lg border border-neutral-content px-4 mt-1";

    return (
        <div
            class="relative flex w-full min-h-[971px] rounded-[30px] overflow-hidden hidden"
        >
            <div class={`relative max-w-[437px] pt-[70px] px-7 bg-warning text-primary`}>
                <div class="px-7 py-[14px] relative max-w-[242px]">
                    <div class="relative z-10">
                        <p class="text-xl font-semibold pr-9">{saving.textBefore}</p>
                        <input type="text" disabled value="R$ 845" class="bg-transparent text-[40px] font-semibold" />
                        <p class="text-xl font-semibold">{saving.textAfter}</p>
                    </div>
                    <Image
                        width={242}
                        height={125}
                        src={saving.background.src}
                        alt={saving.background.alt || "background"}
                        class="w-full h-full absolute top-0 left-0 object-fill"
                    />
                    {asideTopIcon && <Image
                        width={133}
                        height={119}
                        src={asideTopIcon.src}
                        alt={asideTopIcon.alt || "content background"}
                        class="absolute top-[-30px] right-[-60px] w-[133px] h-[119px] object-contain z-10"
                    />}
                </div>

                <p class="mt-[70px] text-xl ">{whatsappText}</p>

                <form class="mt-5 max-w-64 flex flex-col gap-5 z-10">
                    <label>
                        <div class={inputCaptionClass} >
                            <p>{whatsappNameInput.caption}</p>
                        </div>
                        <input
                            class={inputClass}
                            type="text"
                            placeholder={whatsappNameInput.placeholder}
                            disabled={false}
                        >
                        </input>
                    </label>
                    <label>
                        <div class={inputCaptionClass} >
                            <p>{whatsappNumberInput.caption}</p>
                        </div>
                        <input
                            class={inputClass}
                            type="tel"
                            placeholder={whatsappNumberInput.placeholder}
                        >
                        </input>
                    </label>
                    <div>
                        <a
                            id={whasappCta.id}
                            href={whasappCta?.href ?? "#"}
                            target={whasappCta?.href.includes("http") ? "_blank" : "_self"}
                            class={`btn btn-primary ${whasappCta.outline ? "btn-outline" : ""} font-bold px-5 hover:scale-110 text-lg h-auto w-auto`}
                        >
                            {whasappCta.icon && <Image
                                width={20}
                                height={20}
                                src={whasappCta.icon.src}
                                class="h-5 w-5"
                            />}
                            {whasappCta?.text}
                        </a>
                    </div>
                </form>
                <div class="mt-[70px] flex gap-4">
                    <div class="relative max-w-[226px] min-h-[238px] px-2 py-5">
                        <p class="text-center text-base font-semibold relative z-10">{benefit1.text}</p>
                        {benefit1.image && <Image
                            src={benefit1.image.src}
                            alt={benefit1.image.alt || "background"}
                            width={226}
                            height={237}
                            class="h-full w-full object-fill absolute top-0 left-0"
                        />}
                    </div>
                    <div class="flex items-end">
                        <div class="relative max-w-[140px] min-h-[163px] px-2 py-5">
                            <p class="text-center text-base font-semibold relative z-10">{benefit2.text}</p>
                            {benefit2.image && <Image
                                src={benefit2.image.src}
                                alt={benefit2.image.alt || "background"}
                                width={140}
                                height={163}
                                class="h-full w-full object-fill absolute top-0 left-0"
                            />}
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-14 px-28 relative">
                {contentBackground && <Image
                    width={813}
                    height={971}
                    src={contentBackground.src}
                    alt={contentBackground.alt || "content background"}
                    class="absolute top-0 left-0 -z-50 w-full h-full object-cover"
                />}
                <div class="flex gap-2">
                    {contentTitleIcon && <Image
                        src={contentTitleIcon.src}
                        alt={contentTitleIcon.alt || "icon"}
                        width={14}
                        height={14}
                    />}
                    <div dangerouslySetInnerHTML={{ __html: contentTitle }} />
                </div>
                {contentCaption && <p class="mt-2.5">{contentCaption}</p>}
                {progressImage && <div class="mt-7"><Image
                    width={590}
                    height={70}
                    src={progressImage.src}
                    alt={progressImage.alt || "progress image"}
                /></div>}

                <div class="flex gap-2.5 text-sm mt-[54px]">
                    <div>
                        <div class="flex justify-between min-w-[390px] pt-9">
                            <p></p>
                            <p class="min-w-40 text-center text-primary font-semibold bg-info rounded-[20px] py-2.5 pt-2">😥  menos vantajoso</p>
                        </div>
                    </div>
                    <div class="relative bg-primary pt-9 px-3 max-w-[193px] w-full rounded-tl-[20px] rounded-tr-[20px]">
                        <div class="absolute w-full top-[-29px] left-0 h-14 bg-error-content bg-opacity-30 -z-10 rounded-lg">
                            <p class="text-primary text-xs text-center font-semibold pt-2">Economia de R$ 845</p>
                        </div>
                        <p class="text-primary text-center font-semibold bg-info rounded-[20px] py-2.5 pb-3 pt-2">🚀 mais vantajoso</p>
                    </div>
                </div>

                <div class="flex gap-2.5 text-sm">
                    <div>
                        <div class="flex justify-between min-w-[390px] py-[18px]">
                            <p></p>
                            <p class="min-w-40 text-center text-primary font-semibold">NuvemShop</p>
                        </div>
                    </div>
                    <div class="bg-primary py-[18px] px-3 max-w-[193px] w-full">
                        <p class="bg-transparent text-primary-content text-center font-semibold">Loja Integrada</p>
                    </div>
                </div>
                <ResultRow label={result.montlyFeeLabel} />
                <ResultRow label={result.salesComissionLabel} />
                <ResultRow label={result.platformTotal} />
                <ResultRow label={result.cardLabel} />
                <ResultRow label={result.boletoLabel} />
                <ResultRow label={result.pixLabel} />
                <ResultRow label={result.totalPaymentLabel} />
                <ResultRow label={result.totalLabel} />
                <ResultRow label={result.totalTcoLabel} />

                <div class="flex gap-2.5">
                    <div class="min-w-[390px]" />
                    <div class="flex justify-center bg-primary py-[18px] px-3 max-w-[193px] w-full rounded-bl-[20px] rounded-br-[20px]">
                        <a
                            id={result.migrateCta.id}
                            href={result.migrateCta?.href ?? "#"}
                            target={result.migrateCta?.href.includes("http") ? "_blank" : "_self"}
                            class={`btn ${result.migrateCta.outline ? "bg-primary border border-secondary-content text-secondary-content" : "bg-primary-content"}  font-bold hover:scale-110 text-lg h-auto w-full`}
                        >
                            {result.migrateCta.icon && <Image
                                width={20}
                                height={20}
                                src={result.migrateCta.icon.src}
                                class="h-5 w-5"
                            />}
                            {result.migrateCta?.text}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TcoCalculatorPage4;