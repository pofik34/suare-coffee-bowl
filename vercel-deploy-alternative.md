# Vercel CLI ile Deploy (Git Kurmadan)

## 1. Vercel CLI Kurulumu

```bash
npm install -g vercel
```

## 2. Vercel'e Giriş

```bash
vercel login
```

## 3. Projeyi Deploy Et

Proje klasöründe:

```bash
vercel
```

İlk seferinde size sorular soracak:
- Set up and deploy? → Y
- Which scope? → Hesabınızı seçin
- Link to existing project? → N (yeni proje)
- Project name? → suare-coffee-bowl (veya istediğiniz isim)
- Directory? → ./ (boş bırakın, Enter)

## 4. Production Deploy

```bash
vercel --prod
```

Bu size production URL'i verecek!


