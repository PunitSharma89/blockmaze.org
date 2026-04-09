import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Architecture Diagram | Blockmaze",
  description:
    "Blockmaze Network architecture diagrams covering network design, state machine, CometBFT consensus, ABCI, EVM compatibility, accounts, gas, transaction receipts, and interconnected ecosystem.",
};

const tocItems = [
  { id: "network", label: "1. Network Architecture" },
  { id: "state", label: "2. State Machine" },
  { id: "cometbft", label: "3. CometBFT" },
  { id: "abci", label: "4. ABCI (Application Blockchain Interface)" },
  { id: "evm", label: "5. EVM Compatibility" },
  { id: "accounts", label: "6. Accounts" },
  { id: "gas", label: "7. Gas and Fees" },
  { id: "receipts", label: "8. Transaction Receipts" },
  { id: "ecosystem", label: "9. Interconnected Ecosystem" },
];

export default function ArchitectureDiagramPage() {
  return (
    <>
      <Container>
        <Breadcrumb items={[{ label: "Architecture Diagram" }]} />
      </Container>
      <section className="border border-gray-200">
        <div className="flex flex-col lg:flex-row bg-[#f8f9fa] text-[#1a1a1a] font-sans leading-[1.7] text-sm md:text-base">
          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] bg-white border-r border-gray-200 p-6 lg:p-8 lg:sticky lg:top-[100px] lg:h-screen lg:overflow-y-auto border-b lg:border-b-0">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 border-b-2 border-[#1a1a1a] pb-1 font-bold">
              Table of Content
            </h3>
            <ul className="list-none space-y-1">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block px-3 py-2 text-[#444] text-[0.95rem] rounded hover:bg-[#f0f2f5] hover:text-black hover:font-semibold transition-all duration-200 no-underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="flex-1 p-4 md:p-8 lg:p-16 bg-[#f8f9fa]">
            <div className="max-w-[90%] mx-auto bg-white p-6 md:p-10 lg:p-20 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-200">
              {/* Header */}
              <div className="text-center mb-16 border-b-4 border-[#1a1a1a] pb-8">
                <h1 className="text-2xl md:text-4xl lg:text-[2.8rem] font-extrabold text-black leading-tight uppercase">
                  Architecture Diagrams
                </h1>
              </div>

              {/* Section 1 */}
              <div id="network">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  1. Network Architecture
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Blockmaze Network is designed to support interoperability across multiple blockchain networks. The architecture enables cross-chain asset transfers and data exchange while supporting the specific features of the Blockmaze protocol.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  The network architecture focuses on compatibility, resilience, and adaptability. It allows different chains and applications to interact while maintaining predictable behavior and stable operation across environments.
                </p>
                <div className="mb-6">
                  <Image
                    src="/images/Network-Architecture.png"
                    alt="Network Architecture"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Section 2 */}
              <div id="state">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  2. State Machine
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Blockmaze Network is built on a replicated deterministic state machine model. In this model, the system exists in a single state at any given time. Transactions cause state transitions, moving the system from one state to another.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  In a blockchain environment, transactions are grouped into blocks for efficiency. Given an initial state (S) and a block of transactions (B), the state machine processes each transaction in sequence and produces a new state (S&apos;).
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Blockmaze Network uses the Cosmos SDK to define application state, transaction types, and state transition logic. This ensures deterministic execution, meaning all nodes processing the same transactions reach the same final state.
                </p>
              </div>

              {/* Section 3 */}
              <div id="cometbft">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  3. CometBFT
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  CometBFT provides the networking and consensus layers for the Blockmaze Network. It is application-agnostic and is responsible for propagating transactions and ordering them into blocks.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  CometBFT uses a Byzantine Fault Tolerant consensus algorithm. At any block height, a validator set (V) participates in consensus. A block is considered valid once more than two-thirds of the validator set signs it.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Validators are responsible for proposing and validating blocks and ensuring correct block ordering across the network.
                </p>
              </div>

              {/* Section 4 */}
              <div id="abci">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  4. ABCI (Application Blockchain Interface)
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  The Blockmaze application communicates with CometBFT through the Application Blockchain Interface (ABCI). This interface defines how transactions and block-related events are passed between the consensus engine and the application.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  CometBFT sends transactions to the application for execution, and the application returns execution results that indicate success or failure.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Key ABCI methods include:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">
                    <strong>CheckTx:</strong> Validates transactions before they are included in blocks. This helps prevent spam and ensures transactions meet basic requirements.
                  </li>
                  <li className="text-[#3c4043]">
                    <strong>DeliverTx:</strong> Executes transactions included in finalized blocks and applies state changes.
                  </li>
                  <li className="text-[#3c4043]">
                    <strong>BeginBlock / EndBlock:</strong> Called at the start and end of each block to run additional application-specific logic.
                  </li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Developers building on Blockmaze implement the ABCI interface to connect their application logic with CometBFT, while relying on CometBFT for networking and consensus.
                </p>

                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  ABCI Message Flow and Execution
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  The DeliverTx message is the core execution path of the application. Every transaction included in the blockchain is processed through DeliverTx. When a DeliverTx message is received, the application must validate the transaction against the current state, application rules, and cryptographic credentials.
                  <br />
                  Once validated, the transaction updates the application state. This may involve writing values to a key-value store or updating other state representations, such as a UTXO database, depending on the application design.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  The CheckTx message serves a validation-only role. It is used by Tendermint Core&apos;s mempool to verify transactions before they are included in a block. Only transactions that pass CheckTx are propagated to peers.
                  <br />
                  During CheckTx, the application may perform checks such as validating sequence numbers to prevent replay attacks or enforcing capability-based permissions that must be refreshed with each transaction. Transactions that fail these checks are rejected early.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  The Commit message is used to generate a cryptographic commitment to the current application state. This commitment is included in the next block header. Any inconsistency in state updates results in detectable blockchain forks, which helps surface programming errors. The commit mechanism also supports secure light client verification. Merkle proofs can be checked against the block hash, which is signed by a validator quorum.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  <strong>Tendermint Core establishes multiple ABCI connections to the application:</strong>
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">One connection for transaction validation in the mempool</li>
                  <li className="text-[#3c4043]">One connection for consensus-related block execution</li>
                  <li className="text-[#3c4043]">One connection for querying application state</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Because multiple execution paths exist, application developers must design ABCI message handlers carefully to ensure consistent state transitions. This architecture provides a clear execution model while allowing flexibility in application logic. The overall message flow through ABCI defines how transactions move from validation to execution and final state commitment.
                </p>
                <div className="mb-6">
                  <Image
                    src="/images/Blockchain-Interface.png"
                    alt="Blockchain Interface"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Section 5 */}
              <div id="evm">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  5. EVM Compatibility
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Blockmaze Network supports EVM compatibility by implementing a set of components that reproduce Ethereum Virtual Machine state transitions while preserving the Ethereum developer experience.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  <strong>EVM compatibility is achieved through the following components:</strong>
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Ethereum transaction format implemented as a Cosmos SDK Tx and Msg interface</li>
                  <li className="text-[#3c4043]">Ethereum secp256k1 cryptographic curve for key management</li>
                  <li className="text-[#3c4043]">StateDB interface for state queries and updates</li>
                  <li className="text-[#3c4043]">JSON-RPC interface for interacting with EVM-compatible applications</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Most EVM-related components are implemented within the EVM module. Some supporting components are implemented outside the module to maintain compatibility and consistency across the system.
                </p>
              </div>

              {/* Section 6 */}
              <div id="accounts">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  6. Accounts
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Accounts on Blockmaze Network are designed to be compatible with Ethereum-style addresses. This allows developers to integrate wallets and applications without changes to existing Ethereum tooling. From an application perspective, Blockmaze accounts behave like Ethereum accounts.
                </p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Creating Accounts
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Accounts can be created using one of the following methods:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">A private key</li>
                  <li className="text-[#3c4043]">A keystore file, which stores a private key protected by a password</li>
                  <li className="text-[#3c4043]">A mnemonic phrase</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">
                  A private key or keystore file creates a single account. A mnemonic phrase allows access to multiple accounts using the same phrase.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Blockmaze supports hierarchical deterministic key generation using mnemonic phrases. This enables users to manage multiple accounts and access accounts across different blockchains without managing multiple secrets.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  HD keys generate addresses using a mnemonic phrase combined with a derivation path. Each blockchain supports specific derivation paths, and the correct path must be used to access all accounts associated with a mnemonic.
                </p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Blockmaze Accounts
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Blockmaze defines a custom account type that supports Ethereum-compatible addresses using hierarchical deterministic wallets. Key properties include:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]">Use of Ethereum ECDSA secp256k1 cryptographic curve (eth_secp256k1)</li>
                  <li className="text-[#3c4043]">Support for Ethereum-compatible addresses</li>
                  <li className="text-[#3c4043]">Compliance with EIP-84 for full BIP-44 paths</li>
                </ul>
                <p className="mb-6 text-[#3c4043] text-justify">
                  The root HD derivation path for Blockmaze accounts is: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">m/44&apos;/60&apos;/0&apos;/0</code>
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Blockmaze uses coin type 60 to maintain compatibility with Ethereum accounts.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  The custom Blockmaze EthAccount implements the AccountI interface from the authentication module and includes additional fields required for Ethereum-style accounts, including support for externally owned accounts and contract accounts.
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-6 text-sm">
                  <code>{`// EthAccountI represents the interface of an EVM-compatible account
type EthAccountI interface {
    authtypes.AccountI
    // EthAddress returns the Ethereum address representation of the AccAddress
    EthAddress() common.Address
    // CodeHash is the keccak256 hash of the contract code (if any)
    GetCodeHash() common.Hash
    // SetCodeHash sets the code hash to the account fields
    SetCodeHash(code common.Hash) error
    // Type returns the type of Ethereum Account (EOA or Contract)
    Type() int8
}`}</code>
                </pre>
              </div>

              {/* Section 7 */}
              <div id="gas">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  7. Gas and Fees
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Transactions on the Blockmaze network require fees. The fee mechanism follows an Ethereum-style gas model while being implemented within the Blockmaze protocol. This section explains gas usage, fee calculation, and the Ethereum-style fee market based on EIP-1559.
                </p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Why Transactions Require Fees
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Without fees, a network can be overwhelmed by large volumes of invalid or malicious transactions. Fees act as an economic control mechanism that limits abuse and ensures fair access to network resources.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Gas represents the resource cost of transaction execution. Each operation consumes gas, which directly translates to cost for the transaction sender.
                </p>

                <h3 className="text-lg md:text-xl lg:text-[1.3rem] mt-8 mb-4 font-semibold text-[#34495e]">
                  Gas and Fee Calculation
                </h3>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Fees are calculated using the following formula:
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  <strong>Total Fee = Gas Used x Gas Price</strong>
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Gas measures execution effort, while gas price defines the cost per unit of gas. Gas prices can vary depending on network demand. Blockmaze uses an Ethereum-style fee market based on EIP-1559 to prioritize transactions.
                </p>
              </div>

              {/* Section 8 */}
              <div id="receipts">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  8. Transaction Receipts
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Transaction receipts provide execution results for completed transactions. A receipt is returned by an Ethereum-compatible client and includes execution metadata.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  A receipt contains the following fields:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li className="text-[#3c4043]"><strong>transactionHash:</strong> Hash of the transaction</li>
                  <li className="text-[#3c4043]"><strong>transactionIndex:</strong> Position of the transaction in the block</li>
                  <li className="text-[#3c4043]"><strong>blockHash:</strong> Hash of the block containing the transaction</li>
                  <li className="text-[#3c4043]"><strong>blockNumber:</strong> Block number</li>
                  <li className="text-[#3c4043]"><strong>from:</strong> Sender address</li>
                  <li className="text-[#3c4043]"><strong>to:</strong> Receiver address, or null for contract creation</li>
                  <li className="text-[#3c4043]"><strong>cumulativeGasUsed:</strong> Total gas used in the block up to this transaction</li>
                  <li className="text-[#3c4043]"><strong>effectiveGasPrice:</strong> Base fee plus tip per unit of gas</li>
                  <li className="text-[#3c4043]"><strong>gasUsed:</strong> Gas consumed by this transaction</li>
                  <li className="text-[#3c4043]"><strong>contractAddress:</strong> Address of the created contract, if applicable</li>
                  <li className="text-[#3c4043]"><strong>logs:</strong> Events emitted during execution</li>
                  <li className="text-[#3c4043]"><strong>logsBloom:</strong> Bloom filter for log queries</li>
                  <li className="text-[#3c4043]"><strong>type:</strong> Transaction type (legacy, access list, or dynamic fee)</li>
                  <li className="text-[#3c4043]"><strong>root:</strong> Transaction state root (pre-Byzantium)</li>
                  <li className="text-[#3c4043]"><strong>status:</strong> Execution result, where 1 indicates success and 0 indicates failure</li>
                </ul>
              </div>

              {/* Section 9 */}
              <div id="ecosystem">
                <h2 className="text-xl md:text-2xl lg:text-[1.8rem] mt-14 mb-6 text-[#2c3e50] font-bold">
                  9. Interconnected Ecosystem
                </h2>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Blockmaze Network supports cross-chain interaction with the Ethereum ecosystem and other blockchain networks. This enables cross-chain transactions, asset transfers, and data exchange.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Interoperability is achieved through the Inter-Blockchain Communication protocol (IBC). IBC enables authenticated, ordered, and state-aware communication between independent blockchains.
                </p>
                <p className="mb-6 text-[#3c4043] text-justify">
                  Through IBC, Blockmaze participates in a connected blockchain environment while maintaining chain-level independence and security.
                </p>
                <div className="mb-6">
                  <Image
                    src="/images/Interconnected-Ecosystem.png"
                    alt="Interconnected Ecosystem"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
