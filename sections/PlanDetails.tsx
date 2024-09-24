import type { ImageWidget, HTMLWidget, VideoWidget } from "apps/admin/widgets.ts";
import { useScript } from "deco/hooks/useScript.ts";
import { useId } from "site/sdk/useId.ts";

const onLoad = (rootId: string) => {
    const typing = document.getElementById(rootId + 'typing');
    console.log(typing);
};

export interface Props {
    title: string;
    titleTyping: string[];
    /** @format color-input */
    titleTypingColor: string;
}

export default function PlanDetails({ title, titleTyping, titleTypingColor }: Props) {
    const id = useId();
    return (
        <div class="min-h-[600px] bg-primary flex justify-center items-center">
            <script
                type="module"
                dangerouslySetInnerHTML={{ __html: useScript(onLoad, id) }}
            />
            <h2 class="text-5xl">{title}<span id={id + 'typing'} style={{ color: titleTypingColor }}>{titleTyping}</span></h2>
        </div>
    )
}