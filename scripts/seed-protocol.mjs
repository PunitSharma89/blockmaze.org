import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "3qbrvzvt",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

function block(text) {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2),
    style: "normal",
    children: [{ _type: "span", _key: Math.random().toString(36).slice(2), text, marks: [] }],
    markDefs: [],
  };
}

function h3(text) {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2),
    style: "h3",
    children: [{ _type: "span", _key: Math.random().toString(36).slice(2), text, marks: [] }],
    markDefs: [],
  };
}

function bulletList(items) {
  return items.map((text) => ({
    _type: "block",
    _key: Math.random().toString(36).slice(2),
    style: "normal",
    listItem: "bullet",
    level: 1,
    children: [{ _type: "span", _key: Math.random().toString(36).slice(2), text, marks: [] }],
    markDefs: [],
  }));
}

const protocolDoc = {
  _type: "protocolPage",
  _id: "protocolPage-main",
  title: "Blockmaze Protocol Technical Specification",
  sections: [
    {
      _type: "section",
      _key: "intro",
      sectionId: "introduction",
      heading: "1. Introduction",
      content: [
        block("This document defines the technical specifications of the Blockmaze protocol. It describes the scope of node operation, system requirements, tooling dependencies, validator responsibilities, protocol performance characteristics, native token usage, and the sovereign chain model."),
        block("The specification is intended for developers, node operators, and validators who plan to run or interact with the Blockmaze network. It focuses on operational and infrastructure-level details required to deploy and maintain nodes."),
        block("This document does not describe application logic or user-facing features. It outlines only the technical components and assumptions needed to support validator and full node operation within the Blockmaze protocol."),
      ],
    },
    {
      _type: "section",
      _key: "node-setup",
      sectionId: "node-setup",
      heading: "2. Node Setup Scope",
      content: [
        block("The Blockmaze protocol supports two primary node types. Each node type serves a distinct purpose within the network and has different operational requirements."),
        h3("Validator Node Scope"),
        block("Validator nodes take part in block production and consensus. They are responsible for validating transactions, producing blocks and maintaining network state."),
        block("A validator node must:"),
        ...bulletList([
          "Remain online with high uptime",
          "Follow protocol rules during block production",
          "Maintain secure key management",
          "Participate in staking and governance processes",
        ]),
        h3("Full Node Scope"),
        block("Full nodes maintain a complete copy of the blockchain and provide read access to network data. They do not participate in block production or consensus."),
        block("A full node can be used for:"),
        ...bulletList([
          "Querying blockchain data",
          "Supporting applications and services",
          "Monitoring network activity",
        ]),
      ],
    },
    {
      _type: "section",
      _key: "sys-req",
      sectionId: "system-requirements",
      heading: "3. System Requirements",
      content: [
        block("Running a Blockmaze node requires meeting specific system and infrastructure requirements."),
        h3("Operating System Requirements"),
        ...bulletList(["Operating System: Ubuntu 22.04 or a compatible Linux distribution"]),
        h3("Hardware Requirements"),
        ...bulletList([
          "Memory: At least 16 GB of RAM",
          "Storage: A minimum of 500 GB of available disk space",
          "CPU: Minimum 8-core processor",
        ]),
        h3("Network Requirements"),
        ...bulletList([
          "A stable, high-speed internet connection",
          "Nodes can be deployed on cloud-based or locally hosted systems",
        ]),
      ],
    },
    {
      _type: "section",
      _key: "tools",
      sectionId: "tools",
      heading: "4. Tools and Dependencies",
      content: [
        ...bulletList([
          "Bash: Command-line shell for running scripts",
          "Go: Compatible with Cosmos SDK requirements",
          "Jq: Command-line tool for processing JSON data",
          "wget: For downloading files from external sources",
          "unzip: For extracting compressed archive files",
          "build-essential: Compilers and build tools for compiling from source",
        ]),
      ],
    },
    {
      _type: "section",
      _key: "validator-ops",
      sectionId: "validator-operations",
      heading: "5. Validator Operations",
      content: [
        h3("Maintain Uptime"),
        ...bulletList([
          "24/7 Operations: Validator nodes must run continuously",
          "Redundancy: Implement backup systems to reduce downtime",
        ]),
        h3("Secure the Network"),
        ...bulletList([
          "Follow standard security practices to protect nodes",
          "Private keys must be stored securely and backed up in encrypted form",
        ]),
        h3("Adhere to Governance Policies"),
        ...bulletList([
          "Follow protocol rules and governance decisions",
          "Participate honestly and fairly to maintain network integrity",
        ]),
      ],
    },
    {
      _type: "section",
      _key: "throughput",
      sectionId: "throughput",
      heading: "6. Throughput and Performance",
      content: [
        ...bulletList([
          "Block Time: Approximately 6 seconds",
          "Transactions Per Second: Potentially thousands, depending on configuration",
        ]),
      ],
    },
    {
      _type: "section",
      _key: "token",
      sectionId: "token",
      heading: "7. Native Token (BMZ) and Economics",
      content: [
        ...bulletList([
          "Staking and Security: Used by validators and delegators for staking",
          "Fees: Used to pay transaction fees on the network",
          "Governance: Enables participation in on-chain governance and voting",
        ]),
      ],
    },
    {
      _type: "section",
      _key: "governance",
      sectionId: "governance",
      heading: "8. Customizability & Governance",
      content: [
        h3("Sovereign Chains"),
        block("Each zone operates independently and can define its own governance rules, tokenomics, and validator set. This allows zones to operate with autonomy while remaining connected to the broader ecosystem."),
        h3("Governance"),
        block("Governance is handled through on-chain mechanisms. Stakeholders can submit proposals and vote on protocol upgrades or parameter changes according to the rules defined by each zone."),
      ],
    },
  ],
};

async function seed() {
  console.log("Seeding Protocol Page...");
  try {
    await client.createOrReplace(protocolDoc);
    console.log("✓ Protocol Page published successfully!");
  } catch (err) {
    console.error("✗ Failed:", err.message);
  }
}

seed();
