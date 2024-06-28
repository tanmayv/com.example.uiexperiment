import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import Wizard from "sap/m/Wizard";
import WizardStep from "sap/m/WizardStep";
import Text from "sap/m/Text";
import Constant from "../constant";

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
		this.fetchPostLogin().then(this.renderWizard.bind(this));
	}

	private async fetchPostLogin() {
		console.log("Calling api");
		const response = await fetch(Constant.ApiPath('echo'), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', // Specify the content type
			},
			body: Constant.postLoginRes, // Convert the data to a JSON string
		});
		console.log("Got response");

		return await response.json();
	}
	private renderWizard(wizardData: PostLoginResponse[]) {
		const wizard: Wizard = this.byId("id.postLoginWizard") as Wizard;
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
