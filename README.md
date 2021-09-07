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


    - Contracts
        - SimpleSmartContract.sol
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

- D02 - HelloWorld - 01/09/2021

    - Contracts
        - HelloWorld.sol
    - Test
        - helloworld.test.js
        - Expected Outcome
            - Function hello is called and string 'Hello, World!' is returned
    - Frontend
        - Download web3.js Library file
        - In bundle.js, use web3 library to interact with the deployed smartcontract
        - To validate, issue command "static-server start" or "npm run" to run the server
        - Upon page load, the result from the function hello() must be printed on the screen

- D03 - SimpleStorage - 02/09/2021

    - Contracts
        - SimpleStorage.sol
    - Test
        - simplestorage.test.js
        - Expected Outcome
            - Data is stored on the blockchain and is retrieved back when queried
    - Frontend
        - Download web3.js Library file
        - In bundle.js, use web3 library to interact with the deployed smartcontract
        - To validate, issue command "static-server start" or "npm run" to run the server
        - Button on page pushes data to the blockchain and reads/ prints the value stored

- D04 - AdvancedStorage - 03/09/2021

    - Contracts
        - AdvancedStorage.sol
    - Test
        - advancedstorage.test.js
        - Expected Outcome
            - Data is stored in a array on the blockchain and is retrieved back when queried. Should return the data at an index, return all elements in an array and its length
    - Frontend
        - Dependencies web3, webpack, webpack-cli, webpack-dev-server
        - In bundle.js, use web3 library to interact with the deployed smartcontract
        - To validate, issue command "static-server start" or "npm run" to run the server
        - Button on page pushes data to the blockchain and reads/ prints the array stored

- D05 - Crud - 04/09/2021

    - Contracts
        - Crud.sol
    - Test
        - crud.test.js
        - Expected Outcome
            - Perform CRUD operations on a struct     
    - Frontend
        - Dependencies web3, webpack, webpack-cli, webpack-dev-server
        - In bundle.js, use web3 library to interact with the deployed smartcontract
        - To validate, issue command "static-server start" or "npm run" to run the server
        - Perform CRUD operations

- D06 - EtherWallet - 06/09/2021

    - Contracts
        - EtherWallet.sol
    - Test
        - etherwallet.test.js
        - Expected Outcome
            - Perform deposit, transfer and balanceOf operations with added contols

- D07 - SplitPayment - 07/09/2021

    - Contracts
        - SplitPayment.sol
    - Test
        - splitpayment.test.js
        - Expected Outcome
            - Split payment to multiple address - array of address and amounts
            - Peform validation if the array lengths match
            - Verify if the split payment is initiated by the owner of the contracts