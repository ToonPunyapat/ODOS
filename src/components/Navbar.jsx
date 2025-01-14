import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    // Check if the script is already loaded
    if (!document.querySelector('script[data-gt-widget-id="43217984"]')) {
      // Define the Google Translate settings
      window.gtranslateSettings = window.gtranslateSettings || {};
      window.gtranslateSettings["43217984"] = {
        default_language: "en",
        languages: [
          "af",
          "sq",
          "am",
          "en",
          "fa",
          "ar",
          "ps",
          "ja",
          "zh-CN",
          "hy",
          "az",
          "eu",
          "be",
          "bn",
          "bs",
          "bg",
          "ca",
          "ceb",
          "ny",
          "zh-TW",
          "co",
          "hr",
          "cs",
          "da",
          "nl",
          "eo",
          "et",
          "tl",
          "fi",
          "fr",
          "fy",
          "gl",
          "ka",
          "de",
          "el",
          "gu",
          "ht",
          "ha",
          "haw",
          "iw",
          "hi",
          "hmn",
          "hu",
          "is",
          "ig",
          "id",
          "ga",
          "it",
          "jw",
          "kn",
          "kk",
          "km",
          "ko",
          "ku",
          "ky",
          "lo",
          "la",
          "lv",
          "lt",
          "lb",
          "mk",
          "mg",
          "ms",
          "ml",
          "mt",
          "mi",
          "mr",
          "mn",
          "my",
          "ne",
          "no",
          "pl",
          "pt",
          "pa",
          "ro",
          "ru",
          "sm",
          "gd",
          "sr",
          "st",
          "sn",
          "sd",
          "si",
          "sk",
          "sl",
          "so",
          "es",
          "su",
          "sw",
          "sv",
          "tg",
          "ta",
          "te",
          "th",
          "tr",
          "uk",
          "ur",
          "uz",
          "vi",
          "cy",
          "xh",
          "yi",
          "yo",
          "zu",
        ],
        wrapper_selector: "#gt-mordadam-43217984",
        native_language_names: 1,
        flag_style: "2d",
        flag_size: 24,
        horizontal_position: "inline",
        flags_location: "/flags/",
      };

      // Dynamically load the Google Translate script (gt.min.js)
      const script = document.createElement("script");
      script.src = "src/js/gt.min.js"; // Use the correct path to your gt.min.js file
      script.setAttribute("data-gt-widget-id", "43217984");
      script.async = true;
      document.body.appendChild(script);

      // Define the callback function to initialize the Google Translate widget
      window.googleTranslateElementInit = () => {
        if (!document.querySelector("#gt-mordadam-43217984 select")) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages:
                "af,sq,am,en,fa,ar,ps,ja,zh-CN,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-TW,co,hr,cs,da,nl,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,jw,kn,kk,km,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,uz,vi,cy,xh,yi,yo,zu",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "gt-mordadam-43217984"
          );
        }
      };
    }

    return () => {
      // Cleanup logic is unnecessary as script loading is now controlled
    };
  }, []);

  return (
    <nav className="bg-[#0B293B] Sukhumvit sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-4xl font-semibold whitespace-nowrap text-[#FFF200]">
          ODOS
          <span className="hidden sm:inline"> Summer Camp</span>
        </span>
        <div className="text-white" id="gt-mordadam-43217984"></div>
      </div>
    </nav>
  );
}

export default Navbar;
