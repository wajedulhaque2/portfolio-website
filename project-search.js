(function(){
  'use strict';

  const finder = document.querySelector('[data-project-finder]');
  if (!finder) return;

  const PROJECTS = {"UK Government Major Projects | Cost, Schedule and Delivery-Risk Dashboard":{"categories":["excel-analytics","project-management","energy-infrastructure"],"discipline":"project controls portfolio analytics risk management public sector analytics","industry":"government infrastructure major projects public sector","methods":"cost analysis schedule analysis delivery risk scoring portfolio kpi data quality decision support","tools":"excel power query power pivot dax pivottables pivotcharts slicers conditional formatting","keywords":"uk gmpp nista ipa delivery confidence whole life cost project duration financial variance dashboard risk register departments"},"Underwater Vehicle Hydrodynamics | RANS-VOF CFD in Star-CCM+":{"categories":["aerospace-fluids","engineering-simulation"],"discipline":"computational fluid dynamics cfd hydrodynamics fluid mechanics marine engineering","industry":"marine underwater vehicle submarine naval hydrodynamics","methods":"rans vof free surface wave interaction drag mesh convergence grid convergence index validation","tools":"star ccm star-ccm+ matlab cfd","keywords":"submerged vehicle submergence depth chaplin waves drag gci numerical simulation"},"ML for Diabetic Patient Readmission | 101,766 Clinical Records":{"categories":["data-ml"],"discipline":"machine learning data science predictive modelling classification healthcare analytics","industry":"healthcare clinical hospital medicine diabetes","methods":"supervised learning classification class imbalance logistic regression neural network random forest svm roc auc confusion matrix","tools":"python jupyter pandas scikit learn scikit-learn smote tomeklinks imbalanced learn","keywords":"patient readmission diabetic 30 day clinical records healthcare prediction"},"Reusable Takeaway Packaging | Revolutionising the Circular Economy":{"categories":["design-sustainability","engineering-simulation"],"discipline":"product design mechanical design sustainable design circular economy","industry":"consumer products packaging food service sustainability","methods":"concept development pds prototyping testing fea user centred design survey validation","tools":"fusion 360 fea bambu fdm 3d printing tensile testing compression testing","keywords":"reusable takeaway container qr return system app circular packaging prototype"},"Smart Hybrid Water Supply | Rural Schools in Ethiopia":{"categories":["energy-infrastructure","design-sustainability"],"discipline":"water engineering infrastructure design hydraulic design global development sustainability sustainable engineering","industry":"water sanitation education public health rural infrastructure ethiopia","methods":"borehole pumping rainwater harvesting uv filtration solar sizing digital monitoring resilience","tools":"hydraulic calculations solar sizing water monitoring","keywords":"school water supply hybrid system sdg clean water sanitation solar pump sustainability sustainable development"},"Electricity Pylon Design | Uganda Vaccine Plant":{"categories":["structural-materials","engineering-simulation","energy-infrastructure"],"discipline":"structural engineering civil engineering finite element method fem truss design","industry":"power transmission electricity infrastructure steel structures uganda","methods":"structural analysis load cases wind loading truss optimisation member sizing safety validation","tools":"gsa structural fem hand calculations method of sections","keywords":"electricity pylon transmission tower s235 steel vaccine plant mbarara"},"Hydroelectric Dam Design | Mitano River, Uganda":{"categories":["energy-infrastructure","aerospace-fluids"],"discipline":"fluid mechanics hydraulic engineering renewable energy hydropower","industry":"energy infrastructure hydroelectric power dam uganda water","methods":"bernoulli power sizing penstock optimisation turbine selection seasonal flow analysis","tools":"matlab excel turbine charts","keywords":"concrete arch dam mitano river francis turbine renewable electricity hydropower"},"IMechE Repeatable Vehicle | Design Challenge 2024":{"categories":["design-sustainability","engineering-simulation"],"discipline":"mechatronics mechanical design electromechanical design prototyping","industry":"robotics autonomous systems student design challenge","methods":"mechanism design motor control distance measurement redundancy build test","tools":"dc motor leadscrew dpdt switch cnc timing pulleys circuit design","keywords":"autonomous vehicle repeatable vehicle imeche motorised vehicle design build"},"Materials Characterisation | Tensile Testing & Metallography":{"categories":["structural-materials"],"discipline":"materials science materials engineering experimental mechanics","industry":"metals polymers manufacturing materials","methods":"tensile testing metallography hardness testing microscopy uncertainty analysis mechanical properties","tools":"tensile testing machine vickers hardness optical microscope xrf","keywords":"mild steel polyethylene young modulus yield strength elongation grain structure porosity"},"Beam Bending FEA | I-Beam Deflection in ANSYS":{"categories":["structural-materials","engineering-simulation"],"discipline":"structural engineering finite element analysis fea mechanical simulation","industry":"structures civil mechanical","methods":"beam bending deflection mesh convergence boundary conditions analytical validation","tools":"ansys mechanical matlab fea","keywords":"i beam simply supported beam point load numerical simulation structural mechanics"},"Strain Gauge Scale & DC Motor Control Lab":{"categories":["engineering-simulation"],"discipline":"control engineering instrumentation mechatronics experimental engineering","industry":"automation controls measurement","methods":"strain gauge calibration load cell transfer functions open loop closed loop system identification step response","tools":"labview matlab simulink wheatstone bridge dc motor","keywords":"scale sensor instrumentation motor control feedback measurement"},"Aerofoil Lift Analysis| NACA-0012 Wind Tunnel":{"categories":["aerospace-fluids"],"discipline":"aerodynamics fluid mechanics aerospace engineering experimental aerodynamics","industry":"aerospace aviation aircraft","methods":"wind tunnel testing lift coefficient pressure distribution potential flow joukowsky conformal mapping stall analysis","tools":"matlab wind tunnel pressure taps","keywords":"naca 0012 aerofoil airfoil wing lift drag pressure aerodynamic testing"},"Turbine Impeller Redesign | Pratt & Whitney PW100":{"categories":["aerospace-fluids","design-sustainability","structural-materials"],"discipline":"aerospace engineering mechanical design manufacturing materials selection","industry":"aviation aircraft turboprop propulsion aerospace pratt whitney","methods":"reverse engineering component redesign material selection life cycle assessment lca manufacturing analysis","tools":"solidworks cad ces material selection","keywords":"pw100 turbine impeller centrifugal compressor engine turboprop lifecycle emissions recycling"},"Charpy Impact | HDPE & Nylon Fracture Toughness":{"categories":["structural-materials"],"discipline":"materials science fracture mechanics polymer engineering","industry":"polymers materials manufacturing","methods":"charpy impact testing fracture toughness ductile brittle transition microscopy","tools":"charpy impact tester optical microscope fracture calculations","keywords":"hdpe nylon kic notch toughness impact energy failure"},"Elasticity FEA | Stress Concentration in a Perforated Plate":{"categories":["structural-materials","engineering-simulation"],"discipline":"solid mechanics elasticity finite element analysis fea mechanical simulation","industry":"structural mechanical engineering","methods":"stress concentration biaxial loading mesh refinement analytical validation kirsch solution","tools":"abaqus matlab fea","keywords":"perforated plate circular hole stress concentration factor scf elasticity"},"Plasticity FEA | Aluminium Tensile Test Simulation":{"categories":["structural-materials","engineering-simulation"],"discipline":"solid mechanics plasticity finite element analysis fea materials modelling","industry":"aluminium metals structural mechanical","methods":"plastic hardening ductile damage necking tensile simulation material calibration stress strain","tools":"abaqus fea tensile test data","keywords":"aluminium aluminum plasticity damage mechanics material model tensile"},"Supersonic Flow Analysis | Schlieren Imaging & Shock Relations":{"categories":["aerospace-fluids"],"discipline":"aerospace engineering compressible flow aerodynamics fluid mechanics","industry":"aerospace aviation high speed flow","methods":"schlieren imaging oblique shock relations prandtl meyer expansion mach number analysis","tools":"schlieren image analysis analytical fluid dynamics","keywords":"supersonic shock wave expansion fan compressible aerodynamics mach"},"Advanced Thermodynamics: Exergy, Fuel Cells & Nuclear vs Solar EIA":{"categories":["energy-infrastructure","design-sustainability"],"discipline":"thermodynamics energy systems environmental engineering sustainability sustainable engineering","industry":"power generation hydrogen nuclear solar energy","methods":"exergy analysis fuel cell modelling combustion analysis emissions environmental impact assessment life cycle assessment lca","tools":"thermodynamic analysis pem fuel cell modelling combustion chemistry","keywords":"steam power plant pem hydrogen fuel cell nuclear solar eia afr efficiency sustainability sustainable development"},"Population Growth Modelling | Logistic & Exponential Models":{"categories":["data-ml"],"discipline":"mathematical modelling applied mathematics forecasting","industry":"demography population environmental analysis","methods":"logistic model exponential model differential equations ode discrete continuous modelling riemann sums","tools":"matlab excel","keywords":"population growth carrying capacity forecasting simulation"},"SIR Epidemic Simulation | COVID-19, H1N1, TB & Common Cold":{"categories":["data-ml"],"discipline":"mathematical modelling epidemiology public health simulation","industry":"healthcare public health infectious disease","methods":"sir model differential equations ode simulation parameter estimation validation","tools":"matlab ode solver","keywords":"covid h1n1 tuberculosis tb common cold epidemic pandemic disease spread"},"Footbridge Lateral Dynamics | Millennium Bridge-Style Oscillation":{"categories":["structural-materials","engineering-simulation","data-ml"],"discipline":"structural dynamics mechanical dynamics mathematical modelling","industry":"bridges civil infrastructure pedestrian structures","methods":"ode modelling resonance damping pedestrian structure interaction critical density simulation","tools":"matlab ode45","keywords":"millennium bridge lateral oscillation vibration crowd synchronisation"},"Matrix Methods & SVD Image Compression":{"categories":["data-ml"],"discipline":"linear algebra applied mathematics image processing data compression","industry":"computing data science","methods":"singular value decomposition svd eigenvalue decomposition rank approximation markov chains","tools":"matlab","keywords":"image compression matrix methods pagerank state transition probability"},"Probability, Statistics & Regression Analysis":{"categories":["data-ml"],"discipline":"statistics regression data analysis applied mathematics","industry":"engineering analytics quantitative analysis","methods":"regression hypothesis testing t statistics prediction intervals model diagnostics normality homoscedasticity independence","tools":"matlab excel","keywords":"probability statistical inference coefficient significance comparison of means"},"2026 FIFA World Cup Prediction Framework":{"categories":["data-ml"],"discipline":"machine learning data science sports analytics forecasting probabilistic modelling","industry":"sports football soccer","methods":"temporal validation elo ratings logistic regression random forest xgboost catboost poisson glm dixon coles monte carlo ensemble simulation","tools":"python pandas scikit learn catboost xgboost statsmodels scipy numpy matplotlib plotly","keywords":"world cup fifa tournament prediction sports forecasting 100000 simulations"},"Systematic Trading Backtesting Engine":{"categories":["quant-finance","data-ml"],"discipline":"quantitative finance systematic trading algorithmic trading research","industry":"capital markets equities investment management","methods":"backtesting momentum mean reversion moving average parameter optimisation transaction costs drawdown sharpe sortino walk forward out of sample","tools":"python pandas numpy yfinance jupyter dataclasses","keywords":"trading strategy research engine portfolio returns signals execution"},"Options Pricing & Risk Analytics Calculator":{"categories":["quant-finance","data-ml"],"discipline":"quantitative finance derivatives pricing financial engineering risk analytics","industry":"capital markets options derivatives","methods":"black scholes merton cox ross rubinstein binomial tree monte carlo greeks implied volatility brent solver american options variance reduction","tools":"python scipy numpy pandas matplotlib streamlit yahoo finance","keywords":"option pricing bsm crr delta gamma vega theta rho no arbitrage"},"Pairs Trading Research & Paper-Trading System":{"categories":["quant-finance","data-ml"],"discipline":"quantitative finance statistical arbitrage systematic trading","industry":"capital markets equities trading","methods":"pairs trading correlation cointegration augmented dickey fuller adf regression hedge ratio z score mean reversion half life transaction costs paper trading","tools":"python pandas numpy statistics","keywords":"stat arb pair selection spread trading long short"},"Rolls-Royce Financial Model & Valuation":{"categories":["quant-finance","excel-analytics","aerospace-fluids"],"discipline":"financial modelling valuation equity research corporate finance","industry":"aerospace defence industrials rolls royce aviation engines","methods":"dcf discounted cash flow trading comparables forecasting sensitivity analysis scenario analysis wacc","tools":"excel power query power pivot financial modelling","keywords":"rolls royce holdings valuation forecast revenue margins free cash flow enterprise value equity value"},"Aircraft Engine Health Monitoring & Predictive Maintenance":{"categories":["data-ml","excel-analytics","aerospace-fluids"],"discipline":"predictive maintenance reliability engineering data analytics regression machine learning predictive modelling","industry":"aerospace aviation aircraft turbofan engines maintenance","methods":"remaining useful life rul health scoring degradation modelling regression uncertainty maintenance scheduling optimisation","tools":"excel power query power pivot dax solver nasa c mapss c-mapss","keywords":"aircraft engine turbofan predictive maintenance sensor degradation reliability fd001"},"London Transport Demand & Station Performance":{"categories":["excel-analytics","energy-infrastructure"],"discipline":"data analytics business intelligence transport analytics","industry":"transport mobility rail underground public transit london tfl","methods":"demand analysis station performance passenger flows data modelling dashboard kpi data quality","tools":"excel power query power pivot dax pivottables pivotcharts slicers","keywords":"london underground station passenger demand tfl transport dashboard"},"HouseZero Solar & Battery Retrofit Optimisation":{"categories":["energy-infrastructure","quant-finance","excel-analytics","design-sustainability"],"discipline":"energy modelling engineering finance optimisation building performance","industry":"renewable energy solar pv batteries buildings retrofit sustainability sustainability","methods":"battery dispatch self sufficiency npv irr payback scenario analysis break even discounted cash flow optimisation","tools":"excel power query goal seek data tables named ranges","keywords":"housezero harvard solar battery retrofit energy economics 8784 hourly observations"},"Global Water Infrastructure Prioritisation":{"categories":["energy-infrastructure","excel-analytics","design-sustainability"],"discipline":"infrastructure analytics decision support development analytics prioritisation sustainability sustainable engineering","industry":"water infrastructure global development world bank public sector","methods":"country ranking need score scenario weighting percentile scoring data quality api ingestion","tools":"excel power query m rest api lambda let map dynamic arrays","keywords":"world bank water prioritisation countries infrastructure investment development indicators sustainability sustainable development"},"Enhanced Waterfall Methodology | HMRC Tax Filing System":{"categories":["project-management"],"discipline":"project management systems engineering governance","industry":"government digital transformation tax it public sector hmrc","methods":"waterfall requirements validation stage gates risk checkpoints stakeholder governance scope management","tools":"waterfall methodology risk register stakeholder framework","keywords":"tax filing system project delivery governance software development"},"Solar EPC Project Plan | Bapco Refinery, Bahrain":{"categories":["project-management","energy-infrastructure","design-sustainability"],"discipline":"project management engineering project delivery renewable energy sustainability sustainable engineering","industry":"solar pv energy refinery oil gas bahrain epc","methods":"engineering procurement construction epc prince2 work breakdown structure wbs gantt risk register procurement rfp contracts commissioning","tools":"prince2 wbs gantt chart risk register rfp documentation","keywords":"bapco rooftop solar project plan contractor procurement handover sustainability sustainable development"},"UCL Summer Studentship | Evaluation of Assessment and Learning":{"categories":["data-ml","project-management"],"discipline":"education research data analysis institutional improvement","industry":"higher education university academia","methods":"workload analysis rubric evaluation cohort comparison stakeholder recommendations education research","tools":"excel data analysis survey research","keywords":"ucl studentship assessment learning feedback workload marking rubric student satisfaction"}};

  const FIELD_WEIGHTS = {
    title: 15,
    discipline: 12,
    industry: 10,
    methods: 9,
    tools: 8,
    keywords: 4
  };

  const STOP_WORDS = new Set([
    'and','or','for','with','using','use','in','on','the','a','an','of','to',
    'related','relevant','interest','interested','looking','look','work','works',
    'show','find','about','into','from','that','which','my','your','please','me',
    'some','something','anything','want','wants','need','needs','experience',
    'experiences','skill','skills','role','roles','area','areas','field','fields',
    'example','examples','see','focused','focus'
  ]);

  const CANONICAL = {
    financial:'finance', finances:'finance',
    modeling:'modelling', model:'modelling', models:'modelling',
    modeled:'modelling', modelled:'modelling',
    optimization:'optimisation', optimize:'optimisation', optimized:'optimisation',
    optimise:'optimisation', optimised:'optimisation',
    statistical:'statistics', statistic:'statistics',
    structures:'structural', structure:'structural',
    aerodynamic:'aerodynamics', renewables:'renewable',
    sustainable:'sustainability', predictions:'prediction',
    predicting:'prediction', derivative:'derivatives',
    option:'options', strategies:'strategy', simulations:'simulation',
    dashboards:'dashboard', engines:'engine', aircrafts:'aircraft'
  };

  const ALIASES = {
    ml:['machine learning'],
    ai:['machine learning'],
    fea:['finite element analysis','finite element method','fem'],
    fem:['finite element analysis','finite element method','fea'],
    cfd:['computational fluid dynamics'],
    quant:['quantitative finance','financial engineering','systematic trading'],
    dcf:['discounted cash flow','valuation'],
    lca:['life cycle assessment','lifecycle assessment'],
    pm:['project management','project controls'],
    bi:['business intelligence','dashboard','data analytics'],
    rul:['remaining useful life','predictive maintenance'],
    epc:['engineering procurement construction'],
    pv:['solar pv','solar photovoltaic']
  };

  const finderInput = finder.querySelector('[data-finder-input]');
  const finderResults = finder.querySelector('[data-finder-results]');
  const finderCount = finder.querySelector('[data-finder-count]');
  const finderEmpty = finder.querySelector('[data-finder-empty]');
  const finderClear = finder.querySelector('[data-finder-clear]');
  const finderFilters = Array.from(finder.querySelectorAll('[data-finder-filter]'));
  let activeFilter = null;

  function normalise(value) {
    return (value || '')
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9+]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function canonicalToken(token) {
    return CANONICAL[token] || token;
  }

  function fieldTokens(value) {
    return normalise(value).split(' ').filter(Boolean).map(canonicalToken);
  }

  function oneEditOrTransposition(a, b) {
    if (a === b) return true;
    if (a.length < 5 || b.length < 5 || Math.abs(a.length - b.length) > 1) return false;
    if (a[0] !== b[0]) return false;

    if (a.length === b.length) {
      const diffs = [];
      for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) diffs.push(i);
      if (diffs.length === 1) return true;
      if (diffs.length === 2) {
        const [i, j] = diffs;
        return j === i + 1 && a[i] === b[j] && a[j] === b[i];
      }
      return false;
    }

    const shorter = a.length < b.length ? a : b;
    const longer = a.length < b.length ? b : a;
    let i = 0, j = 0, edits = 0;
    while (i < shorter.length && j < longer.length) {
      if (shorter[i] === longer[j]) { i++; j++; continue; }
      edits++;
      if (edits > 1) return false;
      j++;
    }
    return true;
  }

  function conceptMatch(concept, value) {
    const text = normalise(value);
    const tokens = fieldTokens(value);
    const alternatives = [concept].concat(ALIASES[concept] || []);
    let best = 0;

    alternatives.forEach(function(alternative) {
      const candidate = normalise(alternative);
      if (!candidate) return;

      if (candidate.indexOf(' ') !== -1) {
        if (text.indexOf(candidate) !== -1) best = Math.max(best, 1);
        return;
      }

      const canon = canonicalToken(candidate);
      if (tokens.indexOf(canon) !== -1) {
        best = Math.max(best, 1);
        return;
      }

      if (canon.length >= 4) {
        tokens.forEach(function(token) {
          if (token.length < 4) return;
          if (token.startsWith(canon) || canon.startsWith(token)) {
            const ratio = Math.min(token.length, canon.length) / Math.max(token.length, canon.length);
            if (ratio >= 0.75) best = Math.max(best, 0.72);
          } else if (oneEditOrTransposition(canon, token)) {
            best = Math.max(best, 0.62);
          }
        });
      }
    });

    return best;
  }

  function queryConcepts(rawQuery) {
    const query = normalise(rawQuery);
    const preserveProject = query.includes('project management') ||
      query.includes('project controls') || query.includes('project delivery');

    return query.split(' ').filter(Boolean).reduce(function(terms, token) {
      if (STOP_WORDS.has(token)) return terms;
      if ((token === 'project' || token === 'projects') && !preserveProject) return terms;
      terms.push(canonicalToken(token));
      return terms;
    }, []);
  }

  function cardQuality(card) {
    const links = Array.from(card.querySelectorAll('.plinks a')).filter(function(link) {
      const href = link.getAttribute('href');
      return href && href !== '#';
    }).length;
    return links * 10000 + (card.textContent || '').length;
  }

  const sourceCards = Array.from(document.querySelectorAll('article.pcard'))
    .filter(function(card) { return !card.closest('#project-finder'); });

  const bestCardByTitle = new Map();
  sourceCards.forEach(function(card, order) {
    const titleNode = card.querySelector('h3');
    if (!titleNode) return;
    const title = titleNode.textContent.replace(/\s+/g, ' ').trim();
    const existing = bestCardByTitle.get(title);
    const candidate = { card: card, order: order, quality: cardQuality(card) };
    if (!existing || candidate.quality > existing.quality) bestCardByTitle.set(title, candidate);
  });

  const projectIndex = Array.from(bestCardByTitle.entries()).map(function(entry) {
    const title = entry[0];
    const candidate = entry[1];
    const pillText = Array.from(candidate.card.querySelectorAll('.pill')).map(function(node) {
      return node.textContent;
    }).join(' ');
    const toolText = Array.from(candidate.card.querySelectorAll('.tools')).map(function(node) {
      return node.textContent;
    }).join(' ');

    const curated = PROJECTS[title];
    if (!curated) console.warn('Project Explorer metadata missing for:', title);

    return {
      title: title,
      card: candidate.card,
      order: candidate.order,
      meta: curated || {
        categories: [],
        discipline: pillText,
        industry: '',
        methods: '',
        tools: toolText,
        keywords: title
      }
    };
  });

  function scoreProject(project, rawQuery) {
    const concepts = queryConcepts(rawQuery);
    if (!concepts.length) return activeFilter ? 1 : null;

    let total = 0;
    let strongestField = 0;

    for (const concept of concepts) {
      const matches = [];
      Object.keys(FIELD_WEIGHTS).forEach(function(field) {
        const value = field === 'title' ? project.title : project.meta[field];
        const strength = conceptMatch(concept, value);
        if (!strength) return;
        const weight = FIELD_WEIGHTS[field];
        strongestField = Math.max(strongestField, weight);
        matches.push({ score: weight * strength, field: field });
      });

      if (!matches.length) return null;

      matches.sort(function(a, b) { return b.score - a.score; });
      total += matches[0].score;
      for (let i = 1; i < matches.length; i++) total += matches[i].score * 0.15;
    }

    const fullQuery = normalise(rawQuery);
    if (fullQuery) {
      Object.keys(FIELD_WEIGHTS).forEach(function(field) {
        const value = normalise(field === 'title' ? project.title : project.meta[field]);
        if (value.indexOf(fullQuery) !== -1) total += FIELD_WEIGHTS[field] * 1.2;
      });
    }

    if (strongestField < FIELD_WEIGHTS.tools) return null;
    return total;
  }

  function renderFinder() {
    const rawQuery = finderInput.value.trim();
    const queryTerms = queryConcepts(rawQuery);

    let results = projectIndex.filter(function(project) {
      if (activeFilter && project.meta.categories.indexOf(activeFilter) === -1) return false;
      if (!queryTerms.length) return Boolean(activeFilter);
      return scoreProject(project, rawQuery) !== null;
    }).map(function(project) {
      return {
        project: project,
        score: queryTerms.length ? scoreProject(project, rawQuery) : 1
      };
    });

    results.sort(function(a, b) {
      if (queryTerms.length && b.score !== a.score) return b.score - a.score;
      return a.project.order - b.project.order;
    });

    finderResults.innerHTML = '';
    results.forEach(function(result) {
      const clone = result.project.card.cloneNode(true);
      clone.classList.remove('reveal');
      clone.classList.add('vis', 'finder-result');
      clone.style.transitionDelay = '0ms';
      finderResults.appendChild(clone);
    });

    const activeButton = finderFilters.find(function(button) {
      return button.getAttribute('data-category') === activeFilter;
    });
    const categoryLabel = activeButton ? activeButton.textContent.trim() : '';

    if (!rawQuery && !activeFilter) {
      finderCount.textContent = 'Search the portfolio or choose a field.';
      finderEmpty.classList.remove('show');
      return;
    }

    if (rawQuery && activeFilter) {
      finderCount.textContent = results.length + (results.length === 1 ? ' match' : ' matches') +
        ' for “' + rawQuery + '” in ' + categoryLabel;
    } else if (rawQuery) {
      finderCount.textContent = results.length + (results.length === 1 ? ' match' : ' matches') +
        ' for “' + rawQuery + '”';
    } else {
      finderCount.textContent = results.length + (results.length === 1 ? ' project' : ' projects') +
        ' in ' + categoryLabel;
    }

    finderEmpty.classList.toggle('show', results.length === 0);
  }

  finderInput.addEventListener('input', renderFinder);

  finderFilters.forEach(function(filter) {
    filter.addEventListener('click', function() {
      const category = filter.getAttribute('data-category');
      if (activeFilter === category) {
        activeFilter = null;
        filter.classList.remove('active');
      } else {
        finderFilters.forEach(function(button) { button.classList.remove('active'); });
        activeFilter = category;
        filter.classList.add('active');
      }
      renderFinder();
    });
  });

  finderClear.addEventListener('click', function() {
    finderInput.value = '';
    activeFilter = null;
    finderFilters.forEach(function(button) { button.classList.remove('active'); });
    renderFinder();
    finderInput.focus();
  });

  renderFinder();
})();
