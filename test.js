const { ethers } = require('ethers');
require('dotenv').config();

// Initialize the provider using your Arbitrum RPC URL from environment variables
const provider = new ethers.providers.JsonRpcProvider(process.env.ARBITRUM_RPC_URL);

// Addresses for the SetValuer and SetToken contracts
const setValuerAddress = "0xf12b323f733b9d99391ecf7fed20210ce6c8ab18";
const setTokenAddress = "0x5F51bD1e8e2D7981C42DC09cC3879dB949386B33";

// Import the ABI for the SetValuer contract
const setValuerABI = [
  {
    "inputs": [
      {
        "internalType": "contract ISetToken",
        "name": "_setToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_quoteAsset",
        "type": "address"
      }
    ],
    "name": "calculateSetTokenValuation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Define the quote asset (e.g., WETH on Arbitrum)
const quoteAssetAddress = "0x82af49447d8a07e3bd95bd0d56f35241523fbab1"; // WETH address on Arbitrum

async function fetchSetTokenPrice() {
  try {
    // Create a new contract instance for the SetValuer
    const setValuerContract = new ethers.Contract(setValuerAddress, setValuerABI, provider);

    // Call the calculateSetTokenValuation function to get the total valuation of the SetToken in terms of the quote asset
    const setTokenValuation = await setValuerContract.calculateSetTokenValuation(setTokenAddress, quoteAssetAddress);

    // Create a minimal ABI for the totalSupply function of the SetToken
    const setTokenABI = [
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{ "name": "", "type": "uint256" }],
        "type": "function"
      }
    ];

    // Create a contract instance for the SetToken
    const setTokenContract = new ethers.Contract(setTokenAddress, setTokenABI, provider);

    // Get the total supply of the SetToken
    const totalSupply = await setTokenContract.totalSupply();

    if (setTokenValuation.isZero() || totalSupply.isZero()) {
      console.error('Invalid valuation or total supply');
      return null;
    }

    console.log('SetToken Valuation:', setTokenValuation.toString());

  } catch (error) {
    console.error('Error fetching index price:', error);
    return null;
  }
}

// Execute the function to fetch the price
fetchSetTokenPrice();
