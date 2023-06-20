const { MerkleTree } = require('merkletreejs');             // We are using this liberary becasuse we use this is in Solity language.A function in ehich we can check that it is bitcoin merkle tree of not

const keccak256 = require('keccak256');                     // we need this becuse of keccak256 here is a winner SHA algorithm.


const whitelistedAddresses = [
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"

]

let leaf = whitelistedAddresses.map(addr => keccak256(addr))

console.log(leaf[1].toString('hex'));

const merkleTree = new MerkleTree(leaf, keccak256, {sortPairs: true});
console.log(merkleTree.toString('hex'));


console.log("Tree Structure : \n");
console.log(merkleTree.getHexLayers());
console.log("Flat Addresses: \n");
console.log(merkleTree.getHexLayersFlat());


// leaf.forEach((hash, index) => {
//     console.log(`Address: ${whitelistedAddresses[index]}, Hash: ${hash.toString('hex')}`);
// });


// console.log(`\n\n Merkle Tree: ${merkleTree.toString('hex')}`);

const rootHash = '0x' + merkleTree.getRoot().toString('hex');

console.log(`Root Hash :  ${rootHash}`);


const AddressProof = whitelistedAddresses[2];
console.log(`AddressProof : ${AddressProof}`);

const HashedLeaf = keccak256(AddressProof);
const proof = merkleTree.getHexProof(HashedLeaf);

console.log(`Merkel off this address: ${AddressProof} is Proof : ${proof}`);





// const claimingAddress = leaf[1];
// const hexProof = merkleTree.getHexProof(claimingAddress);

// console.log(`Merkle Tree Address : ${claimingAddress.toString('hex')} [ ${hexProof.toString('hex')} ]`);

// let reformingLeaves = whitelistedAddresses.map(whitelistedAddresses[1],addr => keccak256(addr));
// console.log(reformingLeaves);



// console.log(merkleTree.toString());
// console.log(rootHash);
 
 
 


