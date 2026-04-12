export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sazba-d02d-zbytecne-draha",
    title: "Máte spotřebu kolem 1 MWh a jistič 3×20A? Sazba D02d pro vás může být zbytečně drahá.",
    excerpt: "Zjistěte, jak prostá změna distribuční sazby může ušetřit tisíc korun ročně bez výměny jističe.",
    date: "2026-04-10",
    content: `## Proč je volba distribuční sazby tak důležitá?

Většina domácností si při podpisu smlouvy s dodavatelem energií ani neuvědomí, jakou distribuční sazbu vlastně má. Přitom právě sazba rozhoduje o výši regulovaných poplatků, které tvoří zhruba polovinu celkového vyúčtování za elektřinu.

## D02d vs. D01d – v čem je rozdíl?

Sazba **D02d** (dvoutarifní) byla původně navržena pro domácnosti s akumulačním ohřevem vody nebo přímotopem. Nabízí osm hodin denně v tzv. nízkém tarifu, kdy je elektřina levnější. Zní to lákavě – ale pozor: měsíční poplatek za distribuci je u D02d výrazně vyšší než u jednoduchého tarifu **D01d**.

Sazba **D01d** (jednotarifní) nemá žádný nízký tarif, ale její stálý měsíční poplatek je podstatně nižší. Pokud máte nízkou spotřebu (kolem 1 MWh ročně), úspora na stálém platu výrazně převyšuje to, co byste ušetřili v nízkém tarifu.

## Kdy se D02d nevyplatí?

Typický příklad: domácnost s jističem 3×20 A a roční spotřebou kolem 1 MWh. Pokud nemáte akumulační bojler nebo přímotop a většinu spotřeby tvoří běžné spotřebiče, je pravděpodobné, že na sazbě D02d **přeplácíte řádově 1 000 Kč ročně** oproti jednodušší sazbě D01d.

## Co s tím?

Změna distribuční sazby je jednoduchý administrativní úkon. Nemusíte měnit jistič, nemusíte měnit dodavatele. Stačí požádat svého distributora (ČEZ Distribuce, EG.D nebo PREdistribuce) o přeřazení na jinou sazbu. Změna je obvykle provedena k nejbližšímu odečtu.

## Shrnutí

Pokud máte nízkou spotřebu a dvoutarifní sazbu, ověřte si, zda se vám opravdu vyplatí. Někdy stačí jedna administrativní změna a ročně ušetříte stovky až tisíce korun – bez jakýchkoliv investic.

*Poznámka: Hodnoty a srovnání vycházejí z dat pro rok 2026. Ceníky se v čase mění.*`,
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
- si nevšimne konce fixace,
- nemá čas nebo chuť porovnávat nabídky,
- považuje přechod k jinému dodavateli za složitý.

## Automatická prolongace – tichý nepřítel

Řada smluv obsahuje klauzuli o automatickém prodloužení. Pokud smlouvu nevypovíte ve stanovené lhůtě (obvykle 1–3 měsíce před koncem), prodlouží se na další období – často za vyšší cenu, než jakou byste získali jako nový zákazník.

## Kolik můžete přeplácet?

Rozdíl mezi „věrnostní" cenou a aktuální tržní nabídkou může být **500 až 3 000 Kč ročně** u elektřiny a obdobně u plynu. U firem s vyšší spotřebou jde o ještě vyšší částky.

## Jak se bránit?

1. **Hlídejte si konec fixace.** Zapište si do kalendáře, kdy vám končí smlouva.
2. **Porovnávejte nabídky.** Před koncem fixace si zjistěte aktuální ceny na trhu.
3. **Vyjednávejte.** Zavolejte svému dodavateli a požádejte o individuální nabídku. Často stačí zmínit, že zvažujete odchod.
4. **Nebojte se změny.** Přechod k novému dodavateli je dnes jednoduchý a bezbolestný – zajistí ho nový dodavatel za vás.

## Shrnutí

Věrnost dodavateli energií se v Česku bohužel často nevyplácí. Pravidelná kontrola smlouvy a srovnání s trhem vám může ušetřit tisíce korun ročně. Nebojte se ptát a porovnávat.

*Poznámka: Hodnoty a srovnání vycházejí z dat pro rok 2026. Ceníky se v čase mění.*`,
  },
  {
    slug: "jak-se-vyznat-ve-vyuctovani",
    title: "Jak se vyznat ve vyúčtování energií a proč se v něm snadno přehlédne chyba?",
    excerpt: "Vyúčtování je složitý dokument. Někdy stačí jeden pohled odborníka, aby odhalil zbytečné poplatky.",
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
Pokud máte dvoutarifní sazbu (např. D02d), ale nemáte spotřebič, který by využíval nízký tarif, pravděpodobně přeplácíte na stálém platu. Přechod na jednotarifní sazbu D01d může přinést úsporu.

### Příliš vysoký jistič
Hodnota hlavního jističe (např. 3×25 A vs. 3×20 A) přímo ovlivňuje výši stálého platu za příkon. Pokud máte zbytečně velký jistič, platíte více, než musíte.

### Neaktuální cena silové složky
Po skončení fixace se cena za kWh může výrazně zvýšit. Mnoho lidí si toho nevšimne, protože se dívají jen na konečnou částku a ne na jednotkovou cenu.

## Proč je kontrola odborníkem užitečná?

Laik většinou neví, co přesně ve vyúčtování hledat. Odborník dokáže:
- posoudit, zda máte **správnou distribuční sazbu**,
- ověřit, zda **velikost jističe** odpovídá vaší skutečné spotřebě,
- porovnat vaši **cenu za kWh** s aktuálními tržními nabídkami,
- identifikovat **neobvyklé položky** nebo chyby ve fakturaci.

## Shrnutí

Vyúčtování za energie není jen číslo k zaplacení. Je to klíč k pochopení toho, zda za energie platíte férově. Pokud si nejste jistí, nechte své vyúčtování zkontrolovat – může vám to ušetřit překvapivě hodně peněz.

*Poznámka: Hodnoty a srovnání vycházejí z dat pro rok 2026. Ceníky se v čase mění.*`,
  },
];
