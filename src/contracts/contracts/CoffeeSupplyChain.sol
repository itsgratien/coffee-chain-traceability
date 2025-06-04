// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoffeeSupplyChain {
    enum Stage { 
        AtExportWarehouse,  
        QualityChecked,     
        SoldToBuyer,       
        Exported           
    }

    struct CoffeeBatch {
        uint256 id;
        uint256 productionDate;
        uint256 quantity;    
        address buyer;       
        uint256 pricePerKg; 
        bool isPaid;        
        Stage currentStage;
        string quality;     
    }

    mapping(uint256 => CoffeeBatch) public batches;
    address public owner;
    mapping(address => bool) public authorizedBuyers;

    event BatchReceived(uint256 indexed batchId, uint256 quantity, uint256 productionDate);
    event QualityChecked(uint256 indexed batchId, string quality);
    event BatchSold(uint256 indexed batchId, address indexed buyer, uint256 price);
    event BatchExported(uint256 indexed batchId);
    event BuyerAuthorized(address indexed buyer);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    modifier onlyAuthorizedBuyer() {
        require(authorizedBuyers[msg.sender], "Only authorized buyers can perform this action");
        _;
    }

    function authorizeBuyer(address _buyer) public onlyOwner {
        authorizedBuyers[_buyer] = true;
        emit BuyerAuthorized(_buyer);
    }

    function receiveBatch(
        uint256 _batchId,
        uint256 _quantity,
        uint256 _productionDate
    ) public onlyOwner {
        batches[_batchId] = CoffeeBatch({
            id: _batchId,
            productionDate: _productionDate,
            quantity: _quantity,
            buyer: address(0),
            pricePerKg: 0,
            isPaid: false,
            currentStage: Stage.AtExportWarehouse,
            quality: ""
        });

        emit BatchReceived(_batchId, _quantity, _productionDate);
    }

    function checkQuality(uint256 _batchId, string memory _quality) public onlyOwner {
        require(batches[_batchId].currentStage == Stage.AtExportWarehouse, "Batch must be at export warehouse");
        batches[_batchId].quality = _quality;
        batches[_batchId].currentStage = Stage.QualityChecked;
        
        emit QualityChecked(_batchId, _quality);
    }

    function buyBatch(uint256 _batchId) public payable onlyAuthorizedBuyer {
        require(batches[_batchId].currentStage == Stage.QualityChecked, "Batch must be quality checked");
        require(batches[_batchId].buyer == address(0), "Batch already sold");
        require(msg.value > 0, "Must send payment");

        batches[_batchId].buyer = msg.sender;
        batches[_batchId].pricePerKg = msg.value / batches[_batchId].quantity;
        batches[_batchId].isPaid = true;
        batches[_batchId].currentStage = Stage.SoldToBuyer;

        emit BatchSold(_batchId, msg.sender, msg.value);
    }

    function markAsExported(uint256 _batchId) public onlyOwner {
        require(batches[_batchId].currentStage == Stage.SoldToBuyer, "Batch must be sold first");
        require(batches[_batchId].isPaid, "Batch must be paid for");
        batches[_batchId].currentStage = Stage.Exported;
        
        emit BatchExported(_batchId);
    }

    function getBatchDetails(uint256 _batchId) public view returns (
        uint256 productionDate,
        uint256 quantity,
        address buyer,
        uint256 pricePerKg,
        bool isPaid,
        Stage currentStage,
        string memory quality
    ) {
        CoffeeBatch memory batch = batches[_batchId];
        return (
            batch.productionDate,
            batch.quantity,
            batch.buyer,
            batch.pricePerKg,
            batch.isPaid,
            batch.currentStage,
            batch.quality
        );
    }
}
