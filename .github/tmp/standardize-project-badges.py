from pathlib import Path
import html
import re

path = Path('index.html')
text = path.read_text(encoding='utf-8')

BADGES = {
    'UK Government Major Projects | Cost, Schedule and Delivery-Risk Dashboard': 'Personal Project | 2026',
    'Underwater Vehicle Hydrodynamics | RANS-VOF CFD in Star-CCM+': 'Year 3 | Individual Research Project',
    'ML for Diabetic Patient Readmission | 101,766 Clinical Records': 'Year 3 | Machine Learning Project',
    'Reusable Takeaway Packaging | Revolutionising the Circular Economy': 'Year 2 | Design Project',
    'Smart Hybrid Water Supply | Rural Schools in Ethiopia': 'Year 3 | Global Development Project',
    'Electricity Pylon Design | Uganda Vaccine Plant': 'Year 1 | Structural Design Project',
    'Hydroelectric Dam Design | Mitano River, Uganda': 'Year 1 | Energy Systems Project',
    'IMechE Repeatable Vehicle | Design Challenge 2024': 'Year 1 | IMechE Design Challenge',
    'Materials Characterisation | Tensile Testing & Metallography': 'Year 1 | Materials Laboratory',
    'Beam Bending FEA | I-Beam Deflection in ANSYS': 'Year 2 | FEA Study',
    'Strain Gauge Scale & DC Motor Control Lab': 'Year 2 | Control & Instrumentation Laboratory',
    'Aerofoil Lift Analysis| NACA-0012 Wind Tunnel': 'Year 2 | Aerodynamics Laboratory',
    'Turbine Impeller Redesign | Pratt & Whitney PW100': 'Year 2 | Engineering Design Project',
    'Charpy Impact | HDPE & Nylon Fracture Toughness': 'Year 2 | Materials Laboratory',
    'Elasticity FEA | Stress Concentration in a Perforated Plate': 'Year 3 | FEA Study',
    'Plasticity FEA | Aluminium Tensile Test Simulation': 'Year 3 | FEA Study',
    'Supersonic Flow Analysis | Schlieren Imaging & Shock Relations': 'Year 3 | Aerodynamics Laboratory',
    'Advanced Thermodynamics: Exergy, Fuel Cells & Nuclear vs Solar EIA': 'Year 3 | Energy Systems Project',
    'Population Growth Modelling | Logistic & Exponential Models': 'Year 1 | Mathematical Modelling',
    'SIR Epidemic Simulation | COVID-19, H1N1, TB & Common Cold': 'Year 1 | Mathematical Modelling',
    'Footbridge Lateral Dynamics | Millennium Bridge-Style Oscillation': 'Year 2 | Dynamics Project',
    'Matrix Methods & SVD Image Compression': 'Year 2 | Mathematical Modelling',
    'Probability, Statistics & Regression Analysis': 'Year 2 | Statistics & Regression',
    '2026 FIFA World Cup Prediction Framework': 'Personal Project | 2026',
    'Systematic Trading Backtesting Engine': 'Personal Project | 2025',
    'Options Pricing & Risk Analytics Calculator': 'Personal Project | 2026',
    'Pairs Trading Research & Paper-Trading System': 'Personal Project | 2026',
    'Rolls-Royce Financial Model & Valuation': 'Personal Project | 2026',
    'Aircraft Engine Health Monitoring & Predictive Maintenance': 'Personal Project | 2026',
    'London Transport Demand & Station Performance': 'Personal Project | 2026',
    'HouseZero Solar & Battery Retrofit Optimisation': 'Personal Project | 2026',
    'Global Water Infrastructure Prioritisation': 'Personal Project | 2026',
    'Enhanced Waterfall Methodology | HMRC Tax Filing System': 'Year 3 | Project Management Project',
    'Solar EPC Project Plan | Bapco Refinery, Bahrain': 'Year 3 | Project Management Project',
    'UCL Summer Studentship | Evaluation of Assessment and Learning': 'UCL Studentship | 2025',
}

article_re = re.compile(r'<article\b[^>]*class="[^"]*pcard[^"]*"[^>]*>.*?</article>', re.S)
h3_re = re.compile(r'<h3>(.*?)</h3>', re.S)
badge_re = re.compile(r'<span class="year-badge">.*?</span>', re.S)

seen_titles = set()
changed_articles = 0
missing_badges = []
unmapped_titles = []

def plain_title(raw):
    raw = re.sub(r'<[^>]+>', '', raw)
    return html.unescape(raw).strip()

def update_article(match):
    global changed_articles
    article = match.group(0)
    h3 = h3_re.search(article)
    if not h3:
        return article
    title = plain_title(h3.group(1))
    seen_titles.add(title)
    desired = BADGES.get(title)
    if desired is None:
        unmapped_titles.append(title)
        return article
    if not badge_re.search(article):
        missing_badges.append(title)
        return article
    replacement = f'<span class="year-badge">{html.escape(desired, quote=False)}</span>'
    updated = badge_re.sub(replacement, article, count=1)
    if updated != article:
        changed_articles += 1
    return updated

text = article_re.sub(update_article, text)

missing_titles = sorted(set(BADGES) - seen_titles)
if missing_titles:
    raise SystemExit('Badge map titles not found in page: ' + ' | '.join(missing_titles))
if unmapped_titles:
    raise SystemExit('Project cards missing from badge map: ' + ' | '.join(sorted(set(unmapped_titles))))
if missing_badges:
    raise SystemExit('Project cards without year badge: ' + ' | '.join(sorted(set(missing_badges))))

# QA: all visible project badges should now follow one of the three approved grammars.
badges = [html.unescape(x.strip()) for x in re.findall(r'<span class="year-badge">(.*?)</span>', text, re.S)]
allowed = re.compile(r'^(Year [123] \| .+|Personal Project \| 20\d{2}|UCL Studentship \| 20\d{2})$')
invalid = sorted(set(b for b in badges if not allowed.match(b)))
if invalid:
    raise SystemExit('Non-standard badges remain: ' + ' | '.join(invalid))

# Explicit guardrails requested for the portfolio presentation.
if re.search(r'BENG\d+', text, re.I):
    raise SystemExit('Module code still present in index.html')
if any('&middot;' in b or '·' in b for b in re.findall(r'<span class="year-badge">(.*?)</span>', text, re.S)):
    raise SystemExit('Middle-dot separator remains in project badge')
if changed_articles == 0:
    raise SystemExit('No project badges changed')

path.write_text(text, encoding='utf-8')
print(f'Standardised {changed_articles} project card instances across {len(seen_titles)} unique projects.')
