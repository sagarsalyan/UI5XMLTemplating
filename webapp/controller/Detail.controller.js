sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/mvc/View",
], function (Controller, View) {
	"use strict";

	return Controller.extend("app.XMLTemplate.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf app.XMLTemplate.view.Detail
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().attachRoutePatternMatched(this.onRouteMatched.bind(this));
		},
		onRouteMatched: function (oEvent) {
			debugger;

			var oTemplate = oEvent.getParameter("name"),
				oPage = this.getView().byId("detailPage"),
				oModel = this.getView().getModel(),
				oMetaModel = oModel.getMetaModel();

			// temp Model
			var jsonModel = new sap.ui.model.json.JSONModel({
				Suppliers: [{
					name: "Sagar"
				}, {
					name: "Sunil"
				}, {
					name: "Shiva"
				},
				{
					name: "Varun"
				}]
			});
			// temp Model

			// Case 1
			var oCreateContent = View.create({
				preprocessors: {
					xml: {
						models: {
							meta: jsonModel
						}
					}
				},
				type: sap.ui.core.mvc.ViewType.XML,
				viewName: "app.XMLTemplate.view." + oTemplate
					// controller: oController
			});
			oCreateContent.then(function (oView) {
				oPage.removeAllContent();
				oPage.addContent(oView);
			}.bind(this));

			// Case2
			// var oContent = sap.ui.view({
			// 	preprocessors: {
			// 		xml: {
			// 			models: {
			// 				meta: jsonModel
			// 			}
			// 		}
			// 	},
			// 	type: sap.ui.core.mvc.ViewType.XML,
			// 	viewName: "app.XMLTemplate.view." + oTemplate
			// });
			// oPage.removeAllContent();
			// oPage.addContent(oContent);

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf app.XMLTemplate.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf app.XMLTemplate.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf app.XMLTemplate.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});