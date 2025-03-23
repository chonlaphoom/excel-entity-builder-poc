import { BaseEntityBuilder, EntityCellType } from "../base-entity-builder";

class EntityBuilder extends BaseEntityBuilder {
  constructor(value?: EntityCellType) {
    super(value);
    this.value.type = Excel.CellValueType.entity;
  }
}

export { EntityBuilder as default };
