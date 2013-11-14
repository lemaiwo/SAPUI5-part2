sap.ui.jsview("firstsapui5project.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf firstsapui5project.App
	*/ 
	getControllerName : function() {
		return "firstsapui5project.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf firstsapui5project.App
	*/ 
	createContent : function(oController) {
		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app control
		this.shell = new sap.m.Shell("Shell", {
			title : "My First SAPUI5 Project"
		});
		this.app = new sap.m.App("App");
		
		// add only the first page. Second page is lazy loaded
		this.app.addPage(sap.ui.htmlview("FirstView", "firstsapui5project.FirstView"));
		this.app.addPage(sap.ui.htmlview("SecondView", "firstsapui5project.SecondView"));
		
		this.shell.setApp(this.app);
		
		// done
		return this.shell;
	}

});
