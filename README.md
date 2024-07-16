# Debase and Withdraw Sniper

This project is designed to periodically debase the top 200 addresses of a token and to debase users when they withdraw from a vault. The debase action is triggered by an event listener on the vault contract and is performed on both new and existing users.

## Setup

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```

2. **Install dependencies:**
    ```bash
   npm install
   ```

3. **Create a .env file in the root directory:**
    ```bash
   cp .env.default .env
   ```

4. **Edit the .env file with your environment variables:**
    ```
    PRIVATE_KEY=0xYourPrivateKeyHere
    RPC_URL=https://your-rpc-url
    CONTRACT_ADDRESS=0x3B9728bD65Ca2c11a817ce39A6e91808CceeF6FD
    VAULT_CONTRACT_ADDRESS=0x042Fef60aD51f48C65E6106F9b950178910A3300
    ```

### Usage

```bash
node debase.js
```