<div align="center">

# 🎬 Awesome Media

**A curated list of awesome software and tools for Plex, Jellyfin, and Emby media servers**

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fawesome-media.net)](https://awesome-media.net/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![GitHub stars](https://img.shields.io/github/stars/johnfawkes/awesome-media.svg?style=social&label=Stars)](https://github.com/johnfawkes/awesome-media)
[![GitHub contributors](https://img.shields.io/github/contributors/johnfawkes/awesome-media.svg)](https://github.com/johnfawkes/awesome-media/graphs/contributors)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[📖 **Browse the Documentation**](https://awesome-media.net/) • [🚀 **Contributing**](#contributing) • [💬 **Support**](#support)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Categories](#categories)
- [Featured Tools](#featured-tools)
- [Getting Started](#getting-started)
- [Local Development](#local-development)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## 🎯 About

**Awesome Media** is a comprehensive, community-driven collection of the best software, tools, scripts, and resources for enhancing your self-hosted media server experience. Whether you're running **Plex**, **Jellyfin**, or **Emby**, this curated list helps you discover powerful tools to:

- 🔍 **Automate media acquisition** (Sonarr, Radarr, Lidarr)
- 📊 **Monitor and analyze** your media consumption (Tautulli, Medialytics)
- 🎨 **Enhance metadata and artwork** (Kometa, Title Card Maker)
- 🔄 **Sync with external services** (PlexTraktSync, PlexAniSync)
- 🎯 **Manage requests and users** (Overseerr, Ombi, Wizarr)
- ⚙️ **Optimize and maintain** your media libraries

> **🌟 Why Awesome Media?**  
> Stop spending hours researching tools and configurations. Our community has already tested, validated, and documented the best solutions for every media server need.

## 📂 Categories

Our documentation is organized into these main categories:

### 🛠️ **Third-Party Software**
- **Media Acquisition**: Sonarr, Radarr, Lidarr, Prowlarr
- **Download Management**: qBittorrent tools, Tdarr transcoding
- **Metadata Management**: Kometa, Recyclarr, TRaSH Guides
- **Monitoring & Analytics**: Tautulli, Medialytics, Notifiarr
- **Request Management**: Overseerr, Ombi
- **User Management**: Wizarr, Wrapperr
- **Synchronization**: PlexTraktSync, PlexAniSync
- **Maintenance**: Maintainarr, qBitManage
- **And many more...**

### 📜 **Scripts & Automation**
- **Kometa Scripts**: PATTRMM, Romaji Renamer
- **Standalone Scripts**: JBOPS, Bullmoose20 Scripts, ChazLarson Scripts
- **Custom automation solutions**

### 🎨 **Poster & Artwork Tools**
- **Poster Management**: Plex Poster Set Helper, Daps, Posterizarr
- **Custom artwork creation tools**
- **Automated poster downloading**

## ⭐ Featured Tools

| Tool | Description | Category |
|------|-------------|----------|
| [**Kometa**](https://kometa.wiki/) | Powerful metadata and collection management | Metadata |
| [**Overseerr**](https://overseerr.dev/) | Request management for Plex | Requests |
| [**Tautulli**](https://tautulli.com/) | Plex monitoring and statistics | Monitoring |
| [**Sonarr**](https://sonarr.tv/) | Smart PVR for TV shows | Acquisition |
| [**Radarr**](https://radarr.video/) | Movie collection manager | Acquisition |
| [**PlexTraktSync**](https://github.com/Taxel/PlexTraktSync) | Sync Plex with Trakt.tv | Sync |

## 🚀 Getting Started

### Quick Start

1. **Browse the documentation**: Visit [awesome-media.net](https://awesome-media.net/) to explore all available tools
2. **Choose your media server**: Find tools specific to Plex, Jellyfin, or Emby
3. **Select your category**: Browse by acquisition, monitoring, metadata, etc.
4. **Follow installation guides**: Each tool includes detailed setup instructions

### Recommended Setup Flow

1. **Start with the basics**: Media server (Plex/Jellyfin/Emby)
2. **Add acquisition tools**: Sonarr, Radarr, Prowlarr
3. **Enhance with monitoring**: Tautulli for analytics
4. **Improve metadata**: Kometa for collections and artwork
5. **Add request management**: Overseerr or Ombi
6. **Optimize with scripts**: Custom automation as needed

## 🔧 Local Development

Want to contribute to the documentation or run it locally? This site is built with
[Docusaurus](https://docusaurus.io/).

### Prerequisites

- Node.js 20 or higher
- Git

### Setup

```bash path=null start=null
# Clone the repository
git clone https://github.com/johnfawkes/awesome-media.git
cd awesome-media

# Install dependencies
npm install

# Serve locally with hot reload
npm start

# Build static site
npm run build
```

The documentation will be available at `http://localhost:3000`

### Documentation Structure

- `docs/` - Main documentation content
- `docusaurus.config.js` - Docusaurus site configuration
- `sidebars.js` - Sidebar/navigation structure
- `src/` - Custom styles and pages
- `static/` - Static assets (images, favicon, CNAME)

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Adding New Software

1. **Check existing entries**: Search [issues](https://github.com/johnfawkes/awesome-media/issues) and [pull requests](https://github.com/johnfawkes/awesome-media/pulls)
2. **Use our template**: Follow the format in [new-software.md](https://github.com/JohnFawkes/awesome-media/blob/master/.github/ISSUE_TEMPLATE/new-software.md)
3. **One tool per PR**: Submit separate pull requests for each new tool
4. **Ensure it's maintained**: Only actively maintained projects are accepted
5. **Include working instructions**: Verify installation guides work

### Contribution Guidelines

- ✅ **Actively maintained** projects only
- ✅ **Working installation** instructions required
- ✅ **Relevant to media servers** (Plex, Jellyfin, Emby)
- ✅ **One submission per pull request**
- ✅ **Clear, concise descriptions**
- ❌ No abandoned or outdated projects
- ❌ No duplicate entries
- ❌ No promotional content without value

### Types of Contributions

- 🆕 **Add new tools** and software
- 📝 **Update existing entries** with new information
- 🐛 **Fix broken links** or outdated information
- 📖 **Improve documentation** and guides
- 🎨 **Enhance formatting** and presentation

## 💬 Support

Need help or have questions?

- 🌐 **Documentation**: [awesome-media.net](https://awesome-media.net/)
- 💬 **Discord**: [@anonfawkes](https://discordapp.com/users/732333413008277504)
- 🐛 **Issues**: [GitHub Issues](https://github.com/johnfawkes/awesome-media/issues)
- 📧 **Discussions**: [GitHub Discussions](https://github.com/johnfawkes/awesome-media/discussions)

## 🏆 Contributors

Thanks to all our amazing contributors who help make this project better!

[![Contributors](https://contrib.rocks/image?repo=johnfawkes/awesome-media)](https://github.com/johnfawkes/awesome-media/graphs/contributors)

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

**Made with ❤️ by the media server community**

[🔝 Back to top](#-awesome-media)

</div>
