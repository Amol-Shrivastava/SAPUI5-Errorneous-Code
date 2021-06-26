sap.ui.jsview("amol.view.masterView", {
  getControllerName: function () {
    return "amol.controller.masterController";
  },

  createContent: function (oController) {
    var oBtn = new sap.m.Title({
      text: "This is my First VSCode SAPUI5 Application",
      wrapping: true,
      titleStyle: "H1",
    });

    return oBtn;
  },
});
