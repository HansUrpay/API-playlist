-- CreateTable
CREATE TABLE "SongsOnPlaylist" (
    "playlist_id" INTEGER NOT NULL,
    "songs_id" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SongsOnPlaylist_playlist_id_fkey" FOREIGN KEY ("playlist_id") REFERENCES "playlists" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SongsOnPlaylist_songs_id_fkey" FOREIGN KEY ("songs_id") REFERENCES "songs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SongsOnPlaylist_playlist_id_key" ON "SongsOnPlaylist"("playlist_id");
