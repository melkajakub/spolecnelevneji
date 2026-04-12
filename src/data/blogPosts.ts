export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "uspora-pro-vecerky-kinh-doanh-tiem-tap-hoa",
    title: "Máte večerku? / Bạn đang kinh doanh tiệm tạp hóa?",
    excerpt: "Průvodce úsporami pro majitele prodejen potravin. / Hướng dẫn tiết kiệm chi phí điện cho chủ cửa hàng thực phẩm.",
    date: "2026-04-14",
    content: `# Úspora pro večerky / Tiết kiệm chi phí cho tiệm tạp hóa

Provozovatelé večerek mají specifický problém: jejich mrazáky a lednice běží 24/7. Náklady na elektřinu jsou jedním z největších výdajů. 
Các chủ tiệm tạp hóa có một vấn đề đặc thù: tủ đông và tủ lạnh chạy 24/7. Chi phí tiền điện là một trong những khoản chi lớn nhất.

## Příklad z praxe / Ví dụ thực tế

Máte prodejnu se spotřebou **30 MWh**, jističem **3x32A**, sazbou **C02d** a standardním ceníkem? V takovém případě můžete přeplácet **okolo 30 000 Kč bez DPH ročně** oproti optimálnímu nastavení a aktuálním tržním cenám.

Bạn có cửa hàng với mức tiêu thụ **30 MWh**, cầu dao **3x32A**, biểu giá **C02d** và giá điện tiêu chuẩn không? Trong trường hợp đó, bạn có thể đang trả thừa khoảng **30.000 Kč (chưa VAT) mỗi năm** so với việc thiết lập tối ưu và giá thị trường hiện tại.

## Bod zlomu mezi sazbami / Điểm thay đổi giữa các biểu giá (C02d vs. C03d)

Většina prodejen začíná na sazbě **C02d**. Pokud máte ale hodně mrazáků, může pro vás být výhodnější sazba **C03d**.
Hầu hết các cửa hàng bắt đầu với biểu giá **C02d**. Tuy nhiên, nếu bạn có nhiều tủ đông, biểu giá **C03d** có thể tiết kiệm hơn cho bạn.

* **C02d:** Nižší paušál, ale dražší každá kWh. (Phí cố định thấp hơn, nhưng giá mỗi kWh cao hơn.)
* **C03d:** Vyšší paušál, ale výrazně levnější každá kWh. (Phí cố định cao hơn, nhưng giá mỗi kWh rẻ hơn đáng kể.)

## Kontrola obchodní ceny / Kiểm tra giá thương mại

Prověřím, zda vám dodavatel neúčtuje víc, než je aktuální standard roku 2026.
Tôi sẽ kiểm tra xem nhà cung cấp có tính phí cao hơn mức tiêu chuẩn thị trường năm 2026 không.

---

**Chcete platit méně? / Bạn muốn trả tiền điện ít hơn?**

Nahrajte mi poslední fakturu za elektřinu přes formulář níže.
Hãy gửi cho tôi hóa đơn tiền điện mới nhất của bạn qua mẫu dưới đây.`,
  },
  {
    slug: "uspora-pro-firmy-obce-a-zivnostniky",
    title: "Firmy, obce i živnostníci: Neplatíte za energie víc, než vaše budovy skutečně vyžadují?",
    excerpt: "U firemních a obecních odběrů kategorie C se nevhodná sazba a vysoká obchodní cena mohou prodražit o desítky tisíc korun ročně.",
    date: "2026-04-12",
    content: `# Úspory pro firmy, obce a živnostníky

V podnikání i ve správě veřejného majetku se počítá každá koruna. U odběrů kategorie C (podnikatelské a obecní sazby) je prostor pro úsporu mnohem větší než u domácností, zejména díky optimalizaci distribučních sazeb a obchodních cen.

## Obchodní cena a distribuční sazba

Mezi sazbami **C01d, C02d a C03d** jsou zásadní rozdíly. Často se setkávám s tím, že provozovny nebo obecní budovy mají sazbu nastavenou podle historických potřeb, které už neodpovídají realitě. Výsledkem je zbytečně drahá distribuce nebo nevýhodná obchodní cena.

## Co pro vás mohu udělat?

Moje role spočívá v odhalení skrytého potenciálu úspor v těchto oblastech:
- **Obchodní ceny:** Zda vaše fixace nebo aktuální ceník odpovídá trhu v roce 2026.
- **Distribuční sazby:** Zda zvolená sazba (C01d–C03d) dává ekonomický smysl vzhledem k reálnému ročnímu odběru.

---

**Řídíte firmu nebo obec?** Nahrajte mi poslední fakturu za elektřinu v PDF přes formulář níže. Podívám se na vaše nastavení a odhadnu potenciál vašich úspor.`,
  },
  {
    slug: "sazba-d02d-zbytecne-draha",
    title: "Máte správně nastavenou distribuční sazbu?",
    excerpt: "Zjistěte, jak prostá změna distribuční sazby může ušetřit tisíc korun ročně bez výměny jističe.",
    date: "2026-04-10",
    content: `# Nepřeplácíte zbytečně i na regulovaných složkách?

Při kontrole vyúčtování opakovaně vidím jeden a ten samý vzorec: domácnost se spotřebou kolem 1 MWh ročně a jističem 3×20 A má nastavenou sazbu **D02d** – a zbytečně tak přeplácí zhruba 1 000 Kč ročně. Přitom by stačila jednoduchá administrativní změna.

## D02d vs. D01d – v čem je rozdíl?

* **Sazba D02d** je navržena pro střední spotřebu. Má o něco nižší cenu za každou spotřebovanou kilowatthodinu, ale je vykoupena vyšším měsíčním poplatkem za jistič.
* **Sazba D01d** je určena pro nízkou spotřebu. Cena za kilowatthodinu je sice o něco vyšší, ale stálý měsíční plat za jistič je výrazně nižší.

Pokud elektřinou neohříváte vodu ani netopíte, je pravděpodobné, že na sazbě D02d přeplácíte „za nic“ – jen kvůli tomu, že máte tarif nastavený na vyšší odběr, který reálně nevyužíváte.

---

**Chcete si nechat prověřit svou sazbu?** Nahrajte mi svou poslední fakturu za elektřinu a já vám napíšu svůj pohled.`,
  },
  {
    slug: "ceska-pokuta-za-vernost",
    title: 'Česká „pokuta za věrnost": Proč se dlouhodobým zákazníkům energie prodražují?',
    excerpt: "Proč loajální klienti často platí víc než ti noví a jak se tomu bránit.",
    date: "2026-04-08",
    content: `## Věrnost se u energií netrestá náhodou

Většina dodavatelů energií nabízí novým zákazníkům **akční ceny**. Po skončení fixace se však cena automaticky prodlouží, a to často za podmínek, které jsou výrazně méně výhodné. Tento mechanismus se někdy nazývá „pokuta za věrnost".

Dodavatelé spoléhají na to, že stávající zákazník si nevšimne konce fixace nebo považuje přechod k jinému dodavateli za složitý.

## Jak se bránit?

1. **Hlídejte si konec fixace.** Zapište si do kalendáře, kdy vám končí smlouva.
2. **Porovnávejte nabídky.** Před koncem fixace si zjistěte aktuální ceny na trhu.
3. **Nebojte se změny.** Přechod k novému dodavateli je dnes jednoduchý a bezbolestný.

---

**Nejste si jistí svou aktuální cenou?** Nahrajte mi svou poslední fakturu za elektřinu a já prověřím, zda odpovídá aktuálním možnostem trhu.`,
  },
  {
    slug: "jak-se-vyznat-ve-vyuctovani",
    title: "Jak se vyznat ve vyúčtování energií a proč se v něm snadno přehlédne chyba?",
    excerpt: "Vyúčtování je hromada čísel a zkratek. Zjistěte, proč je někdy těžké v něm najít skryté poplatky.",
    date: "2026-04-05",
    content: `## Proč je vyúčtování tak nepřehledné?

Vyúčtování za elektřinu nebo plyn je dokument, který většina lidí letmo prohlédne, podívá se na konečnou částku – a odloží. Právě v tomto dokumentu se mohou skrývat chyby nebo zbytečné náklady, které vás stojí stovky až tisíce korun ročně.

## Z čeho se vyúčtování skládá?

Celková cena za elektřinu se skládá ze dvou hlavních částí:

### 1. Neregulovaná (silová) složka
To je cena samotné elektřiny, kterou určuje váš dodavatel. Zahrnuje cenu za odebranou energii a stálý měsíční poplatek dodavateli.

### 2. Regulovaná složka
Tyto poplatky stanovuje Energetický regulační úřad (ERÚ) a platíte je distributorovi. Zahrnuje poplatek za distribuci, stálý plat za příkon a další systémové poplatky.

---

**Nejste si jistí svým vyúčtováním?** Pokud chcete mít klid, že neplatíte víc, než musíte, rád se na vaše vyúčtování podívám. Stačí mi nahrát poslední fakturu za elektřinu v PDF přes formulář níže.`,
  },
];
