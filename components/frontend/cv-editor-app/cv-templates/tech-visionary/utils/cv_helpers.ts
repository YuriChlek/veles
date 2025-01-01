import {
    CvDataInterface,
    CvHeaderInterface,
} from "@/interfaces/frontend/cv/interfaces.ts";
import { BaseType, Selection } from "d3";

export const getHeaderHeight = (data: CvHeaderInterface | CvDataInterface) => {
    const hasPhoto = Boolean(data.photo);
    const hasHeadline = Boolean(data.headline);
    const hasContactInfo = Boolean(data.email || data.location || data.phoneNumber);

    if (hasPhoto || (hasHeadline && hasContactInfo)) {
        return 125;
    }

    return 100;
};

export const getPhoneIconX = (
    data: CvHeaderInterface,
    svgEl: Selection<BaseType, string | undefined, SVGSVGElement, unknown>,
): number => {
    if (data.email) {
        const elem = svgEl.node() as SVGSVGElement;
        return elem.getBBox().width + elem.getBBox().x + 15;
    }

    return data.photo ? 150 : 25;
};

export const getPhoneX = (
    data: CvHeaderInterface,
    svgEl: Selection<BaseType, string | undefined, SVGSVGElement, unknown>,
) => {
    if (data.email) {
        const element = svgEl.node() as SVGSVGElement;
        return element.getBBox().width + element.getBBox().x + 30;
    }

    return data.photo ? 150 + 15 : 25 + 15;
};

export const getLocationIconX = (
    data: CvHeaderInterface,
    svgEmailEl: Selection<BaseType, string | undefined, SVGSVGElement, unknown>,
    svgPhoneEl: Selection<BaseType, string | undefined, SVGSVGElement, unknown>,
) => {
    if (data.email && !data.phoneNumber) {
        const emailElement = svgEmailEl.node() as SVGSVGElement;
        return emailElement.getBBox().width + emailElement.getBBox().x + 15;
    }

    if (data.phoneNumber) {
        const phoneElement = svgPhoneEl.node() as SVGSVGElement;
        return phoneElement.getBBox().width + phoneElement.getBBox().x + 15;
    }

    return data.photo ? 150 : 25;
};

export const getLocationX = (
    data: CvHeaderInterface,
    svgIconEl: Selection<BaseType, string | undefined, SVGSVGElement, unknown>,
) => {
    if (data.location) {
        const iconElement = svgIconEl.node() as SVGSVGElement;
        return iconElement.getBBox().width + iconElement.getBBox().x + 5;
    }

    return data.photo ? 162 : 37;
};

export const formatUrl = (url: string) => {
    try {
        const formattedUrl = new URL(url);
        return formattedUrl.host + formattedUrl.pathname;
    } catch (error) {
        return null;
    }
};
