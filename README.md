# Abu Amr Website

## Project Overview

This is a static promotional website for a Kuwait-based service offering ceramic, porcelain, and marble installation and related maintenance. It introduces the services, showcases example work, and provides contact options for prospective customers.

The site includes location-specific pages for Hawalli, Farwaniya, and Salmiya, as well as a page of ceramic selection and maintenance articles.

## Features

- Service information for ceramic, porcelain, and marble installation, ceramic maintenance, and related work.
- Work gallery with image previews.
- Contact form that prepares a WhatsApp message, plus direct telephone and WhatsApp links.
- Location-specific service information for Hawalli, Farwaniya, and Salmiya.
- Blog-style articles about choosing, installing, and maintaining ceramic surfaces.
- Mobile navigation, smooth in-page scrolling, and a back-to-top control.
- Search metadata and structured data in the HTML pages.

The home page includes gallery category controls, but the current configuration code calls `getConfig()`, which is not defined in the project. As a result, configuration-driven gallery filtering may not work until that dependency is resolved.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Cairo) and Font Awesome 6.4.0, both loaded from external CDNs

There is no package manifest or build system in the project.

## Project Structure

```text
.
├── README.md
├── index.html
├── hawalli.html
├── farwaniya.html
├── salmiya.html
├── blog.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
├── js/
│   ├── config.js
│   └── script.js
└── assets/
    └── images/
        ├── 1.jpg
        ├── kuwait.png
        ├── ارضيات.jpg
        ├── بعد.png
        ├── حمام.jpg
        ├── درج.jpg
        ├── سيراميك.jpg
        ├── غرف.jpg
        ├── فني.jpg
        ├── قبل.png
        ├── مدخل.jpg
        ├── مطبخ.jpg
        └── معيشة.jpg
```

### Main files and directories

- `index.html` — Main landing page with service details, gallery, and contact form.
- `hawalli.html`, `farwaniya.html`, and `salmiya.html` — Area-specific service pages.
- `blog.html` — Ceramic-related advice and article content.
- `css/style.css` — Shared layout, styling, and responsive presentation.
- `js/script.js` — Navigation, scrolling, gallery interactions, image modal, contact form handling, and section animations.
- `js/config.js` — Intended default business, hero, and gallery data for the configuration-driven gallery.
- `assets/images/` — Site images, with both Arabic and English filenames.
- `robots.txt` — Crawler directives and a reference to the sitemap.
- `sitemap.xml` — Sitemap entries for the home page, its listed sections, and the existing location and blog pages.

## Getting Started

This project does not require installation or a build step. To view it, open `index.html` in a web browser. The pages use relative paths for the local stylesheet, scripts, and images.

Google Fonts and Font Awesome are loaded from external CDNs, so an internet connection is needed for those external font and icon resources.

## Development Notes

- Keep the Arabic image filenames unchanged when editing references; the HTML and gallery data use those filenames.
- The home page's gallery controls depend on `getConfig()`, but no definition for that function is present in the current project files. Resolve that dependency before relying on gallery filtering.
- `robots.txt` disallows crawling some file paths, including `/admin.html` and configuration files. Keep crawler directives aligned with the files and content intended to be publicly discoverable.
