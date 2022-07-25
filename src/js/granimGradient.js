import { initMorphingPointer } from 'morphing-pointer';
initMorphingPointer();
import Granim from 'granim';
//

var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 300,
    states: {
        'default-state': {
            gradients: [
                ['rgb(53, 43, 70)', 'rgb(33, 31, 80)'],
                ['#f9c9f9', '#0575E6'],
                ['#0575E6', '#f9c9f9'],
                ['rgb(33, 31, 80)', 'rgb(53, 43, 70)'],
            ],
        },
    },
});