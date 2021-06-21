sap.ui.define(
  ["sap/ui/core/ComponentContainer"],
  function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
      name: "amol",
      settings: {
        id: "amol",
      },
      async: true,
    }).placeAt("content");
  }
);
