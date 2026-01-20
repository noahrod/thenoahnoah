---
title: "Mining Ethereum with Ubuntu 21.04"
slug: mining-ethereum-with-ubuntu-21-04
date: 2021-08-09T15:10:05
categories: ["Technology", "The Noah Noah"]
author: Noe Rodriguez
featured_image: "./images/greenwithenvy.png"
---
Since mining is a task that doesn't really require a graphical interface, using Linux as OS sounds really ideal for this matter. If you are like me, an enthusiast experimenting with mining, then you already have watched lots of videos on how the professionals are doing it. My goal right now is to be able to run a mining ring without a hard drive, running everything from RAM. If you are here because of that, let me tell you that I'm not there yet, but hopefully will be soon.

When I first started doing this, I was doing it using Hive OS, they have everything ready for you, no need for technical knowledge. The problem for me was the pricing as you pay a lot of fees for the mining pool, the miner and the OS. If you are a new and small miner you are not really making much money, so it's not cool that you are paying all of these different fees.

I guess the biggest challenge out there was to overclock the GPU, so you can make the most MHs per video card. After I left Hive OS I was not having much success with Linux, so for a few days I was running my mining rig with Windows 10, using [MSI Afterburner](https://www.msi.com/Landing/afterburner/graphics-cards), [T-Rex](https://github.com/trexminer/T-Rex), and [Ethermine.](https://ethermine.org/start) I was averaging for each Nvidia GTX 1660 SUPER a total of 30MHs with 80W at 60C. The problem here is that I was still paying the pool fee and the DEV fee, I also don't like Windows that much :P.

After this long and boring introduction, let me share with you how I'm running my show now.

1.  **Install Ubuntu 21.04**
    *   Not really a mystery, pretty much download the [iso](https://ubuntu.com/download), save it on a USB stick (I used [Rufus](https://rufus.ie/en/)), and next, next finish. Here is a link for a guide if you really feel like you need this: [https://ubuntu.com/tutorials/install-ubuntu-desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop)
2.  **Install Nvidia Drivers**
    *   Nothing too difficult either:
        1.  Detect the model of your Nvidia cards and the recommended driver:
            *   ![](./images/ubuntu-drivers-devices.png)
                
        2.  If you like the recommendations use the same command to install the driver:
            *   "sudo ubuntu-drivers autoinstall" && "sudo apt install nvidia-driver-465"
        3.  Reboot and check that driver is working. The easiest way to know if you did it correctly is by opening the Nvidia X Server Settings App.
3.  **Install your preferred miner**
    *   Since I was trying to avoid the DEV fee, I found this amazing Ethereum miner that, at least to me, works as good as T-Rex. This miner has an interesting name, it's called "[nsfminer](https://github.com/no-fee-ethereum-mining/nsfminer)" (no stinkin' fees).
4.  **Overclock your GPU for max performance.**
    *   [GreenWithEnvy](https://gitlab.com/leinardi/gwe) ( GWE) is the perfect tool for this job, it's just as good as MSI Aferburner.

Now I'm running at 31.5MHs with 85-90W at 59C and no DEV or OS fees.

I'm sure you are going to have tons of questions if you ever try to follow this "guide". If you need more specifics just ask in the comments and I will answer all your questions.
