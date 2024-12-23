import * as d3 from "d3";
import { Selection, BaseType } from "d3";
import { CV_EMAIL, CV_PHONE, CV_LOCATION } from "@/utils/cv_factory/cv_icons.ts";

interface DataInterface {
    photo?: string;
    firstName?: string;
    lastName?: string;
    headline?: string;
    email?: string;
    phoneNumber?: string;
    location?: string;
    linkedin?: string;
}

const create_page = () => {
    const pages = new Map<
        HTMLElement,
        Selection<SVGSVGElement, unknown, null, undefined>
    >();

    return (
        element: HTMLElement,
        data: DataInterface,
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

        const headerElement: Selection<
            BaseType,
            string | undefined,
            SVGSVGElement,
            unknown
        > = svg.selectAll("rect.header").data([data.photo]);

        svg.selectAll("rect.header")
            .data([null])
            .enter()
            .append("rect")
            .classed("header", true)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 595.28)
            .attr("fill", "#303846");

        headerElement.datum(data.photo).attr("height", () => {
            if (data.photo) {
                return 125;
            } else if (
                (data.headline && data.email) ||
                (data.headline && data.location) ||
                (data.headline && data.phoneNumber)
            ) {
                return 125;
            } else if (
                (!data.headline && data.email) ||
                (!data.headline && data.location) ||
                (!data.headline && data.phoneNumber)
            ) {
                return 100;
            }
            return 100;
        });

        svg.append("line")
            .attr("id", "verticalSeparator")
            .classed("verticalSeparator", true)
            .attr("x1", 395.28)
            .attr("y1", 150)
            .attr("x2", 395.28)
            .attr("y2", 816.89)
            .attr("stroke-width", "1")
            .attr("stroke", "#ececec");

        const photoElement: Selection<
            BaseType,
            string | undefined,
            SVGSVGElement,
            unknown
        > = svg.selectAll("image.photo").data([data.photo]);

        photoElement
            .enter()
            .append("image")
            .classed("photo", true)
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 125)
            .attr("height", 125);

        photoElement
            .datum(data.photo)
            .attr("image-rendering", "optimizeSpeed")
            .attr("preserveAspectRatio", "none")
            .attr("xlink:href", (d: string | undefined): string => d || "")
            .attr("display", (): string | null => (data.photo ? null : "none"));

        const firstNameElement: Selection<
            BaseType,
            string | undefined,
            SVGSVGElement,
            unknown
        > = svg.selectAll("text.firstName").data([data.firstName]);

        firstNameElement
            .enter()
            .append("text")
            .attr("id", "firstName")
            .classed("firstName", true)
            .attr("x", () => {
                return data.photo ? 150 : 25;
            })
            .attr("font-size", 25)
            .attr("y", 55)
            .attr("fill", "#fff")
            .text((d: string | undefined): string => {
                return d && data.firstName ? d : "Resume";
            });

        firstNameElement
            .datum(data.firstName)
            .attr("x", () => {
                return data.photo ? 150 : 25;
            })
            .text((d: string | undefined): string => {
                if (!data.lastName) {
                    return d && data.firstName ? d : "Resume";
                }
                return data.firstName ? data.firstName : "";
            });

        const lastNameElement: Selection<
            BaseType,
            string | undefined,
            SVGSVGElement,
            unknown
        > = svg.selectAll("text.lastName").data([data.lastName]);

        svg.selectAll("text.lastName")
            .data([data.lastName])
            .enter()
            .append("text")
            .attr("id", "lastName")
            .classed("lastName", true)
            .attr("x", 10)
            .attr("font-size", 25)
            .attr("y", 55)
            .attr("fill", "#fff")
            .text((): string => (data.lastName ? data.lastName : ""));

        lastNameElement
            .datum(data.lastName)
            .attr("x", (): number => {
                const firstNameEl: SVGSVGElement = svg
                    .select("text.firstName")
                    .node() as SVGSVGElement;

                if (firstNameEl && data.firstName) {
                    return firstNameEl.getBBox().width + firstNameEl.getBBox().x + 10;
                }

                return data.photo ? 150 : 25;
            })
            .text((d: string | undefined): string => {
                return d && data.lastName ? data.lastName : "";
            });

        const headlineElement: Selection<
            BaseType,
            string | undefined,
            SVGSVGElement,
            unknown
        > = svg.selectAll("text.headline").data([data.headline]);

        svg.selectAll("text.headline")
            .data([data.headline])
            .enter()
            .append("text")
            .attr("id", "headline")
            .classed("headline", true)
            .attr("x", 10)
            .attr("font-size", 13)
            .attr("y", 77)
            .attr("fill", "#a1a5ac");

        headlineElement
            .datum(data.headline)
            .attr("x", () => {
                return data.photo ? 150 : 25;
            })
            .text((d: string | undefined): string => {
                return d && data.headline ? d : "";
            });

        const emailIconElement: Selection<
            BaseType,
            string | undefined,
            SVGSVGElement,
            unknown
        > = svg.selectAll("image.emailIcon").data([data.email]);

        emailIconElement
            .enter()
            .append("image")
            .classed("emailIcon", true)
            .attr("width", 9)
            .attr("height", 9)
            .attr("image-rendering", "optimizeSpeed")
            .attr("preserveAspectRatio", "none");

        emailIconElement
            .datum([data.email])
            .attr("x", () => {
                return data.photo ? 150 : 25;
            })
            .attr("y", () => {
                if (data.headline) {
                    return 95;
                }
                return 77;
            })
            .attr("xlink:href", (): string => {
                return data.email ? CV_EMAIL : "";
            })
            .attr("display", () => (data.email ? null : "none"));

        const emailElement: Selection<
            BaseType,
            string | undefined,
            SVGSVGElement,
            unknown
        > = svg.selectAll("text.email").data([data.email]);

        svg.selectAll("text.email")
            .data([data.email])
            .enter()
            .append("text")
            .attr("id", "email")
            .classed("email", true)
            .attr("x", 10)
            .attr("font-size", 10)
            .attr("y", 77)
            .attr("fill", "#a1a5ac");

        emailElement
            .datum(data.email)
            .attr("x", () => {
                return data.photo ? 150 + 15 : 25 + 15;
            })
            .attr("y", () => {
                if (data.headline) {
                    return 102;
                }
                return 84.5;
            })
            .text((d: string | undefined): string => {
                return d && data.email ? d : "";
            });

        const phoneIconElement: Selection<
            BaseType,
            string | undefined,
            SVGSVGElement,
            unknown
        > = svg.selectAll("image.phoneNumber").data([data.phoneNumber]);

        phoneIconElement
            .enter()
            .append("image")
            .classed("phoneNumber", true)
            .attr("width", 9)
            .attr("height", 9)
            .attr("image-rendering", "optimizeSpeed")
            .attr("preserveAspectRatio", "none");

        phoneIconElement
            .datum([data.phoneNumber])
            .attr("x", () => {
                const emailElement: SVGSVGElement = svg
                    .select("text.email")
                    .node() as SVGSVGElement;

                if (emailElement && data.email) {
                    return emailElement.getBBox().width + emailElement.getBBox().x + 15;
                }

                return data.photo ? 150 : 25;
            })
            .attr("y", () => {
                if (data.headline) {
                    return 95;
                }
                return 77;
            })
            .attr("xlink:href", (): string => {
                return data.phoneNumber ? CV_PHONE : "";
            })
            .attr("display", () => (data.phoneNumber ? null : "none"));

        const phoneElement: Selection<
            BaseType,
            string | undefined,
            SVGSVGElement,
            unknown
        > = svg.selectAll("text.phoneNumber").data([data.phoneNumber]);

        svg.selectAll("text.phoneNumber")
            .data([data.email])
            .enter()
            .append("text")
            .attr("id", "phoneNumber")
            .classed("phoneNumber", true)
            .attr("x", 10)
            .attr("font-size", 10)
            .attr("y", 77)
            .attr("fill", "#a1a5ac");

        phoneElement
            .datum(data.phoneNumber)
            .attr("x", () => {
                const emailElement: SVGSVGElement = svg
                    .select("text.email")
                    .node() as SVGSVGElement;

                if (emailElement && data.email) {
                    return emailElement.getBBox().width + emailElement.getBBox().x + 30;
                }
                return data.photo ? 150 + 15 : 25 + 15;
            })
            .attr("y", () => {
                if (data.headline) {
                    return 102;
                }
                return 84.5;
            })
            .text((d: string | undefined): string => {
                return d && data.phoneNumber ? d : "";
            });

        const locationIconElement: Selection<
            BaseType,
            string | undefined,
            SVGSVGElement,
            unknown
        > = svg.selectAll("image.location").data([data.location]);

        locationIconElement
            .enter()
            .append("image")
            .classed("location", true)
            .attr("width", 6.75)
            .attr("height", 9)
            .attr("image-rendering", "optimizeSpeed")
            .attr("preserveAspectRatio", "none");

        locationIconElement
            .datum([data.location])
            .attr("x", () => {
                const emailElement: SVGSVGElement = svg
                    .select("text.email")
                    .node() as SVGSVGElement;

                const phoneElement: SVGSVGElement = svg
                    .select("text.phoneNumber")
                    .node() as SVGSVGElement;

                if (emailElement && data.email && !data.phoneNumber) {
                    return emailElement.getBBox().width + emailElement.getBBox().x + 15;
                }

                if (emailElement && data.email && phoneElement && data.phoneNumber) {
                    return phoneElement.getBBox().width + phoneElement.getBBox().x + 15;
                }

                return data.photo ? 150 : 25;
            })
            .attr("y", () => {
                if (data.headline) {
                    return 95;
                }
                return 77;
            })
            .attr("xlink:href", (): string => {
                return data.location ? CV_LOCATION : "";
            })
            .attr("display", () => (data.location ? null : "none"));

        const locationElement: Selection<
            BaseType,
            string | undefined,
            SVGSVGElement,
            unknown
        > = svg.selectAll("text.location").data([data.phoneNumber]);

        svg.selectAll("text.location")
            .data([data.email])
            .enter()
            .append("text")
            .attr("id", "location")
            .classed("location", true)
            .attr("x", 10)
            .attr("font-size", 10)
            .attr("y", 77)
            .attr("fill", "#a1a5ac");

        locationElement
            .datum(data.location)
            .attr("x", () => {
                const emailElement: SVGSVGElement = svg
                    .select("text.email")
                    .node() as SVGSVGElement;

                const phoneElement: SVGSVGElement = svg
                    .select("text.phoneNumber")
                    .node() as SVGSVGElement;

                if (emailElement && data.email && !data.phoneNumber) {
                    return emailElement.getBBox().width + emailElement.getBBox().x + 27;
                }

                if (emailElement && data.email && phoneElement && data.phoneNumber) {
                    return phoneElement.getBBox().width + phoneElement.getBBox().x + 27;
                }

                return data.photo ? 150 + 12 : 25 + 12;
            })
            .attr("y", () => {
                if (data.headline) {
                    return 102;
                }
                return 84.5;
            })
            .text((d: string | undefined): string => {
                return d && data.location ? d : "";
            });

        return svg;
    };
};

const svg_pages: (
    element: HTMLElement,
    data: DataInterface,
) => Selection<SVGSVGElement, unknown, null, undefined> = create_page();

export default svg_pages;
