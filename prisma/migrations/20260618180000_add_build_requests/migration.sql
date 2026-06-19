CREATE TABLE "BuildRequest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "features" TEXT[] NOT NULL,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BuildRequest_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "BuildRequest_email_idx" ON "BuildRequest"("email");
CREATE INDEX "BuildRequest_status_submittedAt_idx" ON "BuildRequest"("status", "submittedAt");
