# Zadanie rekrutacyjne

## Opis

Interfejs użytkownika przeglądarki tagów udostępnianych przez API StackOverflow (https://api.stackexchange.com/docs).

## Ograniczenia

Interfejs pobiera 100 najbardziej używanych tagów z portalu Stack Overflow z uwagi na maksymalny Page Size w API wynoszący 100. Możliwe jest zaimplementowanie funkcji dodającej wybór strony, który rozszerzyłby wyniki do 2500. Dostęp do większej ilości stron wymagałby uzyskania klucza do API. Łącznie tagów na portalu jest ok. 65 000.

## Użyte biblioteki

#### Środowisko

Vite - https://vitejs.dev/

#### Zarządzanie stanem

Zustand - https://zustand-demo.pmnd.rs/

#### Pobieranie danych

Tanstack Query - https://tanstack.com/query/latest

#### Biblioteka komponentów

MUI - Material UI, Data Grid - https://mui.com/

#### Prezentacja komponentów

Storybook - https://storybook.js.org/
MSW Storybook Addon - https://storybook.js.org/addons/msw-storybook-addon
