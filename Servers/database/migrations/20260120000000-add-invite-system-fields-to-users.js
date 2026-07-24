'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add is_super_admin column
    await queryInterface.sequelize.query(`
      ALTER TABLE public.users ADD COLUMN IF NOT EXISTS is_super_admin BOOLEAN DEFAULT FALSE;
    `);

    // Add invitation_type column
    await queryInterface.sequelize.query(`
      ALTER TABLE public.users ADD COLUMN IF NOT EXISTS invitation_type VARCHAR(50) DEFAULT NULL;
    `);

    // Add access_expires_at column
    await queryInterface.sequelize.query(`
      ALTER TABLE public.users ADD COLUMN IF NOT EXISTS access_expires_at TIMESTAMP WITH TIME ZONE DEFAULT NULL;
    `);

    // Add invited_by_user_id column
    await queryInterface.sequelize.query(`
      ALTER TABLE public.users ADD COLUMN IF NOT EXISTS invited_by_user_id INTEGER REFERENCES public.users(id) ON DELETE SET NULL DEFAULT NULL;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE public.users DROP COLUMN IF EXISTS is_super_admin;
      ALTER TABLE public.users DROP COLUMN IF EXISTS invitation_type;
      ALTER TABLE public.users DROP COLUMN IF EXISTS access_expires_at;
      ALTER TABLE public.users DROP COLUMN IF EXISTS invited_by_user_id;
    `);
  }
};
