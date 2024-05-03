/*
  Warnings:

  - You are about to drop the column `idCategories` on the `Depenses` table. All the data in the column will be lost.
  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Depenses" DROP CONSTRAINT "Depenses_idCategories_fkey";

-- AlterTable
ALTER TABLE "Depenses" DROP COLUMN "idCategories";

-- DropTable
DROP TABLE "Categories";
