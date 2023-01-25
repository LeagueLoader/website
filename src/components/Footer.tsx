
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-[#f6f9fc] w-full">
      <div class="py-10 px-4">
        <p class="text-center text-[.9rem]">
          © {year} LeagueLoader.app<br />
          All rights reserved
        </p>
      </div>
    </footer>
  )
}
