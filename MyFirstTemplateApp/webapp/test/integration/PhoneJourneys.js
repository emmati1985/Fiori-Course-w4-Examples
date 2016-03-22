jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"mi first app with template/test/integration/NavigationJourneyPhone",
		"mi first app with template/test/integration/NotFoundJourneyPhone",
		"mi first app with template/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});

