// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenICO {
    address public owner;
    address public tokenAddress;
    uint256 public tokenSalePrice;
    uint256 public soldTokens;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function updateTOken(address _tokenAddress) public onlyOwner {
        tokenAddress = _tokenAddress;
    }

    function updateTokenSalePrice(uint256 _tokenSalePrice) public onlyOwner {
        tokenSalePrice = _tokenSalePrice;
    }

    function multiply(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    function buyToken(uint256 _tokenAmount) public payable {
        require(
            msg.value == multiply(_tokenAmount, tokenSalePrice),
            "Insufficient Ether provider for the token purchase"
        );

        ERC20 token = ERC20(tokenAddress);
        require(
            msg.value == token.balanceOf(address(this)),
            "Insufficient Ether provider for the token purchase"
        );
        require(token.transfer(msg.sender, _tokenAmount * 1e18));
        payable(owner).transfer(msg.value);
        soldTokens += _tokenAmount;
    }

    function getTokenDetails()
        public
        view
        returns (
            string memory name,
            string memory symbol,
            uint256 balance,
            uint256 supply,
            uint256 tokenPtice,
            address tokenAddr
        )
    {
        ERC20 token = ERC20(tokenAddress);

        return (
            token.name(),
            token.symbol(),
            token.balanceOf(address(this)),
            token.totalSupply(),
            tokenSalePrice,
            tokenAddr
        );
    }

    function withdrawAlltokens() public onlyOwner {
        ERC20 token = ERC20(tokenAddress);

        uint256 balance = token.balanceOf(address(this));

        require(balance > 0, "No tokens to withdraw");
        require(token.transfer(owner, balance));
    }
}
