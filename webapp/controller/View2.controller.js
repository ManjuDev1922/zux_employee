sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("zuxemployee.zuxemployee.controller.View2", {
        onInit: function () {

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("RouteView2").attachMatched(this._onRouteMatched, this);
        },
            _onRouteMatched: function (oEvent) {
            var oArgs, oView;
            oArgs = oEvent.getParameter("arguments");
            oView = this.getView();
            oView.bindElement({
                path: "/Employees(" + oArgs.EmployeeID + ")",
                events: {
                    dataRequested: function () {
                        oView.setBusy(true);
                    },
                    dataReceived: function () {
                        oView.setBusy(false);
                    }
                }
            })
        },
       
        OnBack: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView1");
  
        },


    });
});
