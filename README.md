# OpenCap Visualizer

A web-based 3D viewer for OpenCap motion capture data and OpenSim simulations with advanced visualization and recording capabilities.

## Demo

[Live website](https://opencap-visualizer.onrender.com)

This demo shows:
- Side-by-side comparison of multiple animations
- Customizable scene appearance
- 3D model visualization 
- Smooth playback and transitions
- Support for both OpenCap JSON and OpenSim files

## Features

- Load and visualize motion data in 3D:
  - OpenCap JSON files directly
  - OpenSim (.osim) + motion (.mot) file pairs via conversion API
- Compare multiple animations simultaneously
- Adjustable offsets in X, Y, and Z directions
- Color-coded models with customizable colors
- Adjustable transparency for each subject
- Video recording with configurable quality
- High-resolution image capture
- Customizable scene appearance:
  - Background color selection
  - Ground color and texture options
  - Option to hide ground plane
- Playback speed control
- Interactive timeline
- Drag and drop file loading
- Sample files for quick testing

## Prerequisites

- Node.js (v14 or higher)
- Python 3.7+ (for automation scripts)
- Modern web browser (Chrome recommended)
- npm or yarn
- Internet connection for OpenSim file conversion (uses remote API)

## Installation

1. Install Node.js dependencies:
```bash
npm install
```

## Usage

### Starting the Viewer

1. Start the development server:
```bash
npm run serve
```

2. The viewer will be available at `http://localhost:3000`

### Manual Usage

1. Open the viewer in your browser
2. Load your files by:
   - Using the "Load JSON Files" button for OpenCap files
   - Using the "Load OpenSim (.mot+.osim)" button for OpenSim files
   - Dragging and dropping files onto the viewer (supports JSON, OSIM, and MOT files)
   - Using the "Try with Sample Files" button
3. For OpenSim files:
   - You need to provide both a .osim model file and a .mot motion file
   - Files can be uploaded together or separately
   - Conversion happens automatically when both files are available
4. Use the controls to:
   - Adjust model positions using offset controls
   - Control playback using the timeline
   - Customize subject colors and transparency
   - Modify scene appearance (background and ground)
   - Capture high-resolution screenshots
   - Record videos

### OpenSim File Support

The viewer now supports OpenSim model (.osim) and motion (.mot) files:

1. **Upload Methods**:
   - Use the dedicated "Load OpenSim" button
   - Drag and drop files into the viewer
   - Upload one file type first, then the other

2. **Conversion Process**:
   - Files are sent to a conversion API service
   - Converted to the JSON format used by the viewer
   - Automatically loaded and displayed once converted

3. **Requirements**:
   - Both .osim and .mot files must be provided
   - Files should be compatible with each other
   - Internet connection required for API access

### Scene Customization

The viewer offers several options to customize the scene:

- **Background Color**: Choose from various colors to change the scene background
- **Ground Options**:
  - Toggle ground visibility
  - Switch between textured and solid color ground
  - Choose between checkerboard and grid patterns
  - Select from various ground colors
- **Subject Transparency**: Adjust opacity using the transparency slider for each subject

### Recording and Capturing

- **Video Recording**: Click the "Record" button to start recording the scene. Click "Stop Recording" to save the video.
- **Image Capture**: Click the "Capture Image" button to save a high-resolution screenshot of the current scene.


## File Formats

### OpenCap JSON

The viewer expects OpenCap JSON files with the following structure:
```json
{
  "time": [...],
  "bodies": {
    "body_name": {
      "translation": [...],
      "rotation": [...],
      "attachedGeometries": [...]
    }
  }
}
```

### OpenSim Files

- **Model File (.osim)**
- **Motion File (.mot)**

## OpenSim Conversion API

The conversion between OpenSim files and JSON is handled by a dedicated API service:

- Endpoint: `https://opensim-to-visualizer-api.onrender.com/convert-opensim-to-visualizer-json`
- Function: Converts OpenSim model and motion files to the JSON format used by the viewer
- Access: Used automatically when OpenSim files are uploaded to the viewer

## Troubleshooting

1. If OpenSim conversion fails:
   - Check that both .osim and .mot files are valid and compatible
   - Ensure you have an active internet connection
   - The API service might be temporarily unavailable

2. If videos or images don't download:
   - Check browser download permissions
   - Ensure the output directory is writable

3. If models don't appear:
   - Verify JSON file format
   - Check browser console for errors
   - Increase the wait time if using automation

4. If camera controls don't work:
   - Ensure the browser window is focused
   - Try refreshing the page

5. If colors or textures don't update:
   - Try toggling the option off and on again
   - Check browser console for errors

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
