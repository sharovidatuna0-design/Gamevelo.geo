#!/usr/bin/env python
"""
Simple startup script to run both Flask backend and open the website
"""
import subprocess
import webbrowser
import time
import os
import sys

def main():
    print("☕ Coffee Shop Application Startup")
    print("=" * 50)
    
    # Check if Flask is installed
    try:
        import flask
    except ImportError:
        print("❌ Flask not installed. Installing dependencies...")
        os.system('pip install -r requirements.txt')
    
    print("\n✅ Starting Flask backend on http://localhost:5000...")
    print("   (Keep this window open)\n")
    
    # Start Flask in background
    flask_process = subprocess.Popen(
        [sys.executable, 'app.py'],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    
    # Wait for Flask to start
    time.sleep(2)
    
    print("✅ Opening website in your browser...\n")
    
    # Open the HTML file in default browser
    html_path = os.path.abspath('index.html')
    webbrowser.open(f'file://{html_path}')
    
    print("=" * 50)
    print("✅ Everything is ready!")
    print("   - Backend: http://localhost:5000")
    print(f"   - Frontend: {html_path}")
    print("\nPress Ctrl+C to stop the server")
    print("=" * 50)
    
    try:
        flask_process.wait()
    except KeyboardInterrupt:
        print("\n\n👋 Shutting down...")
        flask_process.terminate()

if __name__ == '__main__':
    main()
