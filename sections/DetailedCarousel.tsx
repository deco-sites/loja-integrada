import type { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";
import { useScript } from "deco/hooks/useScript.ts";

const onLoad = () => {
    const detailedCarousel = document.getElementById("detailedCarousel") as HTMLElement;
    const detailedCarouselTitle = detailedCarousel.querySelector("#detailedCarouselTitle") as HTMLElement;
    const detailedCarouselContent = detailedCarousel.querySelector("#detailedCarouselContent") as HTMLElement;
    const detailedCarouselButtons = detailedCarousel.querySelector("#detailedCarouselButtons") as HTMLElement;

    detailedCarouselTitle.classList.add("opacity-0");
    detailedCarouselContent.classList.add("opacity-0");
    detailedCarouselButtons.classList.add("opacity-0");

    document.addEventListener('DOMContentLoaded', () => {
        const fadeDown = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-down");
                    entry.target.classList.remove("opacity-0");
                }
            });
        });
        const fadeIn = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-in");
                    entry.target.classList.remove("opacity-0");
                }
            });
        });
        const fadeUp = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-up");
                    entry.target.classList.remove("opacity-0");
                }
            });
        });

        fadeDown.observe(detailedCarouselTitle);
        fadeIn.observe(detailedCarouselContent);
        fadeUp.observe(detailedCarouselButtons);
    });
}

/** @title {{text}} */
export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

export interface IImage {
    src: ImageWidget;
    alt?: string;
}

export interface BulletPoints {
    bulletPointsTitle?: string;
    items?: string[];
    bulletPointsIcon?: IImage;
}

/**
 * @title {{title}}
 */
export interface Slide {
    title: string;
    image: IImage;
    bulletPoints?: BulletPoints;
}

export interface Props {
    title?: string;
    slides?: Slide[];
    /**
     * @title Show arrows
     * @description show arrows to navigate through the images
     */
    arrows?: boolean;
    /**
     * @title Show dots
     * @description show dots to navigate through the images
     */
    dots?: boolean;
    /**
     * @title Autoplay interval
     * @description time (in seconds) to start the carousel autoplay
     */
    interval?: number;
    cta?: CTA[];
    backgroundImage?: IImage;
}

function SliderItem(
    { slide, id }: { slide: Slide; id: string },
) {
    const {
        title, image, bulletPoints
    } = slide;

    return (
        <div id="detailedCarouselContent">
            <div
                id={id}
                class="relative flex gap-10 w-full min-h-[292px]"
            >
                <div class="max-w-[730px] flex-grow bg-primary-content bg-opacity-30 rounded-[30px]">
                    <Image
                        width={730}
                        height={553}
                        src={image.src}
                        alt={image.alt || ""}
                    />
                </div>

                <div class="flex flex-col gap-7 max-w-[396px]">
                    <h2 class="text-primary text-[40px] font-bold leading-[120%]">{title}</h2>
                    <div>
                        {bulletPoints?.items?.map((bulletPoint) => (
                            <div class="flex gap-5 mt-[10px]">
                                {bulletPoints.bulletPointsIcon && <Image
                                    src={bulletPoints.bulletPointsIcon.src}
                                    alt={bulletPoints.bulletPointsIcon.alt || "bullet point icon"}
                                    width={20}
                                    height={20}
                                    class="object-contain"
                                />}
                                <p class="text-lg font-semibold">{bulletPoint}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Dots({ slides, interval = 0 }: Props) {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
                }}
            />
            <ul class="flex gap-6 z-10">
                {slides?.map((slide, index) => (
                    <li class="">
                        <Slider.Dot index={index}>
                            <div class="py-5">
                                <p class="text-lg text-primary font-semibold opacity-30 group-disabled:opacity-100">{slide.title}</p>
                                <div
                                    class="h-1 mt-2 rounded-full dot overflow-hidden !bg-accent-content "
                                >
                                    <div class="h-full w-0 bg-primary group-disabled:animate-progress" style={{ animationDuration: `${interval}s` }} />
                                </div>
                            </div>
                        </Slider.Dot>
                    </li>
                ))}
            </ul>
        </>
    );
}

function Buttons() {
    return (
        <div class="flex gap-4">
            <div class="flex items-center justify-center z-10 ">
                <Slider.PrevButton class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" class="text-primary fill-current rotate-180">
                        <path d="M25.3835 4.67773C21.4279 4.67773 17.5611 5.85071 14.2721 8.04834C10.9831 10.246 8.41969 13.3695 6.90593 17.0241C5.39218 20.6786 4.99611 24.6999 5.76782 28.5795C6.53952 32.4592 8.44434 36.0228 11.2414 38.8199C14.0384 41.6169 17.6021 43.5217 21.4817 44.2934C25.3613 45.0651 29.3827 44.6691 33.0372 43.1553C36.6917 41.6416 39.8153 39.0781 42.0129 35.7891C44.2105 32.5002 45.3835 28.6334 45.3835 24.6777C45.3779 19.3751 43.269 14.2913 39.5195 10.5418C35.77 6.79227 30.6861 4.68333 25.3835 4.67773ZM31.0874 25.7662L23.3951 33.4585C23.2521 33.6014 23.0824 33.7148 22.8957 33.7922C22.7089 33.8695 22.5087 33.9094 22.3066 33.9094C22.1045 33.9094 21.9043 33.8695 21.7175 33.7922C21.5308 33.7148 21.3611 33.6014 21.2181 33.4585C21.0752 33.3156 20.9618 33.1459 20.8845 32.9591C20.8071 32.7724 20.7673 32.5722 20.7673 32.37C20.7673 32.1679 20.8071 31.9677 20.8845 31.781C20.9618 31.5942 21.0752 31.4245 21.2181 31.2816L27.8239 24.6777L21.2181 18.0739C20.9295 17.7852 20.7673 17.3937 20.7673 16.9854C20.7673 16.5772 20.9295 16.1856 21.2181 15.897C21.5068 15.6083 21.8983 15.4461 22.3066 15.4461C22.7149 15.4461 23.1064 15.6083 23.3951 15.897L31.0874 23.5893C31.2304 23.7322 31.3439 23.9018 31.4213 24.0886C31.4987 24.2754 31.5386 24.4756 31.5386 24.6777C31.5386 24.8799 31.4987 25.0801 31.4213 25.2669C31.3439 25.4536 31.2304 25.6233 31.0874 25.7662Z" />
                    </svg>
                </Slider.PrevButton>
            </div>
            <div class="flex items-center justify-center z-10 ">
                <Slider.NextButton class="flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" class="text-primary fill-current">
                        <path d="M25.3835 4.67773C21.4279 4.67773 17.5611 5.85071 14.2721 8.04834C10.9831 10.246 8.41969 13.3695 6.90593 17.0241C5.39218 20.6786 4.99611 24.6999 5.76782 28.5795C6.53952 32.4592 8.44434 36.0228 11.2414 38.8199C14.0384 41.6169 17.6021 43.5217 21.4817 44.2934C25.3613 45.0651 29.3827 44.6691 33.0372 43.1553C36.6917 41.6416 39.8153 39.0781 42.0129 35.7891C44.2105 32.5002 45.3835 28.6334 45.3835 24.6777C45.3779 19.3751 43.269 14.2913 39.5195 10.5418C35.77 6.79227 30.6861 4.68333 25.3835 4.67773ZM31.0874 25.7662L23.3951 33.4585C23.2521 33.6014 23.0824 33.7148 22.8957 33.7922C22.7089 33.8695 22.5087 33.9094 22.3066 33.9094C22.1045 33.9094 21.9043 33.8695 21.7175 33.7922C21.5308 33.7148 21.3611 33.6014 21.2181 33.4585C21.0752 33.3156 20.9618 33.1459 20.8845 32.9591C20.8071 32.7724 20.7673 32.5722 20.7673 32.37C20.7673 32.1679 20.8071 31.9677 20.8845 31.781C20.9618 31.5942 21.0752 31.4245 21.2181 31.2816L27.8239 24.6777L21.2181 18.0739C20.9295 17.7852 20.7673 17.3937 20.7673 16.9854C20.7673 16.5772 20.9295 16.1856 21.2181 15.897C21.5068 15.6083 21.8983 15.4461 22.3066 15.4461C22.7149 15.4461 23.1064 15.6083 23.3951 15.897L31.0874 23.5893C31.2304 23.7322 31.3439 23.9018 31.4213 24.0886C31.4987 24.2754 31.5386 24.4756 31.5386 24.6777C31.5386 24.8799 31.4987 25.0801 31.4213 25.2669C31.3439 25.4536 31.2304 25.6233 31.0874 25.7662Z" />
                    </svg>
                </Slider.NextButton>
            </div>
        </div>
    );
}

function Carousel(props: Props) {
    const id = useId();
    const { title, slides, interval, backgroundImage, cta } = { ...props };

    return (
        <div id="detailedCarousel" class="relative mt-16">

            {backgroundImage && <div class="absolute w-full h-full top-0 left-0 -z-50"><Image
                width={1440}
                height={1104}
                src={backgroundImage.src}
                alt={backgroundImage.alt || "carousel background"}
                class="h-full w-full object-fill"
            /></div>}

            <div
                id={id}
                class="min-h-min flex items-center flex-col lg:container md:max-w-[1220px] lg:mx-auto pt-16 pb-24 lg:pt-24"
            >
                <script
                    type="module"
                    dangerouslySetInnerHTML={{ __html: useScript(onLoad) }}
                />

                {title && <h2 id="detailedCarouselTitle" class="max-w-[307px] md:max-w-full text-2xl md:text-5xl text-primary text-center font-semibold leading-snug pb-12 lg:pb-16">
                    {title}
                </h2>}

                {props.dots && <Dots slides={slides} interval={interval} />}{" "}

                <Slider
                    class="carousel carousel-center w-full col-span-full row-span-full gap-9 pl-[30px] pr-[22px] py-9 md:px-9"
                    rootId={id}
                    interval={interval && interval * 1e3}
                    infinite
                >
                    {slides?.map((slide, index) => (
                        <Slider.Item
                            index={index}
                            class="carousel-item w-full"
                        >
                            <SliderItem
                                slide={slide}
                                id={`${id}::${index}`}
                            />
                        </Slider.Item>
                    ))}
                </Slider>
                <div class="flex justify-end w-full pr-[22px] lg:px-9 ">
                    {props.arrows && <Buttons />}
                </div>
                {cta && <div id="detailedCarouselButtons" class="flex justify-center gap-7 mt-4">
                    {cta.map((item) => (
                        <a
                            key={item?.id}
                            id={item?.id}
                            href={item?.href ?? "#"}
                            target={item?.href.includes("http") ? "_blank" : "_self"}
                            class={`btn btn-primary ${item.outline ? "btn-outline" : ""} font-bold px-7 hover:scale-110 text-lg`}
                        >
                            {item?.text}
                        </a>
                    ))}
                </div>}
            </div>
        </div>
    );
}

export default Carousel;
