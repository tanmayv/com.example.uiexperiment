import Controller from "sap/ui/core/mvc/Controller";
import Constant from "../constant";
import { PostLoginResponse } from "../types";
import Wizard from "sap/m/Wizard";
import WizardStep from "sap/m/WizardStep";
import Text from "sap/m/Text";
import JSONModel from "sap/ui/model/json/JSONModel";

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
        const data = {
            items: [
                { title: "Item 1", description: "Description 1" },
                { title: "Item 2", description: "Description 2" },
                { title: "Item 3", description: "Description 3" }
            ]
        };

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
        const oModel = new JSONModel(wizardData);
        this.getView().setModel(oModel);
		// const wizard: Wizard = this.byId("id.postLoginWizard") as Wizard;
		// wizard.removeAllSteps();
        // console.log("Post login response", wizardData);
		// for (const stepdata of wizardData) {
		// 	const wizardStep = new WizardStep(stepdata.key, {
		// 		title: stepdata.pageContext.title,
		// 		validated: true, /* This needs to be true to show the next step button */
		// 		content: [new Text({ text: stepdata.pageContext.description })],
		// 	});
		// 	wizard.addStep(wizardStep);
		// }

	}
}