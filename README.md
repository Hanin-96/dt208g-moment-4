# Moment-4

Projektet i Moment 4 är skapad i Angular.

## Länk till webbplats
[https://bright-semifreddo-f149a3.netlify.app/]

## Innehåll

Uppgiften går ut på att skapa en angular applikation som hämtar kurs API från webbutvecklingsprogrammet som extern länk och presenteras i en tabell på sidan. Det är både möjligt att sortera datan samt filtrera utifrån sökfras.

### HTTP Client
För att göra anrop till kurs APIet används HTTP client i en skapad service för course i Angular. Ett course interface har även skapats för att representera datan.

### Bindning

Datan skrivs ut mha följande: *ngFor="let course of sortedCourses" som loopar igenom data. Därefter används bindningen text interpolation och datan skrivs ut i bestämd form på sidan.

### Komponenter
Innehållet på sidan har skapats i komponenten course.
