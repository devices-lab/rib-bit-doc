---
layout: "devices-lab/default"
title: "The Rib:bit Research Platform - Advanced Use"
image: "/img/tile.png"
description: "Advanced use of the Rib:bit research platform"
---

# Advanced Topics

## Firmware Upgrades
Most users will not need to update the on-board firmware of the rib:bit, but there are cases where it may be required.

To flash the firmware you will need a AVR ISP compatible programmer, and a standard 6-way ISP IDC cable. This can be achieved by using an Arduino as an ISP programmer, but doing so it beyond the scope of this document. If you wish to flash the firmware this way, please consult the link below for the latest up-to-date sources and information.

[rib-bit-firmware - The Rib:bit firmware source code](https://github.com/JohnVidler/rib-bit-firmware.git)

## Top / Camera Port
This port is not yet completely supported by the rib:bit and has not been extensively tested.
It exposes an SPI and i2c connection along with 3v3 power to boards with connected embedded cameras.

Once these functions have been finalised the documentation here will also be updated, but if you wish to experiemnt (at your own peril!) please see the repository below for instructions and updates.

[pxt-rib-bit-camera - Camera port functions (advanced!)](https://github.com/JohnVidler/pxt-rib-bit-camera.git)