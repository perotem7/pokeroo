-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('ONGOING', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by_id" TEXT NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "poker_events" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "EventStatus" NOT NULL DEFAULT 'ONGOING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "host_id" TEXT NOT NULL,

    CONSTRAINT "poker_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_in_event" (
    "id" TEXT NOT NULL,
    "buyIns" INTEGER NOT NULL DEFAULT 0,
    "cash_out_amount" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "event_id" TEXT NOT NULL,
    "player_id" TEXT NOT NULL,

    CONSTRAINT "player_in_event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE INDEX "players_created_by_id_idx" ON "players"("created_by_id");

-- CreateIndex
CREATE INDEX "poker_events_host_id_idx" ON "poker_events"("host_id");

-- CreateIndex
CREATE INDEX "player_in_event_event_id_idx" ON "player_in_event"("event_id");

-- CreateIndex
CREATE INDEX "player_in_event_player_id_idx" ON "player_in_event"("player_id");

-- CreateIndex
CREATE UNIQUE INDEX "player_in_event_event_id_player_id_key" ON "player_in_event"("event_id", "player_id");

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "poker_events" ADD CONSTRAINT "poker_events_host_id_fkey" FOREIGN KEY ("host_id") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_in_event" ADD CONSTRAINT "player_in_event_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "poker_events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_in_event" ADD CONSTRAINT "player_in_event_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;
