import pdfMake from "https://cdn.skypack.dev/pdfmake@0.2.7";

// Function to handle form submission
function generateCharacterSheet(event) {
  event.preventDefault();

  // Retrieve form input values
  const characterName = document.getElementById("character-name").value;
  const geneticIdentity = document.getElementById("genetic-identity").value;
  const characterClass = document.getElementById("class").value;
  const advancementPoints = document.getElementById("advancement-points").value;

  // Calculate and set the skill values
  document.getElementById("listen-value").textContent = calculateSkillValue(
    "Listen",
    "Will"
  );
  document.getElementById("perception-value").textContent = calculateSkillValue(
    "Perception",
    "Will"
  );
  document.getElementById(
    "knowledge-gather-value"
  ).textContent = calculateSkillValue("Knowledge gather", "Cool");
  document.getElementById("language-value").textContent = calculateSkillValue(
    "Language",
    "Intelligence"
  );
  document.getElementById("medicine-value").textContent = calculateSkillValue(
    "Medicine",
    "Intelligence"
  );
  document.getElementById("insight-value").textContent = calculateSkillValue(
    "Insight",
    "Will"
  );
  document.getElementById(
    "mental-fortitude-value"
  ).textContent = calculateSkillValue("Mental Fortitude", "Will");
  document.getElementById("drive-value").textContent = calculateSkillValue(
    "Drive",
    "Strength"
  );
  document.getElementById("profession-value").textContent = calculateSkillValue(
    "Profession",
    "Technique"
  );
  document.getElementById("fortitude-value").textContent = calculateSkillValue(
    "Fortitude",
    "Constitution"
  );
  document.getElementById("stealth-value").textContent = calculateSkillValue(
    "Stealth",
    "Reflexes"
  );
  document.getElementById("brawl-value").textContent = calculateSkillValue(
    "Brawl",
    "Strength"
  );
  document.getElementById("forgery-value").textContent = calculateSkillValue(
    "Forgery",
    "Dexterity"
  );
  document.getElementById("computers-value").textContent = calculateSkillValue(
    "Computers",
    "Technique"
  );
  document.getElementById("firearms-value").textContent = calculateSkillValue(
    "Firearms",
    "Reflexes"
  );
  document.getElementById(
    "disable-device-value"
  ).textContent = calculateSkillValue("Disable Device", "Dexterity");
  document.getElementById(
    "occult-knowledge-value"
  ).textContent = calculateSkillValue("Occult Knowledge", "Intelligence");
  document.getElementById(
    "occult-manipulation-value"
  ).textContent = calculateSkillValue("Occult Manipulation", "Will");
  document.getElementById(
    "concentration-value"
  ).textContent = calculateSkillValue("Concentration", "Cool");
  document.getElementById(
    "mutate-occult-value"
  ).textContent = calculateSkillValue("Mutate Occult", "Intelligence");

  // Calculate and set the attribute modifiers
  document.getElementById(
    "intelligence-modifier"
  ).textContent = calculateAttributeModifier("intelligence");
  document.getElementById(
    "cool-modifier"
  ).textContent = calculateAttributeModifier("cool");
  document.getElementById(
    "will-modifier"
  ).textContent = calculateAttributeModifier("will");
  document.getElementById(
    "strength-modifier"
  ).textContent = calculateAttributeModifier("strength");
  document.getElementById(
    "constitution-modifier"
  ).textContent = calculateAttributeModifier("constitution");
  document.getElementById(
    "reflexes-modifier"
  ).textContent = calculateAttributeModifier("reflexes");
  document.getElementById(
    "dexterity-modifier"
  ).textContent = calculateAttributeModifier("dexterity");
  document.getElementById(
    "technique-modifier"
  ).textContent = calculateAttributeModifier("technique");

  // Calculate and set the Investigate skill value
  document.getElementById(
    "investigate-skill"
  ).textContent = calculateInvestigateSkill();

  // Calculate and set the Police Rep skill value
  document.getElementById(
    "police-rep-skill"
  ).textContent = calculatePoliceRep();

  // Generate the PDF character sheet
  generatePDF(
    characterName,
    geneticIdentity,
    characterClass,
    advancementPoints
  );
}

// Function to calculate the skill value based on the skill name and associated attribute
function calculateSkillValue(skillName, attribute) {
  // Implement the logic to calculate the skill value based on the provided formulas
  // Return the calculated skill value
}

// Function to calculate the attribute modifier based on the attribute score
function calculateAttributeModifier(attribute) {
  const attributeScore = parseInt(
    document.getElementById(attribute + "-score").value
  );
  return Math.floor((attributeScore - 10) / 2);
}

// Function to calculate the Investigate skill value
function calculateInvestigateSkill() {
  const listenScore = parseInt(document.getElementById("listen-score").value);
  const perceptionScore = parseInt(
    document.getElementById("perception-score").value
  );
  const knowledgeGatherScore = parseInt(
    document.getElementById("knowledge-gather-score").value
  );
  const professionInvestigatorScore = parseInt(
    document.getElementById("profession-investigator-score").value
  );
  const insightScore = parseInt(document.getElementById("insight-score").value);
  const languageScore = parseInt(
    document.getElementById("language-score").value
  );
  const detectiveLevels = parseInt(
    document.getElementById("detective-levels").value
  );
  const skillScoresSum =
    listenScore +
    perceptionScore +
    knowledgeGatherScore +
    professionInvestigatorScore +
    insightScore +
    languageScore;

  let skillValue = Math.floor(skillScoresSum / 2);

  if (characterClass === "detective") {
    skillValue += Math.floor(detectiveLevels);
  }

  return skillValue;
}

// Function to calculate the Police Rep value
function calculatePoliceRep() {
  const levelCategory = parseInt(
    document.getElementById("level-category").value
  );
  const occultManipulationScore = parseInt(
    document.getElementById("occult-manipulation-score").value
  );
  const priestLevels = parseInt(document.getElementById("priest-levels").value);

  let skillValue =
    levelCategory + Math.ceil((occultManipulationScore + priestLevels) * 0.75);

  return skillValue;
}

// Function to generate the PDF character sheet
function generatePDF(
  characterName,
  geneticIdentity,
  characterClass,
  advancementPoints
) {
  const docDefinition = {
    content: [
      { text: "Character Sheet", style: "header" },
      { text: `Character Name: ${characterName}` },
      { text: `Genetic Identity: ${geneticIdentity}` },
      { text: `Class: ${characterClass}` },
      { text: `Advancement Points: ${advancementPoints}` }
      // Include the remaining sections of the character sheet as desired
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      }
    }
  };

  // Generate and download the PDF file
  pdfMake.createPdf(docDefinition).download("character_sheet.pdf");
}

// Event listener for form submission
const form = document.getElementById("character-sheet-form");
form.addEventListener("submit", generateCharacterSheet);

// JavaScript code for handling ability score increases based on Genetic Identity

// Function to handle ability score increases based on Genetic Identity
function handleGeneticIdentity() {
  const geneticIdentity = document.getElementById("genetic-identity").value;

  // Reset ability scores to their default values
  resetAbilityScores();

  // Apply ability score increases based on the selected Genetic Identity
  switch (geneticIdentity) {
    case "homo-merus":
      increaseAbilityScore("intelligence", 2);
      increaseAbilityScore("constitution", 1);
      increaseAbilityScore("technique", 1);
      increaseAbilityScore("will", 1);
      break;
    case "homo-elatus":
      increaseAbilityScore("reflexes", 2);
      increaseAbilityScore("constitution", 2);
      increaseAbilityScore("strength", 1);
      break;
    case "homo-sacratus":
      increaseAbilityScore("cool", 2);
      increaseAbilityScore("will", 2);
      increaseAbilityScore("intelligence", 1);
      break;
  }
}

// Function to reset ability scores to their default values
function resetAbilityScores() {
  document.getElementById("intelligence-score").value = 10;
  document.getElementById("cool-score").value = 10;
  document.getElementById("will-score").value = 10;
  document.getElementById("strength-score").value = 10;
  document.getElementById("constitution-score").value = 10;
  document.getElementById("reflexes-score").value = 10;
  document.getElementById("dexterity-score").value = 10;
  document.getElementById("technique-score").value = 10;
}

// Function to increase an ability score by a specified amount
function increaseAbilityScore(ability, increaseAmount) {
  const scoreElement = document.getElementById(ability + "-score");
  let currentScore = parseInt(scoreElement.value);
  scoreElement.value = currentScore + increaseAmount;
}

// Event listener for Genetic Identity selection
const geneticIdentitySelect = document.getElementById("genetic-identity");
geneticIdentitySelect.addEventListener("change", handleGeneticIdentity);

// Function to calculate ability modifiers
function calculateAbilityModifier(score) {
  return Math.floor((score - 10) / 2);
}

// Function to update ability modifiers
function updateAbilityModifiers() {
  const abilityScores = document.querySelectorAll(".ability-score input");
  const abilityModifiers = document.querySelectorAll(".ability-modifier");

  abilityScores.forEach((score, index) => {
    const modifier = calculateAbilityModifier(parseInt(score.value));
    abilityModifiers[index].textContent =
      modifier >= 0 ? `+${modifier}` : modifier;
  });
}

// Event listener for ability score changes
const abilityScoreInputs = document.querySelectorAll(".ability-score input");
abilityScoreInputs.forEach((input) => {
  input.addEventListener("input", updateAbilityModifiers);
});

// Initial update of ability modifiers
updateAbilityModifiers();
