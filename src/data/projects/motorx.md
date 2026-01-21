---
name: Motorx
repo: https://github.com/tsar-boomba/motorx
technologies: [Rust]
addDate: Tue Jan 20 2026 19:25:22
---

My reverse-proxy made in 100% safe rust!

- Supports http/1.1, http/2, and http/3!
- http/1.1 or http/2 cleartext for upstreams
- Simple JSON configuration
- Written with async Rust for CPU efficiency
- TLS termination through provided certs or [ACME](https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment) for automatic certs
- TLS Server Name Indication (SNI) based routing for hosting multiple sites on a single IP address
- All of these features are used in production to host some of my sites
