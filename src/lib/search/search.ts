export const search = (query) => {
  const els = Array.from(
    document.querySelectorAll("[data-searchBy]")
  ) as Array<HTMLElement>;
  const matches = els.filter((el) => {
    return el.getAttribute("data-searchBy").search(query) != -1;
  });
  return matches;
};
export const showSearch = (matches: Array<HTMLElement>, query: string) => {
  const element = matches[searchStringInArray(query, getNames(matches))];
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
};
export const getNames = (matches: Array<HTMLElement>) => {
  return matches.map((match) => match.getAttribute("data-searchBy"));
};
export const searchStringInArray = (str, strArray) => {
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].match(str)) return j;
  }
  return -1;
};
export const makeMatchBold = (str: string, query: string) => {
  let matched = str.substring(
    str.search(query),
    str.search(query) + query.length
  );
  let makeBold = `<strong>${matched}</strong>`;
  let boldedMatch = str.replace(matched, makeBold);
  return boldedMatch;
};
export const removeBold = (str: string) => {
  //replace < and > all characters between
  return str.replace(/<(.)*?>/g, "");
  // return str.replace(/<(strong)>/g, "").replace(/<\/(strong)>/g, "");
};
