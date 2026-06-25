/*
  Warnings:

  - You are about to drop the column `stage` on the `lead` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `salesgroup` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `permissiontemplate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lead` DROP COLUMN `stage`,
    ADD COLUMN `assignedToId` VARCHAR(191) NULL,
    ADD COLUMN `city` VARCHAR(191) NULL,
    ADD COLUMN `createdById` VARCHAR(191) NULL,
    ADD COLUMN `district` VARCHAR(191) NULL,
    ADD COLUMN `listId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `salesgroup` DROP COLUMN `description`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `phone`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `salesGroupId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `permissiontemplate`;

-- CreateTable
CREATE TABLE `LeadList` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdById` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_salesGroupId_fkey` FOREIGN KEY (`salesGroupId`) REFERENCES `SalesGroup`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lead` ADD CONSTRAINT `Lead_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lead` ADD CONSTRAINT `Lead_assignedToId_fkey` FOREIGN KEY (`assignedToId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lead` ADD CONSTRAINT `Lead_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `LeadList`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
