import fs from "fs";

const csv_to_json = (filePath: string): Record<string, string> => {
    const csvData = fs.readFileSync(filePath, "utf-8");

    const jsonData: Record<string, string> = {};

    csvData.split("\n").forEach((line) => {
        const [key, value] = line.split('",').map((v) => v.trim().replace(/^"|"$/g, ""));

        if (key && value) {
            jsonData[key] = value;
        }
    });

    return jsonData;
};

export default csv_to_json;
