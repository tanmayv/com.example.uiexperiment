import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

/**
 * @namespace com.example.uiexperiment.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");
	}
	onGoToPostLoginButtonPress() {
		this.getRouter().navTo("postlogin")
	}
}
