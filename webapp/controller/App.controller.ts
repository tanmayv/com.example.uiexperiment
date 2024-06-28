import UIComponent from "sap/ui/core/UIComponent";
import PostLoginService from "../service/postlogin.service";
import BaseController from "./BaseController";

/**
 * @namespace com.example.uiexperiment.controller
 */
export default class App extends BaseController {
	public onInit(): void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		this.checkPostLoginState();
	}

	private async checkPostLoginState() {
		const state = await PostLoginService.GetInstance().getPostLoginState();
		if (state?.currentPage) {
			this.getRouter().navTo("postlogin");
		} else {
			this.getRouter().navTo("home");
		}

	}
}
