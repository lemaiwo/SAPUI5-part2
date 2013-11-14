sap.ui.controller("firstsapui5project.SecondView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf firstsapui5project.SecondView
*/
	onInit: function() {
		this.getView().addEventDelegate({
			// not added the controller as delegate to avoid controller functions with similar names as the events
			onBeforeShow : jQuery.proxy(function(evt) {
				this.onBeforeShow(evt);
			}, this)
		});
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf firstsapui5project.SecondView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf firstsapui5project.SecondView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf firstsapui5project.SecondView
*/
//	onExit: function() {
//
//	}
	onBeforeShow : function(evt) {
		if (evt) {
			var secondViewModel = new sap.ui.model.json.JSONModel();
			secondViewModel.setData(evt.data);
			this.getView().setModel(secondViewModel);
		} 
	}, 
	back: function(){
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back");
	}

});