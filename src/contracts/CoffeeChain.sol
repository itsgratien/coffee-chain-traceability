// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CoffeeTraceability {
    struct CoffeeBatch {
        string batchId;
        uint256 quantity;
        uint256 processedDate;
        address submittedBy;
    }

    mapping(string => CoffeeBatch) public batches;
    string[] public allBatchIds;

    event BatchSubmitted(string batchId, uint256 quantity, uint256 processedDate, address submittedBy);

    function submitBatch(string memory _batchId, uint256 _quantity, uint256 _processedDate) external {
        require(bytes(_batchId).length > 0, "Batch ID is required");
        require(batches[_batchId].processedDate == 0, "Batch already exists");

        CoffeeBatch memory newBatch = CoffeeBatch({
            batchId: _batchId,
            quantity: _quantity,
            processedDate: _processedDate,
            submittedBy: msg.sender
        });

        batches[_batchId] = newBatch;
        allBatchIds.push(_batchId);

        emit BatchSubmitted(_batchId, _quantity, _processedDate, msg.sender);
    }

    function getBatch(string memory _batchId) external view returns (CoffeeBatch memory) {
        require(batches[_batchId].processedDate != 0, "Batch not found");
        return batches[_batchId];
    }

    function getAllBatchIds() external view returns (string[] memory) {
        return allBatchIds;
    }

}
