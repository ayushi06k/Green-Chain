const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"; 
    const CarbonCredits = await ethers.getContractFactory("CarbonCredits");
    const contract = CarbonCredits.attach(contractAddress);

    // Example: Check owner
    const owner = await contract.owner();
    console.log("Contract Owner:", owner);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
