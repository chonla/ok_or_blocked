var theme = {
    'ok': {
        label: 'OK',
        class: 'btn-success'
    },
    'blocked': {
        label: 'Blocked',
        class: 'btn-danger'
    },
    'waiting': {
        label: 'Waiting...',
        class: 'btn-secondary'
    }
}

function apply_button(theme_name) {
    var btn = document.getElementById('random');
    btn.innerText = theme[theme_name].label;
    btn.classList.remove('btn-success','btn-danger', 'btn-secondary');
    btn.classList.add(theme[theme_name].class);
}
function ok_or_block() {
    if ([0, 1].indexOf(Math.floor(Math.random() * 97577291) % 3)) {
        return 'ok';
    }
    return 'blocked';
}
function random_if_there_is_some_blockers() {
    apply_button('waiting');
    setTimeout(function() {
        apply_button(ok_or_block());
    }, 500);
}