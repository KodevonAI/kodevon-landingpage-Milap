# Graph Report - kodevon-landingpage-Milap  (2026-09-29)

## Corpus Check
- 98 files · ~176,158 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 46 file(s) not represented in the graph (top: .csv 37, (none) 5, .css 2)

## Summary
- 797 nodes · 1525 edges · 53 communities (44 shown, 9 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 46 edges (avg confidence: 0.85)
- Token cost: 403,355 input · 0 output

## Community Hubs (Navigation)
- UI/UX Data Quality Tests
- Design System Generator
- Build Tooling & Dependencies
- Project Context & Deploy Docs
- UI/UX Search Core
- AI Writing & Localization Rules
- Stack Guidelines Search
- Color Contrast & Dark Palette
- UI/UX Regression Test Suite
- Scroll Reveal Sections
- UI/UX Domain Search
- BM25 Ranking Engine
- Terminal Output Formatting
- Hero & Shader Buttons
- Services Cards & Icons
- Query Domain Detection
- Page Override Generation
- Catalog Refresh Tests
- Brand Logo & Layout Shell
- App Routing & SSR Entry
- GSAP Core Concepts
- Design System Persistence
- Dark Mode Resolution
- Reasoning Rules Contract
- WhatsApp Contact Forms
- Appointment Booking Slots
- Stack Query Normalization
- Frontend Design Principles
- Technical SEO Audit
- Why-Choose-Us & Services
- UI/UX Pro Max Skill
- Style Identity Resolution
- Catalog Snapshot Tests
- Skill Script Path Tests
- UI Quick Reference Rules
- Relevance Threshold Gate
- Open Graph Share Card
- Pre-Delivery UI Checklist
- Line Ending Snapshot Tests
- Text Layout Data Tests
- Master Design Markdown
- Stack Flag Tests
- Ranking Metric Tests
- Find Skills Skill
- Fixture Validation Tests
- Unused Vite Icon Sprite
- Responsive Media Hooks
- Diagnostics Contract Tests
- Text Layout Retrieval Tests
- Apple Touch Icon
- Unused Vite Favicon
- Favicon Eye Mark

## God Nodes (most connected - your core abstractions)
1. `search()` - 43 edges
2. `DesignSystemGenerator` - 38 edges
3. `search_stack()` - 35 edges
4. `ScrollReveal()` - 20 edges
5. `BM25` - 18 edges
6. `detect_domain()` - 18 edges
7. `CatalogRefreshTest` - 15 edges
8. `read_rows()` - 15 edges
9. `TestReasoningContract` - 15 edges
10. `react` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Docker app Service (Dockerfile build, port 80)` --semantically_similar_to--> `Cloudflare Pages Deployment (project opticamilap)`  [INFERRED] [semantically similar]
  docker-compose.yaml → CONTEXT.md
- `Google Fonts: Figtree + Noto Sans` --conceptually_related_to--> `Tailwind v4 @theme Color & Font Tokens`  [AMBIGUOUS]
  index.html → CONTEXT.md
- `Frontend Design Skill` --semantically_similar_to--> `UI/UX Pro Max Skill`  [INFERRED] [semantically similar]
  .agents/skills/frontend-design/SKILL.md → .agents/skills/ui-ux-pro-max/SKILL.md
- `GSAP Presets` --conceptually_related_to--> `GSAP Core Skill`  [INFERRED]
  .agents/skills/ui-ux-pro-max/SKILL.md → .agents/skills/gsap-core/SKILL.md
- `UI Quick Reference Rule Set` --implements--> `Rule Categories by Priority`  [INFERRED]
  .agents/skills/ui-ux-pro-max/references/quick-reference.md → .agents/skills/ui-ux-pro-max/SKILL.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **International SEO localization controls** — _agents_skills_seo_audit_skill_hreflang, _agents_skills_seo_audit_skill_canonicalization, _agents_skills_seo_audit_skill_international_sitemaps, _agents_skills_seo_audit_references_international_seo_locale_url_strategies, _agents_skills_seo_audit_references_international_seo_x_default [INFERRED 0.85]
- **Accessible reduced-motion animation** — _agents_skills_gsap_core_skill_gsap_matchmedia, _agents_skills_gsap_core_skill_prefers_reduced_motion, _agents_skills_ui_ux_pro_max_references_quick_reference_animation, _agents_skills_ui_ux_pro_max_references_quick_reference_accessibility [INFERRED 0.75]
- **Guidance against templated/generated-looking output** — _agents_skills_frontend_design_skill_generated_page_typographic_tells, _agents_skills_frontend_design_skill_ground_designs_in_subject_matter, _agents_skills_seo_audit_references_ai_writing_detection_em_dashes_as_ai_tell, _agents_skills_seo_audit_references_ai_writing_detection_overused_ai_vocabulary [INFERRED 0.65]
- **Prerender HTML Injection Pipeline** — scripts_prerender, src_seo_routes, index_seo_marker_block, index_schema_placeholder, index_app_html_placeholder, public_robots_sitemap_directive [INFERRED 0.85]
- **Booking/Contact Forms to WhatsApp Flow** — context_whatsapp_form_submission, src_components_sections_reservacitas, src_components_sections_formcontacto, src_utils_whatsapp, context_appointment_slots [EXTRACTED 1.00]
- **Local-SEO share message: brand + location + services + booking CTA** — public_og_image_brand_opticamilap, public_og_image_headline_popayan, public_og_image_services, public_og_image_call_to_action [INFERRED 0.85]

## Communities (53 total, 9 thin omitted)

### Community 0 - "UI/UX Data Quality Tests"
Cohesion: 0.07
Nodes (51): Semantic quality contracts for the core UI/UX datasets., read_rows(), TestAccessibilityGuidance, TestChartsTypographyAndIcons, TestCurrentReactGuidance, TestSemanticColors, _catalog_date(), _check_app_interface_contract() (+43 more)

### Community 1 - "Design System Generator"
Cohesion: 0.05
Nodes (22): DesignSystemGenerator, _filter_anti_patterns_for_mode(), Drop "avoid dark mode" advice once dark mode is the resolved answer., Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., Execute searches across multiple domains., Find matching reasoning rule for a category., Apply reasoning rules to search results. (+14 more)

### Community 2 - "Build Tooling & Dependencies"
Cohesion: 0.05
Nodes (44): dependencies, framer-motion, gsap, @gsap/react, @paper-design/shaders-react, react, react-dom, react-icons (+36 more)

### Community 3 - "Project Context & Deploy Docs"
Cohesion: 0.06
Nodes (41): focus-visible Ring Accessibility Pattern, Cloudflare Pages Deployment (project opticamilap), Design System / Visual Identity, Real Google Calendar Bookings via Pages Function (pending), Keyless Google Maps iframe Embed, OpticaMilap (optician, Popayán), Tailwind v4 @theme Color & Font Tokens, Tech Stack (React 19, Vite 8, Tailwind v4, Framer Motion, GSAP) (+33 more)

### Community 4 - "UI/UX Search Core"
Cohesion: 0.09
Nodes (32): _contains_phrase(), _domain_keywords(), _exact_stack_identifier(), _file_signature(), _get_bm25(), _load_csv(), _load_csv_snapshot(), _load_product_keywords() (+24 more)

### Community 5 - "AI Writing & Localization Rules"
Cohesion: 0.07
Nodes (32): Generated-Page Typographic Tells, AI Phrase Patterns, AI Writing Detection Reference, Em Dashes as AI Tell, Filler Words and Empty Intensifiers, Overused AI Vocabulary, Auto-Translated Content Stance, Canonical Overrides Hreflang (+24 more)

### Community 6 - "Stack Guidelines Search"
Cohesion: 0.12
Nodes (6): Search stack-specific guidelines, search_stack(), _rows(), TestNativeDesktopStackFreshness, _rows(), TestWebStackFreshness

### Community 7 - "Color Contrast & Dark Palette"
Cohesion: 0.11
Nodes (14): _contrast_ratio(), _derive_dark_palette(), _palette_is_dark(), WCAG relative luminance of a #RRGGBB string, or None if unparseable., True when a colors.csv row's Background is a dark surface., WCAG contrast ratio for two hex colors, or None if either is invalid., Keep product brand tokens while deriving accessible dark surfaces., Pick the highest-ranked palette matching the resolved mode. Only the dark case… (+6 more)

### Community 8 - "UI/UX Regression Test Suite"
Cohesion: 0.16
Nodes (16): Offline contract tests for deterministic upstream catalog refreshes., Stdlib-only regression tests for core.py / design_system.py (unittest, not…, Regression tests for the dropped --stack flag in --design-system mode (issue…, Freshness and migration contracts for native, desktop, and 3D stacks., Regression tests for the public style taxonomy and search contract., read_rows(), Canonical regression contracts for resilient UI text layouts., Freshness and generation-isolation contracts for web stack guidance. (+8 more)

### Community 9 - "Scroll Reveal Sections"
Cohesion: 0.20
Nodes (17): framer-motion, ScrollReveal(), FAQ(), FormContacto(), categories, CategoryCard(), Productos(), QuienesSomos() (+9 more)

### Community 10 - "UI/UX Domain Search"
Cohesion: 0.14
Nodes (4): Main search function with auto-domain detection, search(), TestSearchDomains, TestStyleTaxonomy

### Community 11 - "BM25 Ranking Engine"
Cohesion: 0.13
Nodes (8): BM25, BM25 ranking algorithm for text search, Lowercase, normalize synonyms, split, remove punctuation, filter stopwords, Build BM25 index from documents, Score all documents against query, All indexed terms, for suggestion/typo-recovery purposes., TestBm25CoreBehavior, TestTokenizer

### Community 12 - "Terminal Output Formatting"
Cohesion: 0.13
Nodes (16): ansi_ljust(), format_ascii_box(), add_wrapped(), wrap_text(), format_markdown(), hex_to_ansi(), _mode_support_labels(), Light/dark support labels that agree with the product's anti-patterns. A light… (+8 more)

### Community 13 - "Hero & Shader Buttons"
Cohesion: 0.17
Nodes (13): AnimatedEye Hero Animation, @paper-design/shaders-react, Button(), MotionLink, EyeVisual(), Hero(), pillars, stats (+5 more)

### Community 14 - "Services Cards & Icons"
Cohesion: 0.18
Nodes (10): GlassesIcon Custom Inline SVG, react, CARD_ACCENT, CARD_ACCENT_LIGHT, iconMap, useStaggerAnimation(), COLORS, FAQS (+2 more)

### Community 15 - "Query Domain Detection"
Cohesion: 0.23
Nodes (3): detect_domain(), Auto-detect the most relevant domain from query. Matches are weighted by…, TestDomainDetection

### Community 16 - "Page Override Generation"
Cohesion: 0.18
Nodes (13): _detect_page_type(), format_page_override_md(), _generate_intelligent_overrides(), Format a page-specific override file with intelligent AI-generated content., Generate intelligent overrides based on page type using layered search. Uses…, Detect page type from context and search results., Design System Generator - Aggregates search results and applies reasoning to…, format_output() (+5 more)

### Community 18 - "Brand Logo & Layout Shell"
Cohesion: 0.22
Nodes (11): Floating Glassmorphism Pill Navbar with Scroll-Spy, OpticaMilap Logo (logo.webp), Optician Brand Identity (vision/eye care), Stylized Eye Mark (blue iris, swooping navy/sky-blue strokes), Footer(), quickLinks, Layout(), links (+3 more)

### Community 19 - "App Routing & SSR Entry"
Cohesion: 0.25
Nodes (9): react-dom, ref_react_router, react-router-dom, App(), AppRoutes(), ScrollToTop(), render(), src_index (+1 more)

### Community 20 - "GSAP Core Concepts"
Cohesion: 0.18
Nodes (13): CustomEase Plugin, Easing, Function-based Values, GSAP Core Skill, gsap.defaults, gsap.matchMedia, gsap.to / from / fromTo Tweens, Prefer GSAP Over CSS Animations (+5 more)

### Community 21 - "Design System Persistence"
Cohesion: 0.17
Nodes (10): generate_design_system(), persist_design_system(), Persist design system to design-system/<project>/ folder using Master +…, Main entry point for design system generation. Args: query: Search query (e.g.,…, Slugify a name into a single safe path segment. Only [a-z0-9_-] survives; every…, Write fully to a temp file, then publish atomically., safe_slug(), _write_persisted_file() (+2 more)

### Community 22 - "Dark Mode Resolution"
Cohesion: 0.23
Nodes (8): _query_wants_dark(), True when a styles.csv row describes itself as dark-first., True when the query explicitly asks for a dark theme., Resolve the mode the rest of the output has to agree with., _resolve_color_mode(), _style_is_dark_primary(), Regression tests for color-mode coherence in design_system.py (issue #428).…, TestModeResolution

### Community 23 - "Reasoning Rules Contract"
Cohesion: 0.22
Nodes (9): apply_decision_rules(), _object_without_duplicates(), parse_decision_rules(), Return deterministic mutations and an audit trail; never execute data., Closed, non-executable grammar for design-system decision rules., Parse the canonical condition -> action-array representation., _validate_action(), Cross-file semantic contracts for curated design data. (+1 more)

### Community 24 - "WhatsApp Contact Forms"
Cohesion: 0.26
Nodes (9): Forms Submitted via WhatsApp (wa.me), citaSchema / contactSchema (Zod), react-icons, ContactForm(), CTABanner(), MotionLink, contacts, BUSINESS (+1 more)

### Community 25 - "Appointment Booking Slots"
Cohesion: 0.32
Nodes (9): Appointment Time Slots (30-min, Mon-Sat, no Sundays), CitaForm(), getMinDate(), getSlots(), pad(), slotsBetween(), toISODate(), ReservaCitas() (+1 more)

### Community 26 - "Stack Query Normalization"
Cohesion: 0.22
Nodes (9): _exact_match_diagnostic(), _legacy_successor_guidance(), _normalize(), Apply longest-first synonym substitution at token boundaries., Whether a stack query explicitly targets an older framework generation., Choose one coherent applicability generation for stack retrieval., Prefer the explicit successor row for a brand-new app on legacy-only stacks., _stack_query_requests_legacy() (+1 more)

### Community 27 - "Frontend Design Principles"
Cohesion: 0.22
Nodes (9): Apache License 2.0, Deliberate Typography and Type Scale, Frontend Design Skill, Ground Designs in Subject Matter, Plan Review Build Critique Process, Restraint and Self-Critique, The Elements of Typographic Style, Visual Structure Is Information (+1 more)

### Community 28 - "Technical SEO Audit"
Cohesion: 0.22
Nodes (9): Core Web Vitals, Crawlability, HTTPS Security, Indexation, Mobile-Friendliness, Technical SEO Audit, URL Structure, Layout & Responsive (+1 more)

### Community 29 - "Why-Choose-Us & Services"
Cohesion: 0.36
Nodes (7): PorqueElegir(), ReasonCard(), reasons, ServiceCard(), Servicios(), useAlternatingEntrance(), ServiciosPage()

### Community 30 - "UI/UX Pro Max Skill"
Cohesion: 0.25
Nodes (8): Design Dials, Design System Generation, GSAP Presets, Master + Overrides Pattern, Rule Categories by Priority, Search Tool Query Contract, Stack Guidelines, UI/UX Pro Max Skill

### Community 31 - "Style Identity Resolution"
Cohesion: 0.25
Nodes (8): _exact_row_identity(), Suggest complete public identities so a retry can bypass score thresholds., Return non-empty public identities from ordinary and alias fields., Resolve an explicit style identity without opening generic variant ranking., Return one row whose stable public identity exactly matches the query., _row_identities(), _style_identity(), _suggest_identities()

### Community 32 - "Catalog Snapshot Tests"
Cohesion: 0.29
Nodes (6): The catalog snapshot must not depend on the checkout's line endings. Regression…, Unit tests for metric math and relevance fixture validation., hashlib, importlib_util, shutil, tempfile

### Community 33 - "Skill Script Path Tests"
Cohesion: 0.32
Nodes (6): Every script invocation in the shipped skill markdown resolves from the skill…, Return (target, None) for a skill-relative path, or (None, reason)., resolve(), shipped_invocations(), SkillScriptPathsTest, re

### Community 34 - "UI Quick Reference Rules"
Cohesion: 0.29
Nodes (7): Accessibility, Charts & Data, Forms & Feedback, Navigation Patterns, Style Selection, Touch & Interaction, UI Quick Reference Rule Set

### Community 36 - "Open Graph Share Card"
Cohesion: 0.38
Nodes (7): OpticaMilap Open Graph Share Card, OpticaMilap Brand (eye logo + wordmark), CTA: Agenda tu cita online, Headline: Óptica profesional en Popayán, Cauca, Phone Contact 316 608 5291, Services: Exámenes visuales, Gafas, Lentes de contacto, Reparaciones, Dark Navy/Sky-Blue Gradient Design (1200x630, left-aligned)

### Community 37 - "Pre-Delivery UI Checklist"
Cohesion: 0.33
Nodes (6): App Interaction Rules, Icons & Visual Elements, Layout & Spacing, Light/Dark Mode Contrast, Pre-Delivery Checklist, Pro Rules and Pre-Delivery Checklist

### Community 38 - "Line Ending Snapshot Tests"
Cohesion: 0.40
Nodes (3): CatalogSummaryLineEndingsTest, _load_generator(), Simulate a Windows checkout: the recorded hashes must still validate.

### Community 40 - "Master Design Markdown"
Cohesion: 0.40
Nodes (4): _button_outline_text_color(), format_master_md(), Format design system as MASTER.md with hierarchical override logic., Primary for outline-button text when it is readable, else the foreground.

### Community 43 - "Find Skills Skill"
Cohesion: 0.50
Nodes (4): Find Skills Skill, Skills CLI, Skills Leaderboard (skills.sh), Verify Skill Quality Before Recommending

### Community 45 - "Unused Vite Icon Sprite"
Cohesion: 0.50
Nodes (4): icons.svg (SVG symbol sprite), Documentation & Social Outline Icons (purple #aa3bff), Social/Dev Platform Icons (Bluesky, Discord, GitHub, X), Unused Vite Template Leftover Asset

### Community 46 - "Responsive Media Hooks"
Cohesion: 0.83
Nodes (3): useIsMobile(), useIsTablet(), useMediaQuery()

### Community 49 - "Apple Touch Icon"
Cohesion: 0.67
Nodes (3): Apple Touch Icon (OpticaMilap), Stylized Eye Logo Mark (blue iris, pale-yellow sclera, navy swoosh lines), Optician Brand Identity (vision/eye care)

### Community 50 - "Unused Vite Favicon"
Cohesion: 0.67
Nodes (3): favicon.svg (Vite lightning-bolt logo), Unused Template Asset, Vite Template Logo (purple lightning bolt)

### Community 51 - "Favicon Eye Mark"
Cohesion: 0.67
Nodes (3): Blue Brand Palette (navy to light blue gradient), Stylized Eye Logo Mark (blue iris, pale-yellow sclera, swooping blue lines), favicon.webp (OpticaMilap eye logo mark)

## Ambiguous Edges - Review These
- `ReservaCitas.jsx` → `citaSchema / contactSchema (Zod)`  [AMBIGUOUS]
  CONTEXT.md · relation: references
- `Tailwind v4 @theme Color & Font Tokens` → `Google Fonts: Figtree + Noto Sans`  [AMBIGUOUS]
  index.html · relation: conceptually_related_to
- `Forms Submitted via WhatsApp (wa.me)` → `citaSchema / contactSchema (Zod)`  [AMBIGUOUS]
  CONTEXT.md · relation: conceptually_related_to

## Knowledge Gaps
- **120 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+115 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 263 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `ReservaCitas.jsx` and `citaSchema / contactSchema (Zod)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Tailwind v4 @theme Color & Font Tokens` and `Google Fonts: Figtree + Noto Sans`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Forms Submitted via WhatsApp (wa.me)` and `citaSchema / contactSchema (Zod)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `DesignSystemGenerator` connect `Design System Generator` to `Color Contrast & Dark Palette`, `UI/UX Regression Test Suite`, `Terminal Output Formatting`, `Page Override Generation`, `Design System Persistence`, `Dark Mode Resolution`, `Reasoning Rules Contract`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `search()` connect `UI/UX Domain Search` to `UI/UX Data Quality Tests`, `Design System Generator`, `UI/UX Search Core`, `UI/UX Regression Test Suite`, `Query Domain Detection`, `Page Override Generation`, `Diagnostics Contract Tests`, `Text Layout Retrieval Tests`, `Stack Query Normalization`, `Style Identity Resolution`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `search_stack()` connect `Stack Guidelines Search` to `UI/UX Search Core`, `UI/UX Regression Test Suite`, `UI/UX Domain Search`, `Diagnostics Contract Tests`, `Page Override Generation`, `Text Layout Retrieval Tests`, `Stack Query Normalization`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `DesignSystemGenerator` (e.g. with `TestReasoningMatch` and `TestReasoningContract`) actually correct?**
  _`DesignSystemGenerator` has 4 INFERRED edges - model-reasoned connections that need verification._