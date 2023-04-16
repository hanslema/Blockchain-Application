//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint timestamp, string keyword);

    struct TransferStruct {
        address from;
        address receiver;
        uint amount;
        string message;
        uint timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amout, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(address payable receiver, uint amout, string memory message, string memory keyword)
    }

    function getAllTransactions() public view returns (TransferStruct[] memmory) {
        //return Transactions;

    }
    function addToBlockchain() public view returns (uint256) {
        //return transactionsCount;
        
    }
}
