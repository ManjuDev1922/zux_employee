sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("zuxemployee.zuxemployee.controller.View1", {
            OnNext: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedempId = oEvent.getSource().getBindingContext().getProperty("EmployeeID");
                oRouter.navTo("RouteView2", {
                    EmployeeID: selectedempId
                });
            }
        });
    }
)            