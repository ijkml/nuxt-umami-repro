import { defineEventHandler, getRequestIP } from "h3";
import { getClientIp } from "request-ip";
import { ofetch } from "ofetch";

type LookupResult = {
  ip: string;
  country: string;
  city: string;
  region: string;
  // hostname: string;
  // loc: string;
  // org: string;
  // postal: string;
  // timezone: string;
};

async function getInfo(ipv4?: string | null) {
  const {
    ip = "unknown",
    country = "unknown",
    city = "unknown",
    region = "unknown",
  } = await ofetch<LookupResult>(
    `https://ipinfo.io/${ipv4 ? `${ipv4}/` : ""}json?token=7ca5f8e404ade5`,
    { method: "GET" }
  ).catch(() => {
    return { ip: "e.r.r.o.r", country: "Fetch Error" };
  });

  return { og_ip: ipv4 || "unknown", ip, country, region, city };
}

export default defineEventHandler(async (event) => {
  const lib_ip = getClientIp(event.node.req);
  const nitro_ip = getRequestIP(event);
  const cloudfare_ip = event.headers.get('cf-connecting-ip');

  return {
    lib: await getInfo(lib_ip),
    nitro: await getInfo(nitro_ip),
    cloudfare: await getInfo(cloudfare_ip),
    server: await getInfo(),
  };
});
