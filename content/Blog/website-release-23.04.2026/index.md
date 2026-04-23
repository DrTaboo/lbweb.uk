---
date: '2026-04-23T20:05:00+01:00'
draft: false
title: 'Website Release - 23.04.2026'
---

Hai!

## Information

I have finally finished my personal website. This has been a difficult project, however incredibly fun to complete. I went through two different full iterations of this website, where my original iteration was almost complete with the Hugo Toha theme, however I didn't like the style so I started from scratch with the Hugo Blowfish theme. 

## My Journey

I wanted to go through my journey in this post, as to make sure I have a post to show rather than an empty blog posts page. *Just being honest lol.*

### The Homepage

I didn't really know what to put on the homepage, however finally decided upon some project cards, the recent blog post list, and a shortcut to my photography that looked good. I have no idea what else to add so I stuck with it.

The real pain with making this homepage was trying to get the two project cards to be side-by-side while also accounting for smaller displays. I was originally using a margin of `-225px` to get it at a suitable size on a desktop screen, however that didn't work with mobile devices as it would go straight past the screen's limits. To combat this, I ended up writing the cards inside a `<style>` block rather than using inline styles. This allowed me to use media queries, where the outside wrapper uses `-215px` margins to break outside of Blowfish's narrow content column for desktop, but also at `1024px` and below that margin is zeroed out before the cards get squished, and at `640px` the grid drops from two columns down to a single one.

### Photography Page

I originally had a grid of 3x20 to show all my photos, however I knew this was a terrible design choice so I quickly swapped it out for categories with each image being displayed large on the left and showing the metadata on the right. To get the image metadata to show, I used [exifr](https://www.jsdelivr.com/package/npm/exifr) to read the metadate directly from the image bytes in the client's browser. This is possible as I am hosting a static site where the images are placed in manually by myself, then sent to the client for both metadata reading and displaying on the page.

### Publications Page

This was simple page to design. The only hurdle I had to cross was trying to display the PDF on the page rather than having a raw download link. To do this, I ended up using a PDF shortcode that fetched the PDF from it's folder and displays it in the base browser PDF viewer. I also had to try disable the side page-preview panel so that the actual paper was visible.

### About Me Page

This was a handfull to create. The text and buttons were simple, however the background fade to pink was a horrendous hurdle to cross. I tried many differnet methods, and ended up taking the theme's style from the homepage and copying it into the about me custom layout, praying it would work. Luckily, it did and I didn't have to faf around trying to change stuff, or figuring out where to put the background image.

## Anyway.

Thank you for taking the time to read this. And thank you for visiting my site. This has been a large project for me and I'm very happy to finally push it to my domain. If there are any visible issue, please either email me or open an issue on the github.

Thank you! :3