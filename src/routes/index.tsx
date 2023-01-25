import { Link } from '@solidjs/router';
import { createSignal, onMount, Show } from 'solid-js';
import { downloadLatest } from '~/lib/download';

// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';
import Spinner from '~/components/Spinner';

export default function Home() {

  const [downloading, setDownloading] = createSignal(false);

  const doDownload = () => {
    setDownloading(true);
    downloadLatest().then(() => setDownloading(false));
  }

  onMount(() => {
    const typewriter = new Typewriter('#typewriter', {
      loop: true,
      delay: 75,
      deleteSpeed: 50
    });
    typewriter
      .typeString('Better League Client?')
      .pauseFor(2000)
      .deleteChars(14)
      .typeString('experience!')
      .pauseFor(2000)
      .deleteAll()
      .typeString('Extreme personality?')
      .pauseFor(1500)
      .deleteAll()
      .typeString('Customize to your preference')
      .pauseFor(1000)
      .deleteChars(10)
      .typeString('waifu!')
      .pauseFor(1000)
      .start();
  });

  return (
    <main class="w-full">
      <section class="bg-[#0A323C] text-white" style="background-image: url(/img/icons-background.svg)">
        <div class="container mx-auto px-4">
          <nav class="py-5 flex flex-row items-center place-content-between">
            <Link href="/" class="flex items-center">
              <img src="/logo-64.png" width="36" height="36" alt="" />
              <h3 class="text-xl ml-2">League Loader</h3>
            </Link>
            <div class="heading">
              <a class="text-sky-100 hover:text-white mx-2" href="#features">Features</a>
              {/* <a class="text-sky-100 hover:text-white mx-2" href="#download">Download</a> */}
              <a class="text-sky-100 hover:text-white mx-2" href="#faq">FAQ</a>
            </div>
          </nav>
        </div>
        <section class="text-center py-16">
          <div class="py-12">
            <h1 id="typewriter" class="text-4xl mb-2 font-semibold md:text-xl">
              Better League Client, better experience!
            </h1>
            <p class="text-lg mb-10 px-2">
              Automate, customize & theme your Client with powerful plugins
            </p>
          </div>
          <div class="text-lg text-teal-800 md:flex md:flex-col md:items-center">
            <button class="heading bg-white rounded-full px-6 py-2 mx-2 md:mb-4 disabled:bg-gray-300"
              onClick={doDownload} disabled={downloading()}>
              <Show when={!downloading()} fallback={<Spinner />}>
                <i class="bi bi-windows mr-3 text-[#00adef]" />
              </Show> Download now
            </button>
            <a href="https://github.com/nomi-san/league-loader" rel="external noreferrer" target="_blank">
              <button class="heading bg-white rounded-full px-6 py-2 mx-2">
                <i class="bi bi-github mr-3 text-gray-900" /> Source code ↗
              </button>
            </a>
          </div>
        </section>
      </section>
      <section class="container mx-auto px-4 pb-16">
        <h1 id="features" class="text-center py-12 text-4xl font-bold">Features</h1>
        <div class="py-10">
          <div class="flex flex-row items-center place-content-evenly md:flex-col-reverse md:px-2">
            <div class="column feature-box">
              <h2 class="text-2xl font-semibold md:text-center">JavaScript plugins</h2>
              <p class="mt-2">
                Use community plugins or write your own to customize the Client.
              </p>
            </div>
            <div class="text-center md:mb-8 relative">
              <img class="image-box border-shadow " src="/img/features/lcu-3d.png" alt="" />
              <img class="absolute left-[50%] bottom-0 w-24 md:w-14" src="/img/features/js-logo.png" width="96" alt="" />
            </div>
          </div>
        </div>
        <div class="py-10">
          <div class="flex flex-row items-center place-content-evenly md:flex-col md:px-2">
            <div class="text-center md:mb-8">
              <img class="image-box border-shadow " src="/img/features/devtools.png" alt="" />
            </div>
            <div class="column feature-box">
              <h2 class="text-2xl font-semibold md:text-center">Built-in DevTools</h2>
              <p class="mt-2">
                Inspect the Client, explore Hextech UI, do everything you want.
              </p>
            </div>
          </div>
        </div>

        <div class="py-10">
          <div class="flex flex-row items-center place-content-evenly md:flex-col-reverse md:px-2">
            <div class="column feature-box">
              <h2 class="text-2xl font-semibold md:text-center">Inside the League</h2>
              <p class="mt-2">
                Access LCU APIs and WebSocket easily, no limitation.
              </p>
            </div>
            <div class="text-center md:mb-8 relative">
              <img class="max-h-72" src="https://technology.riotgames.com/sites/default/files/lcu_architecture_2.png" alt="" />
            </div>
          </div>
        </div>

        <div class="py-10">
          <div class="text-center pt-10">
            <h3 class="text-4xl">// todo</h3>
          </div>
        </div>
      </section>
    </main>
  );
}