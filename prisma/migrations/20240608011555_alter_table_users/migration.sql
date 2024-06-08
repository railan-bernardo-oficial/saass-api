/*
  Warnings:

  - Made the column `user_email` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_password` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "user_email" SET NOT NULL,
ALTER COLUMN "user_password" SET NOT NULL;
