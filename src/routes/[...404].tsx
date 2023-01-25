import { Link } from '@solidjs/router';
import { HttpStatusCode } from 'solid-start/server';

export default function NotFound() {
  return (
    <main>
      <HttpStatusCode code={404} />
      <div class="min-h-[40rem] flex justify-center items-center flex-col">
        <h1 class="text-4xl mb-4">Not found 😢</h1>
        <Link href="/" class="font-semibold text-teal-900">Back to home now</Link>
      </div>
    </main>
  );
}
