-- AlterTable
ALTER TABLE "Utilisateur" ADD COLUMN     "confirmationCode" TEXT,
ADD COLUMN     "isConfirmed" BOOLEAN NOT NULL DEFAULT false;
