# Fairy Hugo Theme

A minimal and beautiful blog theme for Hugo, converted from the WordPress Fairy theme by CandidThemes.

## Features

- 📱 Fully responsive design
- 🎨 Clean and minimal layout
- 📝 Multiple sidebar options (left, right, none, centered)
- 🖼️ Masonry and grid layout options
- 🔍 Built-in search functionality
- 📊 Category and tag support
- 💬 Comments support (Disqus)
- 🎯 Breadcrumb navigation
- 🔝 Scroll to top button
- 🌐 Multi-language ready
- ⚡ Fast performance with Hugo Pipes
- 📱 Font Awesome icons included

## Installation

### As a Hugo Module

```bash
hugo mod init github.com/yourusername/yoursite
hugo mod get github.com/candidthemes/fairy-hugo
```

### As a Git Submodule

```bash
cd your-hugo-site
git submodule add https://github.com/candidthemes/fairy-hugo.git themes/fairy-hugo
```

### Manual Installation

1. Download the theme files
2. Extract to your Hugo site's `themes/fairy-hugo` directory
3. Update your `hugo.toml`:

```toml
theme = "fairy-hugo"
```

## Configuration

Copy `hugo.toml.example` to your site root as `hugo.toml` and customize the settings:

```toml
baseURL = "https://yoursite.com/"
title = "Your Site Title"
theme = "fairy-hugo"

[params]
  description = "Your site description"
  sidebarBlogPage = "right-sidebar"
  showBreadcrumb = true
  # ... more options
```

### Sidebar Options

The theme supports multiple sidebar layouts:

- `right-sidebar` - Sidebar on the right (default)
- `left-sidebar` - Sidebar on the left
- `no-sidebar` - Full width, no sidebar
- `middle-column` - Centered content column

Configure globally in `hugo.toml` or per-page in front matter:

```yaml
---
title: "My Post"
sidebar: "no-sidebar"
---
```

### Menu Configuration

Add menus in your `hugo.toml`:

```toml
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1

[[menu.social]]
  name = "facebook"
  url = "https://facebook.com/yourpage"
```

## Content

### Creating Posts

```bash
hugo new post/my-first-post.md
```

Example front matter:

```yaml
---
title: "My First Post"
date: 2024-01-18
draft: false
author: "Your Name"
categories: ["Technology"]
tags: ["hugo", "web"]
featured_image: "image.jpg"
sidebar: "right-sidebar"
---

Your content here...
```

### Creating Pages

```bash
hugo new about.md
```

## Customization

### Custom CSS

Add custom CSS files in your site's `static/css/` folder and reference them in `hugo.toml`:

```toml
[params]
  customCSS = ["css/custom.css"]
```

### Widgets

Configure sidebar widgets by creating `data/sidebar.toml`:

```toml
[[widgets]]
type = "search"

[[widgets]]
type = "recent-posts"

[[widgets]]
type = "categories"
```

### Footer Widgets

Create data files for footer columns:
- `data/footer1.toml`
- `data/footer2.toml`
- `data/footer3.toml`

## Development

### Requirements

- Hugo Extended v0.112.0 or later
- Git

### Local Development

```bash
hugo server -D
```

Visit `http://localhost:1313`

## Credits

- **Original WordPress Theme**: [Fairy by CandidThemes](https://www.candidthemes.com/themes/fairy)
- **Hugo Conversion**: Your Name
- **Icons**: Font Awesome
- **Framework**: Hugo Static Site Generator

## License

This theme is licensed under the GNU General Public License v2.0 or later.

## Support

- **Documentation**: [Theme Documentation](#)
- **Issues**: [GitHub Issues](https://github.com/candidthemes/fairy-hugo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/candidthemes/fairy-hugo/discussions)

## Changelog

### v1.0.0 (2024-01-18)
- Initial Hugo conversion from WordPress theme
- Core functionality implemented
- Responsive design
- Multiple layout options
- Widget support
