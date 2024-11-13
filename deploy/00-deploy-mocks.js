
const {network} = require("hardhat")
const {developmentchain} = require("../helper-harhat-config")
const { Contract } = require("ethers")

const DECIMALS = "8"
const INITIAL_PRICE = "200000000000" // 2000

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // if(developmentchain.includes(network.name))
    if(chainId == "31337"){
        log(" deploying in local network")
        const mockV3Aggregator = await deploy("MockV3Aggregator",{
            Contract : "MockV3Aggregator",
            from : deployer,
            log :true,
            args : [DECIMALS,INITIAL_PRICE]
        })
        log(mockV3Aggregator.address)
        log("deployed")
        log("_____________________________________")
    }
}

module.exports.tags = ["all","mocks"]