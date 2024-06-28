import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

/**
 * @namespace com.example.uiexperiment.controller
 */
export default class Home extends BaseController {
	onInit(): void {
		console.log("Home component OnInit");
	};

	onExit(): void {
		console.log("Home component OnExit");
	};


}
