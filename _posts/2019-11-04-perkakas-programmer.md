---
title: Perkakas Programmer
---

Ada banyak bahasa pemrograman didunia ini melebihi bahasa manusia yang kita kenali tiap hari. Tapi dari sekian banyak itu, apakah semuanya harus dikuasai? Apa bahasa pemrograman yang cocok untukmu?

## Python

```python
x = "World"
print("Hello, " + x + "!")
```

Python adalah bahasa pemrograman yang paling dasar, paling natural. kamu tulis `x = 2 + 2` dan x menjadi 4. Kamu tulis `print(x)` 4 itu muncul ke layar. Tidak ada deklarasi variabel, tidak ada typechecking, tidak ada memory management. Python adalah bahasa yang paling simpel untuk memulai karena Python menghandle semua implementasi-spesifik itu dari syntax.

Meski sangat sederhana, Python juga terkenal dengan fiturnya yang sangat terbatas. Contohnya, Python tidak mempunyai implementasi penuh untuk OOP, private-publik akses, dan juga tidak punya getter dan setter. Tapi hey! Untuk python, Siapa yang peduli dengan semua implementasi spesifik tersebut? Inilah mengapa Python sangat populer untuk mereka yang tidak murni background dari pemrograman, seperti para peneliti, data miners, pengembang IoT dan banyak lainnya.

## Javascript

```javascript
let x = "World";
console.log("Hello, " + x + "!");
```

Apa bedanya Javascript dengan Python? Syntax Javascript lebih mendekati dengan bahasa kebanyakan, menggunakan `{` dan `}` sebagai tanda bagian/region, dan control flow yang lebih lengkap seperti `for` dan `switch`. Apa spesialnya dengan javascript? Jika python terbatas, maka Kebanyakan fitur di javascript adalah *opsional*. Deklarasi dalam Javascript boleh dikasih boleh tidak. Titik koma di javascript? Boleh dikasih, boleh tidak. Meski demikian, javascript mempunyai *multi paradigma* yang berarti gaya orang menulis program bisa berbeda jauh satu sama lain.

Apakah Javascript hanya berlaku untuk web? Tentu tidak, sekarang ada Node.JS, yang sangat populer dipakai oleh para senior back-end untuk meluncurkan microservices untuk memenuhi projek hobi dan hiburan mereka. Dan jangan lupa, evolusi Javascript yang sekarang ini gipempar-gemparkan oleh Framework terkemuka seperti Vue dan React.

## Java

```java
class Hello {
	public static void main(String args[]) {
		String x = "World";
		System.out.println("Hello, " + x + "!");
	}
}
```

Java (bukan Javascript) adalah program berbasis *Compiler*, yang berarti jika code Python dan Javascript bisa dieksekusi langsung, beda dengan Java, dia harus di *compile* dulu menjadi sebuah binary, atau `exe`. Java melakukan ini dengan cara mengkonversinya kedalam *Intermediary Language* dan mengeksekusinya secara *JIT* (Just-in-Time). Jika kamu tidak tau apa itu, anggap saja seperti tukang bakso, dia tidak mungkin membuat adonan/bahan mentah saat jualan, jadi dia pasti mempersiapkan dulu sebelum jualan. Itu sama seperti JIT, apa yang diketik di code tidak dieksekusi secara mentah, tapi pasti diolah menjadi 'bahasa' yang lebih mudah dicerna terlebih dahulu.

Apa kelebihannya? *Speed*. Gak perlu dicerna 2 kali. Kekurangannya? Semuanya harus *jelas*, *explicit*. Kamu *harus* mendeklarasikan variabel agar jelas *scope* nya dimana, beserta tipe datanya. Tidak hanya itu, Java ini juga mempunyai mekanisme untuk memproteksi data melalui encapsulation, dan mempunyai opini yang kuat untuk mendeklarasikan tiap object dengan mekanisme getter setter. Kabar baiknya? Meski Java terlihat ribet, memori manajemennya otomatis, dia menggunakan *garbage collector* yang aktif melihat referensi apa saja yang tidak terpakai.

