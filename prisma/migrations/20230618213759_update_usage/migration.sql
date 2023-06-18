/*
  Warnings:

  - The primary key for the `Usage` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Usage" DROP CONSTRAINT "Usage_pkey",
ALTER COLUMN "complation_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Usage_pkey" PRIMARY KEY ("complation_id");
