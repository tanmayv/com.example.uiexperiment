import Controller from "sap/ui/core/mvc/Controller";
import Constant from "../constant";
import { PostLoginResponse } from "../types";
import Wizard from "sap/m/Wizard";
import WizardStep from "sap/m/WizardStep";
import Text from "sap/m/Text";

/**
 * @namespace com.example.uiexperiment.controller
 */
export default class PostLogin extends Controller {

	onExit(): void {
		console.log("Post Login component OnExit");
	};
	public onInit(): void {
        console.log("Post Login page OnInit");
		this.fetchPostLogin().then(this.renderWizard.bind(this));
	}

	private async fetchPostLogin() {
		const response = await fetch(Constant.ApiPath('echo'), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', // Specify the content type
			},
			body: Constant.postLoginRes, // Convert the data to a JSON string
		});

		return await response.json();
	}

	private renderWizard(wizardData: PostLoginResponse[]) {
		const wizard: Wizard = this.byId("id.postLoginWizard") as Wizard;
		wizard.removeAllSteps();
        console.log("Post login response", wizardData);
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