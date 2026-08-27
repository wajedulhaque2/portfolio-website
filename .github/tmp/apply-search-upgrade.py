from pathlib import Path
import re

path = Path('index.html')
text = path.read_text(encoding='utf-8')

# Professional naming and clearer positioning.
text = text.replace('<span class="sec-tag">Recruiter Project Finder</span>', '<span class="sec-tag">Project Explorer</span>', 1)
text = text.replace('<h2>Find the work most relevant to you.</h2>', '<h2>Explore projects by field, skill or method.</h2>', 1)
text = text.replace(
    '<p>Search across the full portfolio by industry, skill, software, method or project type, or start with one of the field filters below.</p>',
    '<p>Search by industry, discipline, software or technique. Results are ranked using project-specific metadata so the strongest matches appear first.</p>',
    1,
)
text = text.replace(
    'placeholder="Try: DCF, CFD, Python, Excel, aerospace, water, machine learning..."',
    'placeholder="Try: aerospace + Excel, CFD, Power Query, predictive maintenance, DCF..."',
    1,
)
text = text.replace(
    '<span class="finder-hint">Search checks project titles, tags, descriptions, tools and outputs.</span>',
    '<span class="finder-hint">Search uses curated project disciplines, industries, methods and tools.</span>',
    1,
)
text = text.replace(
    'No matching projects yet. Try a broader term such as “Excel”, “Python”, “FEA”, “finance” or “sustainability”.',
    'No strong matches found. Try a broader field, tool or method such as “Excel”, “Python”, “FEA”, “finance” or “sustainability”.',
    1,
)

# Replace loose keyword filters with exact curated categories.
new_filters = '''<div class="finder-chips" aria-label="Project field filters">
          <button class="finder-chip" type="button" data-finder-filter data-category="engineering-simulation">Mechanical / Simulation</button>
          <button class="finder-chip" type="button" data-finder-filter data-category="aerospace-fluids">Aerospace / Fluids</button>
          <button class="finder-chip" type="button" data-finder-filter data-category="structural-materials">Structures / Materials</button>
          <button class="finder-chip" type="button" data-finder-filter data-category="data-ml">Data / ML</button>
          <button class="finder-chip" type="button" data-finder-filter data-category="quant-finance">Quant / Finance</button>
          <button class="finder-chip" type="button" data-finder-filter data-category="excel-analytics">Excel / Analytics</button>
          <button class="finder-chip" type="button" data-finder-filter data-category="energy-infrastructure">Energy / Infrastructure</button>
          <button class="finder-chip" type="button" data-finder-filter data-category="project-management">Project Management</button>
          <button class="finder-chip" type="button" data-finder-filter data-category="design-sustainability">Design / Sustainability</button>
        </div>'''
text, filter_count = re.subn(
    r'<div class="finder-chips" aria-label="Project field filters">.*?</div>',
    new_filters,
    text,
    count=1,
    flags=re.S,
)
if filter_count != 1:
    raise SystemExit('Could not replace Project Explorer category filters')

# Make the explorer discoverable from the header and hero.
if '<a href="#project-finder">Explore</a>' not in text:
    text = text.replace(
        '<nav class="nav-links" aria-label="Primary">\n      <a href="#about">About</a>',
        '<nav class="nav-links" aria-label="Primary">\n      <a href="#project-finder">Explore</a>\n      <a href="#about">About</a>',
        1,
    )
text = text.replace(
    '<a class="btn btn-primary" href="#engineering">View Projects</a>',
    '<a class="btn btn-primary" href="#project-finder">Explore Projects</a>',
    1,
)

# The portfolio contains 35 unique project titles; Featured Work repeats five of them.
text = text.replace('Three years.<br>Thirty-four projects.', 'Three years.<br>Thirty-five projects.', 1)

# Remove the original raw-card-text search implementation.
text, old_js_count = re.subn(
    r'\n  // Recruiter project finder\n.*?(?=  // Theme toggle)',
    '\n  // Project Explorer search is implemented in project-search.js.\n\n',
    text,
    count=1,
    flags=re.S,
)
if old_js_count != 1:
    raise SystemExit('Could not remove the legacy project finder script')

# Load the curated search engine after the existing inline site script.
search_script = '<script src="/project-search.js"></script>'
if search_script not in text:
    text = text.replace('</body>', search_script + '\n</body>', 1)

# Guardrails for this migration.
if 'Recruiter Project Finder' in text:
    raise SystemExit('Old visible feature name still present')
if text.count('data-category=') != 9:
    raise SystemExit('Expected nine curated category filters')
if 'data-keywords=' in text:
    raise SystemExit('Legacy keyword filter attributes still present')
if search_script not in text:
    raise SystemExit('Curated search script was not linked')

path.write_text(text, encoding='utf-8')
