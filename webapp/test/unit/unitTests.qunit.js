/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zux_employee/zux_employee/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
