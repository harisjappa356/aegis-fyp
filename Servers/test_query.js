const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('aegisai', 'postgres', 'test', {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres',
  logging: false,
});

async function run() {
  try {
    const [r] = await sequelize.query('SELECT COUNT(*) FROM "GVgeJ9587Q".projects;');
    console.log("PROJECT COUNT:", r[0]);
    const [r2] = await sequelize.query('SELECT COUNT(*) FROM "GVgeJ9587Q".vendors;');
    console.log("VENDOR COUNT:", r2[0]);
    const [r3] = await sequelize.query('SELECT COUNT(*) FROM "GVgeJ9587Q".risks;');
    console.log("RISK COUNT:", r3[0]);
  } catch(e) {
    console.error(e);
  } finally {
    await sequelize.close();
  }
}
run();
