# dapp-30

Repository for 30 Solidity DApps - Learnings from EatTheBlocks DApp-30 course

Solidity SmartContract 
    - Program that runs on Ethereum Blockchain
    - Once deployed, cannot be changed
    - Data of the SmartContract can only be done by the code of the SmartContract
    - Deployment to mainnet costs ETH

Solidity vs Javascript
    - Solidity is primitive than JS
    - Solidity must be compiled before its run while JS need not
    - Solidity is a statically typed language while JS is not

Truffle Config
    - Test cases are configured to run on local eithereum node [ganache-cli or ganache app at port 7545]
    - solc is at version 0.8.0
    - truffle commands

NPM Dependencies
    - truffle
    - ganache-cli
    - static-server [Frontend]

- D01 - SimpleSmartContract - 31/08/2021

    - Issue truffle init command to create a template
    - solidity version used is >=0.7.0 <0.9.0
    - Contracts
        - SimpleSmartContract.sol
    - Add migration config for the contract
    - Test
        - simplesmartcontract.test.js
        - Expected Outcome
            - Contract successfully deployed [ganache-cli]
            - Contract address printed on the console and test passes
    - Frontend
        - Download web3.js Library file
        - In bundle.js, use web3 library to interact with the deployed smartcontract
        - To validate, issue command "static-server start" to run the server
        - Verify in web console [F12] to confirm if the contract and accounts are printed


