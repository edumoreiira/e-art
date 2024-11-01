import { trigger, state, style, transition, animate } from "@angular/animations";

export const slideUpDown = trigger('slideUpDown', [
    state('void', style({
        height: 0,
        minHeight: 0,
        padding: 0,
        margin: 0,
        opacity: 0
    })),
    transition(':enter, :leave',[
         animate('300ms ease-in-out')
    ])
]);