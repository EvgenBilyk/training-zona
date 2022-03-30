document.querySelector('.content').onclick = (e) => {

    if (e.target.classList.contains('level')) {

        let blockInfo = document.querySelectorAll('.block-info');
        blockInfo.forEach(elem => {
            elem.classList.add('hide');
        })

        let level = document.querySelectorAll('.level');

        level.forEach(elem => {
            elem.classList.remove('active_level');
        })

        e.target.classList.add('active_level');

        const target = e.target.getAttribute("data-number");
        document.querySelector(target).classList.remove('hide');
    }
}

