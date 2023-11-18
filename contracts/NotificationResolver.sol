// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import { SchemaResolver } from "../SchemaResolver.sol";

import { IEAS, Attestation } from "../../IEAS.sol";

import "@openzeppelin/contracts/utils/Strings.sol";

interface IPUSHCommInterface {
    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;
}

/// @title RevocationResolver
/// @notice A sample schema resolver that controls revocations.
contract RevocationResolver is SchemaResolver {

    constructor(IEAS eas) SchemaResolver(eas) {}
    
    function onAttest(Attestation calldata attestation, uint256 /*value*/) internal override returns (bool) {
       bytes32 uid = attestation.uid;
       address recipient = attestation.recipient;
       IPUSHCommInterface(0x0C34d54a09CFe75BCcd878A469206Ae77E0fe6e7).sendNotification(
            0x0373770ec47B4d93C4457E683AA3250D44cE8CaC, // from channel
            address(recipient), // to recipient, put address(this) in case you want Broadcast or Subset. For Targeted put the address to which you want to send
            bytes(
                string(
                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                    abi.encodePacked(
                        "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                        "+", // segregator
                        "3", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targeted or subset)
                        "+", // segregator
                        "Attestation", // this is notificaiton title
                        "+", // segregator
                        "New attestation is created!",
                        " ",
                        Strings.toHexString(uint256(uid))
                    )
                )
            )
        );
       return true;
    }

    function onRevoke(Attestation calldata attestation, uint256 /*value*/) internal override returns (bool) {
        bytes32 uid = attestation.uid;
        address recipient = attestation.recipient;
        IPUSHCommInterface(0x0C34d54a09CFe75BCcd878A469206Ae77E0fe6e7).sendNotification(
            0x0373770ec47B4d93C4457E683AA3250D44cE8CaC, // from channel
            address(recipient), // to recipient, put address(this) in case you want Broadcast or Subset. For Targeted put the address to which you want to send
            bytes(
                string(
                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                    abi.encodePacked(
                        "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                        "+", // segregator
                        "3", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targeted or subset)
                        "+", // segregator
                        "Attestation", // this is notificaiton title
                        "+", // segregator
                        "Attestation is revoked!",
                        " ",
                        Strings.toHexString(uint256(uid))
                    )
                )
            )
        );
        return true;
    }

     // Helper function to convert address to string
    function addressToString(address _address) internal pure returns(string memory) {
        bytes32 _bytes = bytes32(uint256(uint160(_address)));
        bytes memory HEX = "0123456789abcdef";
        bytes memory _string = new bytes(42);
        _string[0] = '0';
        _string[1] = 'x';
        for(uint i = 0; i < 20; i++) {
            _string[2+i*2] = HEX[uint8(_bytes[i + 12] >> 4)];
            _string[3+i*2] = HEX[uint8(_bytes[i + 12] & 0x0f)];
        }
        return string(_string);
    }

    // Helper function to convert uint to string
    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len - 1;
        while (_i != 0) {
            bstr[k--] = bytes1(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }

}


