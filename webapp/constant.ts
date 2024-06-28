import ManagedObject from "sap/ui/base/ManagedObject";

/**
 * @namespace com.example.uiexperiment
 */
export default class Constant extends ManagedObject {
    static ApiPath(suffix: string): string {
        return `http://localhost:5000/${suffix}`;
    }
    static postLoginRes:string = JSON.stringify([
        {
            key: "step1",
            rank: 1,
            pageContext: {
                title: "Page Title 1",
                description: "Page Description 1",
                action: {
                    label: "Update",
                    url: "/step1"
                }
            }
        },
        {
            key: "step2",
            rank: 2,
            pageContext: {
                title: "Page Title 2",
                description: "Page Description 2",
                action: {
                    label: "Update",
                    url: "/step2"
                }
            }
        },
        {
            key: "step3",
            rank: 3,
            pageContext: {
                title: "Page Title 3",
                description: "Page Description 3",
                action: {
                    label: "Update",
                    url: "/step3"
                }
            }
        }
    ]);

}