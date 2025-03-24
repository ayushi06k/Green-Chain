const hre = require("hardhat");
const { ethers } = require("hardhat");


async function main() {
    const CarbonCredits = await ethers.getContractFactory("CarbonCredits");
    await contract.issueCredits(" 0xe7f1725e7734ce288f8367e1bb143e90bb3f0512", 100);
   
const contract = await CarbonCredits.attach("0xe7f1725e7734ce288f8367e1bb143e90bb3f0512");


 
    
  const carbonCredits = await CarbonCredits.deploy();
  
  // Instead of calling .deployed(), wait for the deployment transaction
  await carbonCredits.waitForDeployment();
  
  // In newer versions, the address is accessed differently
  console.log("CarbonCredits deployed to:", await carbonCredits.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});