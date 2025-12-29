# Vercel Deployment Adımları

## 1. GitHub'a Yükleme

### Terminal'de şu komutları çalıştırın:

```bash
# Git repository'si başlat (eğer yoksa)
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit"

# GitHub'da oluşturduğunuz repository'nin URL'ini ekleyin
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git

# Dosyaları GitHub'a yükleyin
git branch -M main
git push -u origin main
```

## 2. Vercel'e Giriş ve Proje Ekleme

1. https://vercel.com adresine gidin
2. "Sign Up" ile GitHub hesabınızla giriş yapın
3. Dashboard'da "Add New..." → "Project" seçin
4. GitHub repository'nizi seçin
5. "Import" butonuna tıklayın

## 3. Vercel Ayarları

Vercel otomatik olarak Vite projelerini algılar, ancak şu ayarları kontrol edin:

- **Framework Preset:** Vite (otomatik algılanır)
- **Root Directory:** ./ (boş bırakın)
- **Build Command:** `npm run build` (otomatik)
- **Output Directory:** `dist` (otomatik)
- **Install Command:** `npm install` (otomatik)

## 4. Environment Variables (Gerekirse)

Eğer `.env` dosyanız varsa ve API key'ler kullanıyorsanız:

1. Vercel proje ayarlarında "Environment Variables" bölümüne gidin
2. Gerekli değişkenleri ekleyin (örn: `GEMINI_API_KEY`)

## 5. Deploy

1. "Deploy" butonuna tıklayın
2. Build işlemi tamamlanana kadar bekleyin (1-2 dakika)
3. Deploy tamamlandığında size bir URL verilecek (örn: `suare-coffee-bowl.vercel.app`)

## 6. Custom Domain (Opsiyonel)

1. Vercel dashboard'da projenize gidin
2. "Settings" → "Domains" bölümüne gidin
3. Kendi domain'inizi ekleyebilirsiniz

## Notlar

- Her GitHub'a push yaptığınızda Vercel otomatik olarak yeniden deploy eder
- Production ve Preview URL'leri otomatik oluşturulur
- Build loglarını Vercel dashboard'dan takip edebilirsiniz


