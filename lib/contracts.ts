export const projectSignOffAgreementTitle = "PROJECT SIGN-OFF & OWNERSHIP TRANSFER AGREEMENT";

export const projectSignOffTerms = [
  {
    title: "PHASE VERIFICATION",
    text: "The Client confirms they have thoroughly reviewed, tested, and approved the software application via the provided staging environment."
  },
  {
    title: "DELIVERY SATISFACTION",
    text: "The Client acknowledges that all deliverables outlined in the initial project scope have been completed to total satisfaction."
  },
  {
    title: "WAIVER OF DISPUTE",
    text: "The Client explicitly waives any and all rights to initiate future payment disputes, refunds, or bank chargebacks regarding any milestone payments collected during this build."
  },
  {
    title: "OWNERSHIP RELEASE",
    text: "Upon verification of final invoice clearance, Stratum Studio will permanently release all production repository assets, server configurations, and deployment permissions to the Client."
  }
] as const;

export const ownershipReleaseClause = [
  projectSignOffAgreementTitle,
  "By executing this digital signature, the Client explicitly affirms the following binding terms:",
  ...projectSignOffTerms.map((term, index) => `${index + 1}. ${term.title}: ${term.text}`)
].join("\n");
