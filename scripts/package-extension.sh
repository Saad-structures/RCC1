#!/bin/bash

# This script packages the Abaqus VS Code extension for distribution.

# Define the output directory for the packaged extension
OUTPUT_DIR="package"

# Create the output directory if it doesn't exist
mkdir -p $OUTPUT_DIR

# Copy necessary files to the output directory
cp -r src $OUTPUT_DIR/src
cp -r python $OUTPUT_DIR/python
cp package.json $OUTPUT_DIR/
cp tsconfig.json $OUTPUT_DIR/
cp -r .vscode $OUTPUT_DIR/.vscode
cp README.md $OUTPUT_DIR/
cp .gitignore $OUTPUT_DIR/

# Create a zip file of the packaged extension
cd $OUTPUT_DIR
zip -r ../abaqus-vscode-extension.zip . 

# Go back to the original directory
cd ..

# Clean up the output directory
rm -rf $OUTPUT_DIR

echo "Packaging complete: abaqus-vscode-extension.zip"