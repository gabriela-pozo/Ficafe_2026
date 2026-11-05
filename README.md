# Archivo FICAFE

Registro histórico, con fuente enlazada, de la Feria Internacional de Cafés Especiales del Perú (FICAFE), de 2016 a 2026.

**Tablero en línea:** https://gabriela-pozo.github.io/Ficafe_2026/

## Para qué sirve

Reúne lo que se sabe de las diez ediciones de la feria para decidir con evidencia a quién le conviene, qué cifra se puede citar y qué todavía nadie ha medido. Está pensado para cuatro lectores:

- **Productores:** si les conviene llevar su café, y qué puntaje y precio se han alcanzado.
- **Compradores:** de qué regiones y variedades salen los mejores lotes, y quién los compra.
- **Prensa:** qué cifra se puede citar y con qué advertencia.
- **Investigación:** qué se sabe, qué falta y dónde se contradicen las fuentes.

**Lo que no hace:** no mide el retorno de la feria ni compara los montos entre años. Cada medio reporta un criterio distinto (balance declarado, expectativa previa, ruedas de negocios, intenciones de compra), y las previsiones se muestran como previsiones.

## Cómo leer los datos

Cada dato lleva un estado:

| Estado | Significa |
|---|---|
| `verificado` | Cifra reportada por la fuente después del evento, o sede y fecha confirmadas. |
| `parcial` | Previsión previa al evento, dato preliminar o dato al que le falta parte de la información. |
| `en_conflicto` | Dos o más fuentes dan valores distintos (ver `conflictos[]`). |
| `no_verificado` | No se encontró el dato. El valor es `null` y se muestra como "sin dato". |

Regla única: ningún número aparece sin fuente pública enlazada. Si no hay fuente, el campo queda vacío.

## Contenido

| Ruta | Qué es |
|---|---|
| `data/ediciones.json` | Una ficha por edición: sede, fechas, métricas, otras cifras, ganadores, subasta, fuentes y conflictos. |
| `data/lotes_taza.json` | Los 223 lotes premiados de la Taza de Excelencia Perú 2017-2025, tal como los imprime Alliance for Coffee Excellence (ACE), con compradores. |
| `data/HUECOS.md` | Lo que no se pudo verificar y las fuentes pendientes. |
| `src/template.html` | Plantilla del tablero. |
| `build.js` | Genera `index.html` con los datos incrustados. |
| `index.html` | El tablero ya generado. No se edita a mano. |

## Cómo actualizar el tablero

1. Edita los datos en `data/` (o la plantilla en `src/template.html`).
2. Ejecuta `node build.js`. Requiere Node.js; no tiene dependencias.
3. Abre `index.html` en el navegador, o publícalo con GitHub Pages.

## Limitaciones conocidas

- Los totales y promedios de la subasta 2024 y 2025 son cálculos propios con las filas de ACE, porque la página no los imprime (ver `subasta.nota`).
- El promedio impreso por ACE para 2022 (US$ 19,76 por libra) no coincide con total sobre libras de sus filas (US$ 17,02).
- Los nombres de compradores se agruparon con una lista de alias hecha a mano; un mismo comprador puede aparecer con otra razón social.
- Las cifras del sector (zonas, variedades, familias productoras) no han pasado por la verificación del archivo; el tablero lo avisa.
- Falta revisar la Taza de Excelencia Perú 2020 de ACE, año en que la feria no tuvo edición.

## Licencia

Datos bajo [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Los resultados de la Taza de Excelencia pertenecen a Alliance for Coffee Excellence; este archivo los cita con enlace a su fuente.
