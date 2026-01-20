---
title: "Digital Covid-19 Vaccination Card"
slug: digital-covid-19-vaccination-card
date: 2021-08-21T22:07:22
categories: ["Technology", "The Noah Noah"]
author: Noe Rodriguez
featured_image: "./images/VaxYes.png"
---
If you are looking to have proof of your Covid-19 Vaccination Card on your phone, let me tell you that as of now there is not a standard app for this matter. This is actually hard for me to believe, how is it possible that none of the major pharmacies or medical softwares out there are taking advantage of this?

I'm particularly thinking of Epic Systems (the MyChart Creators), every other hospital and even labs are using their software already, they should be the first ones that should be putting together an app to make this happen. Also after them I'm thinking of Walgreens and CVS, they are almost everywhere and they are also administering vaccines in a large portion of the United States.

At this point some airlines have their preferred app, some Health Departments or DMV from some states have their own app, but if you are like me living in Wisconsin, a state without their own app, there is not an easy way to accomplish this task.

So this post is about on how I finally did it, not sure if this is the best way but hey, this is a way.

The platform I'm using is called [VaxYes](https://gogetdoc.com/vaxyes), it's a web app that is really easy to use if you do some work before using it. Let me walk you through it:

1.  Take a picture with your phone of your Driver's License and of your Vaccination Card (front and back).
2.  If you have a good camera on your cellphone you might need to compress the pictures. The web app says that it can take a picture directly from your phone, but at least with my current cellphone (Samsung Galaxy S21 Ultra) I was always getting the "too large of a file" error message (2MB max). For this matter I went extra geek and resized it using [Termux](https://termux.com/) with ImageMagick using the "convert" command. You probably could get the same compression results using [ShortPixel](https://play.google.com/store/apps/details?id=com.shortpixel.android.imageoptimizer).
3.  Go through the process with VaxYes at [https://gogetdoc.com/vaxyes](https://gogetdoc.com/vaxyes), they will ask for your cellphone number, the pictures from your Driver's License and Vaccination Card, and after you are done you will receive an email from them letting you know that the certificate is ready.
4.  Log in again on the web app [https://gogetdoc.com/vaxyes](https://gogetdoc.com/vaxyes), it will ask for your cellphone number again but now the next step it will ask for your name and DOB, and after that you will login into their dashboard, where if you click on the Certificates tab you will find your certificate ready to download.

![](./images/VaxYes-Screen-Shot.png?height=260)

5\. This is an extra step only for Android, if you want to download the Apple Wallet file and have it available on your Android, you will need to download another app, it's called [YourWallet](https://play.google.com/store/apps/details?id=eu.yourpass.wallet). To be able to get the wallet file, you will need to log in to the VaxYes web app on your computer and click on "Add to Apple Wallet", this will download the file, and that file you can email it to your phone, and as soon as you try to open it YourWallet will recognize the file and then you can finally see it.

![](./images/VaxYes.png?height=260)

Was this easy to figure it out? No.

Do I even need it? Not so far.

Do I feel better having a proof on my phone? Absolutely yes!

Please let me know if you have any questions on how to do this in the comments, I'm more than happy to help you out.
