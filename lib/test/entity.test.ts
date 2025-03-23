import EntityBuilder from "../entity";

const cellValue = new EntityBuilder()
  .text("cell Value")
  .text("cell value2")
  .build();

console.assert(
  cellValue.basicValue == { basicValue: "cell Value2" },
  "cellValue.basicValue is not correct",
);
