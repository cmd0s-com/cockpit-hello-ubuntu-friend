
# Cockpit Hello Ubuntu Plugin

A simple "Hello World" plugin for Cockpit Project designed for Ubuntu systems.

## What is this?

This is a simple starter plugin for [Cockpit Project](https://cockpit-project.org/) that demonstrates how to create a basic plugin. It displays a greeting and some basic system information.

## Development Setup

### Prerequisites

You need Node.js and npm to build this plugin. If you don't have them installed:

```bash
sudo apt update
sudo apt install -y nodejs npm
```

### Building the Plugin

1. Clone this repository
```bash
git clone https://github.com/yourusername/cockpit-hello-ubuntu.git
cd cockpit-hello-ubuntu
```

2. Install dependencies
```bash
npm install
```

3. Build the plugin
```bash
npm run build
```

## Installation on Ubuntu 24.04 LTS

### Method 1: Manual Installation (Recommended for Development)

1. Make sure Cockpit is installed:
```bash
sudo apt update
sudo apt install -y cockpit
```

2. Create a directory for the plugin:
```bash
sudo mkdir -p /usr/share/cockpit/hello-ubuntu
```

3. Copy the built files to the Cockpit plugins directory:
```bash
sudo cp -r dist/* /usr/share/cockpit/hello-ubuntu/
```

4. Restart Cockpit:
```bash
sudo systemctl restart cockpit
```

5. Access Cockpit at https://localhost:9090 or https://your-server-ip:9090 and your plugin should be available in the navigation menu.

### Method 2: Create a Debian Package

For a more proper installation, you can create a Debian package:

1. Install packaging tools:
```bash
sudo apt install -y devscripts debhelper
```

2. Create a debian directory in your project:
```bash
mkdir -p debian
```

3. Create necessary debian files (control, rules, etc.)

4. Build the package:
```bash
debuild -us -uc
```

5. Install the created .deb package:
```bash
sudo dpkg -i ../cockpit-hello-ubuntu_0.1_all.deb
```

## Troubleshooting Installation

If your plugin doesn't appear in the Cockpit interface:

1. Check if the plugin files were copied correctly:
```bash
ls -la /usr/share/cockpit/hello-ubuntu/
```

2. Check Cockpit logs for errors:
```bash
journalctl -u cockpit
```

3. Make sure your manifest.json is correctly formatted and located at:
```
/usr/share/cockpit/hello-ubuntu/manifest.json
```

4. Try clearing your browser cache or using a private/incognito window.

## Plugin Structure

- `src/pages/Index.tsx` - The main page component
- `src/components/CockpitHeader.tsx` - The header component mimicking Cockpit's look
- `src/components/SystemInfo.tsx` - Component to display system information

## License

MIT
