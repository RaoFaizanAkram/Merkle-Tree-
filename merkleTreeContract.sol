// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract merkleTreeContract is ERC721 {

    bytes32 public merkleTreeRootHash;
    uint256 public tokenid = 1;

    constructor() ERC721 ("MerkleTree NFT", "MTN") {
        merkleTreeRootHash = 0x4e3589b0d9351ea120ecf4a4fd64386da0edb74fec3af2b6f9104c84c471ea87;
    }

    mapping(address => bool) public isWhitelistedAddressClaimed;
    
    function safeMint(bytes32[] calldata _merkleProof) public {
        require(!isWhitelistedAddressClaimed[msg.sender], "Address has already minted a whitelisted NFT.");
        bytes32 leafToVerify = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(_merkleProof, merkleTreeRootHash, leafToVerify),
            "Invalid address to mint the NFT."
        );
        _safeMint(msg.sender, tokenid);
        tokenid++;
        isWhitelistedAddressClaimed[msg.sender] = true;
    }
}