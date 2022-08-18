let speed = 100;
window.addEventListener('load', function(){
    document.querySelectorAll('h1#intro-text span').forEach(function(line){
        line.innerHTML = line.textContent.replace(/(\S*)/g, m => {
      return m.replace(/(-|#|@)?\S(-|#|@)?/g, "<span class='letter'>$&</span>");
        });
    });
    let intro_text = document.getElementById('intro-text');
    intro_text.classList.add('show');
    var lines = intro_text.querySelectorAll('h1#intro-text > span');
    type_word(lines,0,lines.length);
});
function type_word(elem, curr, max){
    if(curr < max){
        elem[curr].classList.add('blink-cursor');
        var index = 0;
        var letters = elem[curr].querySelectorAll('span');
        var letter_interval = setInterval(function(){
            if(index >= letters.length){
                clearInterval(letter_interval);
                elem[curr].classList.remove('blink-cursor');
                var next = curr+1;
                type_word(elem, next, max);
            }else{
                letters[index].classList.add('show');
                index++;
            }
                
            },speed);
    }else elem[curr-1].classList.add('blink-cursor', 'blink');
}