# Verata Ventures locked logo masters

Status: **approved and locked · 22 July 2026**

These SVG files are the canonical source. Use them directly whenever the delivery
format supports SVG. Do not ask an AI model—or a designer—to recreate the mark from
a screenshot when the master is available.

## Canonical assets

- `verata-mark-light.svg`: Deep Ink incoming stroke and three Mineral outgoing strokes.
- `verata-mark-dark.svg`: Pale incoming stroke and three Mineral Bright outgoing strokes.
- `verata-mark-expressive.svg`: Pale incoming stroke with Mineral Bright, Citron, and Coral outgoing strokes; dark surfaces only.

The copies in `../../public/brand/` must remain byte-identical to these masters.

## Locked construction

- View box: `0 0 124 142`.
- Shared horizontal cap line: `y = 16` for all four upper terminals.
- Outgoing bands are parallel at approximately `22.8°` from vertical.
- Outgoing top spans: `64.30–72.10`, `83.40–91.20`, and `102.10–109.90`.
- The longest outgoing arm and incoming arm share an outer miter at approximately
  `(58.54, 138.82)` and an inner intersection at approximately `(61.46, 113.18)`.
- The incoming path includes a `0.18px` production trap across the shared seam to
  prevent antialiasing hairlines. This is intentional.
- Incoming visual weight is approximately `160%` of an outgoing band.
- The shorter outgoing bands branch behind the incoming band at increasing lengths.

Do not replace the vertex with overlapping butt caps. Do not stagger, angle, or round
the top terminals. Do not fan the three outgoing trajectories.

## SHA-256

```text
f9b517373a590223e02bec29108b937ae2241398619e94738d928abd9b194f94  verata-mark-light.svg
7a920ac296ae2ec5879f9485f46b1bece312eb234bcfe9f4e7376d0a73963f2a  verata-mark-dark.svg
8e482808c8f80b95f768a5a6be997437d3ab33d229ef9e983fe1e85d552f9516  verata-mark-expressive.svg
```

## Reproduction guidance for AI systems

Most frontier models can reproduce the mark reliably when given these source files
and instructed to preserve paths exactly. Text-only reconstruction is possible using
the coordinates above, but asset reuse is the required default. Any regenerated mark
must be compared against the canonical checksum or visually overlaid at 100% before use.
