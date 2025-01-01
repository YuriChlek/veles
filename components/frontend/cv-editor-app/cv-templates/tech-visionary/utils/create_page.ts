import * as d3 from "d3";
import { Selection } from "d3";
import create_cv_header from "./create_cv_header.ts";
import { CvDataInterface } from "@/interfaces/frontend/cv/interfaces.ts";
import create_cv_personal_details from "@/components/frontend/cv-editor-app/cv-templates/tech-visionary/utils/create_cv_personal_details.ts";

const create_page = () => {
    const pages = new Map<
        HTMLElement,
        Selection<SVGSVGElement, unknown, null, undefined>
    >();

    return (
        element: HTMLElement,
        data: CvDataInterface,
    ): Selection<SVGSVGElement, unknown, null, undefined> => {
        let svg: Selection<SVGSVGElement, unknown, null, undefined>;

        if (!pages.has(element)) {
            svg = d3
                .select(element)
                .append("svg")
                .attr("xmlns", "http://www.w3.org/2000/svg")
                .attr("style", "direction: ltr")
                .attr("viewBox", "0 0 595.28 841.89")
                .attr("width", "100%")
                .attr("height", "100%");

            pages.set(element, svg);
        } else {
            svg = pages.get(element)!;
        }

        create_cv_header(svg, data).catch((error) => console.log(error));
        create_cv_personal_details(svg, data).catch((error) => console.log(error));

        return svg;
    };
};

const svg_pages: (
    element: HTMLElement,
    data: CvDataInterface,
) => Selection<SVGSVGElement, unknown, null, undefined> = create_page();

export default svg_pages;
