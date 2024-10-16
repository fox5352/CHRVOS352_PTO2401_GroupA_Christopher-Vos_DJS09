export function bindEventListener(
  tag: Element,
  eventName: string,
  listener: (event: Event) => void
): () => void {
  tag.addEventListener(eventName, listener);

  return () => {
    tag.removeEventListener(eventName, listener);
  };
}

export function populateFooter(footer: HTMLElement) {
  let locationStats: [string, string, number] = ["cpt", "3:42", 21];
  footer.innerHTML =
    locationStats[0] + " " + locationStats[1] + " " + locationStats[2] + "°";
}
