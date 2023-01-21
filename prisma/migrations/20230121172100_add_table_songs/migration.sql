-- CreateTable
CREATE TABLE "songs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "publico" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);
