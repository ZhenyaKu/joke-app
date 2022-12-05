import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  Rect,
  SvgProps,
  ClipPath,
  Mask,
} from 'react-native-svg';

export const FavIcon = (props?: SvgProps) => (
  <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
    <Rect opacity="0.2" width="64" height="64" rx="32" fill="#9763FF" />
    <Mask
      id="mask0_5_422"
      maskUnits="userSpaceOnUse"
      x="18"
      y="18"
      width="28"
      height="28">
      <Rect x="18" y="18" width="28" height="28" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_5_422)">
      <Path
        d="M31.0671 41.6209L31.0501 41.6052L28.9809 39.7373C28.9808 39.7372 28.9808 39.7372 28.9807 39.7371C26.8825 37.8387 24.9917 35.9588 23.307 34.0974L23.3067 34.0971C21.7413 32.3692 21 30.5209 21 28.5254C21 26.9192 21.5332 25.6276 22.5931 24.5798C23.6536 23.5312 24.9655 23 26.6 23C27.515 23 28.3686 23.1907 29.1722 23.5707C29.9881 23.9573 30.6741 24.4802 31.2402 25.1417C31.4302 25.3637 31.7078 25.4915 32 25.4915C32.2922 25.4915 32.5698 25.3637 32.7598 25.1417C33.3259 24.4802 34.0119 23.9572 34.8278 23.5707C35.6314 23.1907 36.485 23 37.4 23C39.0345 23 40.3464 23.5312 41.4069 24.5798C42.4668 25.6276 43 26.9192 43 28.5254C43 30.5231 42.2621 32.3781 40.7051 34.1168C39.0336 35.9832 37.1312 37.8647 34.996 39.7607L34.996 39.7607L34.9904 39.7657L32.9504 41.6047L32.9329 41.6209C32.6542 41.8845 32.3585 42 32 42C31.6415 42 31.3458 41.8845 31.0671 41.6209Z"
        stroke="#9763FF"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </G>
  </Svg>
);

export const FavFilledIcon = (props?: SvgProps) => (
  <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
    <Rect width="64" height="64" rx="32" fill="#9763FF" />
    <Mask
      id="mask0_2_358"
      maskUnits="userSpaceOnUse"
      x="18"
      y="18"
      width="28"
      height="28">
      <Rect x="18" y="18" width="28" height="28" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_2_358)">
      <Path
        d="M31.0671 41.6209L31.0501 41.6052L28.9809 39.7373C28.9808 39.7372 28.9808 39.7372 28.9807 39.7371C26.8825 37.8387 24.9917 35.9588 23.307 34.0974L23.3067 34.0971C21.7413 32.3692 21 30.5209 21 28.5254C21 26.9192 21.5332 25.6276 22.5931 24.5798C23.6536 23.5312 24.9655 23 26.6 23C27.515 23 28.3686 23.1907 29.1722 23.5707C29.9881 23.9573 30.6741 24.4802 31.2402 25.1417C31.4302 25.3637 31.7078 25.4915 32 25.4915C32.2922 25.4915 32.5698 25.3637 32.7598 25.1417C33.3259 24.4802 34.0119 23.9572 34.8278 23.5707C35.6314 23.1907 36.485 23 37.4 23C39.0345 23 40.3464 23.5312 41.4069 24.5798C42.4668 25.6276 43 26.9192 43 28.5254C43 30.5231 42.2621 32.3781 40.7051 34.1168C39.0336 35.9832 37.1312 37.8647 34.996 39.7607L34.996 39.7607L34.9904 39.7657L32.9504 41.6047L32.9329 41.6209C32.6542 41.8845 32.3585 42 32 42C31.6415 42 31.3458 41.8845 31.0671 41.6209Z"
        fill="white"
        stroke="white"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </G>
  </Svg>
);

export const HistoryIcon = (props?: SvgProps) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...props}>
    <G clipPath="url(#clip0_4_386)">
      <Path
        d="M14 9V14H18M25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14Z"
        stroke="#C1C3C6"
        stroke-width="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4_386">
        <Rect width="28" height="28" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const TodayIcon = (props?: SvgProps) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...props}>
    <G clipPath="url(#clip0_4_385)">
      <Path
        d="M4.00404 15.8416L14.7711 3.41806C15.1955 2.92838 16 3.22852 16 3.87651V10.3C16 10.6866 16.3134 11 16.7 11H23.4671C24.0669 11 24.3889 11.7052 23.9961 12.1585L13.229 24.5819C12.8046 25.0716 12 24.7715 12 24.1235V17.7C12 17.3134 11.6866 17 11.3 17H4.53302C3.93317 17 3.61118 16.2949 4.00404 15.8416Z"
        stroke="#C1C3C6"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4_385">
        <Rect width="28" height="28" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);