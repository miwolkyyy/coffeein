# Coffeein

Coffeein adalah aplikasi Next.js sederhana untuk menampilkan daftar menu kopi dan dessert, lengkap dengan filter varian dan modal produk.

## Fitur Utama

- Filter menu berdasarkan tipe produk:
  - `All`
  - `coffee`
  - `iced_coffee`
  - `tea`
  - `dessert`
- Modal produk muncul saat tombol `buy` pada kartu diklik.
- Untuk produk non-dessert, modal menampilkan opsi varian gula:
  - `normal`
  - `less sugar`
  - `no sugar`

## Struktur Data

Data menu disimpan di `Data/Data.ts` dengan tipe `Data` di `Data/type.ts`.

```ts
export interface Data {
  id: number;
  name: string;
  price: number;
  img: string;
  type: string;
  comp?: string[];
}
```

Setiap item berisi:

- `id`: identifier unik
- `name`: nama produk
- `price`: harga produk
- `img`: path gambar dalam folder `public/caffe`
- `type`: kategori produk
- `comp`: optional ingredients

## Komponen Penting

### `app/page.tsx`

- Mengelola state `selectedVariant`
- Meneruskan filter ke `Menu`
- Menyediakan `Hero` yang memuat `MenuVariant`

### `components/Hero.tsx`

- Menampilkan judul dan tombol scroll ke menu
- Menyertakan `MenuVariant` untuk memilih kategori

### `components/MenuVariant.tsx`

- Menampilkan tab pilihan kategori
- Mengirimkan nilai yang dipilih kembali ke halaman

### `components/Menu.tsx`

- Menyaring item berdasarkan `filterType`
- Menampilkan kartu produk dengan `Card`
- Menyisipkan `Modal` untuk detail produk

### `components/Card.tsx`

- Menampilkan setiap produk dalam bentuk kartu
- Memanggil `openModal(item)` saat tombol `buy` diklik

### `components/Modal.tsx`

- Menampilkan detail produk yang dipilih:
  - nama
  - gambar
  - harga
  - ingredients
- Jika produk bukan dessert, menampilkan pilihan gula

## Folder Gambar

Gambar ditempatkan di `public/caffe`, sehingga path yang digunakan di data harus dimulai dengan `/caffe/`.

## Menjalankan Aplikasi

Jalankan perintah berikut di root proyek:

```bash
pnpm dev
```

Buka `http://localhost:3000` di browser.

## Tips Pengembangan

- Tambahkan item baru ke `Data/Data.ts` jika ingin memperluas menu.
- Pastikan gambar baru tersedia di `public/caffe`.
- Sesuaikan `type` untuk memengaruhi filter varian.

membuat halaman cart

-- ketika logo di click arahkan use ke halaman cart
-- gunakan localstorage sebagai penyimpanan data

FEATURES

--cart list
--search product
--locationts
--filter product
--size cup
--sugarity
--payment gate way
