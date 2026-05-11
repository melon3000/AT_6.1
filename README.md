# Aerofold 2.0 - Sprint 2

## Ülesanne

Projekt on tehtud AT 6.1 praktilise projektijuhtimise Sprint 2 ülesande jaoks.

Teema: **Aerofold 2.0 - Uued turud, disain ja ootuste ohjamine**.

## Projekti sisu

Projekt sisaldab:

- `index.html` - veebilehe struktuur;
- `style.css` - kujundus ja Dark / Light teema;
- `script.js` - keelevahetus, teema vahetus ja localStorage;
- `analysis.md` - argumenteeritud vastus Product Ownerile;
- `analysis.pdf` - sama analüüs PDF kujul;
- `slides_text.md` - tekst esitluse slaidide jaoks.

## Funktsionaalsus

### 1. Mitmekeelsus

Lehel on EE / EN keelevalik.

Valitud keel muudab reaalajas:

- navigeerimise tekstid;
- lehe pealkirjad;
- lennukite nimed;
- lennukite kirjeldused;
- voltimise sammud.

Valitud keel salvestatakse brauseri localStorage'i.

### 2. Dark / Light teema

Lehel on teema vahetamise nupp.

Teema:

- muudab kogu lehe värviskeemi;
- salvestatakse localStorage'i;
- kasutab esmakordsel avamisel `prefers-color-scheme` süsteemieelistust.

### 3. Scope Management analüüs

Native Android ja iOS äppe ei programmeerita.

Selle asemel on koostatud analüüs, kus selgitatakse:

- miks native äpid ei sobi praegusesse sprinti;
- kuidas rakendub Brooksi seadus;
- miks PWA / Responsive Design on parem agiilne kompromiss.

## Kuidas käivitada?

1. Ava projekti kaust.
2. Ava `index.html` brauseris.
3. Testi EE / EN nuppe.
4. Testi teema nuppu.
5. Värskenda lehte ja kontrolli, et valikud jäid alles.

## Kasutatud põhimõtted

- Simple Design
- Working software
- Scope Management
- Agile compromise
- XP: lihtsaim lahendus, mis töötab
