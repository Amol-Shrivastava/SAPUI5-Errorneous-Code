sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";

  return UIComponent.extend("amol/Component", {
    metadata: {
      rootView: {
        viewName: "amol.view.firstView",
        type: "JS",
        async: true,
      },
    },
    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
    },
  });
});
