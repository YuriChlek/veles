import { CvHeaderInterface } from "@/interfaces/frontend/cv/interfaces.ts";
import { BaseType, Selection } from "d3";
import { CV_EMAIL, CV_LOCATION, CV_PHONE } from "@/constants/cv/cv_icons.ts";
import {
    getHeaderHeight,
    getPhoneIconX,
    getPhoneX,
    getLocationIconX,
    getLocationX,
} from "@/components/frontend/cv-editor-app/cv-templates/tech-visionary/utils/cv_helpers.ts";

const createUpdateVerticalSeparator = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const y1: number = getHeaderHeight(data) + 25;
    const verticalSeparator = svg.select("#verticalSeparator");

    if (verticalSeparator.empty()) {
        svg.append("line")
            .attr("id", "verticalSeparator")
            .classed("verticalSeparator", true)
            .attr("x1", 395.28)
            .attr("y1", y1)
            .attr("x2", 395.28)
            .attr("y2", 816.89)
            .attr("stroke-width", "1")
            .attr("stroke", "#ececec");
    } else verticalSeparator.attr("y1", y1);
};

const createUpdateHeader = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const headerHeight = getHeaderHeight(data);
    const headerElement = svg.select("#cvHeader");

    if (headerElement.empty()) {
        svg.append("rect")
            .attr("id", "cvHeader")
            .classed("header", true)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 595.28)
            .attr("height", headerHeight)
            .attr("fill", "#303846");
    } else {
        headerElement.attr("height", headerHeight);
    }
};

const createUpdatePhoto = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const photoElement = svg.select("#cvPhoto");

    if (data.photo) {
        if (photoElement.empty()) {
            svg.append("image")
                .attr("id", "cvPhoto")
                .classed("photo", true)
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", 125)
                .attr("height", 125)
                .attr("image-rendering", "optimizeSpeed")
                .attr("preserveAspectRatio", "none")
                .attr("xlink:href", data.photo);
        } else photoElement.attr("xlink:href", data.photo).attr("display", null);
    }
};

const createUpdateFirstName = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const firstNameElement = svg.select("#firstName");

    if (firstNameElement.empty()) {
        svg.append("text")
            .attr("id", "firstName")
            .classed("firstName", true)
            .attr("x", () => {
                return data.photo ? 150 : 25;
            })
            .attr("font-size", 25)
            .attr("y", 55)
            .attr("fill", "#fff")
            .text((): string => {
                return data.givenName ? data.givenName : "Resume";
            });
    } else {
        firstNameElement.attr("x", data.photo ? 150 : 25).text((): string => {
            if (!data.familyName) {
                return data.givenName ? data.givenName : "Resume";
            }
            return data.givenName ? data.givenName : "";
        });
    }
};

const createUpdateLastName = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const lastNameElement = svg.select("#lastName");

    if (lastNameElement.empty()) {
        svg.append("text")
            .attr("id", "lastName")
            .classed("lastName", true)
            .attr("x", () => {
                return data.photo ? 150 : 25;
            })
            .attr("font-size", 25)
            .attr("y", 55)
            .attr("fill", "#fff");
    }

    if (data.givenName && !lastNameElement.empty()) {
        const firstNameElement = svg.select("#firstName").node() as SVGSVGElement;
        lastNameElement.attr(
            "x",
            (): number =>
                firstNameElement.getBBox().width + firstNameElement.getBBox().x + 10,
        );
    }

    if (!data.givenName && !lastNameElement.empty()) {
        lastNameElement.attr("x", data.photo ? 150 : 25);
    }

    lastNameElement.text(data.familyName ? data.familyName : "");
};

const createUpdateHeadline = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const headlineElement = svg.select("#headline");

    if (headlineElement.empty()) {
        svg.append("text")
            .attr("id", "headline")
            .classed("headline", true)
            .attr("font-size", 13)
            .attr("x", () => (data.photo ? 150 : 25))
            .attr("y", 77)
            .attr("fill", "#a1a5ac")
            .text(data.headline ? data.headline : "");
    } else {
        headlineElement
            .attr("x", () => (data.photo ? 150 : 25))
            .text(data.headline ? data.headline : "");
    }
};

const createUpdateEmailIcon = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const iconElement = svg.selectAll("#emailIco");

    if (data.email) {
        if (iconElement.empty()) {
            svg.append("image")
                .attr("id", "emailIco")
                .classed("photo", true)
                .attr("width", 9)
                .attr("height", 9)
                .attr("x", data.photo ? 150 : 25)
                .attr("y", data.headline ? 95 : 77)
                .attr("image-rendering", "optimizeSpeed")
                .attr("preserveAspectRatio", "none")
                .attr("href", CV_EMAIL);
        }

        iconElement.attr("x", () => (data.photo ? 150 : 25));
        iconElement.attr("y", () => (data.headline ? 95 : 77));
        iconElement.attr("display", () => (data.email ? null : "none"));
    } else iconElement.attr("display", "none");
};

const createUpdateEmail = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const emailElement = svg.select("#email");

    if (data.email) {
        if (emailElement.empty()) {
            svg.append("text")
                .attr("id", "email")
                .classed("email", true)
                .attr("fill", "#a1a5ac")
                .attr("font-size", 10)
                .attr("x", () => (data.photo ? 165 : 40))
                .attr("y", () => (data.headline ? 102 : 84.5))
                .attr("display", null)
                .text(data.email ? data.email : "");
        } else {
            emailElement.attr("x", () => (data.photo ? 165 : 40));
            emailElement.attr("y", () => (data.headline ? 102 : 84.5));
            emailElement.text(data.email ? data.email : "");
            emailElement.attr("display", null);
        }
    } else emailElement.attr("display", "none");
};

const createUpdatePhoneIcon = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const iconElement = svg.selectAll("#phoneIco");
    const emailElement: Selection<BaseType, string | undefined, SVGSVGElement, unknown> =
        svg.selectAll("#email");

    if (data.phoneNumber) {
        if (iconElement.empty()) {
            svg.append("image")
                .attr("id", "phoneIco")
                .classed("phoneIco", true)
                .attr("width", 9)
                .attr("height", 9)
                .attr("x", getPhoneIconX(data, emailElement))
                .attr("y", () => (data.headline ? 95 : 77))
                .attr("image-rendering", "optimizeSpeed")
                .attr("preserveAspectRatio", "none")
                .attr("href", CV_PHONE);
        } else {
            iconElement.attr("x", getPhoneIconX(data, emailElement));
            iconElement.attr("y", () => (data.headline ? 95 : 77));
            iconElement.attr("display", null);
        }
    } else {
        iconElement.attr("display", "none");
    }
};

const createUpdatePhone = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const phoneElement = svg.selectAll("#phoneNumber");
    const emailElement: Selection<BaseType, string | undefined, SVGSVGElement, unknown> =
        svg.selectAll("#email");

    if (data.phoneNumber) {
        if (phoneElement.empty()) {
            svg.append("text")
                .attr("id", "phoneNumber")
                .classed("phoneNumber", true)
                .attr("x", getPhoneX(data, emailElement))
                .attr("y", data.headline ? 102 : 84.5)
                .attr("font-size", 10)
                .attr("fill", "#a1a5ac")
                .text(data.phoneNumber ? data.phoneNumber : "");
        } else {
            phoneElement.attr("x", getPhoneX(data, emailElement));
            phoneElement.attr("y", data.headline ? 102 : 84.5);
            phoneElement.text(data.phoneNumber ? data.phoneNumber : "");
        }
    }
};

const createUpdateLocationIcon = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const iconElement = svg.selectAll("#locationIco");
    const emailElement: Selection<BaseType, string | undefined, SVGSVGElement, unknown> =
        svg.selectAll("#email");
    const phoneElement: Selection<BaseType, string | undefined, SVGSVGElement, unknown> =
        svg.selectAll("#phoneNumber");

    if (data.location) {
        if (iconElement.empty()) {
            svg.append("image")
                .attr("id", "locationIco")
                .attr("width", 6.75)
                .attr("height", 9)
                .attr("x", getLocationIconX(data, emailElement, phoneElement))
                .attr("y", data.headline ? 95 : 77)
                .attr("image-rendering", "optimizeSpeed")
                .attr("preserveAspectRatio", "none")
                .attr("href", CV_LOCATION);
        } else {
            iconElement
                .attr("display", null)
                .attr("y", data.headline ? 95 : 77)
                .attr("x", getLocationIconX(data, emailElement, phoneElement));
        }
    } else iconElement.attr("display", "none");
};

const createUpdateLocation = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    const iconElement: Selection<BaseType, string | undefined, SVGSVGElement, unknown> =
        svg.selectAll("#locationIco");
    const locationElement = svg.selectAll("#location");

    if (data.location) {
        if (locationElement.empty()) {
            svg.append("text")
                .attr("id", "location")
                .classed("location", true)
                .attr("fill", "#a1a5ac")
                .attr("font-size", 10)
                .attr("x", getLocationX(data, iconElement))
                .attr("y", () => (data.headline ? 102 : 84.5))
                .attr("display", null)
                .text(data.location ? data.location : "");
        } else {
            locationElement
                .attr("display", null)
                .attr("y", () => (data.headline ? 102 : 84.5))
                .attr("x", getLocationX(data, iconElement))
                .text(data.location ? data.location : "");
        }
    }
};

const create_cv_header = async (
    svg: Selection<SVGSVGElement, unknown, null, undefined>,
    data: CvHeaderInterface,
) => {
    svg.selectAll("rect.background")
        .data([null])
        .enter()
        .append("rect")
        .classed("background", true)
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 595.28)
        .attr("height", 841.89)
        .attr("fill", "#fff");

    await createUpdateHeader(svg, data);
    await createUpdateVerticalSeparator(svg, data);
    await createUpdatePhoto(svg, data);
    await createUpdateFirstName(svg, data);
    await createUpdateLastName(svg, data);
    await createUpdateHeadline(svg, data);
    await createUpdateEmailIcon(svg, data);
    await createUpdateEmail(svg, data);
    await createUpdatePhoneIcon(svg, data);
    await createUpdatePhone(svg, data);
    await createUpdateLocationIcon(svg, data);
    await createUpdateLocation(svg, data);

    return svg;
};

export default create_cv_header;
