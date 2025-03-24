// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarbonCredits {
    address public owner;
    mapping(address => uint256) public credits;

    event CreditIssued(address indexed to, uint256 amount);
    event CreditTransferred(address indexed from, address indexed to, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function issueCredits(address to, uint256 amount) public {
        require(msg.sender == owner, "Only admin can issue credits");
        credits[to] += amount;
        emit CreditIssued(to, amount);
    }

    function transferCredits(address to, uint256 amount) public {
        require(credits[msg.sender] >= amount, "Insufficient credits");
        credits[msg.sender] -= amount;
        credits[to] += amount;
        emit CreditTransferred(msg.sender, to, amount);
    }

    function getBalance(address user) public view returns (uint256) {
        return credits[user];
    }
}
