# FRONTEND BLUEPRINT — AIRSPACE INTELLIGENCE

## 1. Tujuan
Dokumen ini menjadi acuan kerja frontend untuk proyek Airspace Intelligence.
Blueprint ini adalah dokumen internal tim, bukan halaman yang ditampilkan di website.

Tujuan utama:
- Menentukan struktur UI sebelum coding.
- Menentukan komponen frontend.
- Memisahkan UI dari sumber data.
- Memungkinkan frontend dikerjakan memakai mock data sebelum backend/database siap.
- Memudahkan integrasi API di tahap berikutnya tanpa membongkar UI.

## 2. Prinsip Pengembangan
Alur kerja:
Modul/Gambar Referensi
→ Blueprint
→ UI React
→ Mock Data
→ Data Contract
→ API Integration
→ Backend/Database

Frontend tidak perlu menunggu database selesai.

Jika data backend nantinya lebih sedikit daripada komponen pada desain, frontend tidak boleh membuat data palsu seolah-olah berasal dari database. Komponen harus menangani data kosong/opsional dengan aman.

## 3. Struktur Frontend
Struktur awal yang disarankan:

frontend/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── dashboard/
│   │   ├── aircraft/
│   │   ├── flight/
│   │   └── common/
│   ├── pages/
│   │   └── Dashboard.jsx
│   ├── services/
│   │   └── api.js
│   ├── mocks/
│   │   └── airspace.js
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md

Dokumentasi:
docs/
└── FRONTEND_BLUEPRINT.md

## 4. Struktur Dashboard
Dashboard mengikuti referensi visual dari modul proyek yang diberikan tim.

Komponen utama yang dipersiapkan:
- Sidebar/navigation
- Header/top bar
- Ringkasan statistik/KPI
- Area peta airspace
- Informasi aircraft/flight
- Grafik atau visualisasi statistik
- Tabel/detail penerbangan
- Filter/search jika tersedia pada spesifikasi modul
- Status/loading/empty/error state

Catatan:
Jangan menambahkan fitur yang tidak ada di kebutuhan proyek hanya karena terlihat menarik. Komponen final mengikuti spesifikasi modul dan kesepakatan tim.

## 5. Data yang Perlu Dipetakan
Frontend perlu memisahkan data menjadi dua kategori.

### A. Data inti aircraft/flight
Contoh field yang mungkin digunakan:
- aircraft_id
- callsign
- latitude
- longitude
- altitude
- speed
- heading
- vertical_rate
- timestamp
- status

### B. Data agregat/dashboard
Contoh:
- total_aircraft
- active_flights
- grounded/unknown status bila memang tersedia
- timestamp update
- statistik lain yang benar-benar disediakan backend

Field di atas adalah kandidat data contract awal, bukan klaim bahwa semuanya sudah tersedia di database.

## 6. Mock Data
Sebelum API siap, gunakan mock data dengan bentuk yang sama seperti data contract.

Contoh:

{
  "aircraft_id": "AIR-001",
  "callsign": "TEST001",
  "latitude": -6.30,
  "longitude": 107.30,
  "altitude": 12000,
  "speed": 450,
  "heading": 90,
  "vertical_rate": 0,
  "timestamp": "2026-10-02T06:00:00Z",
  "status": "active"
}

Mock data hanya untuk menjalankan dan menguji UI. Jangan dianggap sebagai data produksi.

## 7. Data Contract Frontend ↔ Backend
Sebelum integrasi, sepakati dengan anggota backend:

1. Nama endpoint.
2. HTTP method.
3. Bentuk JSON response.
4. Nama dan tipe setiap field.
5. Field wajib dan opsional.
6. Format timestamp.
7. Format koordinat.
8. Format status.
9. Pagination/filter jika dibutuhkan.
10. Bentuk response error.

Contoh response:

{
  "data": [
    {
      "aircraft_id": "AIR-001",
      "callsign": "TEST001",
      "latitude": -6.30,
      "longitude": 107.30,
      "altitude": 12000,
      "speed": 450,
      "heading": 90,
      "status": "active"
    }
  ],
  "updated_at": "2026-10-02T06:00:00Z"
}

Bentuk final harus mengikuti backend yang disepakati tim.

## 8. Arsitektur Data Frontend
Gunakan service layer agar komponen UI tidak langsung bergantung pada fetch/axios.

Pola:

Component
→ Hook/State
→ Service API
→ Backend API

Saat backend belum siap:

Component
→ Hook/State
→ Mock Service
→ Mock Data

Saat backend siap, sumber data diganti pada service layer. Komponen UI sebisa mungkin tidak perlu dirombak.

## 9. State yang Wajib Ditangani
Setiap bagian yang mengambil data harus mempertimbangkan:

### Loading
Tampilkan loading indicator/skeleton.

### Success
Tampilkan data normal.

### Empty
Jika API berhasil tetapi data kosong, tampilkan empty state.

### Error
Jika request gagal, tampilkan pesan error yang jelas.

### Partial data
Jika sebagian field tidak tersedia, jangan membuat nilai palsu. Gunakan fallback UI yang sesuai.

## 10. Integrasi API
Tahap integrasi dilakukan setelah endpoint backend tersedia.

Checklist:
- Base URL sudah ditentukan.
- Endpoint sudah disepakati.
- Response JSON sudah cocok.
- Service API dibuat.
- Mock service dapat diganti API service.
- Loading/error/empty state diuji.
- Tidak ada hardcode data produksi di komponen.

## 11. Git & Dokumentasi
Blueprint disimpan di repository GitHub, misalnya:

docs/FRONTEND_BLUEPRINT.md

Blueprint tidak perlu ditampilkan pada website.

Commit awal yang disarankan:
"docs: add frontend blueprint"

Kemudian pekerjaan UI dilakukan melalui commit terpisah, misalnya:
- "feat: setup frontend"
- "feat: add dashboard layout"
- "feat: add aircraft components"
- "feat: add mock airspace data"
- "feat: integrate airspace api"

## 12. Urutan Pengerjaan Frontend
### Tahap 1 — Dokumentasi
- Finalisasi blueprint.
- Simpan blueprint ke GitHub.

### Tahap 2 — Foundation
- Setup React.
- Setup routing jika diperlukan.
- Setup styling.
- Buat struktur folder.

### Tahap 3 — Layout
- Sidebar.
- Header.
- Main dashboard container.
- Responsive layout.

### Tahap 4 — Dashboard UI
- KPI/statistik.
- Map area.
- Aircraft/flight information.
- Chart.
- Table/detail.
- Filter/search sesuai modul.

### Tahap 5 — Mock Data
- Buat mock data.
- Hubungkan komponen ke mock service.
- Uji semua state.

### Tahap 6 — UI Refinement
- Spacing.
- Typography.
- Responsive behavior.
- Empty/error/loading state.
- Konsistensi visual dengan referensi modul.

### Tahap 7 — API Integration
- Tunggu/terima API contract final.
- Implement service.
- Ganti mock service dengan API.
- Uji response nyata.

### Tahap 8 — Final Testing
- Test seluruh halaman.
- Test data kosong.
- Test API error.
- Test responsive.
- Test integrasi dengan backend.

## 13. Pembagian Tanggung Jawab
### Frontend
- UI/UX implementation.
- Component architecture.
- State management.
- Mock data.
- API consumption.
- Loading/error/empty states.
- Responsive design.

### Backend
- API.
- Database.
- Business logic.
- Data validation.
- Authentication/authorization jika diperlukan.
- Penyediaan data sesuai contract.

### Kesepakatan bersama
- Data contract.
- Endpoint.
- Nama field.
- Format response.
- Perubahan schema.

## 14. Definition of Done — Frontend
Frontend dianggap selesai jika:
- UI sesuai spesifikasi modul.
- Semua komponen utama sudah dibuat.
- Tidak bergantung pada data hardcode produksi.
- Mock data dapat menjalankan dashboard.
- Loading/empty/error state tersedia.
- Service layer sudah terpisah dari UI.
- API contract sudah disepakati.
- API nyata sudah terintegrasi.
- Data yang tidak tersedia ditangani dengan aman.
- Responsive layout sudah diuji.
- Source code dan dokumentasi sudah tersimpan di GitHub.

## 15. Catatan Penting
Blueprint ini adalah "kontrak kerja" frontend, bukan desain yang harus dipaksakan ketika data backend berbeda.

Jika database hanya menyediakan sebagian data:
1. Gunakan data yang memang tersedia.
2. Komponen yang membutuhkan data tersebut dapat dibuat kondisional.
3. Data yang bisa dihitung dari data tersedia boleh dihitung di frontend hanya jika memang sesuai kebutuhan.
4. Data yang tidak tersedia jangan dibuat seolah-olah nyata.
5. Jika sebuah fitur membutuhkan data yang sama sekali tidak ada, diskusikan dengan backend apakah field tersebut perlu ditambahkan atau fitur tersebut memang tidak masuk scope.

Dengan pola ini, frontend dapat dikerjakan dari sekarang tanpa menunggu database selesai, tetapi tetap aman ketika masuk tahap integrasi.
