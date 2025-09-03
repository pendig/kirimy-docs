---
id: client-api
title: Client API
sidebar_position: 1
---

# Client API Documentation

Client API memungkinkan Anda untuk mengirim pesan WhatsApp secara programatis menggunakan HTTP requests. API ini cocok untuk integrasi dengan aplikasi atau sistem lain yang membutuhkan fitur pengiriman pesan WhatsApp otomatis.

## Base URL

```
https://api-client.kirimy.id/v1/
```

## Authentication

Semua request ke Client API memerlukan API key yang dapat Anda dapatkan dari dashboard Kirimy. Sertakan API key dalam header request:

```
api-key: YOUR_API_KEY_HERE
```

## Send Message

### Endpoint

```
POST /send-message
```

### Description

Endpoint ini digunakan untuk mengirim pesan WhatsApp ke nomor tujuan tertentu melalui session yang telah aktif.

### Request Format

**Content-Type:** `multipart/form-data`

### Parameters

| Parameter    | Type   | Required | Description                                                  |
| ------------ | ------ | -------- | ------------------------------------------------------------ |
| `session_id` | string | Yes      | ID session WhatsApp yang akan digunakan untuk mengirim pesan |
| `receive`    | string | Yes      | Nomor WhatsApp tujuan (format: 62xxxxxxxxx)                  |
| `message`    | string | Yes      | Isi pesan yang akan dikirim                                  |

### Example Request

```bash
curl --location --globoff 'https://api-client.kirimy.id/v1/send-message' \
--header 'api-key: b22d5cc2a561ce890269f782d3321858bf5f6e8d26418cbd903e801d7f08fee2' \
--form 'session_id="sessioncontoh"' \
--form 'receive="62xxxxxxxxxxx"' \
--form 'message="hallo, ini dikirim dari kirimy api"'
```

### Response Format

#### Success Response

```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "message_id": "MESSAGE_ID_HERE",
    "session_id": "sessioncontoh",
    "receive": "62xxxxxxxxxxx",
    "timestamp": "2024-01-01T10:00:00Z"
  }
}
```

#### Error Response

```json
{
  "success": false,
  "message": "Error message description",
  "error_code": "ERROR_CODE"
}
```

### Error Codes

| Error Code             | Description                            |
| ---------------------- | -------------------------------------- |
| `INVALID_API_KEY`      | API key tidak valid atau sudah expired |
| `SESSION_NOT_FOUND`    | Session ID tidak ditemukan             |
| `SESSION_INACTIVE`     | Session tidak dalam kondisi aktif      |
| `INVALID_PHONE_NUMBER` | Format nomor WhatsApp tidak valid      |
| `MESSAGE_EMPTY`        | Pesan tidak boleh kosong               |
| `QUOTA_EXCEEDED`       | Kuota pengiriman API telah habis       |

## Prerequisites

Sebelum menggunakan Client API, pastikan:

1. **API Key Tersedia**: Dapatkan API key dari dashboard Kirimy
2. **Session Aktif**: Pastikan session WhatsApp yang akan digunakan dalam kondisi aktif dan terkoneksi
3. **Format Nomor**: Gunakan format nomor Indonesia dengan kode negara 62 (contoh: 62812345678)

## Rate Limiting

Client API memiliki rate limiting untuk mencegah spam:

- **Maksimal 100 requests per menit** per API key
- **Maksimal 1000 pesan per hari** per session

Jika melebihi rate limit, API akan mengembalikan error code `429 Too Many Requests`.

## Best Practices

### 1. Error Handling

Selalu handle error response dengan baik dalam aplikasi Anda:

```javascript
// Example JavaScript
fetch("https://api-client.kirimy.id/v1/send-message", {
  method: "POST",
  headers: {
    "api-key": "YOUR_API_KEY",
  },
  body: formData,
})
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      console.log("Message sent:", data.message_id);
    } else {
      console.error("Error:", data.message);
    }
  })
  .catch((error) => {
    console.error("Network error:", error);
  });
```

### 2. Session Management

- Monitor status session secara berkala
- Siapkan fallback session jika session utama bermasalah
- Jangan hardcode session ID, gunakan konfigurasi yang mudah diubah

### 3. Message Formatting

- Pastikan pesan tidak terlalu panjang (maksimal 4096 karakter)
- Gunakan line break `\n` untuk membuat baris baru
- Test format pesan terlebih dahulu sebelum implementasi massal

## Security

> 🔐 **Penting**: Jangan pernah expose API key di client-side code atau repository publik. Simpan API key di environment variables atau secure configuration.

## Support

Jika mengalami kendala dengan Client API, hubungi tim support Kirimy melalui:

- Dashboard Kirimy (menu Support)
- Email: support@kirimy.id
- WhatsApp: +62xxx-xxxx-xxxx
