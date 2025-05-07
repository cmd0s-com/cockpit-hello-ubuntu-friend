
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

## Plugin Structure

- `src/pages/Index.tsx` - The main page component
- `src/components/CockpitHeader.tsx` - The header component mimicking Cockpit's look
- `src/components/SystemInfo.tsx` - Component to display system information

## Adapting for a Real Cockpit Plugin

This is a simulation of a Cockpit plugin built with React. To convert it to a real Cockpit plugin:

1. Replace the mock data with actual Cockpit API calls (using `window.cockpit`)
2. Follow the [Cockpit Development Guide](https://github.com/cockpit-project/cockpit/blob/master/HACKING.md) for proper manifest.json configuration
3. Use proper webpack configuration as used in the [Cockpit Starter Kit](https://github.com/cockpit-project/starter-kit)

## License

MIT
