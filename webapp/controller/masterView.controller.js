onInit: function(){
  let model1 = new sap.ui.model.json.JSONModel();
  model1.loadData("amol/model/statesInfo.json")
  sap.ui.getCore().setModel(model1)
}