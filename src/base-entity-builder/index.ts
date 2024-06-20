export type baseEntityPropsType =
  | {
      [key: string]: Excel.EntityPropertyType;
    }
  | {
      [key: string]: Excel.CellValue & {
        propertyMetadata?: Excel.CellValuePropertyMetadata;
      };
    };

interface IBaseEntityBuilder<T> {
  build(): Excel.CellValue;
  text(text?: string): T;
  properties(props: baseEntityPropsType): T;
  basicType(): T;
  basicValue(): T;
  provider(): T;
  cellValueProviderAttributes(): T;
}

export type EntityCellType =
  | Excel.EntityCellValue
  | Excel.LinkedEntityCellValue;

export class BaseEntityBuilder
  implements IBaseEntityBuilder<BaseEntityBuilder>
{
  protected value: EntityCellType;

  constructor(value?: EntityCellType) {
    if (value) {
      this.value = value;
    }
  }

  build(): Excel.CellValue {
    return this.value;
  }
  text(text?: string): BaseEntityBuilder {
    this.value.text = text;
    return this
  }
  properties(props: baseEntityPropsType): BaseEntityBuilder {
    throw new Error("Method not implemented.");
  }
  basicType(): BaseEntityBuilder {
    throw new Error("Method not implemented.");
  }
  basicValue(): BaseEntityBuilder {
    throw new Error("Method not implemented.");
  }
  provider(): BaseEntityBuilder {
    throw new Error("Method not implemented.");
  }
  cellValueProviderAttributes(): BaseEntityBuilder {
    throw new Error("Method not implemented.");
  }
}
