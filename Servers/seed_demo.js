const bcrypt = require('bcrypt');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aegisai', 'postgres', 'test', {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres',
  logging: false,
});

async function seed() {
  try {
    await sequelize.authenticate();
    
    // Create Default Org
    const [orgs] = await sequelize.query("INSERT INTO organizations (name, created_at, updated_at) VALUES ('Aegis AI Demo', NOW(), NOW()) RETURNING id;");
    const orgId = orgs[0].id;
    
    // Hash password
    const hash = await bcrypt.hash('admin123', 10);
    
    // Create Admin User
    await sequelize.query(`
      INSERT INTO users (name, surname, email, password_hash, role_id, organization_id, created_at, last_login, is_demo) 
      VALUES ('Demo', 'Admin', 'demo@aegis.ai', '${hash}', 1, ${orgId}, NOW(), NOW(), true);
    `);
    
    console.log('✅ Successfully seeded demo account: demo@aegis.ai / admin123');
  } catch (e) {
    console.error('❌ Failed to seed:', e);
  } finally {
    await sequelize.close();
  }
}

seed();
