import { useEffect, useRef } from "react";

const ZOHO_DIV_ID = "zf_div_Ujz0K3Hwdqp1LXwG6nanFQus-1ozwtoW-11-gq2PQ1w";
const ZOHO_IFRAME_SRC = "https://forms.zohopublic.com/theonlycompany1/form/ContractorWebsite/formperma/Ujz0K3Hwdqp1LXwG6nanFQus-1ozwtoW-11-gq2PQ1w?zf_rszfm=1&zf_enablecamera=true";

export function ZohoContractorForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const iframe = document.createElement("iframe");
    iframe.src = ZOHO_IFRAME_SRC;
    iframe.style.border = "none";
    iframe.style.height = "1892px";
    iframe.style.width = "99%";
    iframe.style.transition = "all 0.5s ease";
    iframe.setAttribute("aria-label", "Contractor Website");
    iframe.setAttribute("allow", "camera;");
    container.appendChild(iframe);

    function handleMessage(event: MessageEvent) {
      const data = event.data;
      if (typeof data !== "string") return;
      const parts = data.split("|");
      if (parts.length !== 2 && parts.length !== 3) return;

      const perma = parts[0];
      const nextHeight = parseInt(parts[1], 10) + 15 + "px";
      if (iframe.src.indexOf("formperma") <= 0 || iframe.src.indexOf(perma) <= 0) return;

      const prevHeight = iframe.style.height;
      let delayed = false;
      if (parts.length === 3) {
        iframe.scrollIntoView();
        delayed = true;
      }
      if (prevHeight !== nextHeight) {
        if (delayed) {
          setTimeout(() => {
            iframe.style.height = nextHeight;
          }, 500);
        } else {
          iframe.style.height = nextHeight;
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
