ALTER TABLE "BuildRequest" ADD COLUMN "userId" TEXT;

CREATE INDEX "BuildRequest_userId_submittedAt_idx" ON "BuildRequest"("userId", "submittedAt");

ALTER TABLE "BuildRequest"
ADD CONSTRAINT "BuildRequest_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id")
ON DELETE SET NULL ON UPDATE CASCADE;
