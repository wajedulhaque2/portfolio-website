
  // Recruiter project finder
  var finder=document.querySelector('[data-project-finder]');
  if(finder){
    var finderInput=finder.querySelector('[data-finder-input]');
    var finderResults=finder.querySelector('[data-finder-results]');
    var finderCount=finder.querySelector('[data-finder-count]');
    var finderEmpty=finder.querySelector('[data-finder-empty]');
    var finderClear=finder.querySelector('[data-finder-clear]');
    var finderFilters=Array.from(finder.querySelectorAll('[data-finder-filter]'));
    var sourceCards=Array.from(document.querySelectorAll('article.pcard')).filter(function(card){return !card.closest('#project-finder');});
    var projectIndex=sourceCards.map(function(card){
      return {card:card,text:(card.textContent||'').toLowerCase().replace(/\s+/g,' ').trim()};
    });
    var activeFilter=null;

    function renderFinder(){
      var query=(finderInput.value||'').toLowerCase().trim();
      var terms=query.split(/\s+/).filter(Boolean);
      var filterWords=activeFilter ? activeFilter.getAttribute('data-keywords').toLowerCase().split(/\s+/).filter(Boolean) : [];
      finderResults.innerHTML='';

      if(!terms.length && !filterWords.length){
        finderCount.textContent='Search the portfolio or choose a field.';
        finderEmpty.classList.remove('show');
        return;
      }

      var matches=projectIndex.filter(function(item){
        var text=item.text;
        var queryMatch=terms.every(function(term){return text.indexOf(term)!==-1;});
        var filterMatch=!filterWords.length || filterWords.some(function(word){return text.indexOf(word)!==-1;});
        return queryMatch && filterMatch;
      });

      matches.forEach(function(item){
        var clone=item.card.cloneNode(true);
        clone.classList.remove('reveal');
        clone.classList.add('vis','finder-result');
        clone.style.transitionDelay='0ms';
        finderResults.appendChild(clone);
      });

      finderCount.textContent=matches.length + (matches.length===1 ? ' matching project' : ' matching projects');
      finderEmpty.classList.toggle('show',matches.length===0);
    }

    finderInput.addEventListener('input',renderFinder);
    finderFilters.forEach(function(filter){
      filter.addEventListener('click',function(){
        if(activeFilter===filter){
          filter.classList.remove('active');
          activeFilter=null;
        }else{
          finderFilters.forEach(function(f){f.classList.remove('active');});
          filter.classList.add('active');
          activeFilter=filter;
        }
        renderFinder();
      });
    });
    finderClear.addEventListener('click',function(){
      finderInput.value='';
      finderFilters.forEach(function(f){f.classList.remove('active');});
      activeFilter=null;
      renderFinder();
      finderInput.focus();
    });
  }

