sap.ui.define(
  ["sap/ui/mvc/View", "sap/m/Button", "sap/m/Text", "sap/m/Page"],
  function (View, Button, Text, Page) {
    return View.extend("amol/view/firstView", {
      getControllerName: function () {
        return "amol/controller/firstView";
      },
      createContent: function () {
        <Page>
          <Button text="Say Hello" />
          <Text text="Hello World" />
        </Page>;
      },
    });
  }
);
