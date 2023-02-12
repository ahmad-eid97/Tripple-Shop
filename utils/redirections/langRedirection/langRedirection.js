const langRedirection = (req, locale) => {
  const currentLang = req.cookies["gridsStoreLang"] || "en";

  if (locale === currentLang) return;

  let redirectLocation = "";

  if (currentLang === "en") {
    redirectLocation = req.url;
  } else {
    redirectLocation = `/${currentLang}/${
      req.url.startsWith("/") ? req.url.slice(1) : req.url // TAKE WHAT EVER AFTER '/' FOR THE PATH
    }`;
  }

  if (redirectLocation) {
    return {
      redirect: {
        destination: redirectLocation,
        permanent: false,
      },
    };
  }
};

export default langRedirection;
