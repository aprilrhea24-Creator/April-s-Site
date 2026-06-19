CREATE TYPE "ProjectStatus" AS ENUM ('DISCOVERY', 'IN_PROGRESS', 'CLIENT_REVIEW', 'SIGNED_OFF', 'COMPLETED');
CREATE TYPE "MessageAuthor" AS ENUM ('ADMIN', 'CLIENT', 'SYSTEM');

CREATE TABLE "ClientProject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "stagingUrl" TEXT,
    "status" "ProjectStatus" NOT NULL DEFAULT 'DISCOVERY',
    "progress" INTEGER NOT NULL DEFAULT 0,
    "clientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientProject_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ProjectMessage" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "author" "MessageAuthor" NOT NULL,
    "projectId" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectMessage_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ProjectSignOff" (
    "id" TEXT NOT NULL,
    "legalName" TEXT NOT NULL,
    "signatureReceipt" TEXT NOT NULL,
    "testingConfirmed" BOOLEAN NOT NULL,
    "ownershipClause" TEXT NOT NULL,
    "signedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "ProjectSignOff_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "ClientProject_clientId_status_idx" ON "ClientProject"("clientId", "status");
CREATE INDEX "ProjectMessage_projectId_createdAt_idx" ON "ProjectMessage"("projectId", "createdAt");
CREATE UNIQUE INDEX "ProjectSignOff_signatureReceipt_key" ON "ProjectSignOff"("signatureReceipt");
CREATE UNIQUE INDEX "ProjectSignOff_projectId_key" ON "ProjectSignOff"("projectId");
CREATE INDEX "ProjectSignOff_clientId_signedAt_idx" ON "ProjectSignOff"("clientId", "signedAt");

ALTER TABLE "ClientProject" ADD CONSTRAINT "ClientProject_clientId_fkey"
FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ProjectMessage" ADD CONSTRAINT "ProjectMessage_projectId_fkey"
FOREIGN KEY ("projectId") REFERENCES "ClientProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ProjectMessage" ADD CONSTRAINT "ProjectMessage_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "ProjectSignOff" ADD CONSTRAINT "ProjectSignOff_projectId_fkey"
FOREIGN KEY ("projectId") REFERENCES "ClientProject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ProjectSignOff" ADD CONSTRAINT "ProjectSignOff_clientId_fkey"
FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
