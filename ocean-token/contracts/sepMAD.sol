// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract sepMAD is ERC20PresetFixedSupply {
    constructor()
        ERC20PresetFixedSupply("sepMAD", "sepMAD", 1_000_000_000 * 10 ** decimals(), msg.sender)
}
