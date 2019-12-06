
import {trigger,state,style,animate,transition} from '@angular/animations';

export function widthMinToMax (min: string, max: string, timeMin: string = '1s ease-in', timeMax: string = '1s ease-in'){
    return trigger('widthMinToMax', [
        state('min', style({
          width: min
        })),
        state('max', style({
          width:  max
        })),
        transition('min => max', [
          animate(timeMin)
        ]),
        transition('max => min', [
            animate(timeMax)
        ])
    ])
}

export function fadeBasic (max: string = '1', min: string = '0', timeHide: string = '1s ease-in', timeShow: string = '1s ease-in'){
    return trigger('fadeBasic', [
        state('show', style({
          opacity: max
        })),
        state('hide', style({
          opacity: min
        })),
        transition('show => hide', [
          animate(timeHide)
        ]),
        transition('hide => show', [
            animate(timeShow)
        ])
    ])
}

export function slideDown (timeOpen: string = '1s ease-in', timeClose: string = '1s ease-in'){
    return trigger('slideDown', [
        state('open', style({
          transform: 'translate(0, 0%)'
        })),
        state('closed', style({
          transform: 'translate(0, -100%)'
        })),
        transition('open => closed', [
          animate(timeClose)
        ]),
        transition('closed => open', [
          animate(timeOpen)
        ]),
    ])
}

export function slideRight (timeOpen: string = '1s ease-in', timeClose: string = '1s ease-in'){
  return trigger('slideRight', [
    state('open', style({
      transform: 'translate(0%, 0)'
    })),
    state('closed', style({
      transform: 'translate(100%, 0)'
    })),
    transition('open => closed', [
      animate(timeClose)
    ]),
    transition('closed => open', [
      animate(timeOpen)
    ]),
  ])
}

export function scaleRadius (
  timeShow: string = '1s', 
  timeHide: string = '1s', 
  minScaleX: string = '0',
  minScaleY: String = '0',
  maxScaleX: string = '1',
  maxScaleY: string = '1',
  MinBorderRadius: string = '50%',
  MaxBorderRadius: string = '0%'
){
  return trigger('scaleRadius', [
    state('hide', style({
      transform: `scale(${minScaleX}, ${minScaleY})`,
      borderRadius: MinBorderRadius
    })),
    state('show', style({
      transform: `scale(${maxScaleX}, ${maxScaleY})`,
      borderRadius: MaxBorderRadius
    })),
    transition('hide => show', [
      animate(timeShow)
    ]),
    transition('show => hide', [
      animate(timeHide)
    ]),
  ])
}