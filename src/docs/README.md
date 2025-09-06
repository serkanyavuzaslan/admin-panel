# React + Vite

#  Restoran Rezervasyon Admin Paneli

Bu proje, restoran rezervasyon süreçlerini yönetmek için geliştirilmiş bir **React + Vite tabanlı admin panel uygulamasıdır**.  
Yönetici, rezervasyonları görüntüleyebilir, ekleyebilir, düzenleyebilir ve analiz edebilir.  

---
# Proje Hakkında Genel Bilgi

**Proje Adı**: Restoran Rezervasyon Admin Paneli  

**Teknolojiler**  
- **Frontend**: React + Vite  
- **Styling**: Style CSS / Custom CSS  
- **Grafikler**: Recharts  


## ÖZELLİKLER
- Rezervasyon Ekle / Düzenle / Sil  
-  Müşteri Yönetimi  
-  Performans ve İstatistik Kartları  
-  Grafikler ile Görsel Analiz (Recharts)  
-  Modern ve responsive arayüz  


**AMAÇ**  
Restoran rezervasyonlarının yönetilmesi, analiz edilmesi ve kullanıcı dostu bir panel üzerinden kontrol edilmesi.

#  PROJE YAPISI VE KLASÖR ORGANİZASYONU

src/
│── assets/ # GitHub'a yüklenen görseller ve statik dosyalar
│
│── components/ # Tekrar kullanılabilir UI bileşenleri
│ │── analytics/ # Analiz ekranı için bileşenler
│ │ ├── AnalyticsFooter.jsx
│ │ ├── AnalyticsHeader.jsx
│ │ ├── AnalyticsSummary.jsx
│ │ ├── CustomTooltip.jsx
│ │ ├── PerformanceTable.jsx
│ │ ├── SegmentChart.jsx
│ │ ├── StatCard.jsx
│ │ └── TrendChart.jsx
│ │
│ │── dashboard/ # Dashboard ekranı bileşenleri
│ │ ├── DashboardHeader.jsx
│ │ ├── ReservationFilters.jsx
│ │ ├── Sidebar.jsx
│ │ └── StatsGrid.jsx
│ │
│ │── login/ # Giriş ekranı bileşenleri
│ │ ├── LoginFooter.jsx
│ │ ├── LoginForm.jsx
│ │ ├── LoginHeader.jsx
│ │ └── LoginInput.jsx
│ │
│ │── reservations/ # Rezervasyon ekranı bileşenleri
│ │ ├── AddReservationForm.jsx
│ │ ├── EditReservationModal.jsx
│ │ ├── FormInput.jsx
│ │ ├── ReservationHeader.jsx
│ │ ├── ReservationTable.jsx
│ │ └── SearchAndFilter.jsx
│ │
│ │── ui/ # Genel UI bileşenleri
│ │ ├── cards/ StatCard.jsx
│ │ ├── forms/ ReservationEditForm.jsx
│ │ ├── layout/ Sidebar.jsx
│ │ ├── modal/ EditModal.jsx
│ │ └── table
│            └── ReservationTable.jsx
             └── StatusBadge.jsx
             └── TableRow.jsx
│── context/ # React Context API dosyaları
│ └── ReservationContext.jsx
│
│── docs/ # Proje dokümantasyonu
│ └── README.md
│
│── hooks/ # Custom React hook'lar
│ ├── useReservationFilter.js
│ └── useReservations.js
│
│── pages/ # Sayfa bileşenleri
│ ├── Analytics/
│ ├── Dashboard/
│ ├── Auth/
│ ├── NotFound/
│ └── Reservations/
│
│── styles/ # Stil dosyaları
│ ├── custom.css
│ └── style.css


#  KOD MİMARİSİ

## componnets

### reservations/ (Rezervasyon ekranı bileşenleri)
- **AddReservationForm.jsx** → Yeni rezervasyon ekleme formu  
- **EditReservationModal.jsx** → Mevcut rezervasyonu düzenlemek için modal pencere  
- **FormInput.jsx** → Formlarda kullanılan genel input bileşeni  
- **ReservationHeader.jsx** → Rezervasyon sayfası üst başlığı  
- **ReservationTable.jsx** → Rezervasyonların tablo halinde listelendiği bileşen  
- **SearchAndFilter.jsx** → Rezervasyonlarda arama ve filtreleme aracı  

### dashboard/ (Dashboard ekranı bileşenleri)
- **DashboardHeader.jsx** → Dashboard üst kısmı başlık ve özet  
- **ReservationFilters.jsx** → Dashboard sayfasındaki rezervasyon filtreleri  
- **Sidebar.jsx** → Sol menü  
- **StatsGrid.jsx** → İstatistik kartlarının grid düzeni  

### login/ (Giriş ekranı bileşenleri)
- **LoginFooter.jsx** → Login sayfası alt kısmı  
- **LoginForm.jsx** → Kullanıcı giriş formu  
- **LoginHeader.jsx** → Login ekranı başlığı  
- **LoginInput.jsx** → Login formu input alanları  

### analytics/ (Analiz ekranı bileşenleri)
- **AnalyticsFooter.jsx** → Analiz sayfası alt kısmı  
- **AnalyticsHeader.jsx** → Analiz sayfası başlığı  
- **AnalyticsSummary.jsx** → Genel analiz özeti  
- **CustomTooltip.jsx** → Grafiklerde kullanılan özel tooltip  
- **PerformanceTable.jsx** → Performans tablosu  
- **SegmentChart.jsx** → Segment bazlı grafik  
- **StatCard.jsx** → Tekil istatistik kartı  
- **TrendChart.jsx** → Trend grafiği  

### ui/ (Genel UI bileşenleri)
- **cards/** → Kart yapıları (istatistik, özet vb.)  
- **forms/** → Form elemanları  
- **layout/** → Layout bileşenleri (grid, container vb.)  
- **modal/** → Modal pencereler  
- **table/** → Tablo bileşenleri  

---

## 📂 hooks 
- **useReservationFilter.js** → Rezervasyonlarda filtreleme işlemleri için custom hook  
- **useReservations.js** → Rezervasyon CRUD (create, read, update, delete) işlemleri için custom hook  

---

## 📂 Pages (Sayfa bileşenleri)
- **DashboardPage.jsx** → Genel özet ve rezervasyonların yer aldığı sayfa  
- **ReservationsPage.jsx** → Rezervasyon ekleme sayfası
- **AnalyticsPage.jsx** → Analiz ve grafiksel gösterimlerinin olduğu sayfa
- **LoginPage.jsx** → Kullanıcı giriş ekranı  
- **NotFound.jsx** → 404 bulunamadı sayfası  

---

## 📂 Context
- **ReservationContext.jsx** → Rezervasyon verilerini global state ile yönetmek için kullanılan React Context API dosyası  

---

## 📂 Styles
- **custom.css** → Projeye özel eklenen stil dosyaları  
- **style.css** → Genel stil dosyası  




# ✍️ İSİMLENDİRME STANTARTLARI

Proje boyunca okunabilirlik ve sürdürülebilirlik için tutarlı bir isimlendirme kullanılmakta 

---

## 📂 Klasörler
- Klasör isimleri **küçük harf** ve **çoğul** yazılır.  
  Örneğin: `components`, `pages`, `hooks`, `utils`  

---

##  Dosyalar
- **Bileşenler (Components)** → `PascalCase`  
  - Örneğin: `ReservationTable.jsx`, `DashboardHeader.jsx`  

- **Hook’lar** → `camelCase` ve `use` ile başlandı
  - Örneğin: `useReservations.js`, `useReservationFilter.js`  

- **Sayfa dosyaları** → `PascalCase` + `Page` eki ile sonlandı
  - Örneğin: `DashboardPage.jsx`, `ReservationsPage.jsx`  

- **CSS dosyaları** → `kebab-case`  
  - Örneğin: `custom.css`, `style.css`  

---

##  CSS Class İsimleri
- **kebab-case** formatı kullanıldı.  
  - Örneğin: `.reservation-table`, `.form-input`, `.login-container`  

---


##  Mevcut Tamamlanan Özellikler
- Rezervasyon CRUD işlemleri (Ekle, Düzenle, Sil, Listele)  
- Dashboard ve istatistik kartları  
- Analiz ekranları (Trend ve Segment grafikleri)  
- Login ekranı ve temel doğrulama  
- 404 Error sayfası
- Localhost ile veri saklama



## 📸 Ekran Görüntüleri

![Login Giriş Ekranı](src/assets/login.png)
![Ana Sayfa Görünümü](src/assets/dashboard.png)
![Rezervazyon Sayfası Görünümü](src/assets/reservations.png)
![Analiz Sayfası Görünümü](src/assets/analytics.png)
