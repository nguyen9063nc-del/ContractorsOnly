import { useEffect, useRef } from "react";

const ZOHO_DIV_ID = "zf_div_Ujz0K3Hwdqp1LXwG6nanFQus-1ozwtoW-11-gq2PQ1w";
const ZOHO_IFRAME_SRC = "https://forms.zohopublic.com/theonlycompany1/form/ContractorWebsite/formperma/Ujz0K3Hwdqp1LXwG6nanFQus-1ozwtoW-11-gq2PQ1w?zf_rszfm=1&zf_enablecamera=true";

declare global {
  interface Window {
    ZFAdvLead?: { utmPNameArr: string[]; utmcustPNameArr: string[]; isSameDomian: boolean };
    zfutm_zfAdvLead?: { zfautm_gC_enc: (name: string) => string | undefined };
    ZFLead?: { utmPNameArr: string[] };
    zfutm_zfLead?: { zfutm_gC_enc: (name: string) => string | undefined };
  }
}

// Ported from Zoho Forms' JavaScript embed snippet (Share -> Embed -> JavaScript Embed),
// adapted to run client-side only inside a React effect instead of an inline <script> tag.
// Builds the iframe src (appending UTM/referrer params Zoho's own tracking scripts may have
// stashed on window, if present) and listens for postMessage height updates so the iframe
// always matches the form's real content height — no internal scrollbar at any screen size.
function buildIframeSrc(): string {
  let ifrmSrc = ZOHO_IFRAME_SRC;
  try {
    if (typeof window.ZFAdvLead !== "undefined" && typeof window.zfutm_zfAdvLead !== "undefined") {
      const { ZFAdvLead, zfutm_zfAdvLead } = window;
      for (const rawName of ZFAdvLead.utmPNameArr) {
        const utmPm = ZFAdvLead.isSameDomian && !ZFAdvLead.utmcustPNameArr.includes(rawName) ? "zf_" + rawName : rawName;
        const utmVal = zfutm_zfAdvLead.zfautm_gC_enc(rawName);
        if (utmVal) {
          ifrmSrc += (ifrmSrc.indexOf("?") > 0 ? "&" : "?") + utmPm + "=" + utmVal;
        }
      }
    }
    if (typeof window.ZFLead !== "undefined" && typeof window.zfutm_zfLead !== "undefined") {
      const { ZFLead, zfutm_zfLead } = window;
      for (const utmPm of ZFLead.utmPNameArr) {
        const utmVal = zfutm_zfLead.zfutm_gC_enc(utmPm);
        if (utmVal) {
          ifrmSrc += (ifrmSrc.indexOf("?") > 0 ? "&" : "?") + utmPm + "=" + utmVal;
        }
      }
    }
    if (!/[?&]referrername=/.test(ifrmSrc)) {
      let rfr = window.location.href;
      try {
        rfr = window.self !== window.top ? window.top!.location.href : /^https?:\/\/[\w.-]+\.[a-zA-Z]{2,}/i.test(rfr) ? rfr : "";
      } catch {
        // cross-origin parent frame; fall back to the current href set above
      }
      if (rfr) {
        if (rfr.length > 1800) {
          const queryIndex = rfr.indexOf("?");
          rfr = queryIndex > -1 ? rfr.substring(0, queryIndex) : rfr;
          rfr = rfr.substring(0, 1800);
        }
        ifrmSrc += (ifrmSrc.indexOf("?") > 0 ? "&" : "?") + "referrername=" + encodeURIComponent(rfr);
      }
    }
  } catch {
    // tracking params are best-effort; the form still works without them
  }
  return ifrmSrc;
}

export function ZohoContractorForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const iframe = document.createElement("iframe");
    iframe.src = buildIframeSrc();
    iframe.style.border = "none";
    iframe.style.height = "1892px";
    iframe.style.width = "99%";
    iframe.style.transition = "all 0.5s ease";
    iframe.setAttribute("aria-label", "Contractor Website");
    iframe.setAttribute("allow", "camera;");
    container.appendChild(iframe);

    function handleMessage(event: MessageEvent) {
      const evntData = event.data;
      if (typeof evntData !== "string") return;
      const zf_ifrm_data = evntData.split("|");
      if (zf_ifrm_data.length !== 2 && zf_ifrm_data.length !== 3) return;

      const zf_perma = zf_ifrm_data[0];
      const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
      if (iframe.src.indexOf("formperma") <= 0 || iframe.src.indexOf(zf_perma) <= 0) return;

      const prevIframeHeight = iframe.style.height;
      let zf_tout = false;
      if (zf_ifrm_data.length === 3) {
        iframe.scrollIntoView();
        zf_tout = true;
      }
      if (prevIframeHeight !== zf_ifrm_ht_nw) {
        if (zf_tout) {
          setTimeout(() => {
            iframe.style.height = zf_ifrm_ht_nw;
          }, 500);
        } else {
          iframe.style.height = zf_ifrm_ht_nw;
        }
      }
    }

    window.addEventListener("message", handleMessage, false);

    return () => {
      window.removeEventListener("message", handleMessage);
      container.removeChild(iframe);
    };
  }, []);

  return <div id={ZOHO_DIV_ID} ref={containerRef} style={{ width: "100%" }} />;
}
