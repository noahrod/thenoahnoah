# Migration Guide: WordPress Fairy to Hugo

This guide helps you migrate your content from WordPress Fairy theme to Hugo Fairy theme.

## Overview

The Fairy Hugo theme has been converted from the WordPress version, maintaining the same visual design and features while adapting to Hugo's static site generator architecture.

## Key Differences

### WordPress vs Hugo

| Feature | WordPress | Hugo |
|---------|-----------|------|
| **Dynamic/Static** | Dynamic (PHP/MySQL) | Static (HTML) |
| **Templates** | PHP files | Go templates |
| **Content** | Database | Markdown files |
| **Widgets** | WordPress widgets | Data files/partials |
| **Customizer** | Live preview | Config file |
| **Plugins** | PHP plugins | Shortcodes/partials |

## Migration Steps

### 1. Export WordPress Content

Use the Hugo export plugin or manual export:

```bash
# Using wordpress-to-hugo-exporter plugin
# Or export to Jekyll format and convert
```

### 2. Content Structure

WordPress posts → `content/post/`
WordPress pages → `content/`

#### WordPress Front Matter (Custom Fields)
```php
// WordPress
get_post_meta($post->ID, 'fairy_sidebar_layout', true);
```

#### Hugo Front Matter (YAML)
```yaml
---
title: "My Post"
date: 2024-01-18
sidebar: "right-sidebar"
categories: ["Technology"]
tags: ["hugo", "web"]
featured_image: "image.jpg"
---
```

### 3. Taxonomy Mapping

| WordPress | Hugo |
|-----------|------|
| Categories | categories |
| Tags | tags |
| Custom taxonomies | Configure in hugo.toml |

### 4. Featured Images

**WordPress:**
```php
the_post_thumbnail();
```

**Hugo:**
```yaml
---
featured_image: "my-image.jpg"
---
```

Place images in the same directory as your post or in `static/images/`.

### 5. Widgets to Data Files

**WordPress Sidebar Widgets** → **Hugo Data Files**

Create `data/sidebar.toml`:
```toml
[[widgets]]
type = "search"

[[widgets]]
type = "recent-posts"

[[widgets]]
type = "categories"
```

### 6. Menu Migration

**WordPress:**
- Appearance → Menus

**Hugo (`hugo.toml`):**
```toml
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1
```

### 7. Theme Settings

**WordPress Customizer** → **Hugo Configuration**

| WordPress Option | Hugo Config |
|------------------|-------------|
| Sidebar Position | `params.sidebarBlogPage` |
| Show Breadcrumb | `params.showBreadcrumb` |
| Blog Layout | `params.blogPageMasonry` |
| Featured Image | `params.showSingleFeaturedImage` |

### 8. Shortcodes

WordPress shortcodes need to be recreated as Hugo shortcodes or converted to Markdown.

**WordPress:**
```php
[gallery ids="1,2,3"]
```

**Hugo:**
Create shortcode in `layouts/shortcodes/gallery.html`

### 9. Custom Functions

WordPress functions need to be adapted:

**WordPress:**
```php
<?php fairy_posted_by(); ?>
```

**Hugo:**
```go
{{ with .Params.author }}{{ . }}{{ end }}
```

### 10. Comments

**WordPress:** Native comments
**Hugo:** Disqus or other third-party services

In `hugo.toml`:
```toml
disqusShortname = "your-disqus-shortname"

[params]
  showComments = true
```

## Content Migration Examples

### Post Example

**WordPress Export:**
```xml
<item>
  <title>My First Post</title>
  <pubDate>Wed, 18 Jan 2024 10:00:00 +0000</pubDate>
  <category>Technology</category>
  <wp:post_type>post</wp:post_type>
</item>
```

**Hugo Format:**
```yaml
---
title: "My First Post"
date: 2024-01-18T10:00:00Z
categories: ["Technology"]
draft: false
---

Post content here...
```

### Page Example

**WordPress:** Static page
**Hugo:** `content/about.md`

```yaml
---
title: "About"
date: 2024-01-18
type: "page"
---

About content...
```

## Testing Checklist

- [ ] Homepage displays correctly
- [ ] Single posts render properly
- [ ] Pages work as expected
- [ ] Sidebar shows in correct position
- [ ] Navigation menus appear
- [ ] Categories and tags function
- [ ] Search works (if enabled)
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] Links are not broken

## Performance Notes

Hugo builds are much faster than WordPress:
- No database queries
- Pre-rendered HTML
- CDN-friendly static files
- Better caching

## Useful Commands

```bash
# Create new post
hugo new post/my-post.md

# Start local server
hugo server -D

# Build for production
hugo --minify

# Check for issues
hugo --logLevel info
```

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [WordPress to Hugo Migration](https://gohugo.io/tools/migrations/)
- [Hugo Discourse Forum](https://discourse.gohugo.io/)

## Need Help?

- Check the [README.md](README.md) for theme documentation
- Visit [Hugo Forums](https://discourse.gohugo.io/)
- Submit issues on GitHub

## Next Steps

1. Test the theme with your content
2. Customize `hugo.toml` settings
3. Add your branding (logo, colors)
4. Set up deployment (Netlify, Vercel, GitHub Pages)
5. Configure domain and SSL

Enjoy your new Hugo-powered site!
