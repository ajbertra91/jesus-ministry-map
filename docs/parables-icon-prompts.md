# Parable Node Icon Prompts

Image prompts for generating the chip icons used on the `/parables` page (`src/components/ParablesPage`). Style reference: the Cyberpunk 2077 "Character > Skill Tree" screen (Behance: [Cyberpunk 2077 UI, Part 2](https://www.behance.net/gallery/133185623/Cyberpunk-2077User-Interface-(Part-2)?locale=en_US)) — flat single-color glyph icons inside beveled chip frames, wired together by circuit traces.

## How the icons are used

Each node on the constellation renders `public/images/parables/{id}.png` inside a 64x64 chip. If the file is missing, the page falls back to a two-letter monogram automatically — the page already works without these images, so generate and drop them in whenever ready, one branch at a time is fine.

## Setup

1. Paste a prompt below into ChatGPT (or any image model that takes text prompts).
2. Save the result as a **square PNG, transparent background, at least 512x512**.
3. Name the file exactly as shown (e.g. `sower.png`) and place it in `public/images/parables/`.
4. Refresh the page — the chip picks up the image automatically, no code changes needed.

## Master style prefix

Prepend this to every prompt below:

> Minimalist single-color line icon, flat vector glyph style, centered on a fully transparent background, no text, no border, no background shape, no shading gradients — just a clean glowing icon silhouette in **[ACCENT COLOR]**, cyberpunk HUD icon aesthetic like a Cyberpunk 2077 skill-tree perk icon.

Swap `[ACCENT COLOR]` per branch so the generated icon matches its chip's glow color in the app:

| Branch | Accent color to request |
|---|---|
| Growth | neon green (`#1DED83`) |
| Value | neon yellow (`#F1B537`) |
| Mercy | neon red (`#F75049`) |
| Vigilance | neon orange (`#FB932E`) |
| Judgment | neon purple (`#9D2BF5`) |
| John's Figures | neon cyan (`#5EF6FF`) |

## Growth — neon green

- `sower.png` — "A hand scattering seed in an arc over furrowed soil rows."
- `mustard-seed.png` — "A single small seed beside a tall branching tree silhouette, scale contrast."
- `leaven.png` — "A mixing bowl with a spiral rising-dough swirl above it."
- `growing-seed.png` — "A single sprout growing out of the ground with a crescent moon and sun on either side, day-and-night cycle."
- `wheat-and-tares.png` — "Two intertwined stalks, one wheat head, one thorny weed, growing side by side."
- `net.png` — "A fishing net silhouette pulled into a triangular haul shape."

## Value — neon yellow

- `hidden-treasure.png` — "An open chest half-buried in the ground with a shovel beside it."
- `pearl.png` — "A single round pearl inside an open clamshell."
- `lost-sheep.png` — "A shepherd's crook curved around a single sheep silhouette."
- `lost-coin.png` — "A single coin under a magnifying glass or broom sweeping toward it."
- `prodigal-son.png` — "Two arms open wide embracing a smaller returning figure silhouette."
- `unjust-steward.png` — "A ledger or scroll with a downward-adjusted tally mark and a coin."

## Mercy — neon red

- `good-samaritan.png` — "One figure kneeling to bandage/lift another figure on a roadside, two donkeys/travel bag nearby optional."
- `unforgiving-servant.png` — "Two scale pans, one holding a huge sack of coins, the other a single small coin."
- `two-debtors.png` — "Two scrolls of unequal length, one much longer than the other, tied with the same ribbon."
- `pharisee-and-tax-collector.png` — "Two robed figures in prayer, one standing tall with raised chin, one bowed low."
- `workers-in-vineyard.png` — "A row of grape vines with a sun arcing from morning to evening above it."
- `two-sons.png` — "Two paths diverging from one gate, one leading to a vineyard silhouette."

## Vigilance — neon orange

- `ten-virgins.png` — "Five oil lamps lit in a row, five unlit, one bridal silhouette door in the background."
- `talents.png` — "Three stacked coin-bag silhouettes of increasing height in a row."
- `minas.png` — "A single coin multiplying into a fan of coins, arrow pointing outward."
- `faithful-servant.png` — "A key ring and a household silhouette (small house icon) held in one hand."
- `rich-fool.png` — "A grain barn silhouette with an hourglass above it running out."
- `wise-and-foolish-builders.png` — "Two small houses side by side, one on a jagged rock base, one on a wavy sand base, a storm cloud above both."

## Judgment — neon purple

- `wicked-tenants.png` — "A walled vineyard silhouette with a broken gate and a watchtower."
- `wedding-feast.png` — "A long banquet table silhouette under a festive arch, empty chairs."
- `sheep-and-goats.png` — "A sheep silhouette and a goat silhouette split by a vertical dividing line."
- `rich-man-and-lazarus.png` — "A grand gate silhouette with a small hunched figure at its base, a wide gap or chasm symbol beside it."
- `barren-fig-tree.png` — "A fig tree silhouette with bare branches and a single small budding leaf."
- `persistent-widow.png` — "A closed courthouse-style door silhouette with a raised knocking fist beside it."

## John's Figures — neon cyan

- `good-shepherd.png` — "A shepherd's crook with a small lamb silhouette curled beside it, sheepfold gate in the background."
- `true-vine.png` — "A grapevine branch silhouette with clustered grapes and curling tendrils."
- `grain-of-wheat.png` — "A single wheat grain silhouette splitting open into multiple sprouting stalks."
- `bread-of-life.png` — "A round loaf of bread silhouette with radiating light lines behind it."
- `woman-in-childbirth.png` — "A radiant sunrise/dawn arc silhouette (abstract, non-figurative) symbolizing joy after pain."
- `light-of-the-world.png` — "A single lit lamp or torch silhouette radiating outward light rays."
