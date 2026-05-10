+++
date = '2026-04-23T17:28:14+01:00'
draft = true
title = 'Website Update 23.04.2026'
+++

Hey!

## Breif Overview

I'm putting all of my focus on this website and I'm hoping to publish it tonight. I've fixed many of the major issues I had previosuly. To list a few the about me page now has a correct background fade rather than a general blur.  The photography page now has categories rather than a block of images. The photography category pages also have the image next to that images metadata. I think this looks much better compared to before. I have also created this blog section, with the intention to keep it up to date.

### Image Metadata

To get the image metadata to show, I used [exifr](https://www.jsdelivr.com/package/npm/exifr) to read the metadate directly from the image bytes in the client's browser. This is possible as I am hosting a static site where the images are placed in manually by myself, then sent to the client for both metadata reading and displaying on the page.

### Favicons

I have also added new favicons to the website. To do this, I had to take a .svg file of the icon and expand it to fit a 1:1 canvas on photoshop. From here, I used [favicon.io](https://favicon.io/favicon-converter/) to generate all the favicon sizes compatiable with browsers across all devices.
