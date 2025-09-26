# Lighthouse Performance Reports

## Provedené optimalizace

### ✅ Implementované zlepšení (2025-09-26)

#### Performance (Výkon)
- **Preload kritických zdrojů**: main.tsx, index.css
- **Preconnect externí domény**: fonts.googleapis.com, storage.googleapis.com  
- **DNS-prefetch**: spolecnelevneji.cz
- **Defer JavaScriptu**: main.tsx načítán s defer atributem
- **Kritické CSS**: Inlined základní styly pro rychlejší první vykreslení
- **Image lazy loading**: Implementováno pro všechny obrázky kromě hero
- **Image dimensions**: Explicitní width/height atributy

#### SEO & Accessibility  
- **Strukturované alt texty**: Všechny obrázky mají popisné alt texty v češtině
- **Semantic HTML**: Použity header, main, section, article tagy
- **Meta tagy**: Kompletní Open Graph, Twitter Card, mobile optimalizace
- **JSON-LD**: Rozšířená strukturovaná data pro organizaci a služby

#### Best Practices
- **HTTPS**: Plně implementováno
- **Manifest.json**: PWA manifest pro mobilní zařízení
- **Theme color**: Konzistentní branding
- **Robots.txt**: Optimalizován s sitemap direktivou

## Doporučení pro další optimalizaci

### 🎯 Vysoká priorita
1. **Konverze obrázků na WebP/AVIF** - úspora ~70% velikosti
2. **Responsive images s srcset** - optimalizace pro různé velikosti obrazovek
3. **CDN implementace** - rychlejší načítání globálně

### 📊 Střední priorita  
1. **Service Worker** - offline funkčnost, caching
2. **Font optimization** - preload systémových fontů
3. **Bundle splitting** - code splitting pro menší initial load

### 📈 Nízká priorita
1. **HTTP/2** - server push pro kritické zdroje
2. **Brotli compression** - lepší komprese než gzip
3. **Critical CSS extraction** - automatizace kritického CSS

## Očekávané skóre
- **Performance**: 85-95
- **Accessibility**: 95-100  
- **Best Practices**: 92-100
- **SEO**: 95-100

*Poznámka: Finální skóre závisí na hostingu a síťových podmínkách*