---
date: '2026-05-10T13:30:00+01:00'
draft: false
title: 'Website Update - 10.05.2026'
---

Hai again!

I've made some changed around the site and I thought I'd write a quick blog post. take my mind of things.

## Homepage

Some small changes to the home page. I added some icons with `onmouseenter` events to redirect users to my socials. There's also a divider between the cards and the top section. Furthermore, I added a small bio text under my name using `<h1 style="font-size: 1rem; font-weight: bold; margin-bottom: 0.5rem; text-align: center; border: none; padding: 0;">` to make it look like an `<h4>` header visually, while acting as an `<h1>` header for Google SEO to pick it up as the website description. I have no idea why Google ignores the website's metadata description natively, but whatever works I guess!

## About Me page

I've completely remade the About Me page using a new HTML layout override. I took the homepage layout configuration and edited it slightly to align the text to the left, and placed my profile picture right next to the site title. I also added card blocks to showcase what I do, rather than using a large, boring block of text. Finally, I added the same social icons from the homepage to the bottom of the page, with some small structural tweaks to make them fit the layout cleanly.

## Google SEO

With the addition of the hidden `<h1>` styling trick on the homepage, I am praying that Google finally pulls it as the main website search snippet. Sadly, the only way to see the domain listed on Google right now is to explicitly search `site:lbweb.uk`, as it takes around three to six months for the algorithm to trust a brand-new domain and display it for standard keyword searches. But hey, it is technically there! The sub-pages are also currently being crawled and indexed. Validation should take around one to two weeks, followed by the standard timeline for organic search terms.

## Footer

Furthermore, I've added an automated `Last Updated:` timestamp to the site footer. It hooks directly into Hugo's template engine using the `{{ now.Format "Jan 02, 2006" }}` function. Every single time the site is built and deployed via GitHub Actions runner, the system clock injects the live date directly into the HTML line, sitting right next to the theme attribution credits.

## Finally

Thank you for reading. :3	