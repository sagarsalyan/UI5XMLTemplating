sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("app.XMLTemplate.controller.XMLTemplate3", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf app.XMLTemplate.view.XMLTemplate3
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().attachRoutePatternMatched(this.onRouteMatched.bind(this));
		},
		onRouteMatched: function (oEvent) {
			debugger
			var jsonModel = new sap.ui.model.json.JSONModel({
				Suppliers: [{
					name: "Sagar"
				}, {
					name: "Sunil"
				}, {
					name: "Shiva"
				}]
			});

			this.getView().setModel(jsonModel, "meta");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf app.XMLTemplate.view.XMLTemplate3
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf app.XMLTemplate.view.XMLTemplate3
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf app.XMLTemplate.view.XMLTemplate3
		 */
		//	onExit: function() {
		//
		//	}

	});

});