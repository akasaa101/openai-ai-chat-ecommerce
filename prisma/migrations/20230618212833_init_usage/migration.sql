-- CreateTable
CREATE TABLE "Usage" (
    "complation_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "model" TEXT NOT NULL,
    "prompt_tokens" INTEGER NOT NULL,
    "completion_tokens" INTEGER NOT NULL,
    "total_tokens" INTEGER NOT NULL,

    CONSTRAINT "Usage_pkey" PRIMARY KEY ("complation_id")
);
