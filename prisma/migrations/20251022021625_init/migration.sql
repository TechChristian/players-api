-- CreateTable
CREATE TABLE `Player` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `positon` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `club_id` INTEGER NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Club` (
    `club_id` INTEGER NOT NULL AUTO_INCREMENT,
    `club_name` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Club_club_name_key`(`club_name`),
    PRIMARY KEY (`club_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Player` ADD CONSTRAINT `Player_club_id_fkey` FOREIGN KEY (`club_id`) REFERENCES `Club`(`club_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
