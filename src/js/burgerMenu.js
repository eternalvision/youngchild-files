import revealer from 'circular-revealer';
import { search, searchPhotos, actionBtn } from './constants';

const revealerNav = revealer({
    revealElementSelector: '.nav-js',
    options: {
        anchorSelector: '.nav-btn-js',
    },
});

actionBtn.addEventListener('click', () => {
    if (!revealerNav.isRevealed()) {
        revealerNav.reveal();
        actionBtn.setAttribute('data-open', true);
        search.style.display = 'none';
        searchPhotos.style.display = 'none';
    } else {
        revealerNav.hide();
        actionBtn.setAttribute('data-open', false);
        search.style.display = 'block';
        searchPhotos.style.display = 'block';
    }
});