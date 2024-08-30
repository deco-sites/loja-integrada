
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Image {
    src: ImageWidget;
    alt?: string;
}

export interface Props {
    title: string,
    caption: string,
    inputPlaceHolder: string;
    inputButtonText: string;
    inputLabel: string;

}

export default function MainHero() {
    return <div class="flex h-96">
        <div class="flex-grow bg-green-400">

        </div>

        <div class="flex-grow bg-blue-500">

        </div>
    </div>
}