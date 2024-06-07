-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('CONFIRM', 'VERIFIED', 'BLOCKED', 'DELETED');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "user_photo" TEXT,
    "user_cover" TEXT,
    "user_name" TEXT NOT NULL,
    "user_username" TEXT,
    "user_about" TEXT,
    "user_location" TEXT,
    "user_email" TEXT,
    "user_password" TEXT,
    "user_token" TEXT,
    "user_phone" TEXT,
    "user_status" "UserStatus" NOT NULL DEFAULT 'CONFIRM',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
