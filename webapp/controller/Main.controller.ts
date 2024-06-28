import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import Wizard from "sap/m/Wizard";
import WizardStep from "sap/m/WizardStep";
import Text from "sap/m/Text";

/**
 * @namespace com.example.uiexperiment.controller
 */

type PostLoginResponse = {
	key: string;
	rank: number;
	pageContext: {
		title: string;
		description: string;
		action: { label: string; url: string }
	};
};
/**
 * @namespace com.example.uiexperiment.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");
	}

/**
 * @class
 * @ignore
 **/
	public onInit(): void {
		const response: PostLoginResponse[] = [
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
		];

		this.renderWizard(response);
	}

	private renderWizard(wizardData: PostLoginResponse[]) {
		const wizard: Wizard = this.byId("postLoginWizard") as Wizard;
		wizard.removeAllSteps();
		for (const stepdata of wizardData) {
			const wizardStep = new WizardStep(stepdata.key, {
				title: stepdata.pageContext.title,
				validated: true, /* This needs to be true to show the next step button */
				content: [new Text({ text: stepdata.pageContext.description })],
			});
			wizard.addStep(wizardStep);
		}

	}
}
