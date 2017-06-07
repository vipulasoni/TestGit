sap.ui.jsview("Firstvs_First.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View1
	 */
	getControllerName: function() {
		return "Firstvs_First.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View1
	 */
	createContent: function(oController) {
		
		return new sap.m.Page({title: "My first Page",
		content :[
		          new sap.m.Button({text: "Accept"  }),
		           new sap.m.Text({text: "Hey"})
		          ] 	
		}); 
		
				//return new sap.m.BusyIndicator({text: "Loading..."});
			}

});