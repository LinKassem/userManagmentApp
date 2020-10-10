import { css } from '@emotion/core'
import emotionReset from 'emotion-reset'

export default css`
  ${emotionReset}
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input, select {
    box-sizing: border-box;
  }
  body {
    font-family: Source Sans Pro, sans-serif;
    background-color: #f1f1f7;
  }
`
