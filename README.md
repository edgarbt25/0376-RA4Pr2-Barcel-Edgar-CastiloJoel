## 1. Reconeix la utilitat de les aplicacions d'ofimàtica web

**1. Explica per què GitHub es pot considerar una aplicació web de treball col·laboratiu.**

GitHub és una aplicació web perquè funciona completament des del navegador, sense necessitat d'instal·lar cap programari addicional. Permet que múltiples persones treballin simultàniament sobre el mateix projecte, gestionen canvis, revisen codi d'altres membres i resolguin conflictes. A més, ofereix eines de comunicació com issues i pull requests, la qual cosa el converteix en una plataforma completa de treball en equip.

**2. Quins avantatges té utilitzar GitHub en lloc de guardar els fitxers d'un projecte només en un ordinador local?**

- Accés des de qualsevol lloc: el projecte és accessible des de qualsevol dispositiu amb connexió a internet.
- Còpia de seguretat automàtica: si l'ordinador falla, el codi no es perd.
- Historial de canvis: es guarda un registre de totes les modificacions fetes.
- Col·laboració: diverses persones poden treballar alhora sense sobreescriure's.
- Control de versions: es pot tornar a qualsevol estat anterior del projecte.

**3. Com pot ajudar GitHub a gestionar versions d'un projecte web o d'una aplicació?**

GitHub, a través de Git, permet guardar fotografies del projecte en moments concrets (commits). Cada commit té un missatge descriptiu i un identificador únic. Això permet saber exactament qui va canviar què i quan, i revertir canvis si alguna cosa falla. A més, les branques permeten desenvolupar noves funcions sense afectar la versió estable.

**4. En quins tipus de projectes és especialment útil utilitzar Git i GitHub?**

- Projectes de desenvolupament de programari amb múltiples desenvolupadors.
- Pàgines web i aplicacions web.
- Projectes d'investigació on es necessita un historial de canvis.
- Treballs acadèmics col·laboratius.
- Qualsevol projecte on el codi o el contingut evolucioni amb el temps.

**5. Quines diferències hi ha entre un sistema de control de versions com Git i un sistema tradicional d'emmagatzematge de fitxers?**

| Git | Emmagatzematge tradicional |
|-----|---------------------------|
| Guarda l'historial complet de canvis | Només guarda l'última versió |
| Permet treballar en paral·lel (branques) | No permet treball simultani sense conflictes |
| Identifica qui va fer cada canvi | No hi ha rastre de l'autor dels canvis |
| Es pot revertir qualsevol canvi | Si s'esborra, es perd per sempre |
| Funciona en xarxa i localment | Sol ser local |

## 2. Classifica segons la funcionalitat i prestacions específiques

**6. Explica quina és la diferència entre Git i GitHub.**

Git és un programari de control de versions que s'executa localment a l'ordinador. Permet gestionar l'historial de canvis d'un projecte sense necessitat d'internet. GitHub és una plataforma web que allotja repositoris Git al núvol. Afegeix funcionalitats col·laboratives per sobre de Git: interfície gràfica, gestió d'equips, issues, pull requests, etc. En resum: Git és l'eina, GitHub és la plataforma que la utilitza.

**7. Quines funcionalitats ofereix GitHub a més del control de versions del codi?**

- Issues: sistema de seguiment d'errors i tasques pendents.
- Pull Requests: revisió de codi abans de fusionar branques.
- GitHub Pages: allotjament gratuït de pàgines web estàtiques.
- GitHub Actions: automatització de proves i desplegaments (CI/CD).
- Wiki: documentació del projecte integrada.
- Projects: taulell Kanban per gestionar tasques.

**8. Esbrina i defineix les següents funcionalitats de GitHub segons el seu ús:**

- Repositoris: Espai d'emmagatzematge on es guarden tots els fitxers d'un projecte juntament amb el seu historial de canvis. Pot ser públic o privat.
- Issues: Sistema de gestió de tasques i errors. Permet obrir tickets per reportar problemes, proposar millores o assignar feina als membres de l'equip.
- Pull Requests (PR): Sol·licitud per fusionar els canvis d'una branca a una altra. Permet que altres membres revisin el codi i l'aprovin abans d'integrar-lo a la branca principal.
- GitHub Pages: Servei que permet publicar pàgines web estàtiques directament des d'un repositori de GitHub de forma gratuïta, ideal per a documentació o portfolis.

**9. Quina funció tenen les branques (branches) en Git?**

Les branques permeten treballar en paral·lel sobre el mateix projecte sense afectar la versió principal. Cada branca és una còpia independent del codi on es poden fer canvis lliurement. Quan la funcionalitat és acabada i provada, es fusiona (merge) a la branca principal (main).

**10. Per a què serveixen les pull requests en un projecte col·laboratiu?**

Les pull requests serveixen per proposar la fusió dels canvis d'una branca a una altra de forma controlada. Permeten que altres membres de l'equip revisin el codi, facin comentaris, suggereixin millores i finalment aprovin o rebutgin els canvis abans d'integrar-los al projecte principal.

## 3. Gestiona els comptes d'usuari

**11. Què és un compte d'usuari a GitHub i per què és necessari per treballar amb repositoris remots?**

Un compte d'usuari a GitHub és un perfil personal que identifica cada persona a la plataforma. És necessari perquè GitHub associa tots els commits, comentaris i canvis a un usuari concret. Sense compte, no es pot crear repositoris, fer push de codi, col·laborar en projectes ni accedir a repositoris privats.

**12. Quina diferència hi ha entre un repositori públic i un privat a GitHub?**

- Repositori públic: qualsevol persona d'internet pot veure i clonar el codi, però no pot modificar-lo tret que sigui col·laborador.
- Repositori privat: només el propietari i els col·laboradors convidats explícitament hi poden accedir. El codi no és visible per a ningú més.

**13. Com es pot afegir un col·laborador a un repositori de GitHub?**

1. Anar al repositori a GitHub.
2. Clicar a Settings.
3. Al menú lateral, seleccionar Collaborators.
4. Clicar Add people i escriure el nom d'usuari o correu de la persona.
5. La persona rep una invitació per correu electrònic que ha d'acceptar.

**14. Quins rols o permisos pot tenir un usuari dins d'un repositori?**

| Rol | Permisos principals |
|-----|-------------------|
| Read | Pot veure i clonar el codi |
| Triage | Pot gestionar issues i PR sense modificar codi |
| Write | Pot fer push i gestionar branches |
| Maintain | Pot gestionar el repositori sense canviar configuració crítica |
| Admin | Control total, inclosa la configuració i eliminació del repositori |

**15. Per què és important gestionar correctament els permisos dels usuaris en un projecte col·laboratiu?**

Una gestió incorrecta de permisos pot provocar que usuaris no autoritzats modifiquin o eliminin codi crític, introdueixin errors o accedeixin a informació confidencial. Assignar només els permisos necessaris per a cada rol protegeix la integritat del projecte i evita accidents o accions malicioses.

## 4. Aplica criteris de seguretat en l'accés dels usuaris

**16. Quins riscos pot tenir compartir un repositori amb massa permisos per a tots els usuaris?**

- Qualsevol usuari podria eliminar branques o commits importants.
- Es podrien introduir canvis no revisats directament a main.
- Es podria exposar informació sensible si algú modifica fitxers de configuració.
- En cas de compte compromès, l'atacant tindria accés total al projecte.

**17. Per què és recomanable utilitzar autenticació segura (com tokens o SSH) per accedir a GitHub?**

Les contrasenyes simples són vulnerables a atacs de força bruta o phishing. Els tokens d'accés personal i les claus SSH ofereixen una autenticació més segura perquè poden tenir permisos limitats, es poden revocar individualment sense canviar la contrasenya, i les claus SSH utilitzen criptografia asimètrica, molt difícil de comprometre.

**18. Què passaria si es publiquen contrasenyes o claus privades dins d'un repositori?**

Si un repositori és públic, qualsevol persona del món podria veure i usar aquestes credencials per accedir a serveis, bases de dades o comptes del projecte. A més, Git guarda l'historial, de manera que eliminar el fitxer no n'esborra el rastre sense accions específiques.

**19. Quines bones pràctiques de seguretat s'han de seguir quan es treballa amb GitHub?**

- Mai pujar contrasenyes, tokens o claus API al repositori.
- Usar un fitxer .gitignore per excloure fitxers sensibles (.env, etc.).
- Activar l'autenticació en dos factors (2FA) al compte.
- Revisar els permisos dels col·laboradors regularment.

**20. Per què és important controlar qui pot fer push directament a la branca principal (main)?**

La branca main sol ser la versió estable i de producció del projecte. Si qualsevol pot fer push directament, es poden introduir errors o codi no revisat. Les branch protection rules de GitHub obliguen a passar per una pull request i revisió de codi abans de fusionar canvis.

## 5. Utilitza les aplicacions de forma cooperativa

**21. Explica com poden treballar diverses persones al mateix projecte utilitzant GitHub.**

Cada persona treballa en la seva pròpia branca local, fa commits dels seus canvis i els puja al repositori remot. Quan la funcionalitat és completa, obre una pull request per fusionar la seva branca a main. L'equip revisa el codi, es resolen possibles conflictes conjuntament, i finalment s'aprova i es fusiona.

**22. Per què és útil treballar amb branques en lloc de modificar directament la branca principal?**

Treballar amb branques aïlla els canvis de cada funcionalitat o correcció. Això permet desenvolupar sense por d'espatllar la versió estable, tenir diverses funcionalitats en desenvolupament paral·lel, revisar i provar els canvis abans d'integrar-los, i revertir fàcilment si alguna cosa falla.

## 6. Elabora documentació relativa a l'ús i la gestió de les aplicacions

**23. Per què és important incloure un fitxer README.md en un repositori de GitHub?**

El README.md és la primera cosa que veu qualsevol persona que visita el repositori. Explica de què tracta el projecte, com s'instal·la i utilitza, quines tecnologies s'han usat i qui l'ha desenvolupat. Sense aquest fitxer, el projecte és difícil d'entendre i poc atractiu per a possibles col·laboradors.

**24. Quins avantatges té utilitzar Markdown per escriure documentació a GitHub?**

- Senzillesa: la sintaxi és molt fàcil d'aprendre i escriure.
- Llegibilitat: el text és llegible fins i tot sense renderitzar.
- Renderitzat automàtic: GitHub transforma el Markdown en HTML visualment atractiu.
- Portabilitat: funciona en qualsevol plataforma i editor de text.

**25. Com pot ajudar la documentació a altres desenvolupadors que volen utilitzar o modificar el projecte?**

Una bona documentació permet que qualsevol desenvolupador pugui entendre el projecte ràpidament sense necessitat de preguntar a l'autor original. Explica l'estructura del codi, les decisions de disseny, com configurar l'entorn de treball i com contribuir. Això redueix el temps d'incorporació de nous membres i facilita el manteniment a llarg termini.