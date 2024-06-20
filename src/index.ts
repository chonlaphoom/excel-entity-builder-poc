import EntityBuilder from "./entity";

function main() {
  const cellValue = new EntityBuilder()
    .text("cell Value")
    .text("cell value2")
    .build();

  console.log(cellValue);
}

main();
