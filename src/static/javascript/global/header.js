const siteHeader = document.querySelector(".site-header"),
  headerBanner = document.querySelector(".header-banner");

if (headerBanner) {
  const closeBanner = () => {
    siteHeader.classList.remove("show-banner");
    siteHeader.setAttribute("aria-hidden", true);
  };

  headerBanner.addEventListener("click", closeBanner);

  setTimeout(() => {
    siteHeader.classList.add("show-banner");
  }, 4200);

  // temp banner message for dynamic discount date
  const templateBannerMessage = (() => {
    const getEndDate = () => {
      const today = new Date();
      const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
      const lastDayNextMonth = new Date(
        nextMonth.getFullYear(),
        nextMonth.getMonth() + 1,
        0
      );

      // Format the date as MM/DD/YYYY
      const month = String(lastDayNextMonth.getMonth() + 1).padStart(2, "0");
      const day = String(lastDayNextMonth.getDate()).padStart(2, "0");
      const year = lastDayNextMonth.getFullYear();

      return `${month}/${day}/${year}`;
    };

    const bannerText = `Don't miss our limited offer! 20% off all bundles! Offer ends ${getEndDate()}`;

    const messageTextSpan = document.querySelectorAll(".message-text");

    messageTextSpan.forEach((span) => (span.innerHTML = bannerText));
  })();
}
