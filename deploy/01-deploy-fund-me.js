
const {networkconfig,developmentchain} = require("../helper-harhat-config")
// const {network} = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // const ethUsdpriceFeed = networkconfig[chainId]["ethuspriceFeed"]
    let ethUsdPriceFeedAddress
    // if (developmentchain.includes(network.name))
    if (chainId == "31337") {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkconfig[chainId]["ethUsdPriceFeed"]
    }

    const fundMe = await deploy("FundMe",{
        from : deployer,
        args : [ethUsdPriceFeedAddress],
        log : true
    })
    log(ethUsdPriceFeedAddress)
    // log(fundMe)
    log("deployed")
    log("_____________________________________")
}

module.exports.tags = ["all","fundme"]