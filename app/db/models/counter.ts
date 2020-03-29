import { Model, DataTypes, Sequelize } from 'sequelize';

export class Counter extends Model<Counter> {
  public count = 0;

  public static initModel(sequelize: InstanceType<typeof Sequelize>) {
    this.init(
      {
        count: {
          type: DataTypes.NUMBER(),
          allowNull: false
        }
      },
      {
        tableName: 'Counter',
        sequelize: sequelize
      }
    );
  }
}
