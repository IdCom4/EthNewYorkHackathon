export const contractAbi = [
  {
    inputs: [
      { internalType: 'contract IWorldID', name: '_worldId', type: 'address' },
      { internalType: 'string', name: '_appId', type: 'string' },
      { internalType: 'string', name: '_actionId', type: 'string' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  { inputs: [], name: 'InvalidNullifier', type: 'error' },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'string', name: 'assetId', type: 'string' },
      { indexed: false, internalType: 'string', name: 'userInput', type: 'string' }
    ],
    name: 'Contribute',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'string', name: 'assetId', type: 'string' },
      { internalType: 'address', name: '', type: 'address' }
    ],
    name: 'userContributionToAFile',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'signal', type: 'address' },
      { internalType: 'uint256', name: 'root', type: 'uint256' },
      { internalType: 'uint256', name: 'nullifierHash', type: 'uint256' },
      { internalType: 'uint256[8]', name: 'proof', type: 'uint256[8]' }
    ],
    name: 'verifHuman',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'root', type: 'uint256' },
      { internalType: 'uint256', name: 'nullifierHash', type: 'uint256' },
      { internalType: 'uint256[8]', name: 'proof', type: 'uint256[8]' },
      { internalType: 'string', name: 'assetId', type: 'string' },
      { internalType: 'string', name: 'userInput', type: 'string' },
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'bytes32', name: 'messageHash', type: 'bytes32' },
      { internalType: 'bytes', name: 'userSignature', type: 'bytes' }
    ],
    name: 'verifyAndExecute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'signer', type: 'address' },
      { internalType: 'bytes32', name: 'messageHash', type: 'bytes32' },
      { internalType: 'bytes', name: 'signature', type: 'bytes' }
    ],
    name: 'verifySignature',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'pure',
    type: 'function'
  }
]
