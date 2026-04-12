export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "jak-se-vyznat-ve-vyuctovani",
    title: "Jak se vyznat ve vyúčtování energií a proč se v něm snadno přehlédne chyba?",
    excerpt: "Vyúčtování je hromada čísel a zkratek. Zjistěte, proč je někdy těžké v něm najít skryté poplatky a proč se v něm vyplatí orientovat.",
    date: "2026-04-05",
    content: `## Proč je vyúčtování tak nepřehledné?

Vyúčtování za elektřinu nebo plyn je dokument, který většina lidí letmo prohlédne, podívá se na konečnou částku – a odloží. A přitom právě v tomto dokumentu se mohou skrývat chyby nebo zbytečné náklady, které vás stojí stovky až tisíce korun ročně.

## Z čeho se vyúčtování skládá?

Celková cena za elektřinu se skládá ze dvou hlavních částí:

### 1. Neregulovaná (silová) složka
To je cena samotné elektřiny, kterou určuje váš dodavatel. Zahrnuje:
- cenu za odebranou energii (Kč/kWh),
- stálý měsíční poplatek dodavateli.

### 2. Regulovaná složka
Tyto poplatky stanovuje Energetický regulační úřad (ERÚ) a platíte je distributorovi. Patří sem:
- **poplatek za distribuci** (závisí na vaší sazbě a spotřebě),
- **stálý plat za příkon** (závisí na velikosti jističe),
- příspěvek na obnovitelné zdroje,
- poplatek za systémové služby,
- poplatek operátorovi trhu.

## Kde se nejčastěji skrývají zbytečné náklady?

### Nevhodná distribuční sazba
Pokud máte sazbu D02d, ale vaše spotřeba je velmi nízká, pravděpodobně přeplácíte na stálém platu za jistič. Přechod na sazbu D01d může v takovém případě přinést úsporu.

### Příliš vysoký jistič
Hodnota hlavního jističe (např. 3×25 A vs. 3×20 A) přímo ovlivňuje výši stálého platu za příkon. Pokud máte zbytečně velký jistič, platíte více, než musíte.

### Neaktuální cena silové složky
Po skončení fixace se cena za kWh může výrazně zvýšit. Mnoho lidí si toho nevšimne, protože se dívají jen na konečnou částku a ne na jednotkovou cenu.

## Proč je praktický pohled zvenčí užitečný?

Laik většinou neví, co přesně ve vyúčtování hledat. Někdo, kdo faktury vidí denně, dokáže:
- posoudit, zda máte **správnou distribuční sazbu**,
- ověřit, zda **velikost jističe** odpovídá vaší skutečné spotřebě,
- porovnat vaši **cenu za kWh** s aktuálními tržními nabídkami.

## Shrnutí

Vyúčtování za energie není jen číslo k zaplacení. Je to klíč k pochopení toho, zda za energie platíte férově. Pokud si nejste jistí, nechte své vyúčtování zkontrolovat – může vám to ušetřit překvapivě hodně peněz.

---

**Nejste si jistí svým vyúčtováním?** Pokud chcete mít klid, že neplatíte víc, než musíte, rád se na vaše vyúčtování podívám. Stačí mi ho nahrát v PDF a já vám napíšu svůj pohled.

*Poznámka: Veškeré příklady a výpočty vycházejí z cen a podmínek pro rok 2026. Ceníky a podmínky distributorů se mohou v čase měnit.*`,
  },
  {
    slug: "sazba-d02d-zbytecne-draha",
    title: "Nepřeplácíte zbytečně i na regulovaných složkách? Aneb máte správně nastavenou distribuční sazbu?",
    excerpt: "Zjistěte, jak prostá změna distribuční sazby může ušetřit tisíc korun ročně bez výměny jističe.",
    date: "2026-04-10",
    content: `# Nepřeplácíte zbytečně i na regulovaných složkách? Aneb máte správně nastavenou distribuční sazbu?

Při kontrole vyúčtování opakovaně vidím jeden a ten samý vzorec: domácnost se spotřebou kolem 1 MWh ročně a jističem 3×20 A má nastavenou sazbu **D02d** – a zbytečně tak přeplácí zhruba 1 000 Kč ročně. Přitom by stačila jednoduchá administrativní změna.

## D02d vs. D01d – v čem je rozdíl?

Obě tyto sazby jsou tzv. jednotarifní, což znamená, že cena za elektřinu je stejná po celých 24 hodin. Rozdíl je však v jejich konstrukci:

* **Sazba D02d** je navržena pro střední spotřebu. Má o něco nižší cenu za každou spotřebovanou kilowatthodinu, ale je vykoupena **vysokým měsíčním poplatkem** za jistič.
* **Sazba D01d** je určena pro nízkou spotřebu. Cena za kilowatthodinu je sice o něco vyšší, ale **stálý měsíční plat za jistič je výrazně nižší**.

## Kdy se D02d nevyplatí?

Typický příklad, na který často narážím: domácnost v bytě s jističem 3×20 A a roční spotřebou kolem 1 MWh. Pokud elektřinou neohříváte vodu ani netopíte a většinu spotřeby tvoří běžné spotřebiče (lednice, TV, osvětlení), je pravděpodobné, že na sazbě D02d **přeplácíte řádově 1 000 Kč ročně** oproti sazbě D01d. 

Tisíc korun za rok platíte v podstatě „za nic“ – jen kvůli tomu, že máte tarif nastavený na vyšší odběr, který reálně nevyužíváte.

## Co s tím?

Změna distribuční sazby je jednoduchý administrativní úkon. Nemusíte měnit jistič, nemusíte volat elektrikáře ani měnit dodavatele. Stačí požádat svého distributora o přeřazení na jinou sazbu. Změna se obvykle projeví v dalším vyúčtování a pomůže vám okamžitě srazit fixní náklady na minimum.

## Shrnutí

Pokud máte nízkou spotřebu, ověřte si, zda se vám sazba D02d opravdu vyplatí. Někdy stačí jedna administrativní změna a ročně ušetříte zajímavou částku – bez jakýchkoliv investic nebo omezení vašeho komfortu.

---

**Nejste si jistí svým vyúčtováním?** Pokud chcete mít klid, že neplatíte víc, než musíte, rád se na vaše vyúčtování podívám. Stačí mi ho nahrát v PDF a já vám napíšu svůj pohled.

*Poznámka: Veškeré příklady a výpočty vycházejí z cen a podmínek pro rok 2026. Ceníky a podmínky distributorů se mohou v čase měnit.*`,
  },
  {
    slug: "ceska-pokuta-za-vernost",
    title: 'Česká „pokuta za věrnost": Proč se dlouhodobým zákazníkům energie často prodražují?',
    excerpt: "Proč loajální klienti často platí víc než ti noví a jak se tomu bránit.",
    date: "2026-04-08",
    content: `## Věrnost se u energií netrestá náhodou

Znáte to – už léta odebíráte elektřinu nebo plyn od stejného dodavatele. Žádné problémy, žádné starosti. Jenže jednoho dne zjistíte, že váš soused, který právě přešel k témuž dodavateli, platí výrazně méně. Jak je to možné?

## Jak to funguje v praxi?

Většina dodavatelů energií nabízí novým zákazníkům **akční ceny** – výhodné tarify na první rok nebo dva. Po skončení fixace se však cena automaticky prodlouží, a to často za podmínek, které jsou výrazně méně výhodné. Tento mechanismus se někdy nazývá „pokuta za věrnost" (*loyalty penalty*).

Dodavatelé spoléhají na to, že stávající zákazník:
- si nevšimne konce fixace a automatické prolongace,
- nečte „speciální nabídky" zasílané e-mailem, které často nejsou vůbec výhodné,
- považuje přechod k jinému dodavateli za složitý.

## Automatická prolongace a „speciální" e-mailové nabídky

Řada smluv obsahuje klauzuli o automatickém prodloužení. Pokud smlouvu nevypovíte ve stanovené lhůtě, prodlouží se na další období – často za vyšší cenu, než jakou byste získali jako nový zákazník.

Navíc vám dodavatel může poslat e-mail s „exkluzivní nabídkou na prodloužení". Tyto nabídky ale často nejsou výhodné – jen vypadají lépe než standardní prolongační cena.

## Jak se bránit?

1. **Hlídejte si konec fixace.** Zapište si do kalendáře, kdy vám končí smlouva.
2. **Porovnávejte nabídky.** Před koncem fixace si zjistěte aktuální ceny na trhu.
3. **Nebojte se změny.** Přechod k novému dodavateli je dnes jednoduchý a bezbolestný.

## Shrnutí

Věrnost dodavateli energií se v Česku bohužel často nevyplácí. Pravidelná kontrola smlouvy a srovnání s trhem vám může ušetřit tisíce korun ročně. Nebojte se ptát a porovnávat – praktický pohled zvenčí vám může odhalit, kolik zbytečně přeplácíte.

---

**Nejste si jistí svým vyúčtováním?** Pokud chcete mít klid, že neplatíte víc, než musíte, rád se na vaše vyúčtování podívám. Stačí mi ho nahrát v PDF a já vám napíšu svůj pohled.

*Poznámka: Veškeré příklady a výpočty vycházejí z cen a podmínek pro rok 2026. Ceníky a podmínky distributorů se mohou v čase měnit.*`,
  },
];
