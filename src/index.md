---
layout: "devices-lab/default"
title: "The Rib:bit Research Platform"
image: "/img/tile.png"
description: "The Rib:bit is a research platform extension for the Micro:bit"
---

# Overview

<figure>
    <img src="img/main.png" alt="A photograph of the rib:bit" />
</figure>

## Buttons and LEDs

<figure>
    <img src="img/line-layout-buttons-leds.png" alt="The rib:bit component diagram" />
</figure>

The Rib:bit has 6 outward-facing buttons, and 6 neopixel full-colour LEDs on its front side, arranged along the lower left and right sides. These are named L1, L2, and L3 on the left side, and correspondingly R1, R2 and R3 on the right.

<figure>
    <img src="img/line-layout-rear-led.png" alt="The rib:bit component diagram" />
</figure>

On the underside near the bottom is a single additional red LED which indicates that the micro-SD card is being accessed. Removing the micro-SD card while this LED is lit can cause loss or corruption of the data on the card, so try to power down the Rib:bit or ensure that your code has a mode where no writes are taking place to allow safe removal.

## Microbit Socket


## MikroBUS Port


## Long Range (LoRa) Radio


## GPS Location Module


## Micro SD Card


# Powering your rib:bit

## AA Batteries

## The JST Connector



# Programming the Rib:bit

## Makecode - Blocks
## Makecode - Javascript

## Picking your Extensions
The Rib:bit includes a wide variety of functionality, and as such making every function available at once would create an enormous number of additional blocks, variables and functions in the Makecode editor. So instead we have split the functionality up into a number of sub-extensions that each deal with a select area of functionality.

The sub-extensions all automatically include the core `pxt-rib-bit` extension as all the common functionality is incorporated here.

- [pxt-rib-bit - The Basics](https://github.com/JohnVidler/pxt-rib-bit.git)
- [pxt-rib-bit-gps - GPS Location Functions](https://github.com/JohnVidler/pxt-rib-bit-gps.git)
- [pxt-rib-bit-datalogger - Datalogger functions for the micro SD card](https://github.com/JohnVidler/pxt-rib-bit-datalogger.git)
- [pxt-rib-bit-lora - Long-Range (LoRa) radio support](https://github.com/JohnVidler/pxt-rib-bit-lora.git)
- [pxt-rib-bit-mikrobus - MikroBUS port functions](https://github.com/JohnVidler/pxt-rib-bit-mikrobus.git)

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