const CoffeeSupplyChain = artifacts.require("CoffeeSupplyChain");
const { BN, expectRevert } = require('@openzeppelin/test-helpers');

contract("CoffeeSupplyChain", function (accounts) {
  const [owner, buyer1, buyer2, addr4] = accounts;
  let coffeeSupplyChain;

  beforeEach(async function () {
    coffeeSupplyChain = await CoffeeSupplyChain.new();
  });

  describe("Buyer Authorization", function () {
    it("Should allow owner to authorize buyers", async function () {
      await coffeeSupplyChain.authorizeBuyer(buyer1, { from: owner });
      const isAuthorized = await coffeeSupplyChain.authorizedBuyers(buyer1);
      assert.equal(isAuthorized, true, "Buyer should be authorized");
    });

    it("Should not allow non-owner to authorize buyers", async function () {
      await expectRevert(
        coffeeSupplyChain.authorizeBuyer(buyer2, { from: buyer1 }),
        "Only owner can perform this action"
      );
    });
  });

  describe("Batch Management", function () {
    const batchId = 1;
    const quantity = 100;
    const productionDate = Math.floor(Date.now() / 1000);

    beforeEach(async function () {
      await coffeeSupplyChain.receiveBatch(batchId, quantity, productionDate, { from: owner });
    });

    it("Should receive new batch correctly", async function () {
      const batchDetails = await coffeeSupplyChain.getBatchDetails(batchId);
      
      assert.equal(batchDetails.quantity.toNumber(), quantity, "Quantity should match");
      assert.equal(batchDetails.productionDate.toNumber(), productionDate, "Production date should match");
      assert.equal(batchDetails.currentStage.toNumber(), 0, "Stage should be AtExportWarehouse");
    });

    it("Should allow quality check", async function () {
      await coffeeSupplyChain.checkQuality(batchId, "Grade A", { from: owner });
      
      const batchDetails = await coffeeSupplyChain.getBatchDetails(batchId);
      assert.equal(batchDetails.quality, "Grade A", "Quality should be Grade A");
      assert.equal(batchDetails.currentStage.toNumber(), 1, "Stage should be QualityChecked");
    });

    it("Should allow authorized buyer to purchase batch", async function () {
      await coffeeSupplyChain.authorizeBuyer(buyer1, { from: owner });
      
      await coffeeSupplyChain.checkQuality(batchId, "Grade A", { from: owner });
      
      const paymentAmount = web3.utils.toWei("1", "ether");
      await coffeeSupplyChain.buyBatch(batchId, { from: buyer1, value: paymentAmount });
      
      const batchDetails = await coffeeSupplyChain.getBatchDetails(batchId);
      assert.equal(batchDetails.buyer, buyer1, "Buyer should be set correctly");
      assert.equal(batchDetails.isPaid, true, "Batch should be marked as paid");
      assert.equal(batchDetails.currentStage.toNumber(), 2, "Stage should be SoldToBuyer");
    });

    it("Should allow marking batch as exported after sale", async function () {
      await coffeeSupplyChain.authorizeBuyer(buyer1, { from: owner });
      await coffeeSupplyChain.checkQuality(batchId, "Grade A", { from: owner });
      await coffeeSupplyChain.buyBatch(batchId, { from: buyer1, value: web3.utils.toWei("1", "ether") });
      
      await coffeeSupplyChain.markAsExported(batchId, { from: owner });
      
      const batchDetails = await coffeeSupplyChain.getBatchDetails(batchId);
      assert.equal(batchDetails.currentStage.toNumber(), 3, "Stage should be Exported");
    });
  });

  describe("Error cases", function () {
    const batchId = 1;
    const quantity = 100;
    const productionDate = Math.floor(Date.now() / 1000);

    beforeEach(async function () {
      await coffeeSupplyChain.receiveBatch(batchId, quantity, productionDate, { from: owner });
    });

    it("Should not allow non-owner to receive batch", async function () {
      await expectRevert(
        coffeeSupplyChain.receiveBatch(2, quantity, productionDate, { from: buyer1 }),
        "Only owner can perform this action"
      );
    });

    it("Should not allow unauthorized buyer to purchase batch", async function () {
      await coffeeSupplyChain.checkQuality(batchId, "Grade A", { from: owner });
      
      await expectRevert(
        coffeeSupplyChain.buyBatch(batchId, { from: buyer1, value: web3.utils.toWei("1", "ether") }),
        "Only authorized buyers can perform this action"
      );
    });

    it("Should not allow export before sale", async function () {
      await expectRevert(
        coffeeSupplyChain.markAsExported(batchId, { from: owner }),
        "Batch must be sold first"
      );
    });
  });
});
