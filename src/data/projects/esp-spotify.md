---
name: ESP Spotify Display
repo: https://github.com/tsar-boomba/esp-spotify
technologies: [Rust, Embedded]
addDate: Tue Jan 20 2026 19:25:19
---

A small embedded project that shows what I'm listening to on Spotify by using my Spotify service.

- ESP32-S3 board, written in Rust
- Uses the SPI peripheral to communicate with the screen
- Uses ESP-IDF's HTTP/S client to connect with my server
- Uses WPA2(Personal / Enterprise) for Wifi authentication
- Uses FreeRTOS's tasks/threads to achieve non-blocking updates to UI
