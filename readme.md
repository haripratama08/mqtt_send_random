# MQTT Random Data Publisher (Node.js)

![Node.js](https://img.shields.io/badge/Node.js-v14%2B-green) ![License](https://img.shields.io/badge/license-MIT-blue)

Aplikasi Node.js sederhana untuk mensimulasikan perangkat IoT. Aplikasi ini menghubungkan klien ke broker MQTT menggunakan koneksi aman (SSL/TLS) dan mempublikasikan data JSON acak secara berkala ke topik tertentu.

## 📋 Fitur

- **Koneksi Aman (SSL/TLS):** Menggunakan protokol `mqtts://` untuk menjamin keamanan data.
- **Environment Variables:** Manajemen konfigurasi kredensial yang aman menggunakan `.env`.
- **Auto Reconnect:** Mekanisme otomatis untuk menyambung kembali jika koneksi terputus.
- **Random Data Generator:** Mengirimkan payload JSON berisi pesan dan angka acak (1-100).
- **Periodic Publish:** Mengirim data setiap 100 detik (dapat diatur).

## 🛠️ Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (Versi LTS direkomendasikan).
- [NPM](https://www.npmjs.com/) (Biasanya sudah terinstall bersama Node.js).
- Akun MQTT Broker (Contoh: HiveMQ Cloud, EMQX, atau Mosquitto).

## 🚀 Cara Instalasi

1. **Clone repository ini** (atau unduh source code):
   ```bash
   git clone [https://github.com/username-anda/nama-repo.git](https://github.com/username-anda/nama-repo.git)
   cd nama-repo

2. **Buat .env**
MQTT_HOST=
MQTT_PORT=
MQTT_USERNAME=
MQTT_PASSWORD=
MQTT_TOPIC=