const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b555de58b4msh79ca5354a407032p1459e4jsnc4bd611b97b0",
    "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
  },
};

const fetchIpInfo = (ip) => {
  return fetch(
    `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,
    OPTIONS
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const $ = (selector) => document.querySelector(selector);

const $form = $("#form");
const $input = $("#input");
const $submit = $("#submit");
const $results = $("#results");

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { value } = $input;
  if (!value) return;

  $submit.setAttribute("disabled", "");
  $submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  $submit.removeAttribute("disabled");
  $submit.removeAttribute("aria-busy");
});
