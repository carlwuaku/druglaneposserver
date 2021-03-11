const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const DrugInfo = sequelize.define("drug_info", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    name: DataTypes.STRING,
    pregnancy: DataTypes.STRING,
    pharmacodynamics: DataTypes.STRING,
    indications_and_usage: DataTypes.STRING,
    contraindications: DataTypes.STRING,
    drug_interactions_table: DataTypes.STRING,
    warnings_and_cautions: DataTypes.STRING,
    dosage_and_administration: DataTypes.STRING,
    adverse_reactions: DataTypes.STRING,
    information_for_patients: DataTypes.STRING,
    clinical_pharmacology: DataTypes.STRING,
    drug_abuse_and_dependence: DataTypes.STRING,
    teratogenic_effects: DataTypes.STRING,
    geriatric_use: DataTypes.STRING,
    overdosage: DataTypes.STRING,
    created_on: DataTypes.DATE
},{
  tableName: 'drug_info',
  timestamps: false
});
module.exports = DrugInfo;