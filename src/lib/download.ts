const REPO = 'nomi-san/league-loader';

interface Asset {
  id: number
  name: string
  size: number
  download_count: number
  updated_at: string
  browser_download_url: string
}

interface Release {
  id: number
  url: string
  name: string
  tag_name: string
  assets: Asset[]
}

function downloadFile(name: string, url: string) {
  const anchor = document.createElement('a');
  anchor.download = name;
  anchor.href = url;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
}

export async function downloadLatest() {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`);
    const release: Release = await res.json();
    const asset = release.assets.find(x => x.name.endsWith(release.tag_name + '.zip'));
    window.open(asset!.browser_download_url);
  } catch {
    window.open(`https://github.com/${REPO}/releases/latest`);
  }
}