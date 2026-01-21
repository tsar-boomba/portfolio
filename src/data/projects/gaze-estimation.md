---
name: Gaze Estimation
repo: https://github.com/tsar-boomba/tom-gaze
link: https://gaze.igamble.dev/
technologies: [Rust, TypeScript, Onnx]
addDate: Tue Jan 20 2026 19:25:17
---

Demo of using [Onnx](https://onnxruntime.ai) Runtime to run a gaze estimation model. The web version is linked below, but there is a native Rust version available in the repository as well.

- Used Web APIs for camera access as well as image manipulation.
- Used OpenCV for image processing in the native version.
- Used basic tensor operations and Non-Maximum Suppression to pre-process inputs as well as post-process out puts.
