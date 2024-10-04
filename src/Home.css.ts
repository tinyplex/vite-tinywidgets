import { screens } from 'tinywidgets/css';
import { style } from '@vanilla-extract/css';

export const home = style({
  maxWidth: '40rem',
  margin: 'auto',
});

export const title = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 0,
  fontSize: '2.4rem',
  '@media': {
    [`screen and (min-width: ${screens.large}px)`]: { fontSize: '3rem' },
  },
});

export const logo = style({
  margin: '0 1rem',
  width: '4rem',
  height: '4rem',
});
