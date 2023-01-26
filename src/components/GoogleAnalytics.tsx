import { onMount } from 'solid-js';

const GA_ID = 'G-KX1BWHTJ9S';
const GA_TAG_URL = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

export default function GoogleAnalytics() {

  onMount(async () => {
    // @ts-ignore
    var dataLayer = window['dataLayer'] = window['dataLayer'] || [];
    // @ts-ignore
    var gtag = window['gtag'] = function (... _) { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
  });

  return (
    <script async src={GA_TAG_URL}></script>
  )
}