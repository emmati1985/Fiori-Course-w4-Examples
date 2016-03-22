jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderSet in the list
// * All 3 SalesOrderSet have at least one ToLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"mi first app with template/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"mi first app with template/test/integration/pages/App",
	"mi first app with template/test/integration/pages/Browser",
	"mi first app with template/test/integration/pages/Master",
	"mi first app with template/test/integration/pages/Detail",
	"mi first app with template/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "mi first app with template.view."
	});

	sap.ui.require([
		"mi first app with template/test/integration/MasterJourney",
		"mi first app with template/test/integration/NavigationJourney",
		"mi first app with template/test/integration/NotFoundJourney",
		"mi first app with template/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});