import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import PostLoginService from "../service/postlogin.service";

/**
 * @namespace com.example.uiexperiment.controller
 */
export default class Main extends BaseController {
	onInit(): void {
		this.checkPostLoginState();
	};

	private async checkPostLoginState() {
		const state = await PostLoginService.GetInstance().getPostLoginState();
		if (state?.currentPage) {
			this.getRouter().navTo("postlogin");
		} else {
			this.getRouter().navTo("home");
		}

	}
}
