'use strict';

/**
 * Migration: Add onboarding_status column to organizations table
 *
 * This column tracks whether the organization creator has seen the setup modal.
 * - 'pending': New org, modal should be shown to creator on first login
 * - 'completed': Modal has been seen/dismissed, don't show again
 *
 * Existing organizations are set to 'completed' to prevent modal from showing
 * after server upgrade (grandfathered).
 */

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      // Step 1: Add the column with a default of 'completed' so all existing rows get 'completed'
      await queryInterface.sequelize.query(
        `ALTER TABLE "organizations" ADD COLUMN "onboarding_status" VARCHAR(20) NOT NULL DEFAULT 'completed';`,
        { transaction }
      );

      // Step 2: Alter the default value to 'pending' for new rows going forward
      await queryInterface.sequelize.query(
        `ALTER TABLE "organizations" ALTER COLUMN "onboarding_status" SET DEFAULT 'pending';`,
        { transaction }
      );

      await transaction.commit();
      console.log('Successfully added onboarding_status column to organizations table');
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.sequelize.query(
        `ALTER TABLE "organizations" DROP COLUMN "onboarding_status";`,
        { transaction }
      );

      await transaction.commit();
      console.log('Successfully removed onboarding_status column from organizations table');
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};

