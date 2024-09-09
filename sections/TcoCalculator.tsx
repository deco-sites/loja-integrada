import type { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import { useId } from "../sdk/useId.ts";
import TcoCalculatorPage1 from "site/components/TcoCalculatorPage1.tsx";
import TcoCalculatorPage2 from "site/components/TcoCalculatorPage2.tsx";
import { Page1 } from "site/components/TcoCalculatorPage1.tsx";
import { Page2 } from "site/components/TcoCalculatorPage2.tsx";

export interface IImage {
    src: ImageWidget;
    alt?: string;
}

export interface Props {
    title?: string;
    caption?: string;
    page1: Page1;
    page2: Page2;
}

function TcoCalculator(props: Props) {
    const id = useId();
    const { title, caption, page1, page2 } = { ...props };

    return (
        <div
            class="min-h-min flex flex-col lg:container md:max-w-[1332px] lg:mx-auto pt-7 lg:pt-[123px]"
        >
            {caption && <h3 class="text-center text-neutral text-2xl font-semibold">{caption}</h3>}
            {title && <h2 class="mt-3 text-center text-primary text-5xl font-semibold">{title}</h2>}
            <div
                class="w-full gap-9 pl-[30px] pr-[22px] pt-[116px] pb-9 md:px-9"
                id={id}
            >
                <TcoCalculatorPage1
                    page1={page1}
                    rootId={id}
                />
                <TcoCalculatorPage2
                    page1={page1}
                    page2={page2}
                    rootId={id}
                />
            </div>
        </div>
    );
}

export default TcoCalculator;
