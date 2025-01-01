import { Selection } from "d3";
import { CvDataInterface } from "@/interfaces/frontend/cv/interfaces.ts";
import { getHeaderHeight } from "@/components/frontend/cv-editor-app/cv-templates/tech-visionary/utils/cv_helpers.ts";
import _cvT from "@/utils/cv_translations/cvTranslations.ts";

const createPersonalDataTitle = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvDataInterface,
) => {
    const { linkedin, dateOfBirth, website, nationality } = data;
    const titleElement = svg.selectAll("#personalDataTitle");

    if (linkedin || dateOfBirth || website || nationality) {
        if (titleElement.empty()) {
            svg.append("text")
                .attr("id", "personalDataTitle")
                .classed("personalDataTitle", true)
                .attr("x", 420)
                .attr("y", getHeaderHeight(data) + 35)
                .attr("font-size", 15)
                .attr("fill", "#303846")
                .text(_cvT("Personal details"));
        }
    } else titleElement.remove();
};

const create_cv_personal_details = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvDataInterface,
) => {
    await createPersonalDataTitle(svg, data);
    console.log(data);

    return svg;
};

export default create_cv_personal_details;
