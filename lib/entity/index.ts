import { BaseEntityBuilder, EntityCellType } from "../base-entity-builder";

class EntityBuilder extends BaseEntityBuilder {
  constructor(value?: EntityCellType) {
    console.log('call construct')
    super(value);
    this.value.type = Excel.CellValueType.entity;
  }
}

export { EntityBuilder as default };
