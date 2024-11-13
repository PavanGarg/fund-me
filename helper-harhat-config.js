const networkconfig = {
    11155111:{
        name: "sophia",
        ethuspriceFeed : "0x694AA1769357215DE4FAC081bf1f309aDC325306"
    },
    137:{
        name : "polygon",
        ethuspriceFeed : "0xF9680D99D6C9589e2a93a78A04A279e509205945"
    },
}

const developmentchain = ["hardhat","localhost"]

module.exports = {networkconfig,developmentchain}