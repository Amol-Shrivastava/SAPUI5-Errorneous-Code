let list = new sap.m.List("list", {
  items: {
    path: "/statesDetails",
    template: new sap.m.ObjectListItem({
      State: "{state}",
      Capital: "{capital}",
      Population: "{population}",
      Official_Languages: "{lang}",
    }),
  },
});
