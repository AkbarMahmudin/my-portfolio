const CONSTELLATIONS = [
  "Eyes That Never Tire",
  "Watcher of Broken Fates",
  "The Star That Refused to Fade",
  "One Who Records All Endings",
  "Observer Beyond the Fourth Wall",
  "Archivist of Forgotten Myths",
  "Silent God of Probability",
  "The One Who Reads Till The End",
  "Bearer of Unwritten Epilogues",
  "The Oldest Gaze in the Void",
  "Constellation of Countless Regressions",
  "Witness of Endless Scenarios",
  "The Star That Watches Alone",
  "Reader Who Survived the Last Page",
  "The God Who Never Interferes",
];

const MESSAGE_TEMPLATES = [
  "The constellation [{name}] enters the scenario",
  "The constellation [{name}] begins observing the scenario",
  "The constellation [{name}] has joined the channel",
  "The constellation [{name}] fixes its gaze upon this world",
  "The constellation [{name}] descends into the scenario",
  "A distant presence is felt — [{name}] is watching",
  "The constellation [{name}] starts observing this scenario",
];

export const generateConstellationMessage = () => {
  const name =
    CONSTELLATIONS[Math.floor(Math.random() * CONSTELLATIONS.length)];

  const template =
    MESSAGE_TEMPLATES[Math.floor(Math.random() * MESSAGE_TEMPLATES.length)];

  return template.replace("{name}", name);
};
