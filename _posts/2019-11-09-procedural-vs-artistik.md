---
title: Procedural vs. Artistik
ig: https://www.instagram.com/p/B8SmCVyHivs/
---

Selama.. Mungkin hampir 10 tahun aku melakukan semuanya secara procedural. Dan sekarang waktuku berubah...

## Thinking in Procedural

Saat aku memikirkan situasi yang kompleks, aku selalu berpikir bagaimana caranya untuk memecahnya menjadi kecil-kecil, lalu melihat polanya sehingga aku bisa membuatnya jadi lebih sederhana dan elegan. Inilah yang aku sebut *thinking in procedural*. Dengan berpikir demikian, aku hampir selalu menemukan cara untuk mempersingkat waktu, membuat usahaku lebih efektif, atau meluaskan dampak atas keringat yang aku lakukan.

Apa manfaatnya berpikir secara prosedural? Sangat besar, apalagi jika kamu suka pemrograman. Dalam bermain logika, aku suka sekali mempersingkat coding sehingga lebih *general purpose* atau *object oriented*. Contoh saja, code ini:

```python
size = int(input())
for i in range(size):
	for j in range(size-i):
		print(end=" ")
	for j in range(i):
		print(end="*")
	for j in range(i):
		print(end="-")
	print(end="\n")
```

bisa menjadi singkat seperti ini:

```python
def f(l, c): for j in range(l): print(end=c)
size = int(input())
for i in range(size):
	f(size-i, " ")
	f(i, "*")
	f(i, "-")
	f(i, "\n")
```

atau lebih baik, one liner:

```python
size = int(input())
for i in range(size):
	args = [(size-i, " "), (i, "*"), (i, "-"), (1, "\n")]
	[[print(end=c) for j in range(l)] for l, c in args]
```

Ada banyak karyaku yang merefleksikan ini: seperti ComCalc, artiscii, TexDraw, 4D Engine, Observatory, SIKAT, dan puluhan lainnya. Mereka semua adalah projek yang membantuku mengasah otakku yang tumpul ini menjadi lebih paham, kreatif dan efisien terhadap segala situasi.

## Thinking in Artistic

Namun *thinking in procedural* pun bisa membuatku buta. Maksudku, mungkin aku terlalu perfeksionis sehingga aku selalu mengeneralisasi semua hal yang aku kerjakan. Ambil satu contoh game buatanku yang legendaris:

![TTHP](https://img.itch.zone/aW1hZ2UvMTY1ODA5Lzc2NTgwNi5wbmc=/original/NuHQ81.png)

Bandingkan game ini dengan state-of-the-art Ori and the Forest:

![Ori](https://steamcdn-a.akamaihd.net/steam/apps/261570/ss_3ed9c721b5ee032f45bbc95d2c2ba0d8bd06269e.1920x1080.jpg?t=1569449401)

100% kamu akan bilang kalau game ku lebih sampah dari Ori. Ya tentu saja karena dia lebih matang. Tapi aku ingin kau berpikir bagaimana kedua game itu dibuat. Ori dibuat dengan orientasi lebih ke story board dan artistik yang mendetail. Lalu gameku?

Percaya atau tidak, Game ku sendiri lebih ke procedural. Mengapa? Karena aku berpikir itu lebih menyingkat waktu. Dan memang benar, aku mungkin bisa membuat puluhan level andaikata aku bisa membuat level design procedural juga saat itu. Namun setelah mencicip Ori, aku menyadari bahwa generalisasi tidak lah selalu baik. Game ku yang procedural itu, kalah hebat dalam gameplay nya karena dia monoton, yakni aku set bahwa kontrol nya sama semua. Ori? Bahkan saat prolog, tidak semua kontrol bisa digunakan. Itu kontrol yang unik dan tidak mungkin digeneralisasi. Belum lagi jeda antara story dan gameplay, kan?

Mungkin artistik bisa disatu padu dengan prosedural namun secara realita, sangatlah susah untuk digenerasi. Generalisasi mengasumsikan dua atau lebih tahap bisa digabung menjadi satu, namun setelah digabung, sangat susah untuk membuat *specific-case* yang dibutuhkan oleh artisan.

Aku berpikir bahwa, ini saatnya aku untuk berhenti mencari solusi dengan generalisasi, dan mulai membuat karya berdasarkan rasa artistik yang mudah dikonsumsi oleh publik, atau grup tertentu. Ya, mungkin dengan generalisasi satu produk bisa bercabang ke banyak produk dengan mudah, tapi untuk artistik, adalah soal kualitas, bukan kuantitas.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A tool is useful if it&#39;s solving a specific problem in shorter time. Creating new tools really feels like it&#39;s counterintuitive.</p>&mdash; WillNode (@willnode) <a href="https://twitter.com/willnode/status/1192801506895859712?ref_src=twsrc%5Etfw">November 8, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
