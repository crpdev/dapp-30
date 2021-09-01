const HelloWorld = artifacts.require('HelloWorld')

contract('HelloWorld', (accounts) => {
    it('should return Hello, World!'), async() => {
        const helloWorld = await HelloWorld.deployed();
        const result = await helloWorld.hello();
        assert.equals('Hello, World!', result);
    };
});