jQuery.sap.declare("Application");
jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("Application", {

	init : function() {
		// set global models
		var model = new sap.ui.model.json.JSONModel();
		sap.ui.getCore().setModel(model, "model");
	},

	main : function() {
		// create app view and put to html root element
		var root = this.getRoot();
		sap.ui.jsview("app", "firstsapui5project.App").placeAt(root);
	}
});